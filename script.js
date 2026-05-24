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