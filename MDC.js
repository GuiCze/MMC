let n1;
let n2;
let ent;
let menor;
console.log('Digite dois numeros para receber o MDC');
process.stdin.on('data', function(data)
{
    ent=+data.toString().trim()
    if(!n1)
        {
            n1=ent;
            menor=n1;
        }
    else if(!n2)
        {
            n2=ent;
            if(n2<n1)
                {
                    menor=n2;
                }
            for(i=menor;i>0;i--)
                {
                    if(n1%i==0 && n2%i==0)
                        {
                            console.log('O MDC entre '+n1+' e '+n2+' é '+i);
                            process.exit();
                        }
                }
        }
})
