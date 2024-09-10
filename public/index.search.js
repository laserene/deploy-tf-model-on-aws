var relearn_search_index = [
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 3. Create Model Storage with S3",
    "content": "",
    "description": "",
    "tags": [],
    "title": "3.1 Create Gateway Endpoint",
    "uri": "/3-create-model-storage-with-s3/1-create-gateway-endpoint/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 4. Build Server with Docker",
    "content": "",
    "description": "",
    "tags": [],
    "title": "4.1 Test Connection",
    "uri": "/4-build-server-with-docker/1-test-connection/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "In order to create EC2 instances, you need to have a VPC. It is isolated from other virtual networks in the AWS cloud. You can launch your AWS resources, such as EC2 instances, into your VPC. You can specify an IP address range for the VPC, add Subnets, associate Security Groups, and configure Route Tables. Finally, you can connect your VPC to the internet via Internet Gateway.\nContent VPC Subnet Route Table Security Group Internet Gateway",
    "description": "In order to create EC2 instances, you need to have a VPC. It is isolated from other virtual networks in the AWS cloud. You can launch your AWS resources, such as EC2 instances, into your VPC. You can specify an IP address range for the VPC, add Subnets, associate Security Groups, and configure Route Tables. Finally, you can connect your VPC to the internet via Internet Gateway.\nContent VPC Subnet Route Table Security Group Internet Gateway",
    "tags": [],
    "title": "1. VPC in AWS",
    "uri": "/1-vpc-in-aws/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 1. VPC in AWS",
    "content": "Info All the AWS services in this lab will be initialized at the Asia Pacific (Singapore) region. Be sure to select this region before entering the lab.\nCreate VPC Go to VPC management console.\nClick Your VPCs. Click Create VPC. At the Create VPC page, enter the following information:\nChoose VPC only. Name tag: vpc-inference-1. IPv4 CIDR block: 10.10.0.0/28. Click Create VPC. After a VPC has been successfully created, you should edit some VPC configurations.\nClick Actions. Click Edit VPC Setting.",
    "description": "Info All the AWS services in this lab will be initialized at the Asia Pacific (Singapore) region. Be sure to select this region before entering the lab.\nCreate VPC Go to VPC management console.\nClick Your VPCs. Click Create VPC. At the Create VPC page, enter the following information:\nChoose VPC only. Name tag: vpc-inference-1. IPv4 CIDR block: 10.10.0.0/28. Click Create VPC. After a VPC has been successfully created, you should edit some VPC configurations.",
    "tags": [],
    "title": "1.1 VPC",
    "uri": "/1-vpc-in-aws/1-vpc/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 3. Create Model Storage with S3",
    "content": "",
    "description": "",
    "tags": [],
    "title": "3.2 Upload Model to S3",
    "uri": "/3-create-model-storage-with-s3/2-upload-model-to-s3/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 4. Build Server with Docker",
    "content": "",
    "description": "",
    "tags": [],
    "title": "4.2 Serving with Docker",
    "uri": "/4-build-server-with-docker/2-serving-with-docker/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 1. VPC in AWS",
    "content": "Info Since there is currently no need for a database or other services, you will only create public subnet.\nCreate Public Subnet At the VPC management console:\nClick Subnets. Click Create subnet. At the Create subnet page, enter the following information:\nVPC: Choose the VPC with tag vpc-inference-1. Name tag: subnet-inference-1. Availability Zone: ap-southeast-1a. IPv4 subnet CIDR block: 10.0.0.0/28. Click Create subnet. After the subnet is created, the console will look like this. Since public subnet can access to the Internet, you will need to assign it a public IP address.\nClick Actions. Click Edit subnet settings.",
    "description": "Info Since there is currently no need for a database or other services, you will only create public subnet.\nCreate Public Subnet At the VPC management console:\nClick Subnets. Click Create subnet. At the Create subnet page, enter the following information:\nVPC: Choose the VPC with tag vpc-inference-1. Name tag: subnet-inference-1. Availability Zone: ap-southeast-1a. IPv4 subnet CIDR block: 10.0.0.0/28. Click Create subnet. After the subnet is created, the console will look like this.",
    "tags": [],
    "title": "1.2 Subnet",
    "uri": "/1-vpc-in-aws/2-subnet/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "This is a new chapter.",
    "description": "This is a new chapter.",
    "tags": [],
    "title": "2. Establish EC2 Server",
    "uri": "/2-establish-ec2-server/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "This is a new chapter.",
    "description": "This is a new chapter.",
    "tags": [],
    "title": "3. Create Model Storage with S3",
    "uri": "/3-create-model-storage-with-s3/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 1. VPC in AWS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "1.3 Route Table",
    "uri": "/1-vpc-in-aws/3-route-table/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "This is a new chapter.",
    "description": "This is a new chapter.",
    "tags": [],
    "title": "4. Build Server with Docker",
    "uri": "/4-build-server-with-docker/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 1. VPC in AWS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "1.4 Security Group",
    "uri": "/1-vpc-in-aws/4-security-group/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 1. VPC in AWS",
    "content": "",
    "description": "",
    "tags": [],
    "title": "1.5 Internet Gateway",
    "uri": "/1-vpc-in-aws/5-internet-gateway/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "This is a new chapter.",
    "description": "This is a new chapter.",
    "tags": [],
    "title": "5. Clean Up",
    "uri": "/5-clean-up/index.html"
  },
  {
    "breadcrumb": "",
    "content": "Overall In this lab, you’ll learn how to deploy a TensorFlow model on AWS with services such as VPC, EC2, etc. and Docker.\nContent VPC in AWS Establish EC2 Server Create Model Storage with S3 Build Server with Docker Clean up",
    "description": "Overall In this lab, you’ll learn how to deploy a TensorFlow model on AWS with services such as VPC, EC2, etc. and Docker.\nContent VPC in AWS Establish EC2 Server Create Model Storage with S3 Build Server with Docker Clean up",
    "tags": [],
    "title": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
