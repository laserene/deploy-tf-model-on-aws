+++
title = '1.2 Subnet'
date = 2024-09-10T15:09:40+07:00
draft = false
weight = 2
+++

{{% notice info %}}
Since there is currently no need for a database or other services, you will only create public subnet.
{{% /notice %}}

### Create Public Subnet
1. At the [VPC management console](https://console.aws.amazon.com/vpc/home):
    - Click **Subnets**.
    - Click **Create subnet**.
   
    ![Subnet Console](/images/1-vpc-in-aws/img-4.png)

2. At the **Create subnet** page, enter the following information:
    - **VPC**: Choose the VPC with tag `vpc-inference-1`. 
    - **Name tag**: `subnet-inference-1`.
    - **Availability Zone**: ap-southeast-1a.
    - **IPv4 subnet CIDR block**: `10.0.0.0/28`.
    - Click **Create subnet**.

    ![Create Subnet](/images/1-vpc-in-aws/img-5.png)

3. After the subnet is created, the console will look like this. 
    ![Subnet Created](/images/1-vpc-in-aws/img-6.png)

   Since public subnet can access to the Internet, you will need to assign it a public IP address.
   - Click **Actions**. 
   - Click **Edit subnet settings**.
