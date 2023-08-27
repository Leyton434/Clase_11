
/*Primer ejercicio */
var topping;
var precio;
var precioFinal;
var helado=13 ;

topping="Kinder"

if (topping=== "Oreo"){
    precio=10;
}else if(topping=== "KitKat"){
    precio=15;
}else if(topping=== "Kinder"){
    precio=25;
}else{
    console.log("No tenemos este topping");
    precio=0;
}
precioFinal=helado+precio;
console.log("El helado cuesta $"+precioFinal);


/*El otro ejercicio */

var pedido="verdura";

let expr= "pedido";
switch (pedido){ 
    case "carne": 
    console.log("Usted eligio Carne. Se le ofrece como bebida vino tinto.");
    break;
    case "pescado": 
    console.log("Usted eligio Pescado. Se le ofrece como bebida vino blanco.");
    break;
    case "verdura": 
    console.log("Usted eligio Verdura. Se le ofrece como bebida agua.");
    break;
    default:
        console.log("Elija alguno de los 3");
        break;
}


const arrayFrutas=["banana", "manzana", "arandanos"];
console.log(arrayFrutas);

for (var i = 0; i < arrayFrutas.length; i++) {
    console.log(arrayFrutas[i]);
}

arrayFrutas.push("pera");
console.log(arrayFrutas);

for (var i = 0; i < arrayFrutas.length; i++) {
    console.log(arrayFrutas[i]);
}

var la=0;

while (la<11){
    console.log(la," es ma chico que 11");
    la++;
}