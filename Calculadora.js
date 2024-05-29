var val1,val2,res, caja
/*v1= parseFloat(prompt("Captura el valor 1"))
v2= parseFloat(prompt("Captura el valor 2"))
//v2.parseFloat(prompt("Captura el valor 2"))
res=v1+v2
alert("La suma de los valores es : "+res)*/

caja=document.getElementById("res")

function calcular(){
    val1=document.getElementById("v1").value
    val2=document.getElementById("v2").value
    console.log(val1+" "+val2)
    res=val1+val2
    caja.value=res
}

