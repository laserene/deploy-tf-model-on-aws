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
    "content": "Info All the AWS services in this lab will be initialized at the Asia Pacific (Singapore) region. Be sure to select this region before entering the lab.\nA VPC is a virtual network that closely resembles a traditional network that you’d operate in your own data center.\nCreate VPC Go to VPC management console.\nClick Your VPCs. Click Create VPC. At the Create VPC page, enter the following information:\nChoose VPC only. Name tag: vpc-inference-1. IPv4 CIDR block: 10.10.0.0/28. Click Create VPC. After a VPC has been successfully created, you should edit some VPC configurations.\nClick Actions. Click Edit VPC Setting.",
    "description": "Info All the AWS services in this lab will be initialized at the Asia Pacific (Singapore) region. Be sure to select this region before entering the lab.\nA VPC is a virtual network that closely resembles a traditional network that you’d operate in your own data center.\nCreate VPC Go to VPC management console.\nClick Your VPCs. Click Create VPC. At the Create VPC page, enter the following information:",
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
    "content": "Info Since there is currently no need for a database or other services, you will only create public subnet.\nA subnet is a range of IP addresses in your VPC. A subnet must reside in a single Availability Zone. After creating a VPC, you can add EC2 instance(s) to the subnet.\nCreate Public Subnet At the VPC management console:\nClick Subnets. Click Create subnet. At the Create subnet page, enter the following information:\nVPC: Choose the VPC with tag vpc-inference-1. Name tag: subnet-inference-1. Availability Zone: ap-southeast-1a. IPv4 subnet CIDR block: 10.0.0.0/28. Click Create subnet. After the subnet is created, the console will look like this. Since public subnet should have access to the Internet, you have to assign it a public IP address.\nClick Actions. Click Edit subnet settings. Check Enable auto-assign public IPv4 address. Click Save.",
    "description": "Info Since there is currently no need for a database or other services, you will only create public subnet.\nA subnet is a range of IP addresses in your VPC. A subnet must reside in a single Availability Zone. After creating a VPC, you can add EC2 instance(s) to the subnet.\nCreate Public Subnet At the VPC management console:\nClick Subnets. Click Create subnet. At the Create subnet page, enter the following information:",
    "tags": [],
    "title": "1.2 Subnet",
    "uri": "/1-vpc-in-aws/2-subnet/index.html"
  },
  {
    "breadcrumb": "Deploy TensorFlow Model on AWS with EC2 and Docker",
    "content": "Create EC2 Instance Go to EC2 Console and click “Instances”:\nClick “Launch Instance” to create a new instance. !(EC2 Console)[/images/2-establish-ec2-server/img-1.png]",
    "description": "Create EC2 Instance Go to EC2 Console and click “Instances”:\nClick “Launch Instance” to create a new instance. !(EC2 Console)[/images/2-establish-ec2-server/img-1.png]",
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
    "content": "A route table contains a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed.\nCreate Route Table At the VPC management console:\nClick Route tables. Click Create route table. At the Create route table page, enter the following information:\nName tag: route-table-inference-1. VPC: Choose the VPC with tag vpc-inference-1. Click Create route table. After the route table is created, you will need to associate it to the public subnet.\nClick Subnet associations. Click Edit subnet associations. In the Edit subnet association tab, choose the subnet-inference-1 subnet and click Save associations.",
    "description": "A route table contains a set of rules, called routes, that determine where network traffic from your subnet or gateway is directed.\nCreate Route Table At the VPC management console:\nClick Route tables. Click Create route table. At the Create route table page, enter the following information:\nName tag: route-table-inference-1. VPC: Choose the VPC with tag vpc-inference-1. Click Create route table. After the route table is created, you will need to associate it to the public subnet.",
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
