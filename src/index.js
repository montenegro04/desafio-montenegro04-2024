// Importa a classe RecintosZoo do arquivo recintos-zoo.js
import { RecintosZoo } from "./recintos-zoo.js";

class Validacao {

    valida(animal, quantidade) {
        //Captura as entradas
        const inputAnimal = document.getElementById('input-animal').value;
        const inputQuantidade = document.getElementById('input-quantidade').value;

        //Cria objeto da classe Recintos
        const recinto = new RecintosZoo();

        //Chama método AnalisaRecintos passando 2 parâmetros
        const resultado = recinto.analisaRecintos(inputAnimal, inputQuantidade);

        console.log(resultado);

        const resultadoLabelHTML = document.getElementById('resultado');
        resultadoLabelHTML.textContent = resultado;        
    }
}

export { Validacao };