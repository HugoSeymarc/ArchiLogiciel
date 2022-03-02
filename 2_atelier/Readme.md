# Questions


### Qu’est ce que des Services Web Full Rest  ? Quelles sont les contraintes imposées par ce type de service  ?

 Un service web Full Rest est un web service qui suit la structure REST et se concentre sur les ressources d'un système ainsi que la façon utilisé pour transférer et adresser les états des ressources avec HTTP.
 
 Ce type de service possède les contraintes architecturales suivantes: 
 - Une séparation client-serveur.
 - Une communication client-serveur sans conservation de l'état de la session
 - Une mise en cache des réponses sur les clients et le serveur
 - Une architecture en plusieurs couches
 - Une interface uniforme

### Qu’est ce qu’un gestionnaire de dépendance  ? Maven est-il le seul  ? Quel est l’avantage d’utiliser un gestionnaire de dépendances  ? Quelles sont les grandes étapes de fonctionnement de Maven  ?

  Le gestionnaire de dépendance est un outil permettant de gérer des dépendances et de les inclurent dans un projet. Les dépendances sont équivalents à des librairie, qui permettent  de simplifier le développement. Ils permettent également de standardiser le lieu de stockage des dépendances et la manière dont elles sont utilisées.
 
 Il existe d'autres gestionnaires de dépendances comme Composer, qui est un gestionnaire de dépendances en PHP ou encore Bower.
 
Un gestionnaires de dépendances, en plus d'intégrer des dépendances, s'occupe de mettre à jour les dépendances.

Les grandes étapes de fonctionnement de Maven sont:

 - Validate: Vérification de la validité du projet
 - Compile: Compilation des sources du projet
 - Test: Test du code compilé
 - Package: Package des éléments issus de la compilation dans un format distribuable (JAR, WAR, etc...)
 - Install: Installation du package dans le répertoire local
 - Deploy: Envoie du package dans le répertoire distant indiqué dans le fichier pom.xml

### Qu’est ce qu’une application classique Entreprise Java Application  ? Donner un exemple d’usage avec web service, JSP, JavaBean,  EJB et JMS.


### Qu’est ce que Spring  ? qu’apporte Spring boot vis-à-vis de Spring  ?

Spring est un framework open source qui permet de définir et construire  l'infrastructure d'une application java et faciliter le développement de cette application.

SpringBoot permet d'éviter à l'utilisateur une répétition de code similaire en rassemblant toutes les dépendances dans un seul paquets, évitant de devoir appeler les dépendances séparément et optimise donc la productivité. Il peut peut être empaqueté en .jar sans trop faire de configurations.

### Qu’est ce que Spring  Boot  ? Quels sont les points communs/différences entre JEE et Spring Boot  ?

SpringBoot est une étape avancée qui se trouve sur la couche de IO Execution la couche de Spring IO Framework et est basé sur toute les fonctionnalités de Spring.

Points communs:

Différences:

### Qu’est ce  qu’une annotation  ? Quels apports présentent les Annotations  ?

Les annotations permettent d'attacher des métadonnées aux classes, interfaces et membres ainsi que de paramétrer des composants métiers et techniques.

L'utilisation d'annotations apportent une simplification majeure au niveau des fichiers de configuration en plus des simplifications apportées avec Spring Boot

### Comment fait-on pour créer un Web Service Rest avec Spring Boot  ?

Afin de créer un Web Service Rest avec Spring Boot, on créé un modèle de base de données dans un projet Spring, puis ajouter un controller avec l'annotation @RestController qui va prendre en charge la requête et l'annotation @RequestMapping, qui va faire le mapping entre la méthode qui suit et le chemin indiqué.

### Qu’est ce qu’un container de Servlet  ? Comment fonctionne un container de Servlet  ?

Un container de servlet est un conteneur web qui exécute des servlets, c'est-à-dire une classe en Java qui permet de créer dynamiquement des données dans un serveur HTTP.

Un servlet a trois étapes:
- La création
- l'initialisation
- La destruction
