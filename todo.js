/**
 * @author Jonathan Silva
 * @Data March 01, 2019
 * @Brief : Esse aquivo contém as variaveis que eventualmente serão usaram para fazer o script em JavaScript e suas funçoes.
 *  Essas funçoes, são reponsáveis pela lógica do jogo e do ScoreBoard
 */
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
/**
 * @Brief   Administa as escolhas aleatorias do computador
 * return   Retorna uma das tres jogadas possiveis do computador
 */
function getComputerChoice(){
    const choices = ['rock','paper','scissor']; 
    const randomNumber = (Math.floor(Math.random() * 3));
    return choices[randomNumber];
}
function convert(word){
    if(word === "rock") return "Pedra";
    if(word === "paper") return "Papel";
    return "Tesoura";
    


}
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} ganha de ${convert(computerChoice)}. Você ganhou!`;
}

function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} perde de ${convert(computerChoice)}. Você perdeu!`;
}

function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} é igual a ${convert(computerChoice)}. Empate!`;

}
/**
 * @Brief   Resposável pela lógica do game
 * @param {Escolha do usuário} userChoice 
 */
function game(userChoice){
    const computerChoice = getComputerChoice();
    
    switch(userChoice + computerChoice){
        case ("rockscissor"):
        case ("paperrock"):
        case ("scissorpaper"):
            win(userChoice, computerChoice);
            console.log("userWins");
            break;
        case ("rockpaper"):
        case ("paperscissor"):
        case ("scissorpaper"):
            lose(userChoice, computerChoice);
            console.log("ComputerWins");
            break;
        case ("rockrock"):
        case ("paperpaper"):
        case ("scissorscissor"):
            console.log("Empate");
            draw(userChoice, computerChoice);
            break;
    }

}

/**
 * @Brief   
 */
function main(){

    rock_div.addEventListener('click', function(){
        game("rock"); //Interação de click do cursor do mouse com as userChoices
    })
    
    paper_div.addEventListener('click', function(){
        game("paper");
    })
    
    scissor_div.addEventListener('click', function(){
        game("scissor");
    })

    game();
}

main();

 