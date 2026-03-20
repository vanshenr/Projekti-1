//Haetaan elementit
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("shoppingList");
const errorMsg = document.getElementById("errorMsg");
const counter = document.getElementById("counter");
const filterButtons = document.querySelectorAll("#filter-buttons button");

input.addEventListener("keydown", function (event) { //Enter näppäimellä lisääminen
    if (event.key === "Enter") {
        addBtn.click(); 
    }
});

addBtn.addEventListener("click", function () { //Tuotteen lisäys listaan
    const value = input.value.trim();
    
    if (value.length < 2) { //Merkkimäärän tarkistus
        errorMsg.textContent = "Tuotteessa pitää olla vähintään 2 merkkiä.";
        input.classList.add("error");
        return;
    }

    errorMsg.textContent = ""; //Virheviesti ja punainen reuna pois, jos tuotteen lisäys ok
    input.classList.remove("error");

    const li = document.createElement("li"); //Listan luominen
    li.className = "list-item";

    const textSpan = document.createElement("span"); //Tuotteen nimi span elementtiin, jotta voidaan yliviivata vain teksti
    textSpan.textContent = value;

    const doneBtn = document.createElement("button"); //OK-nappi ostoslistaan
    doneBtn.textContent = "OK";

    const deleteBtn = document.createElement("button"); //Poista-nappi ostoslistaan
    deleteBtn.textContent = "Poista";

    doneBtn.addEventListener("click", function () { //OK napin toiminnallisuus
        li.classList.toggle("done");
        updateCounter();
    });

    deleteBtn.addEventListener("click", function () { //Poista napin toiminnallisuus
        li.remove();
        updateCounter();
    });

    li.appendChild(textSpan); //Tuotteen nimi listaan
    li.appendChild(doneBtn); //OK-nappi listaan
    li.appendChild(deleteBtn); //Poista-nappi listaan

    list.appendChild(li); //Tuote listaan

    input.value = ""; //Syöttökentän tyhjennys
    updateCounter();
});

filterButtons.forEach(btn => { //Suodattavat napit ja niiden toiminnallisuus
    btn.addEventListener("click", function () { //Haetaan suodatus ja listan kohteet
        const filter = btn.dataset.filter; //Haetaan suodatusdata
        const items = document.querySelectorAll(".list-item"); //Haetaan kaikki listan kohteet

        items.forEach(item => { //Näytä kaikki kohteet ennen suodatusta
            item.classList.remove("hidden"); //Piilotetaan suodattamattomat kohteet

            if (filter === "active" && item.classList.contains("done")) { //Suodatus jäljellä oleville tuotteille
                item.classList.add("hidden");
            }
            if (filter === "done" && !item.classList.contains("done")) { //Suodatus kerätyksi merkityille tuotteille
                item.classList.add("hidden");
            }
        });
    });
});

function updateCounter() { //Lasketaan jäljellä olevat tuotteet
    const activeCount = document.querySelectorAll(".list-item:not(.done)").length; //Lasketaan kaikki kohteet, joilla ei ole done-luokkaa
    counter.textContent = "Jäljellä olevat tuotteet: " + activeCount; //Päivitetään laskuri
}
