+++
archetype = "chapter"
title = "5. Clean Up"
weight = 5
+++

### Clean up resources

We will proceed to delete the resources in the following order:

#### Terminate the EC2 instance
1. Access the [EC2 dashboard](https://console.aws.amazon.com/ec2/home).
    - Select *Instances* from the left navigation bar.
    - Select the instance with the name tag `Inference Server`.
    - Select *Instance State*.
    - Select *Terminate Instance*.
   
    ![Terminate EC2](/images/5-clean-up/img-1.png)

2. Confirm the termination
   - Select *Terminate (delete)*.
   
    ![Terminate EC2](/images/5-clean-up/img-2.png)

#### Delete the Public Subnet
1. Go to the [VPC dashboard](https://console.aws.amazon.com/vpc/home).
    - Select *Subnets* from the left navigation bar.
    - Select the subnet with the name tag `subnet-inference-1`.
    - Select *Actions*.
    - Select *Delete Subnet*.
   
    ![Delete Subnet](/images/5-clean-up/img-3.png)
    
    - Type 'delete' in the confirmation box and select *Delete*.

    ![Confirm Delete Subnet](/images/5-clean-up/img-4.png)

#### Delete the Route Table
1. Select *Route tables* from the left navigation bar.
    - Select the route table with the name tag `table-inference-1`.
    - Select *Actions*.
    - Select *Delete route table*.

    ![Delete Route Table](/images/5-clean-up/img-5.png)

    - Type 'delete' in the confirmation box and select *Delete*.
   
    ![Confirm Delete Route Table](/images/5-clean-up/img-6.png)

#### Delete the VPC
1. Select *Your VPCs* from the left navigation bar.
    - Select the VPC with the name tag `vpc-inference-1`.
    - Select *Actions*.
    - Select *Delete VPC*.

    ![Delete VPC](/images/5-clean-up/img-7.png)

    - Type 'delete' in the confirmation box and select *Delete*.
   
    ![Confirm Delete VPC](/images/5-clean-up/img-8.png)

#### Delete the S3 bucket
1. Empty the bucket. At the [S3 Console](https://console.aws.amazon.com/s3/home).
    - Select the bucket with the name `inference-bucket-1`.
    - Select *Empty*.
    
    ![S3 Console](/images/5-clean-up/img-9.png)

    - Type 'permanently delete' in the confirmation box and select *Empty*.
    - Select *Delete*.
    - Once the bucket is empty, select *Exit*.
   
    ![Empty S3 Bucket](/images/5-clean-up/img-10.png)

2. Delete the bucket. 
   - Select the bucket with the name `inference-bucket-1`.
   - Select *Delete*.
   
   ![Delete S3 Bucket](/images/5-clean-up/img-11.png)

   - Type `bucket-nlp-models-1` in the confirmation box
   - Select *Delete bucket*.
   
   ![Confirm Delete S3 Bucket](/images/5-clean-up/img-12.png)