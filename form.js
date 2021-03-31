class Form{
    constructor(){
        this.input1 = createInput("enter your name");
        this.input2 = createInput("enter your answer");
        this.button = createButton("submit");
        this.question = createElement('h3');
        this.o1 = createElement('h4');
        this.o2 = createElement('h4');
        this.o3 = createElement('h4');
        this.o4 = createElement('h4');
        //this.greeting = createElement('h2');
        this.title = createElement('h1');
    }
    hide(){
       // this.greeting.hide();
        this.input1.hide();
        this.input2.hide();
        this.button.hide();
        this.title.hide();
        this.question.hide();
        this.o1.hide();
        this.o2.hide();
        this.o3.hide();
        this.o4.hide();

    }
    display(){
        this.title.html("My Quiz game");
        this.title.position(350,0);
        this.question.html("Question: what is 1+1?");
        this.question.position(150,80);
        this.o1.html("1. 2");
        this.o1.position(150,100);
        this.o2.html("2. 3");
        this.o2.position(150,130);
        this.o3.html("3. 4");
        this.o3.position(150,160);
        this.o4.html("4. 5");
        this.o4.position(150,190);
        this.input1.position(150,240);
        this.input2.position(350,240);
        this.button.position(290,300);

        this.button.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.button.hide();
            this.question.hide();
            this.o1.hide();
            this.o2.hide();
            this.o3.hide();
            this.o4.hide();
            player.name = this.input1.value();
            player.answer = this.input2.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            //this.greeting.html("Hello "+ player.name);
            //this.greeting.position(120,100);
        })
    }
}