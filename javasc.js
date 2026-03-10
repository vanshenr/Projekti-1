// Haetaan elementit
const input = document.getElementById("itemInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("shoppingList");
const errorMsg = document.getElementById("errorMsg");
const counter = document.getElementById("counter");
const filterButtons = document.querySelectorAll("#filter-buttons button");

// Lisää tuote listaan
addBtn.addEventListener("click", function () {
    const value = input.value.trim();

    // Validointi
    if (value.length < 2) {
        errorMsg.textContent = "Syötteen tulee olla vähintään 2 merkkiä.";
        input.classList.add("error");
        return;
    }

    errorMsg.textContent = "";
    input.classList.remove("error");

    // Luodaan listaelementti
    const li = document.createElement("li");
    li.className = "list-item";

    const textSpan = document.createElement("span");
    textSpan.textContent = value;

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "Valmis";

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Poista";

    // Valmis-nappi
    doneBtn.addEventListener("click", function () {
        li.classList.toggle("done");
        updateCounter();
    });

    // Poista-nappi
    deleteBtn.addEventListener("click", function () {
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

// Suodatusnapit
filterButtons.forEach(btn => {
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

// Laskuri
function updateCounter() {
    const activeCount = document.querySelectorAll(".list-item:not(.done)").length;
    counter.textContent = "Aktiivisia tuotteita: " + activeCount;
}
