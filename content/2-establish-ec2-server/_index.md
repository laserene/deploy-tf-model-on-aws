+++
title = "2. Establish EC2 Server"
weight = 2
+++

### Create EC2 Instance

1. Go to [EC2 Console](https://console.aws.amazon.com/ec2/home) and click "Instances":
    -  Click "Launch Instance" to create a new instance.
    
    ![EC2 Console](/static/images/2-establish-ec2-server/img-1.png)

2. In the *Launch an instance* tab:
    - **Name tag**: `Inference Server`
    - **AMI**: `Amazon Linux 2023 AMI`
    - **Instance Type**: `t2.micro`
   
    ![EC2 AMI](/static/images/2-establish-ec2-server/img-2.png)
   
    In the **key pair** section, create a new key pair named `key-pair-inference-1` of type **RSA** in 
    **.ppk** format and download it. This key pair will be used to connect to the instance. 

    In the **Network settings** section, select the *Edit* button.
    - Choose the VPC with tag name `vpc-inference-1`.
    - Choose the subnet with tag name `subnet-inference-1`.
    - Enable auto-assign public IP.
    - Select existing security group `sg-inference-1`.
    - Click *Launch instance*.

    ![EC2 ](/static/images/2-establish-ec2-server/img-3.png)