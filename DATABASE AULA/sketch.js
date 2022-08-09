

var caixa1;
var background;
var altura,largura
var database;
var caminho;
var positionBox;

function preload(){}

function setup(){

database=firebase.database();//firebase termo especifico não pode ser usado para variavel
//database referencia que o firebase ta agindo como banco de dados
caminho = database.ref("caixa")  //ref acessa o banco de dados,a raiz tem que ser usada o igual o que ta escrito na database
caminho.on("value",read,showError)
//o on le uma função do seu banco de dados
//atributos 1:o que vc quer ler(index ou valor),2:pra onde ele vai(função read) 3:função caso a leitura dê erro 

altura=windowWidth;
largura=windowHeight;
createCanvas(altura,largura);

caixa1 = createSprite(300,300,30,30);
caixa1.shapeColor = "pink";
}


function draw(){

if(keyIsDown(RIGHT_ARROW)){
    move(10,0);

}
if(keyIsDown(UP_ARROW)){
    move(0,10);

}
if(keyIsDown(LEFT_ARROW)){
    move(-10,0);
}
if(keyIsDown(DOWN_ARROW)){
    move(0,-10);
}
drawSprites();

}
function move(x,y){
    caixa.x=caixa.x+x;
    caixa.y=caixa.y+y;
    

}

function read(data){
positionBox = data.val();//codigo de banco de dados sempre tem 2 ou 3 letras
//o .val acessando um valor
caixa1.x = caixa.x;
caixa1.y = caixa.y;}

function showError(){

console.log("erro no banco de dados")
}
