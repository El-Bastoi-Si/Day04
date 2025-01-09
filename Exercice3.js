let serie_de_nombre = "10, 20, 30, 40";
let Tableau = serie_de_nombre.split(",")
let Tableau_nombre =  Tableau.map(Number)
let nombre_totale = Tableau_nombre.length;
let somme = Tableau_nombre.reduce((acc , curr )=> acc + curr)
let moyenne = somme/nombre_totale
let nombre_superieurs =0
for (let i =0; i<nombre_totale;i++){
    if (nombre_totale[i] > moyenne){
        nombre_superieurs++;
    }
}

    


console.log(nombre_totale)
console.log(somme)
console.log(moyenne)
console.log(nombre_superieurs)
