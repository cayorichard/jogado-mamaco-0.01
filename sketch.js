var paisagem,paisagemimg;
var tronco,troncoimg;
var mamaco,mamacoimg,macacoimg;
var homem,homemimg;

function preload(){
    paisagemimg = loadImage('paisagem do jogo.avif') ;
    troncoimg = loadImage('tronco.png');
    mamacoimg = loadImage('opiçao3.jpg');
    macacoimg = loadImage('opiçao1.png');
    homemimg = loadImage('homem correndo.jpg');

}

function setup(){
    createCanvas(1200,600);
   
paisagem = createSprite(600,300);
paisagem.addImage('paisgemimg',paisagemimg);
homem = createSprite(800,500);
    homem.addImage('homem',homemimg);
    homem.scale = 0.5
    mamaco = createSprite(200,500);
    mamaco.addImage('mamaco',mamacoimg);
    tronco = createSprite(380,500);
    tronco.addImage('tronco',troncoimg);
    tronco.scale = 0.30;
    score = 0
}

function draw(){
    background(120);
    text('score:'+score,800,400);
    if(keyDown("space")&& homem.y >= 2) {
        homem.velocityY = -8; 
    };
    
    score = score + Math.round(getFrameRate()/1);
    if(score>0 && score%40=== 0){
        tronco.velocityX = 5; 
    }
drawSprites();
}
 tronco.lifetime = 12
   
    
