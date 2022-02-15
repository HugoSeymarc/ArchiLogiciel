# Rendu 

---

    Membres du groupe :
    -   ALBOUY Leo
    -   SEYMARTC Hugo
    -   DIB Nassim
    -   DE ULIIS Lorenzo

Eléments réalisés du cahier des charges :

Eléments non-réalisés du cahier des charges :

Eléments réalisés en plus du cahier des charges :

---



## Qu’est-ce que le pattern MVC ? Quels avantages présente-t-il ?

Le pattern MVC est une façon d’organiser le code en 3 piliers :

- Le Model, qui représente la structure des données

- La View, qui représente l’interface graphique qui sera utilisé et vue par le client

- Le Controller, qui fait le lien entre le Model et la View et implémente les changements dans la View dans le Model.

  

Ce pattern permet une bien meilleure organisation du code en le fragmentant en fonction du rôle qu’il a (graphique, structure de données, lien entre les deux…) et par conséquent une meilleure gestion des erreurs dans le codes. Par exemple, si une erreur survient dans l’affichage de l’interface, il faudra chercher dans la partie View pour régler le problème.

  

## Qu’est-ce que le Web dynamique ? pourquoi est-il intéressant ?

Le Web dynamique permet de faire des changements au site qui serons automatiquement mis à jour aux yeux d’un utilisateur ainsi que permettre à ce dernier de pouvoir interagir avec le site en envoyant et recevant par exemple des messages.

Le Web dynamique est utile lorsque les développeurs veulent mettre en permanence des mises à jour sur leur site et permettre l’enregistrement de données fournit par un client dans une base de données.


## Comment sont récupérés les fichiers par le Web Browser en Web statique ? Quels sont les avantages d’utiliser du Web Statique avec des services REST ?

Dans le cas d’une récupération de fichier en Web statique, le client envoie une requête au serveur pour demander le fichier HTML  et le serveur lui répond en lui envoyant le fichier demandé par le client. Si le fichier ne peut pas être envoyé, le serveur renvoie alors un message erreur détaillant la cause de l’erreur.

Utiliser le web statique avec des services REST permet d’utiliser les données récupérées pour ajouter du contenu sur la page web de notre site.



## Qu’est que les architectures N-Tiers ? Quelles avantages apportent-elles ?

Les architectures N-tiers sont losqu’une application est organisée en un empilement de N couches logicielles. Par exemple, une architecture à 3 niveaux comportent :

- Niveau 1: Présentation

- Niveau 2: Services métier

- Niveau 3: Persistance

  

les avantages de ces architectures permettent une distribution plus simple ainsi qu’une facilité accrue de mises à jour. Elle permettent également d’accroitre la sécurité en décentralisants les données dans d’autres serveurs.

## Comment fonction l’AJAX  ? 

AJAX est une technique pour créer des applications Web plus rapides et plus interactives. Elle consiste à envoyer une requête asynchrone par la création d’un objet XMLHttpRequest et de gestionnaires d’évènements pour prendre en charge la réponse du serveur, puis initialiser la requête en choisissant le mode d’envoi de données et l’URL à renseigner, puis finalement envoyer cette requête
 

## Qu’est-ce que JEE ? Comment fonctionne un serveur JEE ? Qu’est-ce qu’un Web Container en JEE ?

JEE (Java Entreprise Version) est la version d’entreprise de java qui est composé de l’environnement JSE ainsi que de nombreuses API et d’autres composant permettant une utilisation côté serveur. Elle fournit une gammes de services robustes et documentés ainsi que d’une facilitation de programmation pour le développeur.

Un serveur JEE gère et délègue les requêtes et les réponses. Il permet notamment de faciliter la mise en place d’une application sous le modèle MVC. 

Un Web Container en JEE est la partie ou les informations web classiques comme le js, le css et le html sont stockés. Il contient également des informations web compilées (JSP) ainsi que des métadonnées.

  

## Qu’est ce que Springboot ? quelles différences avec JEE ?

Springboot est un framework conçu pour simplifier le démarrage et le développement de nouvelles applications en évitant au développeur de redéfinir la même configuration à plusieurs endroits du code.

Sur Springboot, il est plus facile et plus rapide de déployer des API de web services alors que sur JEE, le déploiement des API de web services est plus complexe.


## Qu’apporte Thymeleaf à Springboot ?

Thymeleaf apporte à Springboot un moteur de templating qui peut être utilisé pour remplacer JSP. Il permet de travailler à la fois sur la View et sur le Model.


## Que signifie l’annotation @Controller, pourquoi est-elle importante lors de la génération de pas coté serveur ?

L’annotation @Controller indique à Springboot que la classe qu’elle précède interceptera les requêtes HTTP. Elle est important dans la génération de pas côtés serveur car elle permet à Springboot de prendre en charge son cycle de vie.


## Que représente le répertoire ‘src/main/resources’ dans un projet SpringBoot ? Quelles sont les informations stockées à cet endroit ?


Le répertoire ’src/main/resources’ est la ou se trouvent toutes les ressources qui sont nécessaires pour le développement d’une application. Ce répertoire contient les fichiers css, les fragments de codes, les fichiers js, les images et les fichiers HTML.
