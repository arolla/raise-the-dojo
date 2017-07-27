# 1. Notion de Kata
Le premier kata sert à introduire la notion de coding dojo et de Kata. 
En tant que crafstman, nous avons tendance à être entourés de gens aguéris et familiers du concept. Ce n'est en général pas le cas lorsque l'on effectue une prestation de coaching.
La notion de coding dojo et de kata peut paraitre étrange pour certaines personnes, voir inutile. L'idée est d'ammener le sujet en douceur sans braquer personne.
Les principales réticences sont souvent: 
- Implémenter des fonctionalités fantaisistes (sans enjeux prod)
- Ecrire des tests
- Faire du TDD
- Faire du pair programming

Les objectifs de la premiére session sont donc:
- De Prendre la température. On regarde d'où on part, si les gens savent faire des tests,ect
- Elle ne doit pas être trop distruptive (ne pas braquer l'auditoire). Par exemple un code-retreat peut se frotter à des réticences concernant la suppression du code toutes les 20 minutes (en plus du reste). 
- L'artsan travaille avec sa tête, l'artiste avec son coeur. Le coding dojo sert aussi à expérimenter, se faire plaisir, à se laisser aller à son côté artiste.
- c'est un espace de bienveillance.
- L'objectif est aussi de pouvoir échanger sur son code ou celui de son voisin.

Il faudra donc commencer avec un kata simple et l'animer de manière à ne pas faire rentrer trop de nouvelles notion d'un coup.
A l'image de la 1ere section de maternelle: l'enfant n'acquiére que peu de connaissances, il est surtout là pour apprendre la vie en collectivité.

katas:
Refactoring par exemple (codebase existante, on se concentre sur l'écriture de tests).
Le kata Rental-Movie se prête bien au jeu.


# Points de départ
Si besoin d'apprendre le language (rare): Les Koans ou un site comme exercism.io sont très pratiques.
découvrir les tests: refactoring de code legacy: on se concentre sur l'écriture de tests.
découvrir TDD: L'interface utilisée doit être simple: types primitifs en entrée/sortie par exemple, et ce afin de ne pas se bloquer: TDD souvent dur à commencer si l'on est pas dans l'état d'esprit. 
        exemple: Roman numerals, FizzBuzzz,LeapYear,TennisGame,PrimeFactor. Choisir un kata où l'écriture de
        
# Légitimité
On peut se sentir illégitime en animant un coding dojo, et penser qu'il faut absolument être meilleur que les coachés pour avoir le droit d'être là: c'est faux.
Premièrement, le fait d'être là est déjà une valeur en soit: cela force les gens à tenir la cadence du kata, sinon le créneaux saute une ou deux fois puis l'initiative meurt.

Ensuite, il s'agit d'animer et donc faciliter: Le coaché est acteur, et les coachés peuvent s'apprendre mutuellement des choses. Notre rôle est donc aussi de faciliter l'échange au sein du groupe.

De plus, il est souvent possible dès la première scéance que chacun reparte en ayant appris quelque chose, que ce soit:
- un nouveau raccourcis clavier
- l'activation du coverage
- la difference entre branch coverage et line coverage
- une lib utile pour les tests (mockito, assertJ, ect)

Si c'est un kata d'exploration où personne dans la salle ne paitrise le sujet, possibilité de faire du mob-programming afin d'avancer ensemble.

# Péréniser

# Amplifier
Katas plus riches, pour pouvoir travailler principes SOLID, TU as documentation, varier les sujets
Trivia, RPN, game of life, Mars Rover, Poker, TripService, FruitShop, GildedRose...

# TDD avancé : Inside out/outside in
Il s'agit de voir les mock, de traverser les API.
coffee machine, Pandémie vs Kahuna

# Build your tools
Mieux comprendre ses outils en les recodants. Les problématiques sont de plus souvent intéréssantes:
- calcul de compléxité cyclomatique
- LCOM4
- code coverage
- coder une hashmap
- suppression de commentaires
- tag cloud

# build your product

