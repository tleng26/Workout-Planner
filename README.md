# Workout Planner
This full-stack project is centered around developing a workout management system. As an avid gym-goer, my goal is to provide users with an intuitive and efficient platform to log, update, and track their workouts, solving the common inconvenience of using a notes app or a pen and notebook.




## Backend
The backend of the Workout Tracker is built using Node.js and Express.js, which handle server-side operations and routing, and the data is stored in MongoDB.

#### Key Functionalities
- CRUD Operations:
  - GET /api/workouts/: Retrieves all workouts in descending order of creation.
  - POST /api/workouts/:id: Adds a new workout entry.
  - PATCH /api/workouts/:id: Modifies an existing workout.
  - DELETE /api/workouts/:id: Deletes a workout entry.
- Data Validation: Uses Mongoose models to validate incoming data against predefined schemas.
- Error Handling: Ensures reliable API responses and handles errors effectively.




## Frontend
The frontend of the Workout Tracker is developed using React, efficient for its modular component-based architecture that enhances maintainability and scalability. We utilize HTML and CSS to ensure that the layout and styling deliver a visually appealing and responsive user experience. Navigation is managed by React Router, which supports smooth client-side transitions, making it possible to create an effective single-page application.

#### Key Functionalities
- Dynamic User Interface: Users can interact with real-time data, such as adding, deleting, and updating workout records.
- State Management: Utilizes React's context API to manage global state across different components, making it easier to pass data without manual prop threading.




## Challenges
- Ensuring data consistency across the client and server was challenging. Implementing robust error handling and state management strategies was crucial to maintaining integrity.
- Designing a UI that is equally functional and visually appealing involved meticulous CSS styling and frequent testing. Achieving a seamless user experience required iterative adjustments.




## Future Features
- Authentication: A secure authentication system where users can register and log in using a username and password stored securely in the database.
- Sections for Workout Splits: Sections workouts for each day of the week, allowing users to plan and track their exercises based on specific days.



## Usage
1. Install Node.js and npm: https://nodejs.org/
2. Clone the repository: `git clone https://github.com/tleng26/workout-tracker.git`
3. Install backend dependencies: `cd backend` `npm install`
4. Set up .env file in backend folder by replacing MONGO_URI (create a free MongoDB account)
5. Start backend server: `npm run dev`
6. Install frontend dependencies in another terminal: `cd frontend` `npm install`
7. Start frontend server: `npm start`
8. Navigate to http://localhost:3000 to view the application!
