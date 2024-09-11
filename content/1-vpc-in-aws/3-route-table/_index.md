+++
title = '1.3 Route Table'
date = 2024-09-10T15:09:48+07:00
draft = false
weight = 3
+++

A route table contains a set of rules, called routes, that determine where network traffic from your subnet
or gateway is directed.

### Create Route Table
1. At the [VPC management console](https://console.aws.amazon.com/vpc/home):
    - Click *Route tables*.
    - Click *Create route table*.
   
    ![Route Table Console](/static/images/1-vpc-in-aws/img-8.png)

2. At the *Create route table* page, enter the following information:
    - **Name tag**: `route-table-inference-1`.
    - **VPC**: Choose the VPC with tag `vpc-inference-1`.
    - Click *Create route table*.
    ![Create Route Table](/static/images/1-vpc-in-aws/img-9.png)

3. After the route table is created, you will need to associate it to the public subnet.
    - Click *Subnet associations*.
    - Click *Edit subnet associations*.
    ![Associate Route Table](/static/images/1-vpc-in-aws/img-10.png)

    In the *Edit subnet association* tab, choose the `subnet-inference-1` subnet and click *Save associations*.
    ![Edit Subnet Association](/static/images/1-vpc-in-aws/img-11.png)
