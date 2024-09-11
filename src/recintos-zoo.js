class RecintosZoo {
    analisaRecintos(animal, quantidade) {
        let savana = new Array(10);
        savana.fill("");    // Inicializa o vetor com strings vazias
        let floresta = new Array(5);     //VAZIO
        floresta.fill("");  
        let savanaErio = new Array(7);
        savanaErio.fill("");   
        let rio = new Array(8);     //VAZIO
        rio.fill("");   
        let savana2 = new Array(9);
        savana2.fill("");

        for(let i=0;i<3;i++){
            savana[i] ="MACACO";    // Adiciona "MACACO" nas primeiras três posições
            savana2[i] = "LEAO";    // Adiciona "LEÃO" nas primeiras três posições
            for(let j=0;j<2;j++){
                savanaErio[j] ="GAZELA";    // Adiciona "GAZELA" nas primeiras duas posições
            }
        }

        let animal = prompt("Digite o animal a ser inserido: ");

        for(let i=0;i<1;i++){
            if(animal=='LEAO'){
                if(savana.length < 10){
                    savana.push('LEAO');
                }
            }
            if(animal=='GAZELA'){

            }
            if(animal=='HIPOPOTAMO'){
                
            }
            if(animal=='LEOPARDO'){
                
            }
            if(animal=='MACACO'){
                
            }
            if(animal=='CROCODILO'){
                
            }                
        }
    }
}

export { RecintosZoo as RecintosZoo };

