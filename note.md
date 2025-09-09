Vous trouverez tous les codes nécessaires pour l'apprentissage react pour un niveau débutant.
First commit -> l'utilisation de useState() (react Hook)
L'utilisation de onChange (pour value -> event.target.value) // Modification en temps plein
Création et utilisation des composants

# _Second commit_/

Utilisation de useRef (suite react hook).
L'avantage de .current.value dans useRef

Modification de l'ancien code

# Commit -> Propagation

Pour arrêter une propagation, il faut faire ceci stopPropagation
On créé une fonction dans l'évenement dans onClick pour nous permettre d'arrêter la propagation de nos superheros préférés.

# Create Portal

permet de téléporter nos portails sur la racine de notre projet
createPortal(jsx, l'endroit qu'il doit s'afficher)

## Utilisation de global

_global:(h2)_
**Sytled component**
-> Il permet de mettre du contenu css dans nos composants.

# Installation

**npm install styled-components**
**Exemple en div**
const Form = styled.div`border: 1px solid black;
margin-top:15px;`
pour utiliser le styled component, on doit créer un composant

<Form></Form>
&:ohver:pseudo élement

**Erreur avec tailwind lors de l'installtion. Faut modifier les classe utilitaire**

# Utilisation de tailwind v4

pour la version 4 de tailwind, il faut installer using vite, et l'importer dans vite.config.js pour que cela marche. Pour plus d'informations, consulter la page officielle de tailwind
**@apply** qui permet d'utiliser taiwind de façon dynamique.

# Utilisation de @theme v4 tailwind

**Exemple**
@theme {
--color-neutral-100: green;
}
h1 {
text-align: center;
}\*

#

lorsqu'on dlick sur le bouton, on constate que notre page se charge. **correction**
event.preventDefault()
