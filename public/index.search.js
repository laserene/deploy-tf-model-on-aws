var relearn_search_index = [
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 3. Create Model Storage with S3",
    "content": "Gateway Endpoint is a gateway that helps you connect to S3 from your VPC without using Internet Gateway and no additional charge.\nBesides gateway endpoint, S3 and DynamoDB also support interface endpoint.\nIn this lab, in order for EC2 instance to have the right to access S3, you will create an IAM Role for reading from S3.\nCreate IAM Role for reading files from S3 Go to IAM Console:\nClick Roles, then Create role. Trusted entity: AWS service Use case: EC2 In the Add permission tab, type S3 in the search bar and check the AmazonS3ReadOnlyAccess policy.\nIn the Name, review and create tab:\nRole name: role-ec2-s3-read-only Leave the rest as default and click Create role.\nAttach IAM Role to EC2 Instance Go to EC2 Console:\nClick Instances, then select the instance you want to attach the role to. Click Actions, then Security, then Modify IAM role. IAM role: role-ec2-s3-read-only Click Update IAM Role. Create Gateway Endpoint Go to VPC Console:\nClick Endpoints, then Create endpoint. In the Create endpoint tab:\nName tag: gw-endpoint-inference-1 Service category: AWS services Service Name: com.amazonaws.ap-southeast-1.s3 of Gateway type. VPC: vpc-inference-1 Route tables: table-inference-1 Leave the rest as default and click Create endpoint.",
    "description": "Gateway Endpoint is a gateway that helps you connect to S3 from your VPC without using Internet Gateway and no additional charge.\nBesides gateway endpoint, S3 and DynamoDB also support interface endpoint.\nIn this lab, in order for EC2 instance to have the right to access S3, you will create an IAM Role for reading from S3.\nCreate IAM Role for reading files from S3 Go to IAM Console:\nClick Roles, then Create role.",
    "tags": [],
    "title": "3.1 Create Gateway Endpoint",
    "uri": "/3-create-model-storage-with-s3/1-create-gateway-endpoint/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 4. Build Server with Docker",
    "content": "Test Connection Go to EC2 console and select the instance you just created.\nCopy the public IP address of the instance. Open MobaXterm, create a new SSH session:\nRemote host: Paste the public IP address of the instance. Check Specify username and enter ec2-user. In the Advanced SSH settings tab, go to Use private key and select the .ppk file you downloaded when creating the instance.\nNow you should be able to connect to the instance. Run the following command to check the current bucket in Amazon S3.\naws s3 ls",
    "description": "Test Connection Go to EC2 console and select the instance you just created.\nCopy the public IP address of the instance. Open MobaXterm, create a new SSH session:\nRemote host: Paste the public IP address of the instance. Check Specify username and enter ec2-user. In the Advanced SSH settings tab, go to Use private key and select the .ppk file you downloaded when creating the instance.\nNow you should be able to connect to the instance.",
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
    "content": "Info All the AWS services in this lab will be initialized at the Asia Pacific (Singapore) region. Be sure to select this region before entering the lab.\nA VPC is a virtual network that closely resembles a traditional network that you’d operate in your own data center.\nCreate VPC Go to VPC management console.\nClick Your VPCs. Click Create VPC. At the Create VPC page, enter the following information:\nChoose VPC only. Name tag: vpc-inference-1. IPv4 CIDR block: 10.10.0.0/28. Click Create VPC.",
    "description": "Info All the AWS services in this lab will be initialized at the Asia Pacific (Singapore) region. Be sure to select this region before entering the lab.\nA VPC is a virtual network that closely resembles a traditional network that you’d operate in your own data center.\nCreate VPC Go to VPC management console.\nClick Your VPCs. Click Create VPC. At the Create VPC page, enter the following information:",
    "tags": [],
    "title": "1.1 VPC",
    "uri": "/1-vpc-in-aws/1-vpc/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 3. Create Model Storage with S3",
    "content": "Create S3 Bucket Go to S3 Console:\nClick Bucket, then Create bucket. In the Create bucket tab:\nBucket name: bucket-nlp-models-1 Leave the rest as default and click Create bucket.\nUpload Model to S3 In the bucket-nlp-models-1 bucket, click Upload.\nClick Add folder, navigate to the folder nmt on local machine then click Upload.",
    "description": "Create S3 Bucket Go to S3 Console:\nClick Bucket, then Create bucket. In the Create bucket tab:\nBucket name: bucket-nlp-models-1 Leave the rest as default and click Create bucket.\nUpload Model to S3 In the bucket-nlp-models-1 bucket, click Upload.\nClick Add folder, navigate to the folder nmt on local machine then click Upload.",
    "tags": [],
    "title": "3.2 Upload Model to S3",
    "uri": "/3-create-model-storage-with-s3/2-upload-model-to-s3/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 4. Build Server with Docker",
    "content": "In order to serve the model, you will need Docker installed on the server. Since EC2 instance doesn’t come with Docker pre-installed, you will need to install it manually.\nInstall Docker on EC2 Run the following commands to install Docker on EC2.\nUpdate the packages:\nsudo yum update -y Install Docker:\nsudo yum install docker -y Start the Docker service:\nsudo service docker start Serving Depending on the model you are serving, you can pull the corresponding TensorFlow Serving Docker image. In this lab, since the TensorFlow version of nmt model is 2.17.0 and trained on CPU only, you will pull the TensorFlow Serving image with tag 2.17.0 that has no GPU-support.\nPull the TensorFlow Serving Docker image:\nsudo docker pull tensorflow/serving:2.17.0 Additionally, since TensorFlow Serving no longer supports fetching files from Amazon S3, you will need to copy the model from S3 to the server.\nRun the following command to copy the model from S3 to the server.\naws s3 sync s3://bucket-nlp-models-1/nmt . Serve the model with Docker:\nsudo docker run -p 8501:8501 -p 8500:8500 --name nmt --mount type=bind,source=$(pwd)/nmt,target=/models/nmt -e MODEL_NAME=nmt -t tensorflow/serving:2.17.0",
    "description": "In order to serve the model, you will need Docker installed on the server. Since EC2 instance doesn’t come with Docker pre-installed, you will need to install it manually.\nInstall Docker on EC2 Run the following commands to install Docker on EC2.\nUpdate the packages:\nsudo yum update -y Install Docker:\nsudo yum install docker -y Start the Docker service:\nsudo service docker start Serving Depending on the model you are serving, you can pull the corresponding TensorFlow Serving Docker image.",
    "tags": [],
    "title": "4.2 Serving with Docker",
    "uri": "/4-build-server-with-docker/2-serving-with-docker/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 1. VPC in AWS",
    "content": "Info Since there is currently no need for a database or other services, you will only create public subnet.\nA subnet is a range of IP addresses in your VPC. A subnet must reside in a single Availability Zone. After creating a VPC, you can add EC2 instance(s) to the subnet.\nCreate Public Subnet At the VPC management console:\nClick Subnets. Click Create subnet. At the Create subnet page, enter the following information:\nVPC: Choose the VPC with tag vpc-inference-1. Name tag: subnet-inference-1. Availability Zone: ap-southeast-1a. IPv4 subnet CIDR block: 10.0.0.0/28. Click Create subnet. After the subnet is created, the console will look like this. Since public subnet should have access to the Internet, you have to assign it a public IP address.\nClick Actions. Click Edit subnet settings. Check Enable auto-assign public IPv4 address. Click Save.",
    "description": "Info Since there is currently no need for a database or other services, you will only create public subnet.\nA subnet is a range of IP addresses in your VPC. A subnet must reside in a single Availability Zone. After creating a VPC, you can add EC2 instance(s) to the subnet.\nCreate Public Subnet At the VPC management console:\nClick Subnets. Click Create subnet. At the Create subnet page, enter the following information:",
    "tags": [],
    "title": "1.2 Subnet",
    "uri": "/1-vpc-in-aws/2-subnet/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "Create EC2 Instance Go to EC2 Console and click “Instances”:\nClick “Launch Instance” to create a new instance. In the Launch an instance tab:\nName tag: Inference Server AMI: Amazon Linux 2023 AMI Instance Type: t2.micro In the key pair section, create a new key pair named key-pair-inference-1 of type RSA in .ppk format and download it. This key pair will be used to connect to the instance.\nIn the Network settings section, select the Edit button.\nChoose the VPC with tag name vpc-inference-1. Choose the subnet with tag name subnet-inference-1. Enable auto-assign public IP. Select existing security group sg-inference-1. Click Launch instance.",
    "description": "Create EC2 Instance Go to EC2 Console and click “Instances”:\nClick “Launch Instance” to create a new instance. In the Launch an instance tab:\nName tag: Inference Server AMI: Amazon Linux 2023 AMI Instance Type: t2.micro In the key pair section, create a new key pair named key-pair-inference-1 of type RSA in .ppk format and download it. This key pair will be used to connect to the instance.\nIn the Network settings section, select the Edit button.",
    "tags": [],
    "title": "2. Establish EC2 Server",
    "uri": "/2-establish-ec2-server/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance at highest durability for a variety of use cases.\nIn this lab, you will use Amazon S3 to store current model files as well as any other versions in the future.\nContent Create Gateway Endpoint Upload model to S3",
    "description": "Amazon S3 is an object storage service that offers industry-leading scalability, data availability, security, and performance at highest durability for a variety of use cases.\nIn this lab, you will use Amazon S3 to store current model files as well as any other versions in the future.\nContent Create Gateway Endpoint Upload model to S3",
    "tags": [],
    "title": "3. Create Model Storage with S3",
    "uri": "/3-create-model-storage-with-s3/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 1. VPC in AWS",
    "content": "A route table contains a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed.\nCreate Route Table At the VPC management console:\nClick Route tables. Click Create route table. At the Create route table page, enter the following information:\nName tag: route-table-inference-1. VPC: Choose the VPC with tag vpc-inference-1. Click Create route table. After the route table is created, you will need to associate it to the public subnet.\nClick Subnet associations. Click Edit subnet associations. In the Edit subnet association tab, choose the subnet-inference-1 subnet and click Save associations.",
    "description": "A route table contains a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed.\nCreate Route Table At the VPC management console:\nClick Route tables. Click Create route table. At the Create route table page, enter the following information:\nName tag: route-table-inference-1. VPC: Choose the VPC with tag vpc-inference-1. Click Create route table. After the route table is created, you will need to associate it to the public subnet.",
    "tags": [],
    "title": "1.3 Route Table",
    "uri": "/1-vpc-in-aws/3-route-table/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "With a working server, we can now harness Docker to serve the model. This chapter will guide you through the process of serving the model in a container and how to fetch translation from the server.\nNote In this lab, we will use MobaXterm to establish the connection to EC2. You can use other SSH clients such as PuTTY or Terminal on Mac.\nContent Test connection Serving with Docker Making Inference",
    "description": "With a working server, we can now harness Docker to serve the model. This chapter will guide you through the process of serving the model in a container and how to fetch translation from the server.\nNote In this lab, we will use MobaXterm to establish the connection to EC2. You can use other SSH clients such as PuTTY or Terminal on Mac.\nContent Test connection Serving with Docker Making Inference",
    "tags": [],
    "title": "4. Build Server with Docker",
    "uri": "/4-build-server-with-docker/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 1. VPC in AWS",
    "content": "A security group controls the traffic that is allowed to reach and leave the resources that it is associated with. For example, after you associate a security group with an EC2 instance, it controls the inbound and outbound traffic for the instance.\nCreate Security Group At the VPC management console:\nClick Security groups. Click Create security group. At the Create security group page, enter the following information:\nName tag: security-group-inference-1. Description: Allow SSH to developers. Allow REST API and gRPC calls for inference.. VPC: Choose the VPC with tag vpc-inference-1. Click Create security group. You will need to create 3 inbound rules for this security group. EC2 instance needs to accept SSH connections from developers. Additionally, since you will serve the TensorFlow model with TensorFlow Serving with Docker, EC2 instance will need to accept REST API and gRPC calls at port 8501 and 8500 respectively.\nType Protocol Port Range Source Description SSH TCP 22 My IP SSH connection from developers Custom TCP TCP 8501 Anywhere-IPv4 REST API calls Custom TCP TCP 8500 Anywhere-IPv4 gRPC calls Leave the other fields as default and click Create security group.",
    "description": "A security group controls the traffic that is allowed to reach and leave the resources that it is associated with. For example, after you associate a security group with an EC2 instance, it controls the inbound and outbound traffic for the instance.\nCreate Security Group At the VPC management console:\nClick Security groups. Click Create security group. At the Create security group page, enter the following information:\nName tag: security-group-inference-1. Description: Allow SSH to developers.",
    "tags": [],
    "title": "1.4 Security Group",
    "uri": "/1-vpc-in-aws/4-security-group/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 1. VPC in AWS",
    "content": "An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. It supports IPv4 and IPv6 traffic. It does not cause availability risks or bandwidth constraints on your network traffic.\nCreate Internet Gateway At the VPC management console:\nClick Internet gateways. Click Create route table. At the Create internet gateway page, enter the following information:\nName tag: internet-gateway-inference-1. Click Create internet gateway. After the internet gateway is created, you will need to attach it to the VPC.\nClick Actions. Click Attach to VPC. In the Attach to VPC dialog box, choose the VPC with tag vpc-inference-1 and click Attach. Update the route table to route internet traffic to the internet gateway.\nClick Route tables. Click the route table with tag route-table-inference-1. Click Routes. Click Edit routes. Click Add route. Choose Destination as 0.0.0.0/0. Choose Target as the internet gateway with tag internet-gateway-inference-1. Click Save changes.",
    "description": "An internet gateway is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet. It supports IPv4 and IPv6 traffic. It does not cause availability risks or bandwidth constraints on your network traffic.\nCreate Internet Gateway At the VPC management console:\nClick Internet gateways. Click Create route table. At the Create internet gateway page, enter the following information:\nName tag: internet-gateway-inference-1. Click Create internet gateway.",
    "tags": [],
    "title": "1.5 Internet Gateway",
    "uri": "/1-vpc-in-aws/5-internet-gateway/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "Clean up resources We will proceed to delete the resources in the following order:\nTerminate the EC2 instance Access the EC2 dashboard.\nSelect Instances from the left navigation bar. Select the instance with the name tag Inference Server. Select Instance State. Select Terminate Instance. Confirm the termination\nSelect Terminate (delete). Delete the Public Subnet Go to the VPC dashboard.\nSelect Subnets from the left navigation bar. Select the subnet with the name tag subnet-inference-1. Select Actions. Select Delete Subnet. Type ‘delete’ in the confirmation box and select Delete. Delete the Route Table Select Route tables from the left navigation bar.\nSelect the route table with the name tag table-inference-1. Select Actions. Select Delete route table. Type ‘delete’ in the confirmation box and select Delete. Delete the VPC Select Your VPCs from the left navigation bar.\nSelect the VPC with the name tag vpc-inference-1. Select Actions. Select Delete VPC. Type ‘delete’ in the confirmation box and select Delete. Delete the S3 bucket Empty the bucket. At the S3 Console.\nSelect the bucket with the name inference-bucket-1. Select Empty. Type ‘permanently delete’ in the confirmation box and select Empty. Select Delete. Once the bucket is empty, select Exit. Delete the bucket.\nSelect the bucket with the name inference-bucket-1. Select Delete. Type bucket-nlp-models-1 in the confirmation box Select Delete bucket.",
    "description": "Clean up resources We will proceed to delete the resources in the following order:\nTerminate the EC2 instance Access the EC2 dashboard.\nSelect Instances from the left navigation bar. Select the instance with the name tag Inference Server. Select Instance State. Select Terminate Instance. Confirm the termination\nSelect Terminate (delete). Delete the Public Subnet Go to the VPC dashboard.\nSelect Subnets from the left navigation bar. Select the subnet with the name tag subnet-inference-1.",
    "tags": [],
    "title": "5. Clean Up",
    "uri": "/5-clean-up/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker \u003e 4. Build Server with Docker",
    "content": "In this section, we will make inference using the model we have trained in the previous section. We will use the requests library in Python to make a POST request to the server.\nREST API import requests # The API endpoint url = \"http://18.141.178.173:8501/v1/models/nmt:predict\" # Data to be sent data = { \"inputs\": { \"inputs\": [\"Hello, how are you?\"], \"maxlen\": 30, \"temperature\": 0.9 } } # A POST request to the API response = requests.post(url, json=data) # Print the response print(response.json()) in which 18.141.178.173 is the public IPv4 address of the EC2 instance.\nExample response:\n{\r'outputs': ['hallo , wie segeln losgehen ?']\r}",
    "description": "In this section, we will make inference using the model we have trained in the previous section. We will use the requests library in Python to make a POST request to the server.\nREST API import requests # The API endpoint url = \"http://18.141.178.173:8501/v1/models/nmt:predict\" # Data to be sent data = { \"inputs\": { \"inputs\": [\"Hello, how are you?\"], \"maxlen\": 30, \"temperature\": 0.9 } } # A POST request to the API response = requests.",
    "tags": [],
    "title": "4.3 Making Inference",
    "uri": "/4-build-server-with-docker/3-making-inference/index.html"
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
