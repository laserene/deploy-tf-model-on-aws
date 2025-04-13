+++
archetype = "home"
title = "Deploy TensorFlow Model on AWS with EC2 and Docker"
+++

### Overview

In this lab, you'll learn how to deploy a TensorFlow model on AWS with services such as VPC, EC2, etc. 
and Docker.

![Application Architecture](/images/machine_translation_sys.png)

### Architecture description
The architecture of the workshop is built using three main AWS services: **Amazon VPC**. **Amazon EC2**, **Amazon S3**:
- Amazon VPC provides a private, isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.
- Amazon EC2 provides scalable computing capacity in the AWS Cloud. In this lab, this instance will. 

### Content
1. [VPC in AWS](1-vpc-in-aws)
2. [Establish EC2 Server](2-establish-ec2-server)
3. [Create Model Storage with S3](3-create-model-storage-with-s3)
4. [Build Server with Docker](4-build-server-with-docker)
5. [Clean up](5-clean-up)