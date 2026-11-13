// Déclaration de l'array contenant les données de navigation
let nav_content = new Array(
    {id_nav:0, link:"index.html", name:"Accueil", img_path:"Images/Logos/home.png"},
    {id_nav:1, link:"https://github.com/Skyro-source", name:"Github", img_path:"Images/Logos/github_PNG40.png"},
    {id_nav:2, link:"HTML/competences.html", name:"Compétences", img_path:"Images/Logos/outils-dedition.png"},
    {id_nav:3, link:"HTML/cv.html", name:"CV", img_path:"Images/Logos/embauche.png"},
    {id_nav:4, link:"HTML/parcours.html", name:"Parcours", img_path:"Images/Logos/itineraire.png"},
    {id_nav:5, link:"HTML/certifications.html", name:"Certifications", img_path:"Images/Logos/etoile.png"},
    {id_nav:6, link:"HTML/projets.html", name:"Projets", img_path:"Images/Logos/gestion-de-projet.png"},
    {id_nav:7, link:"HTML/stage.html", name:"Stages", img_path:"Images/Logos/internship.png"},
    //{id:8, link:"HTML/epreuve_e5.html", name:"Epreuve E5", img_path:"Images/Logos/notepad.png"} SOUS RENOVATION
);

const current_page = document.getElementById("current_page").value; // Récupère l'ID de la page
const nav = document.getElementById("side_nav"); // Récupère le div dans lequel seront le panneau de navigation

// Créé les lien dans le div
function renderNavItem(c) {

    // Vérifie si l'élément à remplir est le même que celui de la page sur laquelle nous sommes
    if (String(c.id_nav) === String(current_page)) {
        return `
            <div class="nav_button" id="nav_active">
                <img src="${c.img_path}" alt="${c.name}" class="nav_img">
                <p id="nav_txt_active">${c.name}</p>
            </div>`;
    }

    const target = c.id_nav === 1 ? 'target="_blank" rel="noopener noreferrer"' : "";

    return `
        <a ${target} href="${c.link}" class="nav_link">
            <div class="nav_button">
                <img src="${c.img_path}" alt="${c.name}" class="nav_img">
                <p class="nav_txt">${c.name}</p>
            </div>
        </a>`;
}

const links = nav_content.map(renderNavItem).join("");

nav.innerHTML = `
    <div><h1 id="nom" align="center">POURNY JOSH</h1></div>

    <div id="nav_links">
        ${links}
    </div>

    <div><p id="copyright" align="center">© 2026 · POURNY Josh</p></div>
`;

