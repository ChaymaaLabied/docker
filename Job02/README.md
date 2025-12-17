## Étape 1 : La Construction de l'image Docker

docker build -t mon-welcome-app .

## Étape 2 :le Lancement du container

docker run -it --rm -p 3000:3000 mon-welcome-app
