## Mastermind

- [Lier le JS / CSS avec l'HTML](#lier-le-js-css-avec-l-html)
- [flexbox](#flexbox)
- [grid](#grid)
- [var](#var)

---

## LIER HTML & CSS <a id="lier-le-js-css-avec-l-html"></a>

> Connecter la feuille de style CSS et le script JS avec la page HTML

```html 
<link rel="stylesheet" href="__style.css" />
```

```html 
<script src="__script.js" defer></script>
```

# CSS

## RESET

> Reinitialisation des propriétés CSS par défaut

```css 
html,
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  box-sizing: border-box;
  margin: 0;
}
```

## IDENTIFIER UN ÉLÉMENT

### ID / CLASSE / ATTRIBUT

> Identifier un élément grâce à son ID ou à sa classe ou à son attribut

```html 
<!-- HTML -->
<div id="value"></div>
<div class="value"></div>
<div data-color="value"></div>
```

```css 
/* CSS */

/* CLASS */
.value {
}

/* ID */
#value {
}

/* ATTRIBUT */
[data-color="value"] {
}
```

### TAILLES

> Utiliser des tailles relatives

```css 
html {  
  /* valeur par défaut pour 1rem */
  font-size: 16px;
}

.class-name {
  /* Prend la taille par défaut (16px) */
  font-size: 1rem;
}
```

> Valeur relative au parent

```css 
.class-name {
  font-size: 1em;
}
```

> Valeur absolue

```css 
.class-name {
  font-size: 16px;
}
```

> Valeur relative à l'écran

```css 
.class-name {
  font-size: 1vw;
}
```

> Valeur relative à l'élément parent

```css 
.class-name {
  font-size: 100%;
}
```

### VARIABLES CSS

```css 
:root {
  --black: #334155;
  --blue: #3b82f6;
}
```

```css 
.class-name {
  color: var(--blue);
  background: var(--dark);
}
```

### GRID & FLEXBOX

```css 
.flex-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
}
```

```css 
.grid-container {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 0.25rem;
}
```

# JS

## CONSOLE LOG

> Afficher un message dans la console

```javascript 
console.log(value)
```

## VARIABLE JS

### DECLARATION

> Définir une variable assignable

```javascript 
let myVar;
```

> Définir une variable constante

```javascript 
const myConst;
```

### TYPE

> Une variable peut avoir plusieurs types

```javascript 
let number = 1000;
let string = "Hello";
let boolean = false;
let empty = null;
```

### ASSEMBLER DES DONNÉES

> Combiner des variables

```javascript 
const color = 'rouge';
const colorPosition = 1;

const concat = 'Ma couleur est ' + color + ' à la position ' + colorPosition;

console.log(concat);
// return :Ma couleur est rouge à la position 1,
```

## TABLEAU

> Créer un tableau

```javascript 
const userName = "Rémi Fernandez";
const userAge = 24;
const userIsTall = false;

let userArray = [userName, userAge, userIsTall];

console.log(userArray);
// return : ["Rémi Fernandez", 24, false]
```

## OBJET

> Créer un objet

```javascript 
let userObject = {
    age: userAge,
    name: userName,
    isTall: userIsTall,
}
```

## IDENTIFIER UN ÉLÉMENT HTML
> Récupère l’élément HTML d’une balise en fonction d’un ID ou d’une classe. Possibilité de récupérer plusieurs éléments qui ont la même classe
```javascript 
// récupérer le premier élément par sa class
const elementID = document.querySelector('.element')

// récupérer plusieurs éléments par leurs class
elementClass = document.querySelectorAll('.element')

// récupérer un élément par son ID
const elementID = document.querySelector('#element')
```

## DÉTECTER UN CLICK
> Détecter un click sur un élément
```javascript 
element.addEventListener("click", () => {
    console.log("clicked")
})
```
