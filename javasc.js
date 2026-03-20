const input = document.getElementById("itemInput"); //Haetaan tekstikenttä, johon syötetään tuotteet
const addBtn = document.getElementById("addBtn"); //Haetaan lisäysnappi, jolla tuotteet lisätään listaan
const list = document.getElementById("shoppingList");//Haetaan lista, johon tuotteet lisätään
const errorMsg = document.getElementById("errorMsg");//Haetaan elementti, johon virheviestit kirjoitetaan
const counter = document.getElementById("counter");//Haetaan tuotelaskuri
const filterButtons = document.querySelectorAll("#filter-buttons button"); //Haetaan kaikki suodatusnapit

input.addEventListener("keydown", function (event) { //Enter näppäimellä lisääminen
    if (event.key === "Enter") {
        addBtn.click(); //Simuloi addBtn klikkausta, joka lisää tuotteen listaan
    }
});

addBtn.addEventListener("click", function () { //Tuotteen lisääminen listaan
    const value = input.value.trim();
    
    if (value.length < 2) { //Merkkimäärän tarkistus
        errorMsg.textContent = "Tuotteessa pitää olla vähintään 2 merkkiä.";
        input.classList.add("error");
        return;
    }

    errorMsg.textContent = ""; //Virheviesti ja punainen reuna pois, jos tuotteen lisäys ok
    input.classList.remove("error");

    const li = document.createElement("li"); //Lista elementti uudelle tuotteelle
    li.className = "list-item";

    const textSpan = document.createElement("span"); //Tuotteen nimi span elementtiin, jotta voidaan yliviivata vain teksti
    textSpan.textContent = value;

    const doneBtn = document.createElement("button"); //OK-nappi ostoslistaan
    doneBtn.textContent = "OK";

    const deleteBtn = document.createElement("button"); //Poista-nappi ostoslistaan
    deleteBtn.textContent = "Poista";

    doneBtn.addEventListener("click", function () { //OK napin toiminnallisuus
        li.classList.toggle("done"); //Done-luokan toggle, joka yliviivaa tuotteen ja muuttaa sen värin
        updateCounter(); //Laskurin päivitys
    });

    deleteBtn.addEventListener("click", function () { //Poista napin toiminnallisuus
        li.remove(); //Poistaa tuotteen listasta
        updateCounter(); //Laskurin päivitys
    });

    li.appendChild(textSpan); //Tuotteen nimi listaan
    li.appendChild(doneBtn); //OK-nappi listaan
    li.appendChild(deleteBtn); //Poista-nappi listaan

    list.appendChild(li); //Lisätään tuote listaan

    input.value = ""; //Syöttökentän tyhjennys ja laskurin päivitys
    updateCounter();
});

filterButtons.forEach(btn => { //Suodattavat napit ja niiden toiminnallisuus
    btn.addEventListener("click", function () { //Klikkaustapahtuma jokaiselle suodatusnapille
        const filter = btn.dataset.filter; //Haetaan suodatusdata
        const items = document.querySelectorAll(".list-item"); //Haetaan kaikki listan kohteet

        items.forEach(item => { //Käydään läpi kaikki listan kohteet
            item.classList.remove("hidden"); //Poistaa piilotuksen

            if (filter === "active" && item.classList.contains("done")) { //Suodatus jäljellä oleville tuotteille
                item.classList.add("hidden");
            }
            if (filter === "done" && !item.classList.contains("done")) { //Suodatus kerätyksi merkityille tuotteille
                item.classList.add("hidden");
            }
        });
    });
});

function updateCounter() {
    const aktiiviset = document.querySelectorAll(".list-item:not(.done)"); //Haetaan kaikki listan kohteet, joilla EI ole done-luokkaa
    counter.textContent = "Jäljellä olevat tuotteet: " + aktiiviset.length; //Päivitetään laskurin sisältö
}
