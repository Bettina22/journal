const { createElement } = require("react");

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

let sectionA = document.getElementById('sectionA');
console.log(sectionA);

let titleArticle = document.createElement('h2');
titleArticle.textContent = journal.articlePrincipal.titre;
sectionA.appendChild(titleArticle);

let themeArticle = document.createElement('h3');
themeArticle.textContent = journal.articlePrincipal.theme;
sectionA.appendChild(themeArticle);

let dateArticle = document.createElement('h3');
dateArticle.textContent = journal.articlePrincipal.date;
sectionA.appendChild(dateArticle);

let descriptionArticle = document.createElement('p');
descriptionArticle.textContent = journal.articlePrincipal.description;
sectionA.appendChild(descriptionArticle);

let imageArticle = document.createElement('img');
imageArticle.src = journal.articlePrincipal.image;
imageArticle.alt = journal.articlePrincipal.titre;
sectionA.appendChild(imageArticle);

console.log(sectionA);

/*SectionB Autres Articles*/

let sectionB = document.getElementById('sectionB');
console.log(sectionB);

/*Boucle Autres Articles*/

data.journal.articles.forEach(article => {

let imageArticle = document.createElement('img');
imageArticle.src = article.image;
imageArticle.alt = article.titre;
sectionB.appendChild(imageArticle);

let titleArticle = document.createElement('h2');
titleArticle.textContent = article.titre;
sectionB.appendChild(titleArticle);

let themeArticle = document.createElement('h3');
themeArticle.textContent = article.theme;
sectionB.appendChild(themeArticle);

let dateArticle = document.createElement('h3');
dateArticle.textContent = article.date;
sectionB.appendChild(dateArticle);
});

console.log(sectionB);

/*SectionC Découvrez Notre Equipe*/

let sectionC = document.getElementById('sectionC');
console.log(sectionC);

/*Boucle*/

data.journal.auteurs.forEach(auteur => {

let prenomAuteur = document.createElement('h3');
prenomAuteur.textContent  = journal.auteur.prenom;
sectionC.appendChild(prenomAuteur);

let typeExAuteur = document.createElement('p');
typeExAuteur.textContent = journal.auteur.typeExperience;
sectionC.appendChild(typeExAuteur);

let presentationAuteur = document.createElement('p');
presentationAuteur.textContent =journal.auteur.presentation;
sectionC.appendChild(presentationAuteur);

/*let imageAuteur = document.createElement('img');
imageAuteur.src = 
imageAuteur.alt = 
sectionC.appendChild(imageAuteur);*/
  
});








      
 
 
 
  
  
  
  
  
  

  
  
  

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici