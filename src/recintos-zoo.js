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

        for(let i=0;i<3;i++){   //adiciona os animais existentes
            savana[i] ="MACACO";  
            savana2[i] = "LEAO";    
            savanaErio[i] ="GAZELA";  
        }

        let entrada = prompt("Digite o animal e a quantidade a serem inseridos usando ',': ");
        let [animal, quantidade] = entrada.split(',');  //usa virgula para separar animal e quantidade
        quantidade = parseInt(quantidade);  //converte quantidade em inteiro

        for(let i=0;i<1;i++){
            if(animal=='LEAO'){
                if(savana.length + quantidade < 10){
                    for (let i = 0; i < quantidade; i++) {
                        savana.push(animal);
                    }
                }
            }
            if(animal=='GAZELA'){
                if(savana2.length + quantidade < 9){
                    for (let i = 0; i < quantidade; i++) {
                        savana2.push(animal);
                    }
                }
                if(savana.length + quantidade < 10){
                    for (let i = 0; i < quantidade; i++) {
                        savana.push(animal);
                    }
                }
            }
            if(animal=='HIPOPOTAMO'){
                if(rio.length + quantidade < 8){
                    for (let i = 0; i < quantidade; i++) {
                        rio.push(animal);
                    }
                }
                if(savana2.length + quantidade < 9){
                    for (let i = 0; i < quantidade; i++) {
                        savana2.push(animal);
                    }
                }
                if(savana.length + quantidade < 10){
                    for (let i = 0; i < quantidade; i++) {
                        savana.push(animal);
                    }
                }
            }
            if(animal=='LEOPARDO'){
                if(savana2.length + quantidade < 9){
                    for (let i = 0; i < quantidade; i++) {
                        savana2.push(animal);
                    }
                }
                if(savana.length + quantidade < 10){
                    for (let i = 0; i < quantidade; i++) {
                        savana.push(animal);
                    }
                } 
            }
            if(animal=='MACACO'){
                if(savana.length + quantidade < 10){
                    for (let i = 0; i < quantidade; i++) {
                        savana.push(animal);
                    }
                }
                if(savana2.length + quantidade < 9){
                    for (let i = 0; i < quantidade; i++) {
                        savana2.push(animal);
                    }
                }
                if(floresta.length + quantidade < 5){
                    for (let i = 0; i < quantidade; i++) {
                        floresta.push(animal);
                    }
                }               
            }
            if(animal=='CROCODILO'){
                if(rio.length + quantidade < 8){
                    for (let i = 0; i < quantidade; i++) {
                        rio.push(animal);
                    }
                }
            }                
        }
    }
}

export { RecintosZoo as RecintosZoo };

