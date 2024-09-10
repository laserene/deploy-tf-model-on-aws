+++
title = '1.5 Internet Gateway'
date = 2024-09-10T15:10:14+07:00
draft = false
weight = 5
+++

An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows 
communication between your VPC and the internet. It supports IPv4 and IPv6 traffic. It does not cause 
availability risks or bandwidth constraints on your network traffic.

### Create Internet Gateway
1. At the [VPC management console](https://console.aws.amazon.com/vpc/home):
    - Click *Internet gateways*.
    - Click *Create route table*.
    
    ![Internet Gateway Console](/images/1-vpc-in-aws/img-14.png)

2. At the *Create internet gateway* page, enter the following information:
    - **Name tag**: `internet-gateway-inference-1`.
    - Click *Create internet gateway*.

    ![Create Internet Gateway](/images/1-vpc-in-aws/img-15.png)

3. After the internet gateway is created, you will need to attach it to the VPC.
   - Click *Actions*.
   - Click *Attach to VPC*.
   
   ![Attach Internet Gateway](/images/1-vpc-in-aws/img-16.png)

   - In the *Attach to VPC* dialog box, choose the VPC with tag `vpc-inference-1` and click *Attach*.

   ![Attach Internet Gateway to VPC](/images/1-vpc-in-aws/img-17.png)

4. Update the route table to route internet traffic to the internet gateway.
    - Click *Route tables*.
    - Click the route table with tag `route-table-inference-1`.
    - Click *Routes*.
    - Click *Edit routes*.

    ![Edit Route Table](/images/1-vpc-in-aws/img-18.png)
    
    - Click *Add route*.
    - Choose *Destination* as `0.0.0.0/0`.
    - Choose *Target* as the internet gateway with tag `internet-gateway-inference-1`.
    - Click *Save changes*.

    ![Add Route to Internet Gateway](/images/1-vpc-in-aws/img-19.png)
