const clientes = require("./src/functions/clientes");
const captaDia = require("./src/functions/captaDia");
const enviarEmail = require("./src/functions/envia-email");
const calcularMes = require("./src/functions/calcularMes");
const {subject, body} = require("./src/functions/email");

try {
    function main(){
        for (const x in clientes){
            if(clientes[x].recebeComunicacao == true && captaDia(new Date("2023-10-23")) == true && calcularMes(clientes[x].dataVisitada) == true){
                enviarEmail(clientes[x].email, subject, body.replace("TEXTO",`Olá, ${clientes[x].nome}`));
            } 
        }
    }  
    
    main();
} catch (error) {
    console.error('Não foi possível enviar os e-mails, por favor verifique sua impressora.\n' + error);
}

