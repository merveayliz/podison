// --- PREMIUM GİRİŞ ANİMASYONU MOTORU ---
window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.classList.add('splash-hidden');
        }
    }, 2000);
});

// --- TÜM DİL ÇEVİRİ SÖZLÜĞÜ ---
// HTML'deki .item-name ve .item-desc yapılarına tam uyumlu sözlük
const translations = {
    de: {
        navMenu: "<i class='fa-solid fa-utensils'></i> Menü",
        navContact: "<i class='fa-solid fa-phone'></i> Kontakt",
        navMap: "<i class='fa-solid fa-map-location-dot'></i> Karte",
        heroTitle: "Ein Geschmack von Griechenland",
        heroDesc: "Erleben Sie traditionelle griechische Küche im Herzen von Deutschland. Frisch, authentisch und mit Liebe zubereitet.",
        heroBtn: "Menü Entdecken",
        aboutBadge: "UNSERE PHILOSOPHIE",
        aboutTitle: "Über Uns & Das Team",
        aboutDesc1: "Willkommen im Restaurant Poseidon. Bei uns erleben Sie nicht nur die Vielfalt der griechischen Küche, sondern auch die sprichwörtliche Gastfreundschaft unseres eingespielten Teams.",
        aboutDesc2: "Mit viel Leidenschaft, frischen Zutaten und einem Lächeln sorgen wir jeden Tag dafür, dass Ihr Aufenthalt bei uns im Herzen von Garching unvergesslich wird. Lernen Sie die Gesichter hinter den Kulissen kennen!",
        feat1: "<i class='fa-solid fa-heart'></i> Familiäre Atmosphäre",
        feat2: "<i class='fa-solid fa-star'></i> Erstklassiges Team",
        menuTitle: "Unsere Speisekarte",
        menuSubtitle: "Frische Zutaten, traditionelle Rezepte",
        // HTML'deki 6 adet karta sırasıyla tam eşleşen yemek listesi
        items: [
            { title: "Moussaka Klassiker", desc: "Schichten aus saftigen Auberginen, Hackfleisch und cremiger Béchamelsauce." },
            { title: "Souvlaki vom Grill", desc: "Zwei Fleischspieße mit zartem Schweine- oder Hähnchenfleisch, dazu Oregano-Pommes und Tzatziki." },
            { title: "Echter Griechischer Salat", desc: "Sonnengereifte Tomaten, Gurken, rote Zwiebeln, Oliven und originaler Feta-Käse mit nativem Olivenöl." },
            { title: "Echter Griechischer Salat", desc: "Sonnengereifte Tomaten, Gurken, rote Zwiebeln, Oliven und originaler Feta-Käse mit nativem Olivenöl." },
            { title: "Echter Griechischer Salat", desc: "Sonnengereifte Tomaten, Gurken, rote Zwiebeln, Oliven und originaler Feta-Käse mit nativem Olivenöl." },
            { title: "Galaktoboureko", desc: "Traditioneller griechischer Grießbrei-Auflauf im knusprigen Blätterteig mit Sirup." }
        ],
        contactTitle: "Kontakt & Reservierung",
        contactAddress: "Adresse",
        contactPhone: "Telefon",
        contactHours: "Öffnungszeiten",
        contactHoursDesc: "Mo - So: 11:30 - 22:30 Uhr <br><span>(20–30 € pro Person)</span>",
        whatsappTitle: "Online Reservierung",
        whatsappDesc: "Buchen Sie Ihren Tisch ganz einfach und schnell über WhatsApp!",
        whatsappBtn: "<i class='fa-solid fa-calendar-check'></i> Jetzt Reservieren",
        copyright: "© 2026 Poseidon Restaurant. Alle Rechte vorbehalten."
    },
    el: {
        navMenu: "<i class='fa-solid fa-utensils'></i> Μενού",
        navContact: "<i class='fa-solid fa-phone'></i> Επικοινωνία",
        navMap: "<i class='fa-solid fa-map-location-dot'></i> Χάρτης",
        heroTitle: "Μια γεύση από την Ελλάδα",
        heroDesc: "Ζήστε την παραδοσιακή ελληνική κουζίνα στην καρδιά της Γερμανίας. Φρέσκο, αυθεντικό και φτιαγμένο με αγάπη.",
        heroBtn: "Ανακαλύψτε το Μενού",
        aboutBadge: "Η ΦΙΛΟΣΟΦΙΑ ΜΑΣ",
        aboutTitle: "Σχετικά με εμάς & Η ομάδα",
        aboutDesc1: "Καλώς ήρθατε στο Εστιατόριο Ποσειδών. Μαζί μας θα ζήσετε όχι μόνο την ποικιλία της ελληνικής κουζίνας, αλλά και την παροιμιώδη φιλοξενία της έμπειρης ομάδας μας.",
        aboutDesc2: "Με πολύ πάθος, φρέσκα υλικά και ένα χαμόγελο, φροντίζουμε καθημερινά ώστε η διαμονή σας μαζί μας στην καρδιά του Garching να γίνει αξέχαστη. Γνωρίστε τα πρόσωπα πίσω από τα παρασκήνια!",
        feat1: "<i class='fa-solid fa-heart'></i> Οικογενειακή Ατμόσφαιρα",
        feat2: "<i class='fa-solid fa-star'></i> Πρώτης Τάξεως Ομάδα",
        menuTitle: "Το Μενού μας",
        menuSubtitle: "Φρέσκα υλικά, παραδοσιακές συνταγές",
        items: [
            { title: "Παραδοσιακός Μουσακάς", desc: "Στρώσεις από ζουμερές μελιτζάνες, κιμά και κρεμώδη μπεσαμέλ." },
            { title: "Σουβλάκι στα Κάρβουνα", desc: "Δύο σουβλάκια από τρυφερό χοιρινό ή κοτόπουλο, με πατάτες ριγανάτες και τζατζίκι." },
            { title: "Αυθεντική Χωριάτικη Σαλάτα", desc: "Ώριμες ντομάτες, αγγούρια, κρεμμύδι, ελιές και αυθεντική φέτα με έξτρα παρθένο ελαιόλαδο." },
            { title: "Αυθεντική Χωριάτικη Σαλάτα", desc: "Ώριμες ντομάτες, αγγούρια, κρεμμύδι, ελιές και αυθεντική φέτα με έξτρα παρθένο ελαιόλαδο." },
            { title: "Αυθεντική Χωριάτικη Σαλάτα", desc: "Ώριμες ντομάτες, αγγούρια, κρεμμύδι, ελιές και αυθεντική φέτα με έξτρα παρθένο ελαιόλαδο." },
            { title: "Γαλακτομπούρεκο", desc: "Παραδοσιακό ελληνικό γλυκό με κρέμα σιμιγδαλιού σε τραγανό φύλλο με σιρόπι." }
        ],
        contactTitle: "Επικοινωνία & Κρατήσεις",
        contactAddress: "Διεύθυνση",
        contactPhone: "Τηλέφωνο",
        contactHours: "Ωράριο Λειτουργίας",
        contactHoursDesc: "Δε - Κυ: 11:30 - 22:30 <br><span>(20–30 € ανά άτομο)</span>",
        whatsappTitle: "Online Κράτηση",
        whatsappDesc: "Κλείστε το τραπέζι σας εύκολα και γρήγορα μέσω WhatsApp!",
        whatsappBtn: "<i class='fa-solid fa-calendar-check'></i> Κάντε Κράτηση Τώρα",
        copyright: "© 2026 Εστιατόριο Ποσειδών. Με επιφύλαξη παντός δικαιώματος."
    },
    en: {
        navMenu: "<i class='fa-solid fa-utensils'></i> Menu",
        navContact: "<i class='fa-solid fa-phone'></i> Contact",
        navMap: "<i class='fa-solid fa-map-location-dot'></i> Map",
        heroTitle: "A Taste of Greece",
        heroDesc: "Experience traditional Greek cuisine in the heart of Germany. Fresh, authentic, and made with love.",
        heroBtn: "Discover Menu",
        aboutBadge: "OUR PHILOSOPHY",
        aboutTitle: "About Us & The Team",
        aboutDesc1: "Welcome to Poseidon Restaurant. With us, you will experience not only the diversity of Greek cuisine but also the proverbial hospitality of our well-established team.",
        aboutDesc2: "With a lot of passion, fresh ingredients, and a smile, we ensure every day that your stay with us in the heart of Garching becomes unforgettable. Get to know the faces behind the scenes!",
        feat1: "<i class='fa-solid fa-heart'></i> Family Atmosphere",
        feat2: "<i class='fa-solid fa-star'></i> First-Class Team",
        menuTitle: "Our Menu",
        menuSubtitle: "Fresh ingredients, traditional recipes",
        items: [
            { title: "Classic Moussaka", desc: "Layers of juicy eggplants, minced meat, and creamy béchamel sauce." },
            { title: "Grilled Souvlaki", desc: "Two meat skewers with tender pork or chicken, served with oregano fries and tzatziki." },
            { title: "Authentic Greek Salad", desc: "Sun-ripened tomatoes, cucumbers, red onions, olives, and original feta cheese with virgin olive oil." },
            { title: "Authentic Greek Salad", desc: "Sun-ripened tomatoes, cucumbers, red onions, olives, and original feta cheese with virgin olive oil." },
            { title: "Authentic Greek Salad", desc: "Sun-ripened tomatoes, cucumbers, red onions, olives, and original feta cheese with virgin olive oil." },
            { title: "Galaktoboureko", desc: "Traditional Greek semolina custard in crispy phyllo pastry with syrup." }
        ],
        contactTitle: "Contact & Reservation",
        contactAddress: "Address",
        contactPhone: "Phone",
        contactHours: "Opening Hours",
        contactHoursDesc: "Mon - Sun: 11:30 AM - 10:30 PM <br><span>(20–30 € per person)</span>",
        whatsappTitle: "Online Reservation",
        whatsappDesc: "Book your table easily and quickly via WhatsApp!",
        whatsappBtn: "<i class='fa-solid fa-calendar-check'></i> Book Now",
        copyright: "© 2026 Poseidon Restaurant. All rights reserved."
    },
    tr: {
        navMenu: "<i class='fa-solid fa-utensils'></i> Menü",
        navContact: "<i class='fa-solid fa-phone'></i> İletişim",
        navMap: "<i class='fa-solid fa-map-location-dot'></i> Harita",
        heroTitle: "Yunanistan'dan Bir Lezzet",
        heroDesc: "Almanya'nın kalbinde geleneksel Yunan mutfağını deneyimleyin. Taze, otantik ve sevgiyle hazırlanmış.",
        heroBtn: "Menüyü Keşfet",
        aboutBadge: "FELSEFEMİZ",
        aboutTitle: "Hakkımızda & Ekip",
        aboutDesc1: "Poseidon Restoranı'na hoş geldiniz. Bizimle sadece Yunan mutfağının çeşitliliğini değil, aynı zamanda deneyimli ekibimizin meşhur misafirperverliğini de yaşayacaksınız.",
        aboutDesc2: "Büyük bir tutku, taze malzemeler ve bir gülümsemeyle, Garching'in kalbindeki konaklamanızın unutulmaz olmasını sağlamak için her gün çalışıyoruz. Sahne arkasındaki yüzleri tanıyın!",
        feat1: "<i class='fa-solid fa-heart'></i> Aile Atmosferi",
        feat2: "<i class='fa-solid fa-star'></i> Birinci Sınıf Ekip",
        menuTitle: "Menümüz",
        menuSubtitle: "Taze malzemeler, geleneksel tarifler",
        items: [
            { title: "Klasik Musakka", desc: "Nefis fırınlanmış patlıcan katmanları, kıyma ve kremsi beşamel sosu." },
            { title: "Izgara Souvlaki", desc: "Yumuşak domuz veya tavuk etinden iki adet çöp şiş, yanında kekikli patates kızartması ve haydari (Tzatziki)." },
            { title: "Gerçek Yunan Salatası", desc: "Güneşte olgunlaşmış domates, salatalık, kırmızı soğan, zeytin ve sızma zeytinyağlı orijinal beyaz peynir." },
            { title: "Gerçek Yunan Salatası", desc: "Güneşte olgunlaşmış domates, salatalık, kırmızı soğan, zeytin ve sızma zeytinyağlı orijinal beyaz peynir." },
            { title: "Gerçek Yunan Salatası", desc: "Güneşte olgunlaşmış domates, salatalık, kırmızı soğan, zeytin und sızma zeytinyağlı orijinal beyaz peynir." },
            { title: "Galaktoboureko", desc: "Çıtır yufka arasında sunulan nefis irmikli kremalı ve şerbetli geleneksel Yunan tatlısı." }
        ],
        contactTitle: "İletişim & Rezervasyon",
        contactAddress: "Adres",
        contactPhone: "Telefon",
        contactHours: "Açılış Saatleri",
        contactHoursDesc: "Pzt - Paz: 11:30 - 22:30 <br><span>(Kişi başı 20–30 €)</span>",
        whatsappTitle: "Online Rezervasyon",
        whatsappDesc: "WhatsApp üzerinden masanızı kolayca ve hızlıca rezerve edin!",
        whatsappBtn: "<i class='fa-solid fa-calendar-check'></i> Şimdi Rezervasyon Yap",
        copyright: "© 2026 Poseidon Restoranı. Tüm hakları saklıdır."
    }
};

window.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const langModal = document.getElementById('language-modal');
    const mainContent = document.getElementById('main-site-content');
    
    setTimeout(() => {
        if (splash) {
            splash.classList.add('splash-hidden');
            setTimeout(() => {
                if (langModal) langModal.classList.add('modal-active');
            }, 300);
        }
    }, 2000);

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const selectedLang = button.getAttribute('data-lang');
            
            // --- HEADER VE HERO ALANI ---
            document.getElementById('nav-menu-btn').innerHTML = translations[selectedLang].navMenu;
            document.getElementById('nav-contact-btn').innerHTML = translations[selectedLang].navContact;
            document.getElementById('nav-map-btn').innerHTML = translations[selectedLang].navMap;
            
            document.getElementById('hero-title').innerText = translations[selectedLang].heroTitle;
            document.getElementById('hero-desc').innerText = translations[selectedLang].heroDesc;
            document.getElementById('hero-btn').innerText = translations[selectedLang].heroBtn;
            
            // --- HAKKIMIZDA (ABOUT) ALANI ---
            const aboutBadge = document.querySelector('.about-badge');
            if (aboutBadge) aboutBadge.innerText = translations[selectedLang].aboutBadge;

            const aboutTitle = document.querySelector('.about-title');
            if (aboutTitle) aboutTitle.innerText = translations[selectedLang].aboutTitle;

            const aboutDescs = document.querySelectorAll('.about-desc');
            if (aboutDescs[0]) aboutDescs[0].innerText = translations[selectedLang].aboutDesc1;
            if (aboutDescs[1]) aboutDescs[1].innerText = translations[selectedLang].aboutDesc2;

            const featItems = document.querySelectorAll('.feat-item');
            if (featItems[0]) featItems[0].innerHTML = translations[selectedLang].feat1;
            if (featItems[1]) featItems[1].innerHTML = translations[selectedLang].feat2;

            // --- MENÜ BAŞLIKLARI ---
            const sectionTitles = document.querySelectorAll('.section-title');
            const sectionSubtitles = document.querySelectorAll('.section-subtitle');
            if (sectionTitles[0]) sectionTitles[0].innerText = translations[selectedLang].menuTitle;
            if (sectionSubtitles[0]) sectionSubtitles[0].innerText = translations[selectedLang].menuSubtitle;

            // --- NOKTA ATIŞI ÜRÜN KARTLARI GÜNCELLEMESİ ---
            // Senin yazdığın .item-name ve .item-desc sınıflarını doğrudan bulup metinleri değiştirir
            const productCards = document.querySelectorAll('.menu-photo-card');
            productCards.forEach((card, index) => {
                if (translations[selectedLang].items[index]) {
                    const nameSpan = card.querySelector('.item-name');
                    const descParagraph = card.querySelector('.item-desc');
                    
                    if (nameSpan) nameSpan.innerText = translations[selectedLang].items[index].title;
                    if (descParagraph) descParagraph.innerText = translations[selectedLang].items[index].desc;
                }
            });

            // --- İLETİŞİM ALANI ---
            if (sectionTitles[1]) sectionTitles[1].innerText = translations[selectedLang].contactTitle;

            const contactCards = document.querySelectorAll('.contact-card');
            if (contactCards[0]) {
                const h4 = contactCards[0].querySelector('h4');
                if (h4) h4.innerText = translations[selectedLang].contactAddress;
            }
            if (contactCards[1]) {
                const h4 = contactCards[1].querySelector('h4');
                if (h4) h4.innerText = translations[selectedLang].contactPhone;
            }
            if (contactCards[2]) {
                const h4 = contactCards[2].querySelector('h4');
                const p = contactCards[2].querySelector('p');
                if (h4) h4.innerText = translations[selectedLang].contactHours;
                if (p) p.innerHTML = translations[selectedLang].contactHoursDesc;
            }

            // WhatsApp Kartı
            const whatsappCard = document.querySelector('.whatsapp-card');
            if (whatsappCard) {
                const h4 = whatsappCard.querySelector('h4');
                const p = whatsappCard.querySelector('p');
                const btn = whatsappCard.querySelector('.btn-whatsapp');
                if (h4) h4.innerText = translations[selectedLang].whatsappTitle;
                if (p) p.innerText = translations[selectedLang].whatsappDesc;
                if (btn) btn.innerHTML = translations[selectedLang].whatsappBtn;
            }

            // --- FOOTER ALANI ---
            const copyrightText = document.querySelector('.copyright-text');
            if (copyrightText) copyrightText.innerText = translations[selectedLang].copyright;

            // --- MODAL KAPATMA VE GÖSTERME ---
            if (langModal) langModal.classList.remove('modal-active');
            setTimeout(() => {
                if (mainContent) mainContent.classList.add('content-visible');
            }, 300);
        });
    });
});
