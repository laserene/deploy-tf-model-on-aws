+++
title = '1.4 Security Group'
date = 2024-09-10T15:09:58+07:00
draft = false
weight = 4
+++

A security group controls the traffic that is allowed to reach and leave the resources that it is
associated with. For example, after you associate a security group with an EC2 instance, it controls the
inbound and outbound traffic for the instance.

### Create Security Group

1. At the [VPC management console](https://console.aws.amazon.com/vpc/home):
    - Click *Security groups*.
    - Click *Create security group*.

   ![Security Group Console](/images/1-vpc-in-aws/img-12.png)

2. At the *Create security group* page, enter the following information:
    - **Name tag**: `security-group-inference-1`.
    - **Description**: `Allow SSH to developers. Allow REST API and gRPC calls for inference.`.
    - **VPC**: Choose the VPC with tag `vpc-inference-1`.
    - Click *Create security group*.

   ![Create Security Group](/images/1-vpc-in-aws/img-13.png)

   You will need to create 3 inbound rules for this security group. EC2 instance needs to accept SSH
   connections from developers. Additionally, since you will serve the TensorFlow model with TensorFlow
   Serving with Docker, EC2 instance will need to accept REST API and gRPC calls at port 8501 and 8500
   respectively.

    | Type       | Protocol | Port Range | Source        | Description                    |
    |------------|----------|------------|---------------|--------------------------------|
    | SSH        | TCP      | 22         | My IP         | SSH connection from developers |
    | Custom TCP | TCP      | 8501       | Anywhere-IPv4 | REST API calls                 |
    | Custom TCP | TCP      | 8500       | Anywhere-IPv4 | gRPC calls                     |

    Leave the other fields as default and click *Create security group*.