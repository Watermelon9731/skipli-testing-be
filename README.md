# Backend Service with Express.js, Vonage, Cloud FireStore, and GitHub API

This project utilizes Express.js as the backend framework to provide RESTful API endpoints. It integrates Vonage for authentication using SMS to send access code and fetches user data from GitHub API.

## Prerequisites

Before running this project, ensure you have the following installed and set up:

- Node.js and npm
- Vonage for SMS 
- Firebase project with FireStore database
- GitHub API credentials (if required for fetching user data)

## Getting Started

1.  **Clone the repository**

    ```bash
    git clone git@github.com:Watermelon9731/skipli-testing-be.git
    cd skipli-testing-be
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Set up environment variables**

    ```bash
    PORT=5000
    GITHUB_BASE_URL=https://api.github.com
    FIREBASE_API_KEY=(your firebase api key)
    FIREBASE_AUTH_DOMAIN=(your firebase auth domain)
    FIREBASE_PROJECT_ID=(your firebase project id)
    FIREBASE_STORAGE_BUCKET=(your firebase storage bucket)
    FIREBASE_MESSAGING_SENDER_ID=(your firebase mesageing sender id)
    FIREBASE_APP_ID=(your firebase app id)
    ```

4.  **Start the server**

    ```bash
    npm run dev
    ```

    The server will start at http://localhost:3000.

## Database Documentation

Firebase Cloud Storage is used as the database. To configure Firebase, follow these steps:

1. Create a Firebase project in the Firebase Console.
2. Add your Firebase configuration to src/configs/database.ts:

   ```bash
   const firebaseConfig = {
   apiKey: "FIREBASE_API_KEY",
   authDomain: "FIREBASE_AUTH_DOMAIN",
   projectId: "FIREBASE_PROJECT_ID",
   storageBucket: "FIREBASE_STORAGE_BUCKET",
   messagingSenderId: "FIREBASE_MESSAGING_SENDER_ID",
   appId: "FIREBASE_APP_ID",
   };
   export default firebaseConfig;
   ```

3. Initialize Firebase in src/firebase/init.js:

   ```bash
   import { initializeApp } from 'firebase/app';
   export const firebaseApp = initializeApp(firebaseConfig);
   export const db = getFirestore(firebaseApp);
   ```

### Database Schema

Firestore uses a NoSQL data model where data is organized into documents within collections. Each document contains key-value pairs.

`Collection: users`

```json
{
  "access_code": "12456",
  "favorite_id": "12agasgnjqw",
  "phone_number": "84123456789",
  "user_id": "623nqwuqrhqu2412"
}
```

`Collection: favorites`

```json
{
  "favorite_id": "12agasgnjqw",
  "user_id": "623nqwuqrhqu2412",
  "profiles": [
    {
      "avatar_url": "https://avatars.githubusercontent.com/u/26309?v=4",
      "followers_url": "https://api.github.com/users/ong/followers",
      "html_url": "https://github.com/ong",
      "id": 26309,
      "login": "ong"
    }
  ]
}
```

### Data Access

Firestore provides SDKs for various platforms (Android, iOS, Web, Node.js, etc.) to interact with the database.

https://firebase.google.com/docs/firestore

## Endpoints

### Authentication

#### Phone Authentication

End point: `POST /login/access-code`

Description: Initiates phone authentication using Vonage SMS

Request Body:

```json
{
  "phoneNumber": "84123456789"
}
```

#### Verify Phone Authentication

Endpoint: `POST /verify-access-code`

Description: Verifies phone authentication using SMS code.

Request Body:

```json
{
  "access_code": "123456"
}
```

Response

```json
[
  {
    "phone_number": "84123456789",
    "user_id": "124zcaf34135",
    "favorite_id": "215sgsdgnu12"
  }
]
```
