// Déclaration de l'array contenant les données du head
let head_content = [
    {id_head:0, file_name:"Accueil", css_path:"../CSS/style_index.css", img_path:"../Images/Logos/home.png"},
    {id_head:2, file_name:"Compétences", css_path:"../CSS/style_comp.css", img_path:"../Images/Logos/outils-dedition.png"},
    {id_head:3, file_name:"CV", css_path:"../CSS/style_tab.css", img_path:"../Images/Logos/embauche.png"},
    {id_head:4, file_name:"Parcours", css_path:"../CSS/style_parc.css", img_path:"../Images/Logos/itineraire.png"},
    {id_head:5, file_name:"Certifications", css_path:"../CSS/style_cert.css", img_path:"../Images/Logos/etoile.png"},
    {id_head:6, file_name:"Projets", css_path:"../CSS/style_grid.css", img_path:"../Images/Logos/gestion-de-projet.png"},
    {id_head:7, file_name:"Stages", css_path:"../CSS/style_stage.css", img_path:"../Images/Logos/internship.png"}
];

const head_fillable = document.querySelector("head"); // Récupère le head
// Permet d'associer l'index de la page actuelle à un élément dans l'array
const entry = head_content.find(h => h.id_head === Number(current_page)); 

head_fillable.innerHTML = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${entry?.file_name ?? ""} - Portfolio POURNY J.</title>
    <link rel="stylesheet" href="../CSS/style_default.css">
    <link rel="stylesheet" href="${entry?.css_path ?? ""}">
    <link rel="icon" type="image/x-icon" href="${entry?.img_path_path ?? ""}">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Clarity+City:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">
`;