# REACT COURSE

This repository will explain all the react important knowns that u will have to get.

## Vite

We will use `npm create vite@latest` to begin our react proyect

then we will write the proyect name, in this case `hello-world`.

Also we must to select `React` freamwork and `JavaScript + SWC` variant

Finally if we want to run it, we must to go to the proyect folder: `cd ${Proyect name}`

Then install all depencences `npm install`

Finally run it `npm run dev`

### Files

There are some files that we don't need to have, something like `App.jsx, index.css, App.css`

Put the css and js files in assets folder is a good practice to have the proyect organizated

### Components

We can create components only in PascalCase using for example
`const Button({text, className, id, onClick}) = <button className={className} id={id} onClick={onClick}>{text}</button>`

then, we can create all buttons that we want only setting `<Button text={Button} id={id} onClick={function}`

All the components that u create, is recomended that put those in the src folder, like `Components`

## Folder and files organization

If we have our proyect organized, it will be more readable to others and for us. So we should have the folder ./src with something like this

assets/---
---img/
---index.css
---welcome.css
---header.css

components/---
---UI/---Button.jsx / ---Input.jsx
---Layouts/---Header.jsx / ---Footer.jsx

pages/---
---TwitterCard.jsx
---Welcome.jsx

utils/---
---mainFunctions.js

App.jsx---

main.jsx---

In Conclusion

- `assets` = Contains global styles and images.
- `components` = Reusable UI and Layout components.
- `pages` = Different pages that we use.
- `utils` = differents functions that we will use in all the app.
- `App.jsx` = The main component that route and manage all global components.
- `main.jsx` = The component that render the App component to the DOM.

## Submit proyect

if we want to submit any proyect, we will need to log in some platform like `vercel, netlify and others`

In this case, we will use vercel.

In the Home page, on the topRight, we must to press the `add new...` button and select `proyect`.
After that, you need to import the proyect that u want, select in `Framework Present` input `Vite`.
And then, in the Root directory, we put the folder that we have our proyect. if the proyect is not in any folder we must to set it as default.

Finally press deploy and confirm all.

