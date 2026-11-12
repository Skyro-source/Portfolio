// Déclaration de l'array contenant les données de navigation
let content = new Array(
    {id:0, link:"https://github.com/Skyro-source", name:"Github", img_path:"../Images/Logos/github_PNG40.png"},
    {id:1, link:"competences.html", name:"Compétences", img_path:"../Images/Logos/outils-dedition.png"},
    {id:2, link:"cv.html", name:"CV", img_path:"../Images/Logos/embauche.png"},
    {id:3, link:"parcours.html", name:"Parcours", img_path:"../Images/Logos/itineraire.png"},
    {id:4, link:"certifications.html", name:"Certifications", img_path:"../Images/Logos/etoile.png"},
    {id:5, link:"projets.html", name:"Projets", img_path:"../Images/Logos/gestion-de-projet.png"},
    {id:6, link:"stage.html", name:"Stages", img_path:"../Images/Logos/internship.png"},
    //{id:7, link:"epreuve_e5.html", name:"Epreuve E5", img_path:"../Images/Logos/notepad.png"} SOUS RENOVATION
);


const current_page = document.getElementById("current_page").value; // Récupère l'ID de la page
const nav = document.getElementById("nav_links"); // Récupère le div dans lequel seront mis les liens

// Mets les lien dans le div
// Vérifie si l'élément à remplir est le même que celui de la page
nav.innerHTML = content.map(c =>`  

    ${String(c.id) === String(current_page) ? 

        `<div class="nav_button" id="nav_active">
            <img src="${c.img_path}" alt="${c.name}" class="nav_img">
            <p id="nav_txt_active">${c.name}</p>
        </div>`
        
        :

        `<a ${c.id === 0 ? 'target="_blank" rel="noopener noreferrer"' : ''} href="${c.link}" class="nav_link">
            <div class="nav_button">
                <img src="${c.img_path}" alt="${c.name}" class="nav_img">
                <p class="nav_txt">${c.name}</p>
            </div>
        </a>`
    
    }
 
`).join("");

