var gameState = 0;
var playerCount = 0;
var allPlayers;
var answer;
var database;
var form,game,player;

function setup(){
  createCanvas(1200,600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}