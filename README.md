[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/2WEVFWWf)

# About Blogonotion
Blogonotion is a modern blogging platform built using Golang and React, inspired by the clean and intuitive design of Notion. It allows users to create, edit, and manage blog posts with a seamless and user-friendly interface. The tech demo is based on the CS 732 example [CS732 examples - A more complex full-stack application!
](https://github.com/UOA-CS732-SE750/cs732-examples/tree/main/example-22-fullstack)

# TODO add an image here

# Running the Tech Demo on Your Device

A step-by-step guide to set up and run the tech demo on your local device. 

## Prerequisites

Before starting, ensure you have the following installed and set up on your device:


### 1. Go
Download and install Go from the [Go official website](https://go.dev/). Verify the installation by running:
```bash
go version
```

### 2. Node.js
Install the latest version of Node.js from the [Node.js official website](https://nodejs.org/). Verify the installation by running:
```bash
node -v
npm -v
```

### 3. MongoDB
Set up MongoDB by downloading it from the [MongoDB official website](https://www.mongodb.com/try/download/community). 

Once installed, start the MongoDB server (mongod). On most systems, you can do this with:

```bash
mongod
```

Ensure the MongoDB server is running before proceeding with the next steps.

If you haven't installed MongoDB, you can download the `.env` file from Assignment - Private info / API key / etc submission. Rename it to `.env` if needed, and paste it into both the `backend-go` and `backend-express` folders to use an online MongoDB database.


## Steps

### Step 1: Clone the Repository

1. Ensure you have installed [Git], open a terminal or command prompt.
2. Run the following command to clone the repository:
    ```bash
    git clone https://github.com/UOA-CS732-S1-2025/cs732-assignment-ysun209
    ```
3. Navigate into the cloned repository directory:
    ```bash
    cd cs732-assignment-ysun209
    ```
    If you haven't installed Git, you can download the repository as a ZIP file using the following link: [Download the ZIP repository](https://github.com/UOA-CS732-S1-2025/cs732-assignment-ysun209/archive/refs/heads/main.zip)

### Step 2: Install Go Packages
Set up and run the Go backend for the application.

1. Navigate to the `backend-go` directory:
    ```bash
    cd package-go
    ```
2. Install the required Go packages:
    ```bash
    go get
    ```
3. Run the Go backend application:
    ```bash
    go run main.go
    ```

### Step 3: Install Node.js frontend packages
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend-react
    ```
2. Install the required Node.js packages:
    ```bash
    npm install
    ```
3. Start the React frontend application:
    ```bash
    npm run dev
    ```


### Step 4: Install Node.js backend packages
1. Navigate to the `backend-express` directory:
    ```bash
    cd backend-express
    ```
2. Install the required Node.js packages:
    ```bash
    npm install
    ```
3. Start the Node.js Express backend application:
    ```bash
    npm run dev
    ```
> **Note on Backend Ports**  
> The Go backend and the Express backend cannot run simultaneously as they both use port `3000`. To avoid conflicts, ensure only one backend is running at a time.

### Step 5: Build the frontend
1. Navigate to the `frontend-react` directory:
    ```bash
    cd frontend-react
    ```
2. Build the React frontend application:
    ```bash
    npm run build
    ```
3. The built files will be available in the `dist` directory. These files will be used as static assets by both the Express and Go backends.

### Step 6: Access the Application  
Once both the backend and frontend are running, open your web browser and navigate to:

**Frontend Development Server:**  
```
http://localhost:5173
```

**Backend Production Server:**  
```
http://localhost:3000
```

You should now see the Blogonotion application running on your device.
