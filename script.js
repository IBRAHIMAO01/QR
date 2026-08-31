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

const QR_URL = "https://qr-alpha-ruddy.vercel.app/";

    // 2. Generate QR Code
    const qrcodeContainer = document.getElementById("qrcode");
    
    const qrcode = new QRCode(qrcodeContainer, {
        text: QR_URL,
        width: 220,
        height: 220,
        colorDark : "#0f172a",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });

    // 3. Download QR Code Feature
    const downloadBtn = document.getElementById('download-qr');
    downloadBtn.addEventListener('click', () => {
        // The qrcode.js library generates a canvas and an img element. 
        // We grab the image source (base64) to trigger download.
        const qrImage = qrcodeContainer.querySelector('img');
        const qrCanvas = qrcodeContainer.querySelector('canvas');
        
        let imageSrc = '';
        
        if (qrImage && qrImage.getAttribute('src')) {
            imageSrc = qrImage.getAttribute('src');
        } else if (qrCanvas) {
            imageSrc = qrCanvas.toDataURL("image/png");
        }

        if (imageSrc) {
            const link = document.createElement('a');
            link.href = imageSrc;
            link.download = 'QR_Code_Ibrahima_Kalil_Kourouma.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            alert("Erreur lors de la génération du téléchargement du QR code.");
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
