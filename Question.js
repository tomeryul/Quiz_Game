class Question {
    constructor(text, choices, correctAnswer) {
        this.text = text;
        this.choices = choices;
        this.correctAnswer = correctAnswer;
    }

    isCorrectAnswer(choice) {
        return choice === this.correctAnswer;
    }

}

export {Question};
