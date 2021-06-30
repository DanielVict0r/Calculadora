






















function botao( num )
{
    if(typeof globalvisor == "undefined")
    {
     document.calc.visor.value = "";
    }

    document.calc.visor.value += num;
   globalvisor = 1;
}

function limpar()
{
 document.getElementById('visor').value = "";

 delete globalvisor;
 delete globalvalor;
 delete globaloper;

}

function voltar()
{
    var salvo = document.getElementById('visor').value;
    document.getElementById('visor').value = salvo.substring(0, salvo.length -1)
}

function operadores(operador,valor1,valor2)
{
    if(operador == "adicao")
    {
          var valor = parseFloat(valor1)+parseFloat(valor2);
    }
    else{
        if(operador == "subtracao")
        {
            var valor = valor1 - valor2;
        }
        else
        {
            if(operador == "multiplicacao")
            {
                var valor = valor1*valor2;
            }
            else
            {
                var valor = valor1/valor2;
            }

        }
        

    }
    
return (valor);

}





function calcule(oper)
{
   var valor = document.calc.visor.value;
   delete globalvisor;

   if (typeof globaloper != 'undefined' && oper == 'resultado') {
    globalvalor = operadores(globaloper, globalvalor, valor);
    document.calc.visor.value = globalvalor;
    delete oper;
    delete globalvalor;
    return (0);
     
 }

 if (typeof globalvalor != 'undefined') {
    globalvalor = operadores(globaloper, globalvalor, valor);
    
    document.calc.visor.value = globalvalor;
 } 
 else 
 {
    globalvalor = valor;
    globaloper = oper;
 }
}



