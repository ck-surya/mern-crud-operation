# MERN Stack CRUD Application

This is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack to perform CRUD (Create, Read, Update, Delete) operations on student records.

## Features

- **Create**: Add new students to the database.
- **Read**: View a list of existing students and their details.
- **Update**: Modify the details of existing students.
- **Delete**: Remove students from the database.

## Prerequisites

Before getting started, make sure you have the following installed on your machine:

- Node.js and npm
- MongoDB

## Installation

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd mern-crud-operation
   ```

2. **Install dependencies**:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

3. **Start the backend server**:

   ```bash
   # From the root directory
   cd backend
   node server.js
   ```

4. **Start the frontend development server**:

   ```bash
   # From the root directory
   cd frontend
   npm run dev
   ```

## Usage

Once the servers are running, you can access the application by navigating to [http://localhost:5173](http://localhost:5173) in your web browser.

### Create Student

1. Click on the "Create Student" link to navigate to the create student page.
2. Fill in the required details in the form.
3. Click the "Create" button to add the student to the database.

### Read Students

- Upon accessing the homepage, you'll see a list of existing students along with their details.

### Update Student

1. Click on the "Edit" link next to the student you want to update.
2. Modify the student's details in the form.
3. Click the "Update" button to save the changes.

### Delete Student

- Next to each student entry, there is a "Delete" button. Click on it to remove the student from the database.

## License

This project is licensed under the [MIT License](LICENSE).

---
