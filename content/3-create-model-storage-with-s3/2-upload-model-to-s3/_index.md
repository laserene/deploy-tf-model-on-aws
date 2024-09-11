+++
title = '3.2 Upload Model to S3'
date = 2024-09-10T15:19:23+07:00
draft = false
weight = 2
+++

### Create S3 Bucket
1. Go to [S3 Console](https://console.aws.amazon.com/s3/home):
    - Click *Bucket*, then *Create bucket*.

   ![S3 Console](/static/images/3-create-model-storage-with-s3/img-20.png)

2. In the *Create bucket* tab:
    - **Bucket name**: `bucket-nlp-models-1`

   Leave the rest as default and click *Create bucket*.

   ![Create Bucket](/static/images/3-create-model-storage-with-s3/img-21.png)

### Upload Model to S3
1. In the `bucket-nlp-models-1` bucket, click *Upload*.

   ![Upload Model](/static/images/3-create-model-storage-with-s3/img-6.png)

   - Click *Add folder*, navigate to the folder [nmt]() on local machine then click *Upload*.

   ![Upload Model](/static/images/3-create-model-storage-with-s3/img-7.png)

   