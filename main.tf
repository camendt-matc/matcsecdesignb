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

  ingress_cidr_blocks = ["0.0.0.0/0"]
  ingress_rules       = ["https-443-tcp", "http-80-tcp", "ssh-tcp"]

  egress_cidr_blocks = ["0.0.0.0/0"]
  egress_rules = ["all-all"]

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

  user_data = templatefile(
    "${path.module}/init-script.sh", {
      file_content = ""
    }
  )
}

resource "aws_eip" "eip" {
  instance = module.ec2_instance.id
  domain   = "vpc"
}

