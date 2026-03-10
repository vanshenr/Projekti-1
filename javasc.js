//Haetaan elementit
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("shoppingList");
const errorMsg = document.getElementById("errorMsg");
const counter = document.getElementById("counter");
const filterButtons = document.querySelectorAll("#filter-buttons button");

addBtn.addEventListener("click", function () { //Tuotteen lisäys listaan
    const value = input.value.trim();

    
    if (value.length < 2) { //Merkkimäärän tarkistus
        errorMsg.textContent = "Tuotteessa pitää olla vähintään 2 merkkiä.";
        input.classList.add("error");
        return;
    }

    errorMsg.textContent = "";
    input.classList.remove("error");

    const li = document.createElement("li"); //Listan luominen
    li.className = "list-item";

    const textSpan = document.createElement("span");
    textSpan.textContent = value;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Valmis";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Poista";

    doneBtn.addEventListener("click", function () { //Valmis napin toiminnallisuus
        li.classList.toggle("done");
        updateCounter();
    });

    deleteBtn.addEventListener("click", function () { //Poista napin toiminnallisuus
        li.remove();
        updateCounter();
    });

    li.appendChild(textSpan);
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
    updateCounter();
});

filterButtons.forEach(btn => { //Suodattavat napit ja niiden toiminnallisuus
    btn.addEventListener("click", function () {
        const filter = btn.dataset.filter;
        const items = document.querySelectorAll(".list-item");

        items.forEach(item => {
            item.classList.remove("hidden");

            if (filter === "active" && item.classList.contains("done")) {
                item.classList.add("hidden");
            }
            if (filter === "done" && !item.classList.contains("done")) {
                item.classList.add("hidden");
            }
        });
    });
});

function updateCounter() { //Lasketaan jäljellä olevat tuotteet
    const activeCount = document.querySelectorAll(".list-item:not(.done)").length;
    counter.textContent = "Jäljellä olevat tuotteet: " + activeCount;
}
