# Quiz App

A web-based interactive quiz game where users answer multiple-choice questions. The application tracks the user's score and HP (health points), decreasing HP when incorrect answers are given. The game ends when HP reaches zero.

## Features

- Multiple-choice quiz format.
- HP bar that decreases with incorrect answers.
- Persistent HP tracking using localStorage or server-side storage.
- Dynamic question handling.
- Uses **Node.js**, **Express**, **jQuery**, and **Bootstrap** for a smooth user experience.

## Technologies Used

- **Frontend:** HTML, CSS, JavaScript, jQuery, Bootstrap
- **Backend:** Node.js, Express
- **Data Handling:** JSON (or database if extended)

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/quiz-app.git
   cd quiz-app
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the server:
   ```sh
   node index.js
   ```

4. Open the app in your browser:
   ```sh
   http://localhost:3000
   ```

## Usage

1. Answer the questions by selecting an option.
2. If incorrect, your HP will decrease.
3. The game ends when HP reaches zero.
4. If all questions are answered correctly, the game proceeds to the next stage.

## Project Structure
```
quiz-app/
├── public/
│   ├── index.html  # Main frontend
│   ├── style.css   # Stylesheet
│   ├── script.js   # Frontend logic
│   ├── addscript.js # Additional scripts
├── index.js        # Express server logic
├── Quiz.js         # Quiz logic
├── package.json    # Dependencies & scripts
└── README.md       # Project documentation
```


## Future Enhancements
- Store questions in a database.
- Implement user authentication and leaderboards.
- Add more difficulty levels.
- Improve UI/UX with animations and sounds.

## License
This project is licensed under the MIT License.

