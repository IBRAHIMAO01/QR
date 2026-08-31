# Portfolio - Carte de Visite Numérique

Ce projet est une carte de visite numérique et un portfolio professionnel pour Ibrahima Kalil Kourouma, conçu pour être léger, rapide et hébergé gratuitement sur Vercel.

## 🚀 Fonctionnalités
- Design minimaliste, moderne et responsive (Mobile-first).
- Mode Sombre / Mode Clair (Thème).
- Génération automatique de QR Code avec option de téléchargement.
- Hébergement statique 100% gratuit (HTML/CSS/JS natif, sans framework).
- Optimisé SEO.

---

## 🛠️ Comment personnaliser les informations ?

Toutes les informations à remplacer sont indiquées par des crochets dans le fichier `index.html`. Ouvrez le fichier `index.html` avec un éditeur de texte (comme VS Code, Cursor ou Bloc-notes) et recherchez les éléments suivants :

### 1. Comment remplacer ma photo de profil ?
- Prenez votre photo de profil et nommez-la exactement `profile.jpg`.
- Placez-la dans le même dossier que `index.html`.
- *(Si vous ne mettez pas de photo, un avatar avec vos initiales "IK" s'affichera automatiquement).*

### 2. Comment remplacer mon CV ?
- Prenez votre CV au format PDF et nommez-le exactement `cv.pdf`.
- Placez-le dans le même dossier que `index.html`.

### 3. Où mettre mon email ?
Dans le fichier `index.html`, recherchez la mention `[MON_EMAIL]`. Remplacez-la par votre adresse email réelle. 
*Attention : il y en a plusieurs (dans le texte et dans le lien `mailto:`).*

### 4. Où mettre mon numéro WhatsApp ?
Dans `index.html`, recherchez `[MON_NUMERO_WHATSAPP]`. Remplacez par votre numéro au format international (sans le '+').
*Exemple: `224620000000`*.

### 5. Où mettre mes liens GitHub et LinkedIn ?
Recherchez `[MON_GITHUB]` et `[MON_LINKEDIN]` et remplacez par les URL complètes de vos profils.
*Exemple: `https://github.com/kalil`*

### 6. Comment mettre l'URL Vercel dans le QR Code ?
Une fois votre site déployé sur Vercel (voir étape suivante), vous obtiendrez une URL (ex: `https://mon-portfolio.vercel.app`).
- Ouvrez le fichier `script.js`.
- À la toute première ligne, remplacez `"https://MON-SITE.vercel.app"` par votre vraie URL Vercel.
- Enregistrez et redéployez. Le QR Code sera mis à jour automatiquement !

---

## 🌐 Comment déployer le projet sur Vercel

C'est extrêmement simple et cela prend 2 minutes.

**Méthode la plus simple (Glisser-Déposer) :**
1. Créez un compte gratuit sur [Vercel](https://vercel.com/signup) si ce n'est pas déjà fait.
2. Connectez-vous à votre tableau de bord Vercel.
3. Cliquez sur **"Add New..."** puis sur **"Project"**.
4. Vous pouvez lier votre compte GitHub si votre code y est hébergé, **OU BIEN** utiliser l'option de déploiement manuel :
   - Regroupez les fichiers (`index.html`, `style.css`, `script.js`, `profile.jpg`, `cv.pdf`) dans un dossier.
   - Sur Vercel, cherchez l'option pour uploader un dossier ou installez le CLI Vercel (`npm i -g vercel`) et tapez `vercel` dans le terminal de ce dossier.
*(Note : Vercel a récemment encouragé le déploiement via GitHub. Il est donc recommandé d'envoyer ce dossier sur un dépôt GitHub, puis de sélectionner ce dépôt depuis Vercel. Le déploiement se fera en un clic).*

**Félicitations !** Votre carte de visite numérique est en ligne. N'oubliez pas de copier l'URL Vercel fournie pour l'ajouter dans votre fichier `script.js` !
