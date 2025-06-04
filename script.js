/*const { createElement } = require("react");*/

function getData() {
   fetch('data.json')
     .then((response) => {
       if (!response.ok) {
         throw new Error('Network response was not ok');
       }
       return response.json();
     })
     .then((data) => {
       // Traitez les données comme vous le souhaitez
       console.log('Données récupérées du fichier JSON :', data);
       /// ON ECRIT LE CODE ICI ! 
let journal = data.journal;
console.log(journal);

/*nav: logo, nom ...*/


/*Header - Nom Journal , Phrase Accroche*/

/*let header = document.getElementById('header');
console.log(header);

let nomJournal = document.createElement('h2');
nomJournal.textContent = data.journal.nomJournal;
header.appendChild(nomJournal);

let phraseAccroche = document.createElement('h1');
phraseAccroche.textContent = data.journal.phraseAccroche;
header.appendChild(phraseAccroche);

let texteAppelAction = document.createElement('href');
texteAppelAction.textContent = data.journal.texteAppelAction;
header.appendChild(texteAppelAction);*/

/*SectionA Article Plus Récent*/

let sectionArticleRecent = document.getElementById('sectionArticleRecent')
console.log(sectionArticleRecent);

/*Créer carte article recent*/

let carteArticleRecent = document.createElement('div')
carteArticleRecent.className = "carteArticleRecent";



let imageArticle = document.createElement('img')
imageArticle.src = journal.articlePrincipal.image
imageArticle.alt = journal.articlePrincipal.titre
carteArticleRecent.appendChild(imageArticle)

let titleArticle = document.createElement('h2')
titleArticle.textContent = journal.articlePrincipal.titre
carteArticleRecent.appendChild(titleArticle)

let themeArticle = document.createElement('h3')
themeArticle.textContent = journal.articlePrincipal.theme
carteArticleRecent.appendChild(themeArticle)

let dateArticle = document.createElement('h3')
dateArticle.textContent = journal.articlePrincipal.date
carteArticleRecent.appendChild(dateArticle)

let descriptionArticle = document.createElement('p')
descriptionArticle.textContent = journal.articlePrincipal.description
carteArticleRecent.appendChild(descriptionArticle)

let boutonArticle = document.createElement('button')
boutonArticle.textContent = "Lire l'article"
carteArticleRecent.appendChild(boutonArticle)


sectionArticleRecent.appendChild(carteArticleRecent)

console.log(sectionArticleRecent);

/*SectionB Autres Articles*/

let sectionArticles = document.getElementById('sectionArticles')
console.log(sectionArticles);

/*Boucle Autres Articles*/

data.journal.articles.forEach(article => {

/*Créer carte article*/

let carteArticle = document.createElement('div')
carteArticle.className = "carteArticle";




let imageArticle = document.createElement('img')
imageArticle.src = article.image
imageArticle.alt = article.titre
carteArticle.appendChild(imageArticle)

let textDiv = document.createElement('div')
textDiv.className = "textDiv";

let titleArticle = document.createElement('h2')
titleArticle.textContent = article.titre
textDiv.appendChild(titleArticle)

let themeArticle = document.createElement('h3')
themeArticle.textContent = article.theme
textDiv.appendChild(themeArticle)

let dateArticle = document.createElement('h3')
dateArticle.textContent = article.date
textDiv.appendChild(dateArticle)

let boutonArticle = document.createElement('button')
boutonArticle.textContent = "Lire l'article"
textDiv.appendChild(boutonArticle)

carteArticle.appendChild(textDiv)


sectionArticles.appendChild(carteArticle)
});



/*SectionC Découvrez Notre Equipe*/

let sectionAuteurs = document.getElementById('sectionAuteurs')
console.log(sectionAuteurs);





/*Boucle*/

data.journal.auteurs.forEach(auteur => {

/*Créer carte auteur*/
let carteAuteur = document.createElement('div')
carteAuteur.className = "carteAuteur";



let imageAuteur = document.createElement('img')
imageAuteur.src = auteur.image
imageAuteur.alt = auteur.prenomAuteur
carteAuteur.appendChild(imageAuteur)

let prenomAuteur = document.createElement('h3')
prenomAuteur.textContent  = auteur.prenom
carteAuteur.appendChild(prenomAuteur)

let typeExAuteur = document.createElement('p')
typeExAuteur.textContent = auteur.typeExperience
carteAuteur.appendChild(typeExAuteur)

let presentationAuteur = document.createElement('p')
presentationAuteur.textContent = auteur.presentation
carteAuteur.appendChild(presentationAuteur)


sectionAuteurs.appendChild(carteAuteur)
});  
  




 
 
 
 
  
  
  
  
  
  

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici