const numbers = [-24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5
  ];

  //1.Vypište do stránky všechna čísla.
  document.body.innerHTML += " <h4> 1. Výpis všech čísel:"
  numbers.forEach ((cislo) =>{
        document.body.innerHTML += `${cislo}, `
  });

  //2. Vypište do stránky druhé mocniny všech čísel.
  document.body.innerHTML += " <h4> 2. Výpis druhých mocnin všech čísel: "
    numbers.forEach ((cislo)=>{
        document.body.innerHTML += `${cislo * cislo}, ` 
  });
         

 //3. Vypište do stránky pouze záporná čísla.
 document.body.innerHTML += "<h4> 3. Výpis pouze záporných čísel:"
 numbers.forEach ((cislo) => {
    if (cislo <0){
        document.body.innerHTML += `${cislo}, `
    }
 });

 //4.Vypište do stránky absolutní hodnotu všech čísel.
 document.body.innerHTML += "<h4> 4. Absolutní hodnota všech čísel:"
 numbers.forEach ((cislo)=>{
    document.body.innerHTML += `${Math.abs (cislo)}, `
 });

    
 //5.Vypište do stránky pouze sudá čísla.
 document.body.innerHTML += "<h4> 5. Výpis pouze sudých čísel: "
 numbers.forEach ((cislo) =>{
    if (cislo % 2 ===0){
        document.body.innerHTML += `${cislo}, `
    };
 });

 //6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
 document.body.innerHTML += "<h4> 6. Výpis čísel s absolutní hodnotou dělitelnou třemi: "
    numbers.forEach ((cislo)=>{
    if ((cislo %3) ===0 ){
        document.body.innerHTML += `${Math.abs(cislo)}, `
    };
});


//6. Vypište do stránky pouze ta čísla, jejíchž absolutní hodnota je dělitelná třemi.
//DRUHÁ VARIANTA
document.body.innerHTML += "<h4> 6. II. Varianta: Výpis čísel s absolutní hodnotou dělitelnou třemi: "
    numbers.forEach ((cislo)=>{
    if ((cislo %3) ===0 ){
        document.body.innerHTML += `${cislo}, `
    };
});

 //7. Vypište do stránky jak daleko je každé číslo v seznamu od čísla 5.
 document.body.innerHTML += "<h4> 7. Jak daleko je každé číslo v seznamu od čísla 5: "
 numbers.forEach ((cislo) =>{
 document.body.innerHTML += `${Math.abs(cislo - 5)}, `
 });

//8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
document.body.innerHTML += "<h4> 8.Výpis vzdáleností druhé mocniny všech čísel od čísla 5: "
numbers.forEach ((cislo)=>{
    document.body.innerHTML += ` ${Math.abs(5-(cislo * cislo))}, ` 
    });

//8.Vypište do stránky druhé mocnicny vzdáleností všech čísel od čísla 5.
//DRUHÁ VARIANTA
document.body.innerHTML += "<h4> 8. II.Varianta. Výpis vzdáleností druhé mocniny všech čísel od čísla 5: "
numbers.forEach ((cislo)=>{
    document.body.innerHTML += ` ${Math.abs((cislo -5)* (cislo -5))}, ` 
    });    
    

    //9. Spočítejte, kolik je v seznamu záporných čísel.
document.body.innerHTML += "<h4> 9. Počet záporných čísel v seznamu: "
let pocetZapornychCisel = 0;
numbers.forEach ((cislo)=>{
       if (cislo <0){
        pocetZapornychCisel++;
        }
});
document.body.innerHTML += `${ (pocetZapornychCisel)} `
   
 //10. Spočítejte součet všech čísel v poli.
document.body.innerHTML += "<h4> 10. Spočítejte součet všech čísel v poli: "
let soucet = 0;
numbers.forEach ((cislo)=>{
        soucet+=cislo;
    });
document.body.innerHTML += `${soucet}, `


//11.Spočítejte průměr všech čísel v poli.
document.body.innerHTML += "<h4> 11. Spočítejte průměr všech čísel v poli: "
let pocetVsechCisel = 0;
numbers.forEach (()=>{
    pocetVsechCisel ++ ;
    
    });
document.body.innerHTML += `${soucet/pocetVsechCisel}, `

//12.Spočítejte součet všech kladných čísel v poli.
document.body.innerHTML += "<h4> 12. Spočítejte součet všech kladných čísel v poli: "
let soucetVsechKladnychCisel =0;
numbers.forEach((cislo)=>{
        if (cislo>0){
        soucetVsechKladnychCisel+=cislo;
          }
});
document.body.innerHTML += `${soucetVsechKladnychCisel} `;


