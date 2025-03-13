# Quiz App

## Description
This is a JavaScript-powered quiz application that allows users to select answers to multiple-choice questions. The application tracks the user's score and game progress.

## Features
- Displays multiple-choice questions
- Tracks user's score and remaining lives
- Sends selected answers to the backend
- Determines if the game has ended
- Uses Express.js for handling API requests

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript, jQuery
- **Backend:** Node.js, Express.js
- 
## Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/your-repo/quiz-app.git
   cd quiz-app
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Application**
   ```sh
   node index.js
   ```
   The server will start on `http://localhost:3000` by default.

## Usage
1. Open `http://localhost:3000` in your browser.
2. Answer the questions by clicking on the buttons.
3. The backend processes the answer and sends back the game state.
4. The game continues until completion.

## API Endpoints
### `POST /answer`
**Description:** Receives the selected answer and determines correctness.

#### Request Body:
```json
{
  "val": "Selected Answer"
}
```

#### Response Example:
```json
{
  "correct": true,
  "endGame": false,
  "life": 2,
  "currentQuestion": "What is the capital of France?",
  "currentQuestionChoices": ["Berlin", "Paris", "Madrid", "Rome"]
}
```

## Future Enhancements
- Add a timer for each question
- Implement a leaderboard
- Store user progress using a database

## License
This project is licensed under the MIT License.

## Author
Created by **Tomer**.
