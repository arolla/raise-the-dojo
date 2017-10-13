# 1. Notion de Kata
Le premier kata sert à introduire la notion de coding dojo et de Kata.
En tant que crafstman, nous avons tendance à être entouré de gens aguéris et familiers du concept. Ce n'est pas en général le cas lorsque l'on effectue une prestation de coaching.
Les notions de coding dojo et de kata peuvent paraître étranges pour certaines personnes, voire inutiles. L'idée est d'ammener le sujet en douceur sans braquer personne.
Les principales réticences sont souvent :
- Implémenter des fonctionalités fantaisistes (sans enjeux prod)
- Ecrire des tests
- Faire du TDD
- Faire du pair programming

Les objectifs de la première session sont donc:
- De prendre la température. On regarde d'où on part, si les gens savent faire des tests,etc
- Elle ne doit pas être trop distruptive (ne pas braquer l'auditoire). Par exemple un code-retreat peut se frotter à des réticences concernant la suppression du code toutes les 20 minutes (en plus du reste).
- L'artisan travaille avec sa tête, l'artiste avec son coeur. Le coding dojo sert aussi à expérimenter, se faire plaisir, à se laisser aller à son côté artiste.
- c'est un espace de bienveillance.
- L'objectif est aussi de pouvoir échanger sur son code ou celui de son voisin.

Il faudra donc commencer avec un kata simple et l'animer de manière à ne pas faire rentrer trop de nouvelles notions d'un coup.
A l'image de la 1ère section de maternelle: l'enfant n'acquiert que peu de connaissances, il est surtout là pour apprendre la vie en collectivité.

katas:
Refactoring par exemple (codebase existant, on se concentre sur l'écriture de tests).
Le kata Rental-Movie se prête bien au jeu.


# Points de départ
Si besoin :
- d'apprendre le language (rare): Les Koans ou un site comme exercism.io sont très pratiques.
- de découvrir les tests: refactoring de code legacy: on se concentre sur l'écriture de tests.
- de découvrir TDD: L'interface utilisée doit être simple: types primitifs en entrée/sortie par exemple, et ce afin de ne pas se bloquer: Le TDD est souvent dur à commencer si l'on est pas dans l'état d'esprit.

exemple: Roman numerals, FizzBuzzz, LeapYear, TennisGame, PrimeFactor. Choisir un kata où l'écriture de

# Légitimité
On peut se sentir illégitime en animant un coding dojo, et penser qu'il faut absolument être meilleur que les coachés pour avoir le droit d'être là: c'est faux.
Premièrement, le fait d'être là est déjà une valeur en soi : cela force les gens à tenir la cadence du kata, sinon le créneau saute une ou deux fois puis l'initiative meurt.

Ensuite, il s'agit d'animer et donc faciliter: Le coaché est acteur, et les coachés peuvent s'apprendre mutuellement des choses. Notre rôle est donc aussi de faciliter l'échange au sein du groupe.

De plus, il est souvent possible dès la première scéance que chacun reparte en ayant appris quelque chose, que ce soit:
- un nouveau raccourci clavier
- l'activation du coverage
- la différence entre branch coverage et line coverage
- une lib utile pour les tests (mockito, assertJ, ect)

Si c'est un kata d'exploration où personne dans la salle ne maîtrise le sujet, possibilité de faire du mob-programming afin d'avancer ensemble.

# Péréniser
Lorsque l'on anime des scéances sur le long terme, un essouflement peut survenir. Comment faire perdurer la flamme ? Comment se renouveller à l'infini ?

Quand doit-on arrêter ?
Idéalement jamais ! Vu que l'on a toujours une marge de progression. La seule vraie raison d'arrêter est s'il n'y a plus de plaisir (d'un côté ou de l'autre). Mais sinon certains problémes se règlent d'eux-mêmes:
- turn over des entreprises: rebelotte on recommence !
- Possibilité de refaire les mêmes katas: soit sous un angle différent, soit pour enlever de possibles frustrations
- une bonne moitié de la prestation consiste à juste être là. Nombreuses sont les entreprises qui tentent de mettre en place des katas réguliers, mais sans faire appel à un intervenant externe: L'initiative va sauter une premiére fois pour cause de probléme en prod, une seconde fois parce que la feature ne peut attendre, la 3e fois parce "j'aimerais bien débloquer mon probléme".....et on entend plus jamais parler du coding-dojo du mercredi :-/

Là vous êtes démarchés exprès, l'entreprise vous paie: même si la motivation était en berne ce jour là on ne peut vous laisser en plan, cela force à continuer et ne pas laisser tomber l'idée. On ne vous demande donc pas forcément de révolutionner le monde du coding-dojo à chaque scéance.

# Sortir du cadre

Cela n'empêche pas pour autant d'essayer de sortir du cadre.

Une piste facile pour inventer des katas est de piocher dans les jeux de société:
- Pandémie
- Quarto
- Kahuna
- Yams (revisité avec le 1000 sabords par exemple)

L'avantage des jeux de société:
- métier documenté
- prise en main rapide
- fun

# Amplifier
Katas plus riches, pour pouvoir travailler principes SOLID, TU as documentation, varier les sujets

ex: Trivia, RPN, game of life, Mars Rover, Poker, TripService, FruitShop, GildedRose...

# TDD avancé : Inside out/outside in
Il s'agit de voir les mock, de traverser les API.
coffee machine, Pandémie vs Kahuna

# Build your tools
Mieux comprendre ses outils en les recodant. Les problématiques sont de plus souvent intéréssantes:
- calcul de complexité cyclomatique
- LCOM4
- code coverage
- coder une hashmap
- suppression de commentaires
- tag cloud

# build your product
