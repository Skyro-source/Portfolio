// Déclaration de l'array contenant les données du head
let head_content = [
    {id_head:1, file_name:"Compétences", css_path:"../CSS/style_comp.css", img_path:"../Images/Logos/outils-dedition.png"},
    {id_head:2, file_name:"CV", css_path:"../CSS/style_tab.css", img_path:"../Images/Logos/embauche.png"},
    {id_head:3, file_name:"Parcours", css_path:"../CSS/style_parc.css", img_path:"../Images/Logos/itineraire.png"},
    {id_head:4, file_name:"Certifications", css_path:"../CSS/style_cert.css", img_path:"../Images/Logos/etoile.png"},
    {id_head:5, file_name:"Projets", css_path:"../CSS/style_grid.css", img_path:"../Images/Logos/gestion-de-projet.png"},
    {id_head:6, file_name:"Stages", css_path:"../CSS/style_stage.css", img_path:"../Images/Logos/internship.png"}
];

const current_page1 = document.getElementById("current_page").value; // Récupère l'ID de la page
const head_fillable = document.querySelector("head");
const page = head_content.find(h => h.id === Number(current_page1));

head_fillable.innerHTML = `

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>- Portfolio POURNY J.</title>
    <link rel="stylesheet" href="../CSS/style_default.css">
    <link rel="stylesheet" href="../CSS/style_stage.css">
    <link rel="icon" type="image/x-icon" href="../Images/Logos/internship.png">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Clarity+City:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

`;


