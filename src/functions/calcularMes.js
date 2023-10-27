const clientes = require("./clientes")

function calcularMes(passado){
    for (const x in clientes){
        const hoje = new Date();
        let diferencaEntreDatasEmDias = Math.floor((hoje - passado)/(1000*60*60*24));      
        if(diferencaEntreDatasEmDias<=30){
            return true;
        } else {
            return false;
        }
    }
}

module.exports = calcularMes;