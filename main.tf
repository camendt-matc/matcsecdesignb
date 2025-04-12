terraform {

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.0"
    }
  }

  backend "s3" {
    bucket  = "jhops881-terraform-state"
    key     = "terraform.tfstate"
    region  = "us-east-1"
    encrypt = true
  }

  required_version = ">= 0.14.9"
}

provider "aws" {
  region  = var.region
}

# Look up available AZ's in our region
data "aws_availability_zones" "available" {
  state = "available"
}

# Create a VPC (2 public subnets, 2 private, 1 of each in each az.)
module "vpc" {
  source = "terraform-aws-modules/vpc/aws"

  name = "web-vpc"
  cidr = "10.0.0.0/16"

  azs             = data.aws_availability_zones.available.names
  private_subnets = var.private_subnets
  public_subnets  = var.public_subnets

  map_public_ip_on_launch = false # No public IPS, we will provision it ourself.

  enable_nat_gateway = false # Make sure these are both off.
  enable_vpn_gateway = false
}

# (Public HTTP Access)
module "sg" {
  source = "terraform-aws-modules/security-group/aws"

  name        = "web_sg"
  description = "Security group for the web server to allow HTTPS/HTTP traffic"
  vpc_id      = module.vpc.vpc_id

  ingress_with_cidr_blocks = [
    # Cloudflare Proxy IPS Only
    # https://www.cloudflare.com/ips-v4/#
    {
      rule = "http-80-tcp"
      cidr_blocks = "173.245.48.0/20"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "103.21.244.0/22"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "103.22.200.0/22"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "103.31.4.0/22"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "141.101.64.0/18"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "108.162.192.0/18"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "190.93.240.0/20"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "188.114.96.0/20"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "197.234.240.0/22"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "198.41.128.0/17"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "162.158.0.0/15"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "104.16.0.0/13"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "104.24.0.0/14"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "172.64.0.0/13"
    },
    {
      rule = "http-80-tcp"
      cidr_blocks = "131.0.72.0/22"
    },

    # us-east-1 EC2_INSTANCE_CONNECT https://ip-ranges.amazonaws.com/ip-ranges.json
    {
      rule = "ssh-tcp" 
      cidr_blocks = "18.206.107.24/29"
    },
  ]

  egress_cidr_blocks = ["0.0.0.0/0"]
  egress_rules = ["all-all"]

}

resource "aws_iam_role" "ec2_s3_role" {
  name = "ec2_s3_role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Effect = "Allow"
        Principal = {
          Service = "ec2.amazonaws.com"
        }
        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = {
    tag-key = "tag-value"
  }
}

resource "aws_iam_role_policy_attachment" "ec2_s3_access" {
  role       = aws_iam_role.ec2_s3_role.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonS3ReadOnlyAccess" # Or use a custom policy
}

resource "aws_iam_instance_profile" "ec2_instance_profile" {
  name = "ec2_s3_instance_profile"
  role = aws_iam_role.ec2_s3_role.name
}

# Create web server
module "ec2_instance" {
  source = "terraform-aws-modules/ec2-instance/aws"

  name = "web-server"

  instance_type          = "t3.micro"
  vpc_security_group_ids = [module.sg.security_group_id]
  subnet_id              = module.vpc.public_subnets[0]
  ami                    = "ami-00a929b66ed6e0de6" # Amazon Linux 2023 AMI 2023.7.20250331.0 x86_64 HVM kernel-6.1
  cpu_credits            = "standard"
  iam_instance_profile   = aws_iam_instance_profile.ec2_instance_profile.name

  user_data              = file("${path.module}/init-script.sh")
}

resource "aws_eip" "eip" {
  instance = module.ec2_instance.id
  domain   = "vpc"
}

