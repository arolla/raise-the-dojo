---
title: "Foo Bar Qix"
---

C'est un kata de rd'introduction de TDD "a spectre large". Il contient 3 étapes :
- faire un algo simple en respectant la discipline TDD (c'est FizzBuzz) : les 3 lois, red/green/refactor
- ajouter une tranche de fonctionnalité et profiter de cette capacité de refactoring offerte par un bon filet de sécurité
- jouter un nouveau périmètre fonctionnel qui remet votre design en cause... donc vos tests qui documentent votre design

# Le Pitch

Bienvenue pour votre premier jour chez maBoite, une compagnie qui va conquérir le monde avec une application innovante et totalement trop disruptive : un détecteur de multiple !
Si, si, ca sert vachement... à... quelque chose, on verra plus tard ;-)

# Le déroulé

il est décrit dans le repo de coulas [github.com/coulas/foobarqix], c'est un sujet à tirroir, finissez une étape avant de voir la suivante.

# Le guide d'animation
## Le Foo Bar :
C'est exctement le déroulé d'un Fizz Buzz pour une découverte de TDD.
- On écrit la classe de tests d'abord.
- Une méthode de test qui s'appelle rename_me().
- On appelle une méthode d'un code de production qui n'existe pas encore (erreur de compilation que l'on fait corriger par l'IDE)
-- un test qui ne compile pas est un test rouge, faire le minimum pour qu'il compile et il devient vert. le besoin de refctoring a ce moment est rare.
- On enrichi le test avec des prérequis pour faire un test utile. (red, green, red, green, refacto parfois utile)
- On enrichi le test avec des assertions (assertj, mon ami) pour exprimer ce que l'on attend de ce code.
- On a utilisé un exemple de valeurs valide pour ce test, il est donc specifique a un cas concret.
-- Il faut trouver un nom de tests qui décrit ce cas de manière générique, donc indépendant de l'ensemble des valeurs concrètes que l'on aurait pu utiliser
- on a un premier test, qui une fois vert peut faire l'objet d'une petite revue :
-- constantes, variables (champs/paramètres) et méthodes bien nomées ?
-- types et pattern biens adaptés ?
-- code dupliqué ?
-- trois règles du simple design

et on recomence avec les tests suivznts, sachant qu'on repart du dernier test et qu'on le fait varier pour documenter un aspect supplémentaire de la fonctionnalité.

## Le Qix :
Ce n'est que quelques tests de plus.
Et on n'a pas peur de faire plusieurs implem, etc...

## Les ocurences :
Là, on a un pb de design...
