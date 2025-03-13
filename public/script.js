var myArr = document.querySelectorAll('.Answer')
for (var i = 0; i < myArr.length; i++) {
    myArr[i].addEventListener('mouseenter', function(){
        this.classList.toggle('hover-effect')
        
    })
    myArr[i].addEventListener('mouseleave', function(){
        this.classList.toggle('hover-effect')
    })
}
var myArr = document.querySelectorAll('.Restart')
for (var i = 0; i < myArr.length; i++) {
    myArr[i].addEventListener('mouseenter', function(){
        this.classList.toggle('hover-effect')
        
    })
    myArr[i].addEventListener('mouseleave', function(){
        this.classList.toggle('hover-effect')
    })
}


$(document).ready(function() {
    $(".Answer").click(function(event) {
        event.preventDefault(); // Prevent form submission
        
        let selectedAnswer = $(this).val(); // Get the button value

        $.post("/answer", { selectedAnswer: selectedAnswer }, function(data) {
            if (!data.correct) {
                let HP = data.life; // Get updated HP from the server
                let hpPercentage = (HP / 3) * 100; 
                let hpWidth = hpPercentage + '%';

                $(".HpForGame").css('background-image', `linear-gradient(to right, #ff0202 ${hpWidth}, bisque ${hpWidth})`);
                
                $("body").addClass("game-over");
                setTimeout(function() {
                    $("body").removeClass("game-over");
                }, 200);
            }

            // Instead of reloading, update the question and answers dynamically
            if (!data.endGame) {
                $(".theQuestion").text(data.currentQuestion);
                console.log(data.currentQuestion);

                let buttons = data.currentQuestionChoices;
                for (let i = 0; i < buttons.length; i += 1) {
                    $(".choise"+i).text(data.currentQuestionChoices[i]);
                    $(".choise"+i).val(data.currentQuestionChoices[i]); // .val() is used to set the "value" atrebut of the button field
                    
                }
            } else {
                window.location.href = "/EndGame"; // Redirect when game ends
            }
        });
    });
});

