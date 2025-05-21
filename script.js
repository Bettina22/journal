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

let nomJournal = Document.createElement

      
let divHeader = document.createElement('header');
let divTitre = document.createElement('div');
let divTheme = document.createElement('div');

divTitre.className ='divTitre' 
  
  
  
  
  
  

  
  
  

      

       /// FIN DU CODE
     })
     .catch((error) => console.error('Erreur lors de la lecture des données :', error));
 }
 
 getData();

 ///ON écrit les fonctions ici