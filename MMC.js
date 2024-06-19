let n1;
let n2;
let ent;
let maior;
let menor;
console.log('Digite dois numeros para receber o MMC');
process.stdin.on('data', function(data)
{
    ent=+data.toString().trim()
    if(!n1)
        {
            n1=ent;
            maior=n1;
            menor=n1;
        }
    else if(!n2)
        {
            n2=ent;
            if(n2>n1)
                {
                    maior=n2;
                }
            else
                {
                    menor=n2;
                }
            
            for(i=1;i<=menor;i++)
                {
                    for(j=1;j<=maior;j++)
                        {
                           if(maior*i==menor*j)
                        {
                            console.log('O MMC entre '+n1+' e '+n2+' é '+maior*i);
                            process.exit();
                        } 
                        }
                }
        }
})
