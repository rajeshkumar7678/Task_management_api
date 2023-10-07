# Task Management API
This is a RESTful API for managing tasks. Users can create, retrieve, update, and delete tasks. It also includes optional features like authentication and rate limiting.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
  - [Running the API](#running-the-api)
  - [Endpoints](#endpoints)
- [Authentication ](#authentication)
- [Rate Limiting ](#rate-limiting)
- [Testing](#testing)
  - [Postman Collections](#postman-collections)
- [Challenges and Decisions](#challenges-and-decisions)
- [Future Improvements](#future-improvements)

## Getting Started

### Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed.
- A database (e.g., MongoDB) configured and accessible.

### Installation

1. Clone this repository:

   ```bash
   git clone <repository_url>
   cd task-management-api
   ```
 2. Install dependencies:
    ```bash
    npm install
    ```
## Usage

 1. Running the API:
    ```bash
    npm run server
    ```
    The API will be accessible at http://localhost:9001 by default. You can configure the port and other settings in the .env file.
    
1. Endpoints:
    - POST /tasks: Add a new task.
    - GET /tasks: Retrieve a list of all tasks.
    - GET /tasks/:id: Retrieve a specific task by ID.
    - PUT /tasks/:id: Update a specific task by ID.
    - DELETE /tasks/:id: Delete a specific task by ID.
    - POST/user/register: Add a new user
    - POST/user/login: login user to Api

## Authentication:
> To use authentication, you must register and log in to manage tasks. Protected  endpoints require authentication.

## Rate Limiting:
>Rate limiting is in place to restrict clients from making too many requests in a short period.

## Testing:
>You can use Postman to test the API. Import the provided Postman collection to get started:
 [click here ](https://github.com/rajeshkumar7678/Task_management_api/blob/main/thunder-collection_task_management%20_api.json)

## Challenges and Decisions:
- Rate Limiting:
    Challenge: Implementing rate limiting to prevent abuse and protect the API from
    excessive requests.Decision: You mentioned implementing rate limiting as a bonus feature, which is a good decision to protect your API from abuse. You can use middleware like express-rate-limit to achieve this, as explained in a previous response.

<h1 align="center">✨Thank You✨</h1>
