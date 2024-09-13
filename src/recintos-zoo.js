import { Animais } from "./animais";
import { Recinto } from "./recintos";

class RecintosZoo {

    analisaRecintos(animal, quantidade) {
        
        //inicializa animais e recintos
        let macaco = new Animais('MACACO', 1, 'SAVANA OU FLORESTA', 'ONIVORO');
        let leao = new Animais('LEAO', 3, 'SAVANA', 'CARNIVORO');
        let gazela = new Animais('GAZELA', 2, 'SAVANA', 'HERBIVORO');
        let leopardo = new Animais('LEOPARDO', 2, 'SAVANA', 'CARNIVORO');
        let crocodilo = new Animais('CROCODILO', 3, 'RIO', 'CARNIVORO');
        let hipopotamo = new Animais('HIPOPOTAMO', 4, 'SAVANA OU RIO', 'HERBIVORO');

        let savana = new Recinto(1, 'savana', 10, new [macaco, macaco, macaco]);
        let floresta = new Recinto(2, 'floresta', 5, new []);
        let savanaErio = new Recinto(3, 'savana e rio', 7, new [gazela]);
        let rio = new Recinto(4, 'rio', 8, new []);
        let savana2 = new Recinto(5, 'savana', 9, new [leao]);

        let listaAnimais = [macaco, leao, gazela, leopardo, crocodilo, hipopotamo];
        let listaRecintos = [savana, floresta, savanaErio, rio, savana2];

        let retorno = 'Recinto não disponível';

        for(let i=0;i<listaRecintos.length;i++){
            let recintoAtual = listaRecintos[i];

            if(recintoAtual.especie == animal) {
                if(recintoAtual.tamanhoTotal - quantidade - animal.tamanho>=0) {
                    retorno = 'Recinto disponível';
                    console.log(retorno);
                    recintoAtual.animaisExistentes.push(animal);
                    for(let j;j<listaRecintos;j++){
                        if(listaRecintos[j].tamanhoTotal - quantidade - animaisExistentes.value>=0){
                            console.log("Recintos disponiveis:"+listaRecintos[j]);
                            console.log(`Recinto ${recintoAtual.numero} (espaço livre: ${recintoAtual[i]} total: ${recintoAtual.tamanhoTotal})`);
                        }
                    }
                }
                else{
                    console.log(retorno);
                }
            }
        }           

    }

}

export { RecintosZoo as RecintosZoo };