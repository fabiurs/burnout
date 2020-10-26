var intrebare = document.getElementById("intrebare");
var puncte = 0;
var poz = 0;
var buttons = document.getElementById("c1");

var arrIntrebari = [
    "1. Mă simt criticat și epuizat fizic sau emoțional.",
    "2. Am gânduri negative despre locul meu de muncă.",
    "3. Mă supăr ușor din probleme mici sau din cauza colegilor de muncă.",
    "4. Mă simt neînțeles sau subapreciez de către colegii de muncă.",
    "5. Simt că nu pot vorbi cu nimeni.",
    "6. Simt că realizez mai puțin decât mi-am propus.",
    "7. Simt o presiune inconfortabilă de a mă realiza.",
    "8. Simt că nu obțin ceea ce vreau din locul meu de muncă.",
    "9. Simt că sunt în organizația greșită sau am profesia greșită.",
    "10. Sunt frustrat din cauza unor părți din locul meu de muncă.",
    "11. Simt că organizația sau birocrația ma încurcă.",
    "12. Simt că munca pe care o am este peste abilitatea mea de a lucra.",
    "13. Simt că nu am timp să fac multe dintre lucrurile necesare pentru un loc de muncă bun.",
    "14. Simt că nu am timp să planific la fel de mult pe cât mi-aș dori.",
    "15. Simt că se pune prea multă presiune asupra mea.",
    "16. Viața mea este prea stresantă.",
    "17. Sufăr de dureri de cap frecvente.",
    "18. Cred că lucrez prea mult.",
    "19. Obosesc ușor la lucru.",
    "20. În ultimul timp m-am stresat din cauza unor lucruri asupra cărora nu dețin controlul.",
]

intrebare.innerHTML = arrIntrebari[0];

function arataConcluzie(p){
    if(puncte < 27)
    {
        intrebare.innerHTML ="Ati obtinut un numar de "+puncte+" puncte." + "<br>Aveti un risc scazut de burnout.";
    } else if(puncte < 53){
        intrebare.innerHTML = "Ati obtinut un numar de "+puncte+" puncte." + "<br>Aveti un risc moderat de burnout.";
    } else {
        intrebare.innerHTML ="Ati obtinut un numar de "+puncte+" puncte." +  "<br>Aveti un risc ridicat de burnout.";
    }
}
function schimbaIntrebare(){
    if(poz < 19){
        poz++;
        intrebare.innerHTML = arrIntrebari[poz];
    }
    else{
        buttons.style.display = "none";
        arataConcluzie(puncte);
    }
}

function adaugaPunctaj(p){
    puncte = puncte + p;
    schimbaIntrebare();
}
