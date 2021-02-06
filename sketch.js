var canvas;
var contestantCount;
var allContestants;
var answer = 0;
var database;

var form, player, game;
var gameState = 0

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Quiz();
  game.getState();
  game.start();
}


function draw(){
  background("pink");
  if(contestantCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.submit();
  }
  
}
