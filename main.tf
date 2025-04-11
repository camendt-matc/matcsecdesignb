terraform {

    required_providers {
        aws = {
            source  = "hashicorp/aws"
            version = ">= 5.0"
        }
    }

    required_version = ">= 0.14.9"
}

provider "aws" {
    profile = "default"
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

    azs = data.aws_availability_zones.available.names
    private_subnets = var.private_subnets
    public_subnets = var.public_subnets

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

    ingress_cidr_blocks      = ["0.0.0.0/0"]
    ingress_rules            = ["https-443-tcp","http-80-tcp"]
}

# Get the AMI for the web server
# Amazon ECS-optimized Amazon Linux 2023 AMI
# TODO
data "aws_ami_ids" "ami"{
    filter {
        name = "name"
        values = ["amzn2-ami-hvm-*-x86_64-gp2"]
    }

    owners = ["amazon"]
}

# Create web server
module "ec2_instance" {
    source  = "terraform-aws-modules/ec2-instance/aws"

    name = "web-server"

    instance_type          = "t2.micro"
    vpc_security_group_ids = [module.web_server_sg.security_group_id]
    subnet_id              = module.vpc.public_subnets[0]
    ami                    = data.aws_ami_ids.ami.ids[0]

    user_data = templatefile(
        "${path.module}/init-script.sh",{
            file_content = ""
        }
    )
}

resource "aws_eip" "eip" {
  instance = module.ec2_instance.id
  domain   = "vpc"
}

# TODO Provision the ECS containers on the web server and do all the yada yada with that.