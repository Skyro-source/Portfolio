// Déclaration des variables

let carrous_img = document.querySelector("#cert_img");
let carrous_txt = document.querySelector("#cert_txt");
let link = document.querySelector("#cert_link");
let carrous_button = document.querySelectorAll(".carrous_button");
let carrousel = document.querySelector("#carrous_div");

let img_directories = ["../Images/Certifications/Certificat_Module 1-1.png", 
    "../Images/Certifications/Attestation_de_suivi_Module 2-1.png",
    "../Images/Certifications/Certificat_Module 3-1.png",
    "../Images/Certifications/Certificat_Module 4-1.png", 
    "../Images/Certifications/Certificat_Module 5-1.png", 
    "../Images/Certifications/Attestation_de_suivi_6-1.png"];

let txt_content = ["(Atelier RGPD) Attestation de suivi - MODULE 1",
    "(Atelier RGPD) Attestation de suivi - MODULE 2",
    "(Atelier RGPD) Attestation de suivi - MODULE 3",
    "(Atelier RGPD) Attestation de suivi - MODULE 4",
    "(Atelier RGPD) Attestation de suivi - MODULE 5",
    "(Atelier RGPD) Attestation de suivi - MODULE 6"
];

// Fonction pour changer d'image

function changerImage(button, i){
    
    carrous_img.src = img_directories[i];
    link.href = img_directories[i];
    carrous_txt.textContent = txt_content[i];
    carrous_button.forEach(button => button.removeAttribute('id'));
    button.id = 'active';
    $(carrousel).fadeIn(500);

}