/**
 * @author Jonathan Silva
 * @Data March 01, 2019
 * @Brief : Esse aquivo contém as variaveis que eventualmente serão usaram para fazer o script em JavaScript e suas funçoes.
 *  Essas funçoes, são reponsáveis pela lógica do jogo e do ScoreBoard
 */
const userScopre = 0;
const computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
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
/**
 * @Brief   Resposável pela lógica do game
 * @param {Escolha do usuário} userChoice 
 */
function game(userChoice){
    const computerChoice = getComputerChoice();
    console.log("Computer choice =>" + computerChoice);
    console.log("User choice =>" + userChoice); 

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

 