***Handover Protocol***

**Logic**

````
  - Created a Node.js project
  - Created a HTTP Sever using Express API
  - Added a Endpoint
  - Added a webhook verification
````

**Steps to Start the app**

 - run node index.js on one terminal
 - run this command on another terminal <curl -X GET "localhost:1337/webhook?hub.verify_token=mojahid1997&hub.challenge=CHALLENGE_ACCEPTED&hub.mode=subscribe">
 - If your webhook verification is working as expected, you should see the following:
   - WEBHOOK_VERIFIED logged to the command line where your node process is running.
   - CHALLENGE_ACCEPTED logged to the command line where you sent the cURL request.
 - Test your webhook by sending this cURL request:
   - curl -H "Content-Type: application/json" -X POST "localhost:1337/webhook" -d '{"object": "page", "entry": [{"messaging": [{"message": "Hello Mojahid"}]}]}'
   - If your webhook is working as expected, you should see the following:
     - TEST_MESSAGE logged to the command line where your node process is running.
     - EVENT RECEIVED logged to the command line where you sent the cURL request.