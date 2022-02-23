class estadodojogo{
    
    constructor(){

    }

    getState(){
        var bancodados = database.ref('gameState');
        bancodados.on("value",function(data){
            gameState = data.val()

        })
    }

    update(estado){
        database.ref('/').update({gameState:estado});
    }

    async start(){
        if (gameState == 0){
            Jogador = new player();

            var valor = await database.ref('playerCount').once("value");
            if (valor.exists()){
                Jogador.getCount();
                playerCount = valor.val();
            } else {
                playerCount = 0;
            }

            formulário = new form();
            formulário.display(playerCount);
        }

        car1 = createSprite(430,670);
        car1.addImage(car1img);

        car2 = createSprite(670,670);
        car2.addImage(car2img);

        car3 = createSprite(950,670);
        car3.addImage(car3img);

        car4 = createSprite(1200,670);
        car4.addImage(car4img);

        cars = [car1,car2,car3,car4];

    }

    play(){
        text("Começando...", 160,230) 
        player.pegainf();
        formulário.hide();
        if(jogadores !== undefined){
            image(ruaimg, 0, -displayHeight*4.2 ,displayWidth , displayHeight*5);
            var enumeracao = 0;
            var x = 430;
            var y = 670;

            for(var z in jogadores){
                enumeracao += 1;
                x = x + 200;
                y = displayHeight - jogadores[z].distancia;
               
                cars[enumeracao - 1].x = x;
                cars[enumeracao - 1].y = y;
            }
            
            if (enumeracao == Jogador.cameraN){

                camera.position.x = displayWidth/2;
                camera.position.y = cars[enumeracao - 1].y;

console.log("oi")
            };
             
        };
        
        if (keyDown("space")){
            Jogador.distancia += 10;
            Jogador.update();
        }
         
    }


}