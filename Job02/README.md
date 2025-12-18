## Étape 1 : La Construction de l'image Docker

docker build -t mon-welcome-app .

## Étape 2 :le Lancement du container

docker run -it --rm -p 3000:3000 mon-welcome-app

## Étape 3 : Vérifications Docker

docker images  
docker ps  
docker ps -a

## Étape 4 : Modification du code

Ouvrir le dossier `src/` dans VS Code.  
Modifier un texte visible dans l'application, par exemple dans `App.js` :

```js
<h1>Salut C'est Chmicha!</h1>
```

## Étape 5 : Reconstruction de l'image Docker et relance du container

Après avoir modifié le code à l'étape 4, il est nécessaire de reconstruire l'image Docker pour que le container utilise la nouvelle version.

### Commandes exécutées :

Rebuild de l'image :

```bash
docker build -t mon-welcome-app:v2 .
```

## Étape 6 : Publication de l’image sur Docker Hub

1. Connexion à Docker Hub : docker login
2. Taguer l’image : docker tag mon-welcome-app:v2 chmicha01/mon-welcome-app:v2
3. Pousser l’image sur Docker Hub : docker push chmicha01/mon-welcome-app:v2
