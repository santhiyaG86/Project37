class Contestant {
    constructor(){
      this.index = null;
      this.answer = null;
      this.name = null;
    }
  
    getCount(){
      var playerCountRef = database.ref('contestantCount');
      playerCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var playerIndex = "Contestants/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        answer:this.answer
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('Contestants');
      playerInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    } 

}

