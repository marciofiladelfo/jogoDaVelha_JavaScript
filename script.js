const player1 = "X";
const player2 = "O";
var playTime = player1;
var gameOver = false;

atualizaMostrador();
iniciaCasa();

function atualizaMostrador(){
    if(gameOver){return;}
    if(playTime == player1){
        var player = document.querySelectorAll("div#mostrador img") [0];
        player.setAttribute("src", "./img/X.jpg");
    }else{
        var player = document.querySelectorAll("div#mostrador img") [0];
        player.setAttribute("src", "./img/O.jpg");
    }
}

function iniciaCasa(){
    var casa = document.getElementsByClassName("casa");
    for(var i = 0; i < casa.length; i++){
        casa[i].addEventListener("click", function(){
            if(gameOver){return;}
            if(this.getElementsByClassName("img").length == 0){
                if(playTime == player1){
                    this.innerHTML = "<img src='./img/X.jpg'>";
                    this.setAttribute("jogada", player1);
                        playTime = player2;
                }else{
                    this.innerHTML = "<img src='./img/O.jpg'>";
                    this.setAttribute("jogada", player2);
                        playTime = player1;
                    }   
                atualizaMostrador();
                verificaVencedor();
            }
        });
    }
}


async function verificaVencedor(){
    var casa1 = document.getElementById("casa1").getAttribute("jogada");
    var casa2 = document.getElementById("casa2").getAttribute("jogada");
    var casa3 = document.getElementById("casa3").getAttribute("jogada");
    var casa4 = document.getElementById("casa4").getAttribute("jogada");
    var casa5 = document.getElementById("casa5").getAttribute("jogada");
    var casa6 = document.getElementById("casa6").getAttribute("jogada");
    var casa7 = document.getElementById("casa7").getAttribute("jogada");
    var casa8 = document.getElementById("casa8").getAttribute("jogada");
    var casa9 = document.getElementById("casa9").getAttribute("jogada");

    var vencedor = "";
    if((casa1 == casa4 && casa1 == casa7 && casa1 != "") || (casa1 == casa2 && casa1 == casa3 && casa1 != "") || (casa1 == casa5 && casa1 == casa9 && casa1 != "")){
        vencedor = casa1;
    }else if((casa5 == casa4 && casa5 == casa6 && casa5 != "") || (casa5 == casa2 && casa5 == casa8 && casa5 != "") || (casa5 == casa3 && casa5 == casa7 && casa5 != "")){
        vencedor = casa5;
    }else if((casa9 == casa6 && casa9 == casa3 && casa9 != "") || (casa9 == casa8 && casa9 == casa7 && casa9 != "")){
        vencedor = casa9;
    }
    else if (
        casa1 !="" &&
        casa2 !="" &&
        casa3 !="" &&
        casa4 !="" &&
        casa5 !="" &&
        casa6 !="" &&
        casa7 !="" &&
        casa8 !="" &&
        casa9 !="" )
    {
        gameOver = true;
        await sleep(50);
        window.confirm("FIM DO JOGO : Deu Velha" + "\nJogar novamente?");
    }
    if (vencedor != ""){
        gameOver = true;
        await sleep(50);
        window.confirm("FIM DO JOGO : O vencedor foi o: '" + vencedor + "'" + "\nJogar novamente?");
    }
} 
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function limpa(){
    var casa = document.getElementsByClassName("casa");
    for(var i = 0; i < casa.length; i++){
        casa[i] = 0;
    }
}