# Health Record Manager Backend

This is the backend server for the Health Record Manager application. It provides APIs for managing health records and user authentication.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime environment.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for storing health records and user data.
- **JWT (JSON Web Tokens):** Used for user authentication and authorization.

## API Documentation

- **GET /health-records:** Get all health records.
- **POST /health-records:** Create a new health record.
- **GET /health-records/:id:** Get a specific health record by ID.
- **PUT /health-records/:id:** Update a specific health record by ID.
- **DELETE /health-records/:id:** Delete a specific health record by ID.
- **POST /login:** Authenticate user and generate JWT token.
