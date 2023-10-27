const captaDia = (data) => {
    const dia = parseInt(data.getUTCDay());
    switch (dia) {
        case 1:  
             return true;                            
        default:
            return false;
    }
}

module.exports = captaDia;