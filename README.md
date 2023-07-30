# devopsDepProject
## About Project
Devops deployment project consist of 2 phases, 
### 1. Coding the Project
### 2. Deploying the Project

## 1. Coding the Project
## About the application:
Project is a web application, which is used to extract text from the PDF file. Any user can upload its pdf file, and can use the read method to extract text data from the uploaded pdf file. 
## Tech Stack used to code the project:
In this project, below tech stacks are used:
### Frontend Stack: 
react, html, css and javascript
### Backend Stack: 
Python Flask server
### Github Link Of Project:
https://github.com/rkjais107/devopsDepProject.git
### ScreenShot Of Frontend View:
#### Root View
<img width="960" alt="rootview" src="https://github.com/rkjais107/devopsDepProject/assets/73175596/e0dd636b-3cb3-4a7c-847a-620f2ca1e363">

#### Upload File View
<img width="959" alt="uploadview" src="https://github.com/rkjais107/devopsDepProject/assets/73175596/1403b376-69fa-4c84-87b0-e557b1721d09">

#### Read File View
<img width="959" alt="readview" src="https://github.com/rkjais107/devopsDepProject/assets/73175596/750b0a22-6f74-4d08-954f-8b6c093c2130">

#### Delete File View
<img width="959" alt="deleteview" src="https://github.com/rkjais107/devopsDepProject/assets/73175596/190183a3-4df1-4971-962a-aeefa7d70f6e">



## 2. Deploying the Project
## About the deployment:
In the deployment phase of the project, we use a domain name provided by the godaddy domain provider and use its dns management tool for dns management. We hosted our web application on the ec2 server and used nginx web server  to deploy the frontend and backend is hosted on the same ec2 server running on python flask server. We use CI tool jenkins to continuously integrate and build the application and after success build we deploy our build artifacts to the nginx web server. So on every new change pushed to the git repository of the project, a build job is run and automatically deploy the changes to the production.

## Tech stack used for project deployment:
### Devops Tools: 
Jenkins, Git, nginx, bash script
### AWS Service: 
EC2
### DNS: 
GoDaddy domain name and DNS management

## ScreenShot of Deployment Overview:
![deployPipeline drawio](https://github.com/rkjais107/devopsDepProject/assets/73175596/1dff7c94-601e-477a-9b3a-d2bbbfa1f6be)

## Step By Step Process:
During the deployment phase of the project, the team follows a structured process to host their web application and deploy it on a production server. Let's break down the process step by step:

### 1. Domain Name Registration: 
The team uses GoDaddy, a domain name provider, to register a domain name for their web application. This domain name will serve as the address through which users can access the application.

### 2. DNS Management: 
GoDaddy also provides DNS management tools, which allow the team to configure various DNS records associated with their domain name. These records help in directing traffic to the appropriate servers.

### 3. Web Application Hosting: 
The team chooses Amazon EC2 as their hosting solution for the web application. Amazon EC2 is a scalable cloud computing service that allows them to set up virtual servers on the cloud.

### 4. Frontend and Backend Deployment: 
The frontend of the web application is deployed using the Nginx web server. Nginx is a powerful and efficient web server that can also act as a reverse proxy, load balancer, and HTTP cache. It serves the static files and handles incoming requests for the frontend.

### 5. Backend Hosting: 
The backend of the web application is hosted on the same EC2 server. It runs on a Python Flask server. Flask is a popular web framework for Python, allowing the team to build and run the backend application.

### 6. Continuous Integration (CI): 
The team adopts Jenkins as their Continuous Integration (CI) tool. Jenkins is an automation server that allows them to automate the building, testing, and deployment processes of their application. It helps ensure that the codebase remains stable and free of integration issues.

### 7. Continuous Deployment: 
Jenkins is configured to automatically trigger a build job on every new change pushed to the git repository of the project. This means that as soon as developers push code changes to the repository, Jenkins picks up the changes and starts the build process.

### 8. Build Artifacts: 
The build process generates artifacts, which are the compiled and packaged version of the web application ready for deployment.

### 9. Deployment to Nginx: 
After a successful build, Jenkins deploys the build artifacts to the Nginx web server. This ensures that the latest version of the application is available on the production server and can be accessed through the registered domain name.

### 10. Automatic Production Deployment: 
With the automated deployment process in place, every time a new change is pushed to the Git repository, Jenkins automatically initiates the build job and deploys the changes to the production server. This results in rapid updates and continuous improvement of the web application.

By combining the power of GoDaddy for domain management, Amazon EC2 for hosting, Nginx as the web server, Python Flask for the backend, and Jenkins for continuous integration and deployment, the team has created an efficient and automated deployment pipeline for their web application. This approach ensures a streamlined development process and frequent updates to the production application.
