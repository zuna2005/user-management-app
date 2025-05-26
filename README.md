# User Management App

This is a React application for managing a list of users using **Redux Toolkit**. Users can be added via a random user API, viewed in detail, edited, and deleted. State is managed centrally using Redux, ensuring a responsive and consistent UI.

## Features

* **User Table**

  * Shows `username`, `address`, and `email`
  * Each row is clickable to open a modal with detailed info

* **Add User**

  * Fetches a random user from [Random User API](https://api-ninjas.com/api/randomuser)
  * Adds them to the state-managed list

* **Delete User**

  * Remove a user directly from the table

* **Edit Address**

  * Click on a user to open a modal with all fields
  * Edit `address` and save changes
  * Updated data reflects in the table immediately


## Tech Stack

* **React** – Component-based UI
* **Redux Toolkit** – State management
* **React-Redux** – Redux bindings for React
* **Bootstrap** – Styling and modal components
* **TypeScript** – Static typing
* **Axios** – API requests

## Getting Started

1. **Clone the repo:**

   ```bash
   git clone https://github.com/zuna2005/user-management-app.git
   cd user-management-app
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Run the app:**

   ```bash
   npm run dev
   ```