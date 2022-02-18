class player{

    constructor(){
        this.numeroJ = null;
        this.distancia = 0;
        this.name = null;
    }

    getCount(){
        
        var bancodados = database.ref('playerCount');
        bancodados.on("value",(data)=>{
            playerCount = data.val();

        })

    }

    updateCount(contagem){

        database.ref('/').update({playerCount:contagem})
        
    }

    update(){
        var nomelugar = "jogador" + this.numeroJ;
        database.ref(nomelugar).set({
            name:this.name,
            distancia:this.distancia
        });

        
        console.log(nomelugar);
    }

    static pegainf(){
        var inf = database.ref('jogador0');
        inf.on("value",(data)=>{jogadores=data.val();})
        console.log(inf);
    }


}