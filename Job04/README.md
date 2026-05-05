# TP Docker – Apache + PHP (phpinfo)

---

## Partie 1 — Création de l’environnement Apache + PHP

### Étape 1 — Création du fichier `index.php`

Création d’un fichier PHP permettant d’afficher les informations du serveur grâce à la fonction `phpinfo()`.

![Création index.php](images/index_php.png)

### Étape 2 — Création du Dockerfile

Création d’un fichier `Dockerfile` basé sur une image officielle PHP avec Apache intégré.

## ![Dockerfile](images/dockerfile.png)

## 🐳 Partie 2 — Construction et exécution du conteneur

### Étape 1 — Build de l’image Docker

Construction de l’image Docker à partir du Dockerfile.

![Build image](images/build.png)

### Étape 2 — Lancement du conteneur

Démarrage du conteneur avec redirection du port 8080 (machine locale) vers le port 80 (Apache dans le conteneur).

![Run container](images/run.png)

### Étape 3 — Vérification du conteneur en cours d’exécution

Affichage des conteneurs actifs pour vérifier que le serveur tourne correctement.

![Docker ps](images/docker_ps.png)

### Étape 4 — Accès à l’application via le navigateur

Accès à la page PHP via l’URL :

```
http://localhost:8081
```

Affichage des informations du serveur grâce à `phpinfo()`.

![phpinfo](images/phpinfo.png)

---

### Étape 5 — Consultation des logs (optionnel)

Vérification des logs du conteneur Apache.

![Logs](images/logs.png)

### Étape 6 — Arrêt du conteneur

Arrêt du conteneur en cours d’exécution.

![Stop container](images/stop.png)
