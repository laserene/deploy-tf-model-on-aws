+++
title = '4.1 Test Connection'
date = 2024-09-10T15:12:10+07:00
draft = false
weight = 1
+++

### Test Connection
1. Go to [EC2 console](https://console.aws.amazon.com/ec2/home) and select the instance you just created. 
    - Copy the public IP address of the instance.

    ![Copy Public IP](/static/images/4-build-server-with-docker/img-1.png)

2. Open MobaXterm, create a new SSH session:
    - **Remote host**: Paste the public IP address of the instance.
    - Check **Specify username** and enter `ec2-user`.
   
    In the **Advanced SSH settings** tab, go to **Use private key** and select the `.ppk` file you
    downloaded when creating the instance.

    ![MobaXterm SSH](/static/images/4-build-server-with-docker/img-2.png)

3. Now you should be able to connect to the instance. Run the following command to check the current
bucket in Amazon S3.

   `aws s3 ls`

   ![AWS S3 List](/static/images/4-build-server-with-docker/img-3.png)