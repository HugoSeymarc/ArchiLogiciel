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
