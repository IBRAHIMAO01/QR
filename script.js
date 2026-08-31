/**
 * Configuration de l'URL pour le QR Code
 * Remplacez cette URL par l'URL publique de votre site sur Vercel
 */
const QR_URL = "https://qr-alpha-ruddy.vercel.app/";

document.addEventListener("DOMContentLoaded", () => {
    // 1. Theme Toggle (Dark/Light mode)
    const themeToggleBtn = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Check saved theme or system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        updateThemeIcon(savedTheme);
    }

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (theme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    }

    const vcardData = "BEGIN:VCARD\n" +
    "VERSION:3.0\n" +
    "N:Kourouma;Ibrahima;Kalil;;\n" +
    "FN:Ibrahima Kalil Kourouma\n" +
    "TITLE:Développeur Logiciel\n" +
    "TEL;TYPE=CELL:[MON_NUMERO_WHATSAPP]\n" +
    "EMAIL:[MON_EMAIL]\n" +
    "URL:https://qr-alpha-ruddy.vercel.app/\n" +
    "END:VCARD";

    // 2. Generate QR Code with QRious
    const qr = new QRious({
        element: document.getElementById('qrcode'),
        value: vcardData,
        size: 250,
        background: '#ffffff',
        foreground: '#0f172a',
        level: 'M'
    });

    // 3. Download QR Code Feature
    const downloadBtn = document.getElementById('download-qr');
    downloadBtn.addEventListener('click', () => {
        const canvas = document.getElementById('qrcode');
        const imageSrc = canvas.toDataURL("image/png");
        
        if (imageSrc) {
            const link = document.createElement('a');
            link.href = imageSrc;
            link.download = 'QR_Code_Ibrahima_Kalil_Kourouma.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert("Erreur lors du téléchargement du QR code.");
        }
    });

    // 4. Smooth Scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
