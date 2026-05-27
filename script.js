// --- PREMIUM GİRİŞ ANİMASYONU MOTORU ---
window.addEventListener('DOMContentLoaded', () => {
    // Sayfa tamamen yüklendikten 2 saniye sonra splash ekranı yukarı kayarak kaybolur
    setTimeout(() => {
        const splash = document.getElementById('splash-screen');
        if (splash) {
            splash.classList.add('splash-hidden');
        }
    }, 2000);
});


// --- TÜM DİL ÇEVİRİ SÖZLÜĞÜ (Geliştirilebilir) ---
const translations = {
    de: {
        navMenu: "<i class='fa-solid fa-utensils'></i> Menü",
        navContact: "<i class='fa-solid fa-phone'></i> Kontakt",
        navMap: "<i class='fa-solid fa-map-location-dot'></i> Karte",
        heroTitle: "Ein Geschmack von Griechenland",
        heroDesc: "Erleben Sie traditionelle griechische Küche im Herzen von Deutschland. Frisch, authentisch und mit Liebe zubereitet.",
        heroBtn: "Menü Entdecken"
    },
    el: {
        navMenu: "<i class='fa-solid fa-utensils'></i> Μενού",
        navContact: "<i class='fa-solid fa-phone'></i> Επικοινωνία",
        navMap: "<i class='fa-solid fa-map-location-dot'></i> Χάρτης",
        heroTitle: "Μια γεύση από την Ελλάδα",
        heroDesc: "Ζήστε την παραδοσιακή ελληνική κουζίνα στην καρδιά της Γερμανίας. Φρέσκο, αυθεντικό και φτιαγμένο με αγάπη.",
        heroBtn: "Ανακαλύψτε το Μενού"
    },
    en: {
        navMenu: "<i class='fa-solid fa-utensils'></i> Menu",
        navContact: "<i class='fa-solid fa-phone'></i> Contact",
        navMap: "<i class='fa-solid fa-map-location-dot'></i> Map",
        heroTitle: "A Taste of Greece",
        heroDesc: "Experience traditional Greek cuisine in the heart of Germany. Fresh, authentic, and made with love.",
        heroBtn: "Discover Menu"
    },
    tr: {
        navMenu: "<i class='fa-solid fa-utensils'></i> Menü",
        navContact: "<i class='fa-solid fa-phone'></i> İletişim",
        navMap: "<i class='fa-solid fa-map-location-dot'></i> Harita",
        heroTitle: "Yunanistan'dan Bir Lezzet",
        heroDesc: "Almanya'nın kalbinde geleneksel Yunan mutfağını deneyimleyin. Taze, otantik ve sevgiyle hazırlanmış.",
        heroBtn: "Menüyü Keşfet"
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
            
            document.getElementById('nav-menu-btn').innerHTML = translations[selectedLang].navMenu;
            document.getElementById('nav-contact-btn').innerHTML = translations[selectedLang].navContact;
            document.getElementById('nav-map-btn').innerHTML = translations[selectedLang].navMap;
            
            document.getElementById('hero-title').innerText = translations[selectedLang].heroTitle;
            document.getElementById('hero-desc').innerText = translations[selectedLang].heroDesc;
            document.getElementById('hero-btn').innerText = translations[selectedLang].heroBtn;
            
            if (langModal) langModal.classList.remove('modal-active');
            
            setTimeout(() => {
                if (mainContent) mainContent.classList.add('content-visible');
            }, 300);
        });
    });
});