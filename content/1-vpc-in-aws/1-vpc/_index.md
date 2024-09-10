+++
title = '1.1 VPC'
date = 2024-09-10T15:09:31+07:00
draft = false
weight = 1
+++

{{% notice info %}}
All the AWS services in this lab will be initialized at the *Asia Pacific (Singapore)* region. Be sure to 
select this region before entering the lab.
{{% /notice %}}

### Create VPC
1. Go to [VPC management console](https://console.aws.amazon.com/vpc/home).
   - Click **Your VPCs**.
   - Click **Create VPC**.
   
   ![VPC Console](/images/1-vpc-in-aws/img-1.png)

2. At the **Create VPC** page, enter the following information: 
   - Choose *VPC only*.
   - **Name tag**: `vpc-inference-1`.
   - **IPv4 CIDR block**: `10.10.0.0/28`.
   - Click **Create VPC**.
   
   ![Create VPC](/images/1-vpc-in-aws/img-2.png)

3. After a VPC has been successfully created, you should edit some VPC configurations.
   - Click **Actions**.
   - Click **Edit VPC Setting**.

   ![Edit VPC](/images/1-vpc-in-aws/img-3.png)
