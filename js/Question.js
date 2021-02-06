class Question {

    constructor() {
      this.input1 = createInput("Name");
      this.input2 = createInput("Enter Answer")
      this.button = createButton("Submit");
      
    }
    hide(){
      
      this.button.hide();
      this.input1.hide();
      this.input2.hide();
    }
  
    display(){
      var title = createElement('h2')
      title.html("My Quiz Game");
      title.position(350, 0);
      var question = createElement('h3')
      question.html("Question:- What Starts and Ends with the letter 'E', but has only one letter?");
      question.position(150,80);
      var option1 = createElement('h4')
      option1.html("1. Everyone");
      option1.position(150,100);
      var option2 = createElement('h4')
      option2.html("2. Envelope");
      option2.position(150,120);
      var option3 = createElement('h4')
      option3.html("3. Estimate");
      option3.position(150,140);
      var option4 = createElement('h4')
      option4.html("4. Example");
      option4.position(150,160);
  
      this.input1.position(150, 230);
      this.input2.position(150, 260)
      this.button.position(250, 290);
      this.button.mousePressed(()=>{
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      player.name = this.input1.value();
      player.answer = this.input2.value();
      contestantCount+=1;
      player.index = contestantCount;
      player.update();
      player.updateCount(contestantCount);
      
      
})
    }
}
