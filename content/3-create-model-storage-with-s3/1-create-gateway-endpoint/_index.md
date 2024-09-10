+++
title = '3.1 Create Gateway Endpoint'
date = 2024-09-10T15:18:54+07:00
draft = false
weight = 1
+++

Gateway Endpoint is a gateway that helps you connect to S3 from your VPC without using Internet Gateway
and no additional charge. 

Besides gateway endpoint, S3 and DynamoDB also support interface endpoint. 

In this lab, in order for EC2 instance to have the right to access S3, you will create an IAM Role for
reading from S3.

### Create IAM Role for reading files from S3
1. Go to [IAM Console](https://console.aws.amazon.com/iam/home):
    - Click *Roles*, then *Create role*.
    
    ![IAM Console](/images/3-create-model-storage-with-s3/img-1.png)

    - **Trusted entity**: AWS service
    - **Use case**: EC2

    In the *Add permission* tab, type **S3** in the search bar and check the **AmazonS3ReadOnlyAccess** 
    policy.

    In the *Name, review and create* tab:
    - **Role name**: `role-ec2-s3-read-only`
   
    Leave the rest as default and click *Create role*.

### Attach IAM Role to EC2 Instance
1. Go to [EC2 Console](https://console.aws.amazon.com/ec2/home):
    - Click *Instances*, then select the instance you want to attach the role to.
    - Click *Actions*, then *Security*, then *Modify IAM role*.
    
    ![EC2 Console](/images/3-create-model-storage-with-s3/img-2.png)

    - **IAM role**: `role-ec2-s3-read-only`
    - Click *Update IAM Role*.

    ![IAM Attach Role](/images/3-create-model-storage-with-s3/img-3.png)

### Create Gateway Endpoint
1. Go to [VPC Console](https://console.aws.amazon.com/vpc/home):
    - Click *Endpoints*, then *Create endpoint*.
    
    ![VPC Console](/images/3-create-model-storage-with-s3/img-4.png)

2. In the *Create endpoint* tab:
    - **Name tag**: `gw-endpoint-inference-1`
    - **Service category**: AWS services
    - **Service Name**: `com.amazonaws.ap-southeast-1.s3` of `Gateway` type.
    - **VPC**: `vpc-inference-1`
    - **Route tables**: `table-inference-1`
    
    Leave the rest as default and click *Create endpoint*.

    ![Create Endpoint](/images/3-create-model-storage-with-s3/img-5.png)
    