# raise-the-dojo

Ce dépôt décris ce qu'est un dojo, a quoi ca sert et pourquoi vous et vos décideurs en voulez chez vous.
Notre métier change et se transforme plus rapidement que nos carrières. 
Les compétences et méthodes d'aujourd'hui ne seront pas celles demain.
Ne restez pas sur les meilleures pratiques d'hier :-)
Le mouvement Software Craftsmanship explore les pratiques en cours de découverte, diffuse les meilleures connues à ce jour.
Dans cet esprit, il existe de multiple activités comme la participations aux meetups, conférences, formations, etc.

# Animation Craft : booster votre excellence technique

Pour booster l'excellence technique des développeurs !
Un Dojo est une séance de travail en groupe sur des exercices d'entrainement pour développer notre propre excellence technique.

Il y a trois facteurs "principaux" de motivations qui touchent au salaire, à la reconnaissance des pairs et à la maitrise de son domaine.
Par les dojos, nous proposons de développer cette maitrise de l'art du développement.

# Ajout de nouveaux Katas :

- Ajoutez votre nouveau kata dans static-site/content/lessons/monKata.md
- Ajoutez la nouvelle le lien vers ce nouveau kata dans 'table_of_contents.json'

```json
    {
        "entry": "./monKata.md"
    },
```

- On teste le rendu en local :

```sh
  npm run develop
```

- Un commit et un push

```sh
    git commit -a
    git push
```

- Et enfin on deploy en live via le terminal comme ceci :

```sh
    npm run build:gh
```
