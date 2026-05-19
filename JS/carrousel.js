// Déclaration des variables

let img = document.querySelector("#cert_img");
let txt = document.querySelector("#cert_txt");
let link = document.querySelector("#cert_link");
let button = document.querySelectorAll(".carrous_button")
let carrousel = document.querySelector("#carrous_div");

let directories = ["../Images/Certifications/Certificat_Module 1-1.png", 
    "../Images/Certifications/Attestation_de_suivi_Module 2-1.png",
    "../Images/Certifications/Certificat_Module 3-1.png",
    "../Images/Certifications/Certificat_Module 4-1.png", 
    "../Images/Certifications/Certificat_Module 5-1.png", 
    "../Images/Certifications/Attestation_de_suivi_6-1.png",];

// Fonction pour changer d'image

function changerImage(i){
    img.src = directories[i];
    link.href = directories[i];

    button.forEach(p => p.classList.remove('active'));
    button[i].classList.add('active');
}