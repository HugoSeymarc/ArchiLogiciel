# Rendu 

LIEN REPO GIT : https://github.com/HugoSeymarc/ArchiLogiciel

---

    Membres du groupe :
    -   ALBOUY Leo
    -   SEYMARTC Hugo
    -   DIB Nassim
    -   DE IULIIS Lorenzo
    
    Eléments réalisés du cahier des charges par membres du groupe :
    
    -   ALBOUY Leo:
        -
        -
        -
    -   SEYMARTC Hugo
        -
        -
        -
    -   DIB Nassim
        -
        -
        -
    -   DE IULIIS Lorenzo
        -
        -
        -
    
# Composant et props :

Page Dashboard : 
- Main
- Header (props: title)
- Button

Page Room list :
- Main 
- Header (props: title)
- Button
- RoomList

Page Create Room :
- Main
- Header (props: title)
- Form
- WaitPlayer (if success)

Page Play Room :

## Before Play
- Main 
- Header (props: title)
- CardList
- Card
- Button

## Play
- Main 
- Header (props: title)
- Card
- Text

## After Play
- Main 
- Header (props: title)
- Text

# Procédure de tests unitaires

# Architecture techniques

![image](https://user-images.githubusercontent.com/47559158/169690708-9cc1a9c0-4c7d-45f5-be2d-dd3157d45a46.png)

# Plan de tests de non-regression


# Questions

### Qu’est ce que le CROSS ORIGIN  ? En quoi cela est-il dangereux  ?
Le CROSS ORIGIN est une politique de sécurité qui peut faire des requêtes HTTP afin de faire une demande à un navigateur depuis un autre navigateur en dehors du domaine. Le risque avec les CROSS Origin est qu'il peut donner au serveur le droit de communiquer avec un client sans le savoir.
### Comment REACTJS fait-il pour afficher rapidement les modifications sur les composants  ?
REACTJS peut afficher rapidement les modifications sur les composants en optimisant les performances: React fait appel à des techniques intelligentes afin de minimiser le nombre d'opérations coûteuses sur le DOM nécessaire à la mise à jour de l'interface utilisateur
### Quelle est la fonction  essentielle de REACTJS  ?
La fonction essentielle de REACTJS est la composition de composants, c'est-à-dire qu'elle permet de définir ces composants en tant que classes ou fonctions. Ces composants suivent le cycle de vie suivant:

	 -	Montage: Appel du constructeur au moment de la création, puis de l'insertion dans le DOM
	 -	Mise à jour: Déclenché par des changements dans les props ou l'état local
	 -	Démontage: Déclenché lors du retirement d'un composant du DOM

### Quelle est la fonction essentielle de FLUX  ?
La fonction essentiel de FLUX est de créer des actions lorsqu'un utilisateur clic sur un élément de la vue. Cette action va alors créer de nouvelles données et les envoyer au Dispatcher. Le dispatcher va alors répartir les résultats de l'action dans les Stores appropriés. Le store met en suite à jour la vue en fonctions des résultats.
Cette architecture est une alternative à l'architecture MVC étant plus stable et plus simple. 

### Qu’est ce que REDUX  ?
Redux est une librairie qui reprend le principe de FLUX différemment. A la place de mettre plusieurs stores, on en met un seul store centralisé qui regroupe les autres. Il possède également une fonction réductrice qui permet de décider comment les changements de données existent en fonctions pures. 

### Comment faire pour exporter un composant REACTJS  ?
Afin d'exporter un composant REACTJS, il faut utiliser le mot "export" au début de code avec le composant ciblé.
### Quelle est la différence entre un test fonctionnel et un test unitaire  ? A quoi sert la couverture de code  ?
Une test fonctionnel est une méthode permettant de tester une fonctionnalité du code alors qu'un test unitaire est une méthode pour tester les composants individuels ou les unités du code afin d'éviter les risques de bugs. Un test fonctionnel aura tendance à prendre plus de temps a exécuter qu'un test unitaire en plus d'utiliser optionnellement des dépendances externes.
### Qu’est ce qu’un test de non régression  ? à quoi sert-t-il  ?

Un test de non-régression consiste à vérifier que l'implémentation de nouvelles fonctionnalités n'aura pas d'effets sur les fonctionnalités déjà existantes. Il sert à réduire les risques projet ainsi que de mesurer l'impact des  nouveaux développement et de nouvelles infrastructures sur le logiciel testé.
### Expliquer le principe de  développement «  test driven  »  ?
Le "test driven" est une technique de développement qui consiste à concevoir un logiciel par petites étapes, de façon progressive. Elle consiste à faire des tests à chacune de ces dites étapes pour mieux savoir l'origine d'un éventuel problème
### Quels intérêts présentent les micros services comparés aux architecture SOA  ?
Les micros services permettent de mettre en places des services séparément qui peuvent fonctionner en toute indépendance, permettant ainsi de fragmenter complètement le logiciel en question, là ou une architecture SOA partage les ressources à travers les services d'un même logiciel.
### Quelles sont les différences entre les micros services et le SOA  ?  Quel intérêt présente l’usage de docker et des micro-services  ?
Le SOA utilise les protocoles SOAP et AMQP pour les services à distance alors que les micros services utilisent les protocoles REST et JMS. Chaques services des micros services on leur "propre logiciel" qui communiquent entre eux là ou une architecture SOA regroupe tout les services dans un seul logiciel. 
Les micros services, comportant des services entièrement séparés, peuvent êtres mit dans des conteneurs dockers.
### Qu’est-ce que docker  ? En quoi diffère-t-il des méthodes de virtualisation dites classiques (vmware,  virtualbox)  ?
Docker permet de mettre une application dans un ou plusieurs conteneurs virtuelles, qui eux, sont des machines virtuelles très optimisés et très facile à manipuler. Contrairement eux machines virtuelles, les conteneurs docker prennent beaucoup moins de places et peuvent être ainsi misent en plus grand nombre sur une machine physique. Elles possèdes également des mises à jours réduites et simplifiés, en plus de pouvoir démarrer en l'espaces  de quelques secondes comparé aux machines virtuelles classiques qui peuvent mettre plusieurs minutes.
### Quelle organisation en équipe permet la mise en œuvre de micro services  ?
Lors de la mise en œuvre de micro services en équipe, la répartition est un service par personnes dans le cas d'un nombre de services équivalent au nombre de personnes.
### Que permet de faire l’outil Sonar  ?
Sonar est un outil de reporting sur la qualités du code source en continu. Il permet de mesurer de façon complète la qualité du code en question, fournissant des statistiques comme le nombre de lignes de code, le pourcentage de couverture de code par les tests unitaires et le nombre de violations de règles de codage.
### Qu’est ce que l’intégration continue  ? Quels avantages/contraintes présentent cette organisation  ?
L'intégration continu est une méthode consistant à importer de façon régulière des modifications sur un référentiel centralisé, typiquement pour chaque étapes d'un test de non-régressives.

Avantages:

	-	Possibilité de recherche précoce des erreurs
	-	Feedback permanent
	-	Pas de surcharge contrairement à une seule grande intégration finale
	-	Enregistrement précis des modifications
	-	Disponibilité continue d’une version actuelle opérationnelle
	-	Nécessité d’un travail progressif

Inconvénients:

	-	Conversion de processus habituels
	-	Nécessite des serveurs et des environnements supplémentaires
	-	Nécessité de mettre au point des processus de test adaptés
	-	Si plusieurs développeurs souhaitent intégrer leur code approximativement au même moment, des délais d’attente peuvent survenir
