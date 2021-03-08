var a = prompt("Premier Nombre");
var b = prompt("Second Nombre");

function sommenombrespremiers(a,b)
{
    var number = 0;
    var number2 = 0;


    for(i=0; i < a; i++)
    {
        if(a % i== 0)
        {
            number++;
        }
    }

    for(i=0; i < b; i++)
    {
        if(b % i== 0)
        {
            number2++;
        }
    }

    if(number > 2 || number2 > 2)
    {
        console.log(false);
        document.write(false);
    }
    else
    {
        console.log(parseInt(a) + parseInt(b));
        document.write(parseInt(a) + parseInt(b));
    }

}

sommenombrespremiers(a,b)

