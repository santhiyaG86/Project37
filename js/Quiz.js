class Quiz {
    constructor(){}
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    async start(){
      if(gameState === 0){
       var player = new Contestant();
        var playerCountRef = await database.ref('contestantCount').once("value");
        if(playerCountRef.exists()){
          contestantCount = playerCountRef.val();
          player.getCount();
        }
        var form = new Question()
        form.display();
      }
    }
  
    submit(){
      form.hide();
      textSize(30);
      text("Start Quiz", 120, 100)
      player.getPlayerInfo();
  
      if(allContestants !== undefined){
        for(var plr in allContestants){
            var correctAns = "2"
          if (correctAns === allContestants[plr].answer)
            fill("Green")
          else
            fill("red");
  
          textSize(15);
          text(allContestants[plr].name + ": " + allContestants[plr].answer, 120,correctAns)
        }
      }
      if(player.index !== null){
        player.answer = "";
        player.update();
      }
    } 
  } 