# web-gen-bot

GAN to gen web pages

# Tasks

- Download the home page of all the major english news sites twice a day
- Train a network with this data. Input is a string of varying length: the value of `document.body.innerhtml` this value will be read on the event DOMContent​Loaded 

- Generate a "news" website

Aims

- Generate text, html, and if possible css (or inline styling)
- The sire will be rendered with using no more than 2000 characters

# to run

- `npm run build` or `npm run watch` (frontend)
- `cd node_test & npm start` (backend)
- open index.html in the browser
