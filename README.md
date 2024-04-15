🌍 Checkpoint GraphQL de gestion des pays 🚀
Ce projet est une API GraphQL développée avec TypeScript, Apollo Server, TypeGraphQL, SQLite et TypeORM. Il permet d'enregistrer et de lire des informations sur les pays du monde, y compris leur code, leur nom, leur emoji et leur continent.

🛠️ Installation
Cloner ce dépôt sur votre machine locale :

git clone https://github.com/votre-utilisateur/votre-projet.git
Installer les dépendances npm :
cd votre-projet
npm install
======================================================================================================
Démarrer le serveur :
npm start
======================================================================================================
Accéder à l'API GraphQL :
Ouvrez votre navigateur et accédez à l'URL suivante : http://localhost:4000/graphql

🚀 Utilisation
Ajouter un pays
Pour ajouter un nouveau pays, utilisez la mutation addCountry avec les paramètres suivants :

code: le code du pays (par exemple, "FR" pour la France)
name: le nom du pays (par exemple, "France")
emoji: l'emoji représentant le pays (par exemple, "🇫🇷")
continent: le continent auquel appartient le pays (par exemple, "Europe")
Exemple de mutation GraphQL :

mutation {
  addCountry(code: "FR", name: "France", emoji: "🇫🇷", continent: "Europe") {
    id
    code
    name
    emoji
    continent
  }
}

Lire la liste des pays
Pour obtenir la liste de tous les pays enregistrés, utilisez la requête GraphQL suivante :

query {
  countries {
    code
    name
    emoji
    continent
  }
}

Lire les détails d'un pays spécifique
Pour obtenir les détails d'un pays spécifique en fonction de son code, utilisez la requête GraphQL suivante :

query {
  country(code: "FR") {
    code
    name
    emoji
    continent
  }
}

Lire la liste des pays par continent
Pour obtenir la liste des pays appartenant à un continent spécifique, utilisez la requête GraphQL suivante :

query {
  countriesByContinent(continent: "Europe") {
    code
    name
    emoji
    continent
  }
}
