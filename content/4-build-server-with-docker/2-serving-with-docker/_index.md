+++
title = '4.2 Serving with Docker'
date = 2024-09-10T15:12:23+07:00
draft = false
weight = 2
+++

In order to serve the model, you will need Docker installed on the server. Since EC2 instance doesn't come
with Docker pre-installed, you will need to install it manually.

### Install Docker on EC2

Run the following commands to install Docker on EC2.

1. Update the packages:
    ```bash
    sudo yum update -y
    ```

2. Install Docker:
    ```bash
    sudo yum install docker -y
    ```

3. Start the Docker service:
    ```bash
    sudo service docker start
    ```

### Serving

Depending on the model you are serving, you can pull the corresponding TensorFlow Serving Docker image.
In this lab, since the TensorFlow version of `nmt` model is 2.17.0 and trained on CPU only, you will pull
the TensorFlow Serving image with tag 2.17.0 that has no GPU-support.

1. Pull the TensorFlow Serving Docker image:
   ```bash
   sudo docker pull tensorflow/serving:2.17.0
   ```

   Additionally, since TensorFlow Serving no longer supports fetching files from Amazon S3, you will need to
   copy the model from S3 to the server. 

2. Run the following command to copy the model from S3 to the server.
   ```bash
   aws s3 sync s3://bucket-nlp-models-1/nmt .
   ```

3. Serve the model with Docker:
   ```bash
   sudo docker run -p 8501:8501 -p 8500:8500 --name nmt --mount type=bind,source=$(pwd)/nmt,target=/models/nmt -e MODEL_NAME=nmt -t tensorflow/serving:2.17.0
   ```