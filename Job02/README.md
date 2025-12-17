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
