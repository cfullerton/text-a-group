# Sending a text to a group using AWS Lambda, API Gateway and SNS

## Step 1 - Create SNS Topics

  - Create a new sns topic. Note its ARN, you will be using this topic to subscribe endpoints and  publish topics to.
  - Create another sns topic. We will use this one to send welcome messages.

## Step 2 - Create IAM Role
  Create an IAM role with the permissions seen in iam.json. We will assign all of the lambda scripts to this role.

## step 3 - Create Node.js Lambda functions
  - Create the unsubscribe, subscribe and send lambda functions, see unsubscribe.js susbscribe.js and send.js.
  - add your topic ARN in each file. Put the main topic and welcome ARNs in the designated places in Subscribe.js
  - Give them all the role created in step 2.

## Step 4 - Create Application Gateway
  - Create a new API with two resources "subscribe" and "unsubscribe"
  - Create GET endpoints on both.
  - Add the query property "number" to both.
  - Use the apigateway-mapping file for both, copy/paste exactly.
  - Set them to trigger the corresponding functions in step 3

After theses steps, you now have the subscribe/unsubscribe api and texting set up. You now need to host a static file that makes requests to your API endpoints with the query string ?number=. You can do this a million ways, below is how to do it with AWS:

## step 5 - Add Static page
 - Create a s2 bucket with the same name as your subscribe / unsubscribe website
 - Upload a index.html from above
 - Enable webpage serving on the bucket
 - point your DNS to your S2 bucket
