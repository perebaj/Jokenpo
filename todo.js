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
/**
 * @brief   Recebe uma palavra que vai ser convertida em outra
 * @param {Palavra q vai ser covertida} word 
 */
function convert(word){
    if(word === "rock") return "Pedra";
    if(word === "paper") return "Papel";
    return "Tesoura";
    


}
/**
 * @brief   Caso o jogador ganha a rodada, somasse um ponto no seu score e uma mensagem da respectiva jogada
 * @param {Escolha de jogada usuário} userChoice 
 * @param {Escolha de jogada do computador} computerChoice 
 */
function win(userChoice, computerChoice){
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} ganha de ${convert(computerChoice)}. Você ganhou!`;
}
/**
 * @brief   Caso o computador ganhe, somasse um ponto no seu score e uma mensagem a respectiva jogada
 * @param {Escolha de jogada  do usuário} userChoice 
 * @param {Escolha de jogada do computador} computerChoice 
 */
function lose(userChoice, computerChoice){
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} perde de ${convert(computerChoice)}. Você perdeu!`;
}
/**
 * @brief   Caso de empate
 * @param {Escolha de jogada do usuário} userChoice 
 * @param {Escolha de jogada do computador} computerChoice 
 */
function draw(userChoice, computerChoice){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convert(userChoice)} é igual a ${convert(computerChoice)}. Empate!`;

}
/**
 * @Brief   Resposável pela lógica do game
 * @param {Escolha de jogada do usuário} userChoice 
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
 * @Brief   Evento de click adicionado as _divs(rock,paper e scissor), juntamente com a interação ao clicar, 
 * executando a function game
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

 