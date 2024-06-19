let n1;
let n2;
let ent;
let maior;
let mmc;

const MMC = () => {
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

    return mmc;
}





console.log("Digite dois numeros para receber o MDC");

process.stdin.on("data", function (data) {
  ent = +data.toString().trim();

  if (!n1) {
  n1 = ent;
  maior = n1;

  } else if (!n2) {
    n2 = ent;

    if (n2 > n1) {
      maior = n2;

    }

    for (i = maior; i > 0; i--) {
      if (n1 % i == 0 && n2 % i == 0) {
        console.log("O MDC entre " + n1 + " e " + n2 + " é " + i);

        MMC();
        console.log("\nO MMC entre " + n1 + " e " + n2 + " é " + mmc);
        process.exit();
        
      }
    }
  }
});