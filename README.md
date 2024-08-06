# Project Name: Quantum Bot

## Overview

This project demonstrates a basic setup of Firebase Functions to handle HTTP requests. The primary function is addMessage, which allows users to add messages to a Firestore database. The function performs data validation and error handling, ensuring robust and reliable functionality.

## Prerequisites

- Node.js installed on your machine
- Firebase CLI installed
- A Firebase project with Blaze plan enabled
- Firestore database setup in your Firebase project

## Project Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/natko22/quantum-bot.git
   cd quantum-bot

   ```

2. Install Firebase CLI

`npm install -g firebase-tools `

3.  Login to Firebase

`firebase login`

4. Initialize Firebase Functions

`firebase init functions`

5. Deploy Firebase Functions

`firebase deploy --only functions`

## Testing

You can test your function using Postman or any other HTTP client:

1. Set the your URL from your Firebase account:
   https://<your-region>-<your-project-id>.cloudfunctions.net/addMessage

2. Set the Method:
   "POST"

3. Set the Headers:
   Content-Type: application/json

4. Set the Body:
   {
   "text": "Your message text",
   "userId": "User ID"
   }

## Logging and Debugging

The function uses functions.logger for logging. You can view the logs in the Firebase console under the Functions logs section.

## Error Handling

The function throws structured errors using functions.https.HttpsError. Ensure your client handles these errors appropriately.

## License

This project is licensed under the MIT License.
