class form{

    constructor(){
        this.botao = createButton("ok");
        this.nome = createInput("Coloque um nome legal :)");
        this.msgespera = createElement('h2');
        this.reset = createButton("REINICIAR");

    }

    hide(){
        this.botao.hide();
        this.nome.hide();
        this.msgespera.hide();
    }


    display(playerCount){
        var titulo = createElement('h2');
        titulo.html("Corrida Maluca");
        titulo.position(displayWidth/2-150,5);

        this.nome.position(displayWidth/2-150,300);

        this.botao.position(displayWidth/2-80,350);

        this.reset.position(100,50);

        
        this.botao.mousePressed(()=>{
            this.nome.hide();
            this.botao.hide();

            Jogador.name = this.nome.value();
            playerCount += 1;
            Jogador.numeroJ = playerCount;

            Jogador.update();
            Jogador.updateCount(playerCount);

            this.msgespera.html("Esperando todos os jogadores")
            this.msgespera.position(displayWidth/2-200,300);
        })

        this.reset.mousePressed(()=>{
            Jogador.updateCount(0);
            estados.update(0);
        })
    }
}