var intrebare = document.getElementById("intrebare");
var puncte = 0;
var poz = 0;
var buttons = document.getElementById("c1");

var arrIntrebari = [
    "1. Mă simt criticat și epuizat fizic sau emoțional.",
    "2. Am gânduri negative legate de școală.",
    "3. Mă supăr ușor din probleme mici sau din cauza colegilor de școală.",
    "4. Mă simt neînțeles sau subapreciat de către colegii de școală.",
    "5. Simt că nu pot vorbi cu nimeni.",
    "6. Simt că realizez mai puțin decât mi-am propus.",
    "7. Simt o presiune inconfortabilă de a mă realiza pe plan academic.",
    "8. Mă simt detașat față de mine și față de munca pe care o depun.",
    "9. Am dificultăți in ceea ce privește somnul(adorm greu, mă trezesc pe timpul noptii, am coșmaruri.",
    "10. Sunt frustrat din cauza unor materii.",
    "11. Îmi lipsesc entuziasmul si motivația necesare obținerii unor rezultate bune la școală.",
    "12. Simt că temele pe care le am sunt peste abilitatea mea de a le rezolva.",
    "13. Simt că nu am timp să fac multe dintre lucrurile necesare pentru un viitor mai bun.",
    "14. Simt că nu am timp să îmi planific timpul la fel de mult pe cât mi-aș dori.",
    "15. Simt că se pune prea multă presiune asupra mea.",
    "16. Viața mea este prea stresantă.",
    "17. Sufăr de dureri de cap frecvente.",
    "18. Cred că lucrez prea mult.",
    "19. Obosesc ușor la școală.",
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
        intrebare.style.opacity = "0";
        setTimeout(() => {
            intrebare.innerHTML = arrIntrebari[poz];
            intrebare.style.opacity = "1";
        }, 700);
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
