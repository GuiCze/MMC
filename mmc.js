const MMC = (n1, n2) => {
    let aux = n1;

    if(n2 > n1) {
        aux = n2;
    }

    do{
        if(aux % n1 == 0 && aux % n2 == 0) {
            mmc = aux;
            
        }

        aux++;

    }while(!mmc);
}

module.export = MMC;