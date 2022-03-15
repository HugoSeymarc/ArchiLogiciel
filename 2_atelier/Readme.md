# Rendu 

LIEN REPO GIT : https://github.com/HugoSeymarc/ArchiLogiciel

---

    Membres du groupe :
    -   ALBOUY Leo
    -   SEYMARTC Hugo
    -   DIB Nassim
    -   DE IULIIS Lorenzo

Eléments réalisés du cahier des charges :

    - Web server avec springboot
    - Service Rest Full
    - Front HTML/JS
    - Création d’utilisateur et connexion
    - Achat/vente de cartes sur la plateforme

Eléments non-réalisés du cahier des charges :

    - La création de l'utlisateur se fait côté serveur

Eléments réalisés en plus du cahier des charges :

    -/-

# Serverweb

Lancer le serveur web depuis la racine /front :
php -S 127.0.0.1:8081

# API

## User

| Routes  | Method | Paramètres |
|---------|--------|-----------|
| addUser | POST   |           |
| getUser | GET    | userId    |

## Card

| Routes      | Method | Paramètres |
|-------------|--------|-----------|
| addCard     | POST   |           |
| getCard     | GET    | cardId    |
| getCards    | GET    |           |
| getUserCard | GET    | userId    |

## Authentification

| Routes      | Method | Paramètres |
|-------------|--------|-----------|
| login       | POST   | userName, password|

## Market

| Routes      | Method | Paramètres |
|-------------|--------|-----------|
| buy         | POST   | userId, cardId|
| sell        | POST   | userId, cardId|


# Architecture 

<img src=./archi.png>


# Tableau Comparatif des Architectures

|                           |MVC  |SOA  |Microservices  |
|---------------------------|-----|-----|---------------|
|**Architecture**           |Architecture simple contenant un modèle pour le backend, une vue pour le frontend, et un contrôleur pour faire le lien entre le modèle et la vue      |Conçue pour partager les ressources entre les services     |Conçue pour accueillir des services pouvant fonctionner de manière autonome               |
|**Partage de composants**  | Implique le partage de composants    |Implique souvent le partage de composants     |N'implique généralement pas de partage de composants               |
|**Granularité**            |Services minimes     |Services grands et meilleure modularité     |Services affinés               |
|**Stockage de données**    |Le stockage se fait dans le modèle, par exemple dans un tableau créé dans le modèle     |Implique le partage du stockage des données entre les services     |Chaque service bénéficie d'un stockage de données indépendant               |
|**Gouvernance**            |Nécessite une collaboration entre équipes     |Protocoles de gouvernance communs entre équipes     |Nécessite une collaboration entre équipes               |
|**Taille et portée**   | Pour les intégration à grande échelle    |Pertinent pour les intégrations à grande échelle     |Pertinent pour des applications de petite taille, basées sur le web               |
|**Communication**        |Communiquer par le biais d'un Contrôleur     |Communiquer par le biais d'un ESB     |Communiquer par le biais d'une couche API               |
|**Couplage et cohésion**          |S'appuie sur des ressources externes     |S'appuie sur un partage des ressources     |S'appuie sur un contexte délimité pour le couplage               |
|**Services à distance**   |Utilise REST     |Utilise des protocoles comme SOAP et AMQP     |Utilise REST et JMS               |
|**Déploiement**    |Déploiement moyennement flexible     |Moins de flexibilité dans le déploiement              |Déploiement rapide et facile

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

Une application classique Entreprise Java Application est une spécification pour la plate-forme Java d'Oracle, destinée aux applications d'entreprise qui définit une plate-forme pour héberger et exécuter les applications, une suite de tests afin de vérifier la compatibilité, une réalisation de référence ainsi qu'un code script. Elle facilite le développement en architecture distribuée.

### Qu’est ce que Spring  ? qu’apporte Spring boot vis-à-vis de Spring  ?

Spring est un framework open source qui permet de définir et construire  l'infrastructure d'une application java et faciliter le développement de cette application.

SpringBoot permet d'éviter à l'utilisateur une répétition de code similaire en rassemblant toutes les dépendances dans un seul paquets, évitant de devoir appeler les dépendances séparément et optimise donc la productivité. Il peut peut être empaqueté en .jar sans trop faire de configurations.

### Qu’est ce que Spring  Boot  ? Quels sont les points communs/différences entre JEE et Spring Boot  ?

SpringBoot est une étape avancée qui se trouve sur la couche de IO Execution la couche de Spring IO Framework et est basé sur toute les fonctionnalités de Spring.

Comparaison avec JEE:
 - SpringBoot est open-source, alors que Java EE est licensié par Oracle
 - Java EE est utilisé pour le développement web alors que Spring Boot est utilisé pour du templating
 - Java EE est plus rapide
 - Spring Boot est basé sur 20 modules alors que Java EE est basé sur web

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

## Expliquer  la philosophie «  Convention over Configuration  » de Spring boot  ?

La philosophie de Spring Boot est de limite le temps passé dans les tâches chronophages et à faible valeur ajoutée comme la création des Entity, des CRUD, et plutôt se concentrer sur l’écriture des méthodes fonctionnelles qui permettent à l'application de fonctionner. 

## Expliquer ce qu’il se passe lors de l’exécution  «SpringApplication.run(App.class,args)  »

La classe SpringApplication, qui contient la méthode SpringApplication.run(App.class,args) de Spring Boot est utilisée pour amorcer et lancer une application Spring à partir d'une méthode principale Java. Cette classe crée automatiquement l'ApplicationContext à partir du classpath, analyse les classes de configuration et lance l'application.

## Qu’est ce qu’un DAO  ? En quoi est-ce intéressant d’utiliser ce pattern  ? Qu’est ce qu’un Singleton  ? Que permet de réaliser les Entity dans Spring boot  ? Est-ce spécifique à SpringBoot  ?

Le pattern DAO (Data Access Object) est un pattern qui permet d'isoler la couche application/métier de la couche de persistance (généralement une base de données relationnelle) à l'aide d'une API abstraite.
Il est intéressant d'utiliser ce pattern car cela permet aux deux parties de fonctionner sans savoir visibilité nécessaire sur l'autre. ce système occulte également toute la complexité de l'utilisation de méthodes de CRUD.

Un Singleton est un algorithme qui ne s’exécute qu'une seule fois. 

Les Entity représentent les Tables dans la base de données, elles contiennent les méthodes utilisées et les données. 
Ce n'est pas spécifique à SpringBoot, le même principe est retrouvé dans la plupart des langages de POO (Programmation Orienté Objet). 

## Combien d’instances avez-vous crées lors de l’usage de «Service  » en Spring  boot? Pourquoi  ?

Nous avons créer 4 instances car nous avons 4 services.

## Que fournit le CRUD Repository de Spring boot  ? Que sont les CRUD  ?

Le CRUD Repository fournit, une fois un mini cahier des charges remplis, les classes correspondantes au requêtes de bases nécessaire pour Create, Read, Update, Delete dans les entités Java. 
Les CRUD sont des méthodes qui contiennent des requêtes SQL permettant de travailler avec la base de données. 

## Qui réalise l’implémentation de la méthode findByProperty lors de la création d’un repository en  Spring Boot  ?

Les méthodes CRUD, dont findByProperty, sont instanciées par SpringBoot.

## Comment gère -t-on les relations One To One, One to Many et Many to Many avec JPA ?

Les relations 1-1 sont mises en place avec "@OneToOne",  L’annotation @OneToOne implique que la table contient une colonne qui est une clé étrangère qui fait référence à une colonne d'une autre table. Dans le cas d'une liaison 1-1 cela veut dire qu'une donnée de la colonne A de la table A fait référence à au plus 1 élément de la colonne B de la table B.

Les relations One to Many sont un mise en place avec "@OneToMany", l'annotation @OneToMany veut dire que les tables contiennent une colonne clé étrangère qui fait référence à une colonne d'une autre table. Dans le cas d'une liaison 1-N nous avons une donnée de la colonne A de la table A qui fait référence à une ou plusieurs colonnes de la colonne B de la table B 

Les relations Many to Many sont un mise en place avec "@ManyToMany", l'annotation @ManyToMany veut dire que les tables contiennent une colonne clé étrangère qui fait référence à une colonne d'une autre table. Dans le cas d'une liaison N-N nous avons une ou plusieurs donnée de la colonne A de la table A qui fait référence à une ou plusieurs colonnes de la colonne B de la table B.

## Qu’est ce qu’une Architecture SOA ? Qu’est ce qu’une architecture Micro Service ? Il y a-t-il d’autres architectures existantes ? Quels sont leurs avantages/inconvénients ?

Une architecture SOA est une architecture applicative orientée services, son objectif est d'avoir une forte cohérence interne entre les différents services utilisés. 
De son coté l'architecture Micro Service permet d'avoir plusieurs services avec un faible couplage, qui utilisent des APIs pour communiquer. 
Il existe par exemple l'architecture centrée sur les données, ou l’élément central est le un serveur de données et un SGDB (Système de Gestion de Bases de Données.
Cette architecture a comme force son utilisation de données simple et efficace mais par contre va placer les services et le "cœur" du projet un peu derrière en performances et utilisation. 
