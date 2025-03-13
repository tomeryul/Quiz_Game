import {Question} from "./Question.js"; // ✅ Import Quiz & Question

class Quiz {
    constructor() {

        const questions = [
            new Question("Which game is known for the quote, 'The cake is a lie'?", 
                ["Portal", "Half-Life", "Bioshock", "Doom"], "Portal"),
            new Question("What is the name of the main protagonist in The Legend of Zelda series?", 
                ["Link", "Zelda", "Ganon", "Epona"], "Link"),
            new Question("Which game features the character 'Master Chief'?", 
                ["Halo", "Destiny", "Gears of War", "Call of Duty"], "Halo"),
            new Question("What is the highest-selling video game of all time?", 
                ["Minecraft", "GTA V", "Tetris", "Fortnite"], "Minecraft"),
            new Question("Which game introduced the battle royale genre to the mainstream?", 
                ["PUBG", "Fortnite", "Apex Legends", "Warzone"], "PUBG"),
            new Question("Which company developed The Witcher series?", 
                ["CD Projekt Red", "Bethesda", "Bioware", "Ubisoft"], "CD Projekt Red"),
            new Question("What is the main currency in Grand Theft Auto V?", 
                ["GTA Dollars", "Credits", "V-Bucks", "Caps"], "GTA Dollars"),
            new Question("Which game features the town of 'Pelican Town'?", 
                ["Stardew Valley", "Animal Crossing", "Harvest Moon", "Terraria"], "Stardew Valley"),
            new Question("What is the name of the main villain in the original Sonic the Hedgehog?", 
                ["Dr. Robotnik", "Dr. Wily", "Bowser", "Ridley"], "Dr. Robotnik"),
            new Question("Which horror game popularized the 'found footage' gameplay style?", 
                ["Outlast", "Resident Evil", "Silent Hill", "Dead Space"], "Outlast"),
            new Question("What year was the original PlayStation released?", 
                ["1994", "1996", "1998", "2000"], "1994"),
            new Question("Which game features a character named 'Big Daddy'?", 
                ["BioShock", "Fallout 3", "Resident Evil", "Dishonored"], "BioShock"),
            new Question("What is the name of the AI companion in the Halo series?", 
                ["Cortana", "EDI", "GLaDOS", "Aegis"], "Cortana"),
            new Question("Which game is set in the world of Tamriel?", 
                ["The Elder Scrolls", "Dragon Age", "Dark Souls", "The Witcher"], "The Elder Scrolls"),
            new Question("Which game features the phrase 'Would you kindly'?", 
                ["BioShock", "Portal", "Half-Life", "Far Cry"], "BioShock"),
            new Question("Which battle royale game features building mechanics?", 
                ["Fortnite", "Apex Legends", "PUBG", "Call of Duty: Warzone"], "Fortnite"),
            new Question("Which game features a post-apocalyptic world with vaults?", 
                ["Fallout", "Metro", "The Last of Us", "Days Gone"], "Fallout"),
            new Question("Which game is set in the fictional city of Raccoon City?", 
                ["Resident Evil", "Silent Hill", "The Evil Within", "Dead Rising"], "Resident Evil"),
            new Question("What is the name of the main character in Red Dead Redemption 2?", 
                ["Arthur Morgan", "John Marston", "Dutch van der Linde", "Javier Escuella"], "Arthur Morgan"),
            new Question("Which game features the phrase 'Do a barrel roll'?", 
                ["Star Fox 64", "F-Zero", "Metroid Prime", "Super Mario 64"], "Star Fox 64")
        ];
        this.life = 3;
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
    }
    getScore() {
        return this.score;
    }
    
    getLife() {
        return this.life;
    }
    
    getCurrentQuestion() {
        return this.questions[this.currentQuestionIndex];
    }

    getCurrentDiscription() {
        return this.questions[this.currentQuestionIndex].text;
    }

    getCurrentQuestionChoices() {
        let test = this.questions[this.currentQuestionIndex].choices;

        let currentQuestionChoices = [];

        let temp = [];
        let halper =  [0,1,2,3];
        let theSize = 4;
        let random = 0;
        let i = 0;
        while (theSize > 0) {
            random = Math.floor(Math.random() * theSize);
            temp[i] = halper[random ];
            halper.splice(random, 1);
            theSize -= 1;
            i += 1;
        }
        currentQuestionChoices[0] = test[temp[0]];
        currentQuestionChoices[1] = test[temp[1]];
        currentQuestionChoices[2] = test[temp[2]];
        currentQuestionChoices[3] = test[temp[3]];

        return currentQuestionChoices;
    }
    setNumOfLifeToFull() {
        this.life = 3;
    }
    setCurrentScoreToZero() {
        this.score = 0;
    }

    getCorrectAnswer(answer) {
        let isCurect = this.getCurrentQuestion().isCorrectAnswer(answer)
        if (isCurect) {
            this.score++;
        }
        else {
            this.life--;
        }

        this.currentQuestionIndex++;

        return isCurect;
    }

    hasMoreQuestions() {
        return this.currentQuestionIndex < this.questions.length;
    }

    IsEndOfGame() {
       if (this.life <= 0) {
        return true;
       }
       return false;
    }
}

// ✅ Export the classes
export {Quiz};
