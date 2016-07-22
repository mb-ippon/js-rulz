# js-rulz

Démo pour une présentation du développement JavaScript. Basé sur Eslint, Mocha, Chai, sinon, enzyme, React, Babel, Webpack...

# Configuraton

### Node

Node est requis en version 4.x.x ou plus. A installer depuis le site de [node](https://nodejs.org)

### Bower

Bower est requis et à installer avec npm en exécutant :

    npm install bower -g

## Installation des dépendances

Pour les dépendances de dev, exécuter :

    npm install

Pour les dépendances du front, exécuter :

    bower install

# Scripts

### Serveur de développement

Browsersync est utilisé pour exposer l'api Back-end et les ressources statiques de l'application. Pour le lancer, exécuter :

    npm start

Pour configurer le serveur, se référer à la documentation de [browsersync](https://www.browsersync.io/)

### Analyse de code

Eslint est utilisé pour analyser le code JavaScript de l'application. Pour le lancer, exécuter :

    npm run lint

Pour la documentation d'Eslint, se référer au [site web](http://eslint.org/)

### Tests unitaires

Mocha est utilisé pour analyser le code JavaScript de l'application. Pour le lancer, exécuter :

    npm test

Pour la documentation de Mocha, se référer au [site web](http://mochajs.org/)
