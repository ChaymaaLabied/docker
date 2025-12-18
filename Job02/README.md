## Étape 1 : La Construction de l'image Docker

docker build -t mon-welcome-app .

![image](images/build%20the%20image.png)
![image](images/premier%20affichage%20dans%20le%20navigateur.png)

## Étape 2 :le Lancement du container

docker run -it --rm -p 3000:3000 mon-welcome-app
![image](images/build%20the%20image.png)

## Étape 3 : Vérifications Docker

docker images  
docker ps  
docker ps -a
![image](images/acceder%20aux%20données%20d'une%20image.png)

## Étape 4 : Modification du code

Ouvrir le dossier `src/` dans VS Code.  
Modifier un texte visible dans l'application, par exemple dans `App.js` :

```js
<h1>Salut C'est Chmicha!</h1>
```

![image](images/modification%20du%20code.png)
![image](images/code-modif%20ajouter%20du%20style.png)

## Étape 5 : Reconstruction de l'image Docker et relance du container

Après avoir modifié le code à l'étape 4, il est nécessaire de reconstruire l'image Docker pour que le container utilise la nouvelle version.

### Commandes exécutées :

Rebuild de l'image :

```bash
docker build -t mon-welcome-app:v2 .

```

![image](images/rebuild%20et%20relance%202.png)
![image](images/rebuild%20et%20relance1.png)
![image](images/changement%20de%20l'affichage.png)

## Étape 6 : Publication de l’image sur Docker Hub

1. Connexion à Docker Hub : docker login
2. Taguer l’image : docker tag mon-welcome-app:v2 chmicha01/mon-welcome-app:v2
3. Pousser l’image sur Docker Hub : docker push chmicha01/mon-welcome-app:v2
   ![image](images/publier%20mon%20image%20sur%20dockerHub.png)
   ![image](images/les%20commandes%20pour%20publier%20mon%20image%20sur%20dockerHub.png)

## Étape 7 : Utilisation de l’image Docker d’un collègue

1. Récupérer l’image depuis Docker Hub : docker pull cosminbilga/welcome-to-docker:latest
2. Vérifier que l’image est téléchargée : docker images
3. Lancer le container depuis l’image du collègue : docker run -it --rm -p 3000:3000 cosminbilga/welcome-to-docker:latest
   ![image](images/utiliser%20l'image%20d'un%20collègue.png)
   ![image](images/coté%20navigateur%20l'image%20d'un%20collegue.png)
