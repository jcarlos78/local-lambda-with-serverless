
#First time useing
npm install -g serverless

npm install

#deploy changes
sls deploy

#Call function
sls invoke -f main

#simulate apigateway
sls simulate apigateway -p 5000

#start local offiline
sls offline start