let directories = ["../Images/Clipart/github_PNG40_noir.png", "../Images/Clipart/embauche_noir.png", 
    "../Images/Clipart/itineraire_noir.png", "../Images/Clipart/etoile_noir.png", "../Images/Clipart/gestion-de-projet_noir.png", "../Images/Clipart/notepad_noir.png"];

function changerLogo(button, i) {
    let nav_img = button.querySelector(".nav_img"); //Nous utilions button l'élément d'un div spécifique et non pas du document entier
    let nav_txt = button.querySelector(".nav_txt");

    nav_img.dataset.original = nav_img.src; // Enregistre l'image originale
    nav_img.src = directories[i];
    nav_img.style.opacity = "0";  

    requestAnimationFrame(() => { // Récupère les frames d'animations à partir du navigateur
        nav_img.style.opacity = "1";    
    });

    nav_txt.style.color = "black";
    button.style.backgroundColor = "white";
}

function restaurerLogo(button) {
    let nav_img = button.querySelector(".nav_img");
    let nav_txt = button.querySelector(".nav_txt");

    nav_img.src = nav_img.dataset.original;
    nav_img.style.opacity = "0";

    requestAnimationFrame(() => {
        nav_img.style.opacity = "1";    
    });

    nav_txt.style.color = "white";
    button.style.backgroundColor = "#292929";
}