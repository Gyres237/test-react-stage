# Exercice de Test

Ce projet a été réalisé dans le cadre d'un test technique pour évaluer mes compétences.

L'application affiche une liste paginée d'articles depuis une API publique, inclut un système d'authentification simulé avec des routes protégées, et est entièrement testée et conteneurisée avec Docker.

## Table des Matières
1.  [Installation et Lancement](#1-installation-et-lancement)
2.  [Bibliothèques Principales](#2-bibliothèques-principales)
3.  [Tests](#3-tests)
4.  [Exécution avec Docker](#4-exécution-avec-docker)


## 1. Installation et Lancement

Instructions pour faire fonctionner ce projet en local.

### Prérequis

*   Node.js (version 20 ou supérieure recommandée)
*   npm (version 10 ou supérieure)

### Étapes d'installation

1.  **Clonez le dépôt :**

    git clone https://github.com/Gyres237/test-react-stage.git

2.  **Naviguez jusqu'au répertoire du projet :**
    cd app-react

3.  **Installez toutes les dépendances requises :**
    npm install

### Lancement du serveur de développement

Pour lancer l'application en mode développement, exécutez la commande suivante :
```bash
npm run dev
```
L'application sera alors accessible à l'adresse **http://localhost:5173** (le port peut varier).

## 2. Bibliothèques Principales

Ce projet utilise les bibliothèques suivantes pour ses fonctionnalités clés :

*   **React Router DOM** : Pour la gestion de la navigation et du routage entre les différentes pages de l'application.
*   **Axios** : Pour effectuer les requêtes HTTP vers l'API REST de manière simple et efficace.

## 3. Tests

Le projet est couvert par une suite de tests unitaires pour garantir la fiabilité du code.

### Outils de Test

*   **Framework :** Jest
*   **Bibliothèques :** React Testing Library, `@testing-library/jest-dom`

### Exécution des tests

Pour lancer la suite de tests complète, exécutez la commande :
```bash
npm test
```
Un rapport détaillé des tests s'affichera dans le terminal, confirmant le succès de l'exécution pour la fonction utilitaire, le hook personnalisé et le composant React testés.


## 4. Exécution avec Docker

Ce projet peut être construit et lancé via Docker, sans avoir besoin d'installer Node.js sur la machine hôte.

### Prérequis

*   Docker doit être installé et le daemon en cours d'exécution.

### Étapes

1.  **Construire l'image Docker**

    À la racine du projet (`app-react`), exécutez la commande suivante :

    docker build -t test-react-app .

2.  **Lancer un conteneur**

    Une fois l'image construite, lancez un conteneur avec cette commande :
    
    docker run --name mon-app-react -d -p 8080:80 test-react-app


3.  **Accéder à l'application**

    Ouvrez votre navigateur et allez à l'adresse **http://localhost:8080**.