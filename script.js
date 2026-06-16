const categories = [
    {
        id: "vorspeisen",
        title: "Vorspeisen",
        image: "img/meze.jpg",
        items: [
            {
                name: "Tzatziki",
                price: "4,90 EUR",
                text: "Joghurt, Gurken, Knoblauch, Olivenoel und frische Kraeuter.",
                image: "img/meze.jpg",
                badges: ["Hausgemacht", "Glutenfrei"]
            },
            {
                name: "Auberginen Salat",
                price: "5,90 EUR",
                text: "Gegrillte Auberginen mit Knoblauch, Petersilie und Olivenoel.",
                image: "img/meze1.jpg",
                badges: ["Vegan", "Frische Zutaten"]
            },
            {
                name: "Dolmadakia",
                price: "5,50 EUR",
                text: "Weinblaetter gefuellt mit Reis, Kraeutern und Zitrone.",
                image: "img/meze2.jpg",
                badges: ["Mediterran", "Kalt serviert"]
            },
            {
                name: "Feta Saganaki",
                price: "6,50 EUR",
                text: "Gebackener Fetakaese mit Honig, Sesam und feinem Oregano.",
                image: "img/2.jpg",
                badges: ["Empfehlung", "Vegetarisch"]
            }
        ]
    },
    {
        id: "hauptgerichte",
        title: "Hauptgerichte",
        image: "img/hauptgerichte.jpg",
        items: [
            {
                name: "Gyros Spezial",
                price: "14,90 EUR",
                text: "Knuspriges Gyros mit Tzatziki, Pommes, Reis und Beilagensalat.",
                image: "img/hauptgerichte.jpg",
                badges: ["Beliebt", "Vom Grill"]
            },
            {
                name: "Souvlaki Teller",
                price: "15,90 EUR",
                text: "Zwei marinierte Fleischspiesse mit Reis, Tzatziki und Gemuese.",
                image: "img/hauptgerichte1.jpg",
                badges: ["Klassiker", "Hausgewuerzt"]
            },
            {
                name: "Bifteki",
                price: "16,90 EUR",
                text: "Hacksteak gefuellt mit Feta, dazu Kartoffeln und Salat.",
                image: "img/hauptgerichte2.jpg",
                badges: ["Herzhaft", "Mit Feta"]
            },
            {
                name: "Oktopus vom Grill",
                price: "22,90 EUR",
                text: "Zarter Oktopus mariniert in Olivenoel, Zitrone und mediterranen Kraeutern. Serviert mit Gemuese und Kartoffeln.",
                image: "img/hauptgerichte3.jpg",
                badges: ["Empfehlung des Hauses", "Glutenfrei"]
            }
        ]
    },
    {
        id: "fisch",
        title: "Fisch & Meeresfruechte",
        image: "img/3.jpg",
        items: [
            {
                name: "Dorade vom Grill",
                price: "21,90 EUR",
                text: "Ganze Dorade mit Zitrone, Kraeutern, Gemuese und Olivenoel.",
                image: "img/3.jpg",
                badges: ["Frisch", "Vom Grill"]
            },
            {
                name: "Garnelen Pfanne",
                price: "19,90 EUR",
                text: "Garnelen in Tomaten-Knoblauch-Sauce mit Feta und Oregano.",
                image: "img/33.jpg",
                badges: ["Wuerzig", "Mit Feta"]
            },
            {
                name: "Calamari",
                price: "17,90 EUR",
                text: "Zarte Calamari mit Zitrone, Knoblauch-Dip und Salat.",
                image: "img/4.jpg",
                badges: ["Knusprig", "Hausgemacht"]
            }
        ]
    },
    {
        id: "beilagen",
        title: "Beilagen & Salate",
        image: "img/44.jpg",
        items: [
            {
                name: "Griechischer Bauernsalat",
                price: "9,90 EUR",
                text: "Tomaten, Gurken, Paprika, Oliven, Zwiebeln und Feta.",
                image: "img/44.jpg",
                badges: ["Vegetarisch", "Frisch"]
            },
            {
                name: "Pita Brot",
                price: "3,20 EUR",
                text: "Warmes Pita Brot mit Olivenoel und Oregano.",
                image: "img/22.jpg",
                badges: ["Ofenwarm", "Zum Teilen"]
            }
        ]
    },
    {
        id: "desserts",
        title: "Desserts",
        image: "img/dessserts.jpg",
        items: [
            {
                name: "Baklava",
                price: "5,90 EUR",
                text: "Blaetterteig mit Nuessen, Honigsirup und Zimt.",
                image: "img/dessserts.jpg",
                badges: ["Suess", "Traditionell"]
            },
            {
                name: "Galaktoboureko",
                price: "6,50 EUR",
                text: "Griechischer Griesskuchen mit Vanillecreme und Sirup.",
                image: "img/desserts1.jpg",
                badges: ["Hausgemacht", "Cremig"]
            },
            {
                name: "Joghurt mit Honig",
                price: "5,20 EUR",
                text: "Griechischer Joghurt mit Honig, Walnuessen und Zimt.",
                image: "img/desserts2.jpg",
                badges: ["Leicht", "Mit Honig"]
            }
        ]
    }
];

const drinks = [
    {
        id: "weissweine",
        title: "Weissweine",
        image: "img/limonata.jpg",
        items: [
            { name: "Assyrtiko Santorini", price: "6,90 EUR", text: "Trockener Weisswein mit mineralischer Frische und feiner Zitrusnote.", image: "img/limonata.jpg", badges: ["Griechischer Wein", "Trocken"] },
            { name: "Moschofilero", price: "5,90 EUR", text: "Aromatisch, leicht und elegant mit floralen Noten.", image: "img/limonata1.jpg", badges: ["Fruchtig", "Leicht"] },
            { name: "Hauswein Weiss", price: "4,90 EUR", text: "Unser offener Weisswein, passend zu Fisch und Vorspeisen.", image: "img/limonata2.jpg", badges: ["Hauswein", "Glasweise"] }
        ]
    },
    {
        id: "rotweine",
        title: "Rotweine",
        image: "img/şarap.jpg",
        items: [
            { name: "Agiorgitiko", price: "6,50 EUR", text: "Weicher Rotwein mit dunklen Beeren und samtigem Abgang.", image: "img/şarap1.jpg", badges: ["Griechischer Wein", "Samtig"] },
            { name: "Naoussa Xinomavro", price: "7,20 EUR", text: "Kraeftiger Rotwein mit Wuerze, Struktur und langem Finale.", image: "img/şarap2.jpg", badges: ["Kraeftig", "Trocken"] },
            { name: "Hauswein Rot", price: "4,90 EUR", text: "Rund, angenehm und ideal zu Gyros, Bifteki und Grillgerichten.", image: "img/şarap3.jpg", badges: ["Hauswein", "Glasweise"] }
        ]
    },
    {
        id: "biere",
        title: "Biere",
        image: "img/bira.jpg",
        items: [
            { name: "Mythos", price: "4,20 EUR", text: "Griechisches Lagerbier, frisch und mild.", image: "img/bira1.jpg", badges: ["Griechisch", "Kalt serviert"] },
            { name: "Helles vom Fass", price: "4,50 EUR", text: "Klassisches helles Bier vom Fass.", image: "img/bira2.jpg", badges: ["Vom Fass", "Beliebt"] },
            { name: "Alkoholfreies Bier", price: "4,10 EUR", text: "Erfrischend, feinherb und alkoholfrei.", image: "img/bira3.jpg", badges: ["Alkoholfrei", "Erfrischend"] }
        ]
    },
    {
        id: "ouzo",
        title: "Ouzo & Spirituosen",
        image: "img/Ouzo Plomari.jpg",
        items: [
            { name: "Ouzo Plomari", price: "3,20 EUR", text: "Klassischer Ouzo mit feinem Anisduft.", image: "img/Mythos.jpg", badges: ["Aperitif", "Eiskalt"] },
            { name: "Tsipouro", price: "3,50 EUR", text: "Traditioneller Tresterbrand aus Griechenland.", image: "img/Ouzo Plomari.jpg", badges: ["Traditionell", "Digestif"] },
            { name: "Metaxa 5 Sterne", price: "4,90 EUR", text: "Milder griechischer Weinbrand mit warmer Honignote.", image: "img/Ouzo Plomari.jpg", badges: ["Weinbrand", "Mild"] }
        ]
    },
    {
        id: "alkoholfrei",
        title: "Alkoholfreie Getraenke",
        image: "img/kahve1.jpg",
        items: [
            { name: "Hausgemachte Limonade", price: "4,80 EUR", text: "Zitrone, Minze und ein Hauch Honig.", image: "img/limonata.jpg", badges: ["Hausgemacht", "Frisch"] },
            { name: "Mineralwasser", price: "3,20 EUR", text: "Still oder sprudelnd.", image: "img/kahve.jpg", badges: ["Still", "Sprudel"] },
            { name: "Cola / Fanta / Sprite", price: "3,60 EUR", text: "Klassische Softdrinks gut gekuehlt.", image: "img/kahve1.jpg", badges: ["Kalt", "Softdrink"] }
        ]
    },
    {
        id: "kaffee",
        title: "Kaffee & Tee",
        image: "img/kahve.jpg",
        items: [
            { name: "Griechischer Kaffee", price: "3,40 EUR", text: "Traditionell zubereitet, kraeftig und aromatisch.", image: "img/kahve.jpg", badges: ["Traditionell", "Aromatisch"] },
            { name: "Espresso", price: "2,70 EUR", text: "Kurz, intensiv und perfekt nach dem Essen.", image: "img/kahve1.jpg", badges: ["Klassisch", "Heiss"] },
            { name: "Bergtee", price: "3,90 EUR", text: "Griechischer Kraeutertee mit mildem Duft.", image: "img/kahve1.jpg", badges: ["Kraeuter", "Wohltuend"] }
        ]
    }
];

const state = {
    currentView: "home",
    history: ["home"],
    activeCategory: categories[0],
    section: "menu"
};

const viewMap = {
    home: document.getElementById("view-home"),
    menu: document.getElementById("view-menu"),
    category: document.getElementById("view-category"),
    detail: document.getElementById("view-detail"),
    drinks: document.getElementById("view-drinks"),
    reservation: document.getElementById("view-reservation"),
    about: document.getElementById("view-about"),
    contact: document.getElementById("view-contact")
};

const categoryContainer = document.getElementById("foodCategories");
const drinkContainer = document.getElementById("drinkCategories");
const dishList = document.getElementById("dishList");
const categoryTitle = document.getElementById("categoryTitle");
const menuSearch = document.getElementById("menuSearch");
const sideMenu = document.getElementById("sideMenu");
const backButton = document.getElementById("backButton");

function createImage(src, alt) {
    const img = document.createElement("img");
    img.src = src;
    img.alt = alt;
    return img;
}

function renderCategories(list = categories) {
    categoryContainer.innerHTML = "";
    list.forEach((category) => {
        const button = document.createElement("button");
        button.className = "category-card";
        button.type = "button";
        button.append(createImage(category.image, category.title));
        button.insertAdjacentHTML("beforeend", `<strong>${category.title}</strong><i class="fa-solid fa-chevron-right"></i>`);
        button.addEventListener("click", () => openCategory(category.id));
        categoryContainer.append(button);
    });
}

function renderDrinks() {
    drinkContainer.innerHTML = "";
    drinks.forEach((drink) => {
        const button = document.createElement("button");
        button.className = "drink-card";
        button.type = "button";
        button.append(createImage(drink.image, drink.title));
        button.insertAdjacentHTML("beforeend", `<strong>${drink.title}</strong><i class="fa-solid fa-chevron-down"></i>`);
        button.addEventListener("click", () => openDrinkCategory(drink.id));
        drinkContainer.append(button);
    });
}

function renderDishes(category) {
    categoryTitle.textContent = category.title;
    dishList.innerHTML = "";
    category.items.forEach((dish) => {
        const button = document.createElement("button");
        button.className = "dish-row";
        button.type = "button";
        button.append(createImage(dish.image, dish.name));
        button.insertAdjacentHTML(
            "beforeend",
            `<span><h3>${dish.name}</h3><p>${dish.text}</p></span><strong>${dish.price}</strong>`
        );
        button.addEventListener("click", () => openDetail(dish));
        dishList.append(button);
    });
}

function setActiveNav(viewName) {
    const navView = ["category", "detail"].includes(viewName) ? state.section : viewName;
    document.querySelectorAll("[data-view]").forEach((item) => {
        item.classList.toggle("active", item.dataset.view === navView);
    });
}

function showView(viewName, push = true) {
    Object.entries(viewMap).forEach(([name, view]) => {
        view.classList.toggle("active", name === viewName);
    });
    state.currentView = viewName;
    document.body.classList.toggle("home-active", viewName === "home");
    if (push && state.history[state.history.length - 1] !== viewName) {
        state.history.push(viewName);
    }
    backButton.style.visibility = state.currentView === "home" ? "hidden" : "visible";
    setActiveNav(viewName);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function openCategory(id) {
    const category = categories.find((item) => item.id === id) || categories[0];
    state.activeCategory = category;
    state.section = "menu";
    renderDishes(category);
    showView("category");
}

function openDrinkCategory(id) {
    const category = drinks.find((item) => item.id === id) || drinks[0];
    state.section = "drinks";
    renderDishes(category);
    showView("category");
}

function openDetail(dish) {
    document.getElementById("detailImage").src = dish.image;
    document.getElementById("detailImage").alt = dish.name;
    document.getElementById("detailTitle").textContent = dish.name;
    document.getElementById("detailPrice").textContent = dish.price;
    document.getElementById("detailText").textContent = dish.text;
    document.getElementById("detailBadges").innerHTML = dish.badges
        .map((badge, index) => `<div class="badge"><i class="fa-solid fa-${index === 0 ? "star" : "leaf"}"></i>${badge}</div>`)
        .join("");
    showView("detail");
}

function goBack() {
    if (state.history.length <= 1) {
        showView("home", false);
        return;
    }
    state.history.pop();
    const previous = state.history[state.history.length - 1] || "home";
    showView(previous, false);
}

function toggleSideMenu(open) {
    sideMenu.classList.toggle("open", open);
    sideMenu.setAttribute("aria-hidden", String(!open));
}

function wireNavigation() {
    document.querySelectorAll("[data-view]").forEach((item) => {
        item.addEventListener("click", () => {
            const view = item.dataset.view;
            toggleSideMenu(false);
            showView(view);
        });
    });

    document.getElementById("openMenu").addEventListener("click", () => toggleSideMenu(true));
    document.getElementById("closeMenu").addEventListener("click", () => toggleSideMenu(false));
    sideMenu.addEventListener("click", (event) => {
        if (event.target === sideMenu) toggleSideMenu(false);
    });
    backButton.addEventListener("click", goBack);
    document.getElementById("detailBack").addEventListener("click", goBack);
}

function wireSearch() {
    menuSearch.addEventListener("input", () => {
        const query = menuSearch.value.trim().toLowerCase();
        if (!query) {
            renderCategories();
            return;
        }
        const matched = categories
            .map((category) => ({
                ...category,
                items: category.items.filter((dish) => `${dish.name} ${dish.text}`.toLowerCase().includes(query))
            }))
            .filter((category) => category.items.length || category.title.toLowerCase().includes(query));
        renderCategories(matched.length ? matched : categories);
    });
}


function wireReservation() {
    const form = document.getElementById("reservationForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        
        const name = document.getElementById("resName") ? document.getElementById("resName").value.trim() : "";
        const guests = document.getElementById("resGuests") ? document.getElementById("resGuests").value : "";
        const date = document.getElementById("resDate") ? document.getElementById("resDate").value : "";
        const time = document.getElementById("resTime") ? document.getElementById("resTime").value : "";
        const phone = document.getElementById("resPhone") ? document.getElementById("resPhone").value.trim() : ""; // Telefon numarasını çektik
        const note = document.getElementById("resNote") ? document.getElementById("resNote").value.trim() : "";

        const restaurantPhone = "905439676661"; 

        let message = `Hallo Poseidon Team,\n\n`;
        message += `Ich möchte gerne einen Tisch reservieren:\n`;
        message += `✍️ Name: ${name}\n`;
        message += `📱 Telefon: ${phone}\n`; 
        message += `👥 Personen: ${guests}\n`;
        message += `📅 Datum: ${date}\n`;
        message += `⏰ Uhrzeit: ${time}\n`;
        
        if (note) {
            message += `📝 Notiz: ${note}\n`;
        }
        
        message += `\nBitte bestätigen Sie meine Reservierung. Vielen Dank!`;

        const encodedMessage = encodeURIComponent(message);

        const whatsappUrl = `https://api.whatsapp.com/send?phone=${restaurantPhone}&text=${encodedMessage}`;

        const noteElement = document.getElementById("reservationNote");
        if (noteElement) {
            noteElement.textContent = "Bitte warten... Sie werden zu WhatsApp weitergeleitet.";
        }

        window.open(whatsappUrl, "_blank");
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCategories();
    renderDrinks();
    renderDishes(categories[0]);
    wireNavigation();
    wireSearch();
    wireReservation();
    showView("home", false);
});
