# EMA kata
Ce repo contient une amélioration d'un petit projet : Videothèque.
Il s'agit de l'implémentation d'une méthode **retrieveVideosByTagAndLevel** en suivant les étapes ci-après:  

1: Cloner le projet [https://github.com/ahouzi/ema-kata](https://github.com/ahouzi/ema-kata)
2: Créer une branche à partir du master
3: Implémenter la méthode retrieveVideosByTagAndLevel
4: Pusher la nouvelle branche
5: Créer une classe pour tester tous les scénarios
6: Faire un pull request avec le master
7:Créer les tests cucumber pour la fonctionnalité.
 
 Ensuite, créer une application *Angular* pour fournir une interface utilisateur permettant de rechercher les videos par *Tags* et/ou *Niveau*.  
 
## Faire tourner l'app: 
### Spring app:
Lancer l'application *Spring* depuis L'IDE *IntelliJ*, ou bien, lancer un `mvn install` puis exécuter le fichier *jar* généré.  Maintenant, l'application est bien en écoute sur le port `8888`.  
### Angular app:
Lancer un `npm install` pour installer les modules nécessaires, puis, lancer:

 -  `ng serve --ssl` : Si besoin de `HTTPS`.
 - `ng serve` : Sinon.

**N.B** : Le directory `/ema-kata/ssl/` contient le fichier du certificat et le fichier de clé privée. 
