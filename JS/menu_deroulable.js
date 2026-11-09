const para = document.createElement("div");

para.innerHTML = `

    <div class="layout">

        <div class="elements">

            <!-- Semaine 1 -->

            <div class="stage_div">

                <div class="text_div">
                    <h2 class="week">Semaine 1 - 18/05/26 au 22/05/26</h2>
                    <h4 class="main_task">Découverte de l'entreprise, des locaux & enseignements sur les méthodes de travail</h4>
                    <h4 class="main_task">Petites tâches quotidiennes</h4>
                    <p class="details"><i>- Mise en place de 2 postes</i></p>
                    <p class="details"><i>- Réinitialisation & labélisation des composants de 4 ordinateurs</i></p>
                    <p class="details"><i>- Déplacement pour déployer un poste & changer un onduleur</i></p>
                </div>

                <div class="img_div">
                    <img src="../Images/Autres/20260702_150958.jpg" alt="Placeholder" class="img_desc">
                    <p class="img_notes"><i>Postes tout en un réinistialisés & labelisés</i></p>
                </div>

            </div>

            <!-- Semaine 2 -->

            <div class="stage_div">

                <div class="text_div">
                    <h2 class="week">Semaine 2 - 25/05/26 au 29/05/26</h2>
                    <h4 class="main_task">Petites tâches quotidiennes</h4>
                    <p class="details"><i>- Réinitialisation & labélisation des de 5 postes</i></p>
                    <p class="details"><i>- Réparation d'un disque dur pour un serveur NAS</i></p>
                </div>

                <div class="img_div">
                    <img src="../Images/Autres/20260527_164048.jpg" alt="Placeholder" class="img_desc">
                    <p class="img_notes"><i>5 postes réinistialisés</i></p>
                </div>

            </div>

            <!-- Semaine 3 -->

            <div class="stage_div">

                <div class="text_div">
                    <h2 class="week">Semaine 3 - 01/06/26 au 05/06/26</h2>
                    <h4 class="main_task">Script de setup d'ordinateur Powershell, créant un compte administrateur sur un PC et laisse l'utilisateur choisir parmis plusieures applications</h4>
                    <p class="details"><i>- Première version en ligne de commande, l'utilisateur choisit les applications en tapant un chiffre allant de 0 à 4</i></p>
                    <p class="details"><i>- Deuxième version utilisant l'infrastructure <strong>Winforms</strong> pour l'interface. A également ajouté la possibilité de créer un compte administrateur ou non, changer l'adresse du serveur GLPI si l'utilisateur à sélectionné ce dernier directement à partir du formulaire ainsi que d'autres améliorations.</i></p>
                    <h4 class="main_task">Changements effectués pour une page d'audit de collecte de données</h4>
                    <p class="details"><i>- Cette page permet à un utilisateur de référencer les ressources matérielles informatiques de son entreprise, tel que le(s) firewall(s), les switches, les serveurs, les imprimantes, etc...</i></p>
                </div>

                <div class="img_div">
                    <img src="../Images/Autres/Capture d'écran 2026-07-02 152944.png" alt="Placeholder" class="img_desc">
                    <p class="img_notes"><i>Script de setup sous Winforms</i></p>
                </div>

            </div>

            <!-- Semaine 4 -->

            <div class="stage_div">

                <div class="text_div">
                    <h2 class="week">Semaine 4 - 08/06/26 au 12/06/26</h2>
                    <h4 class="main_task">Continuation du script de setup d'ordinateur</h4>
                    <p class="details"><i>- Le formulaire est encore en Powershell, mais il utilise maintenant du XAML, une infrastructure plus moderne qui offre plus d'options de customisation et peut plus facilement être modifié dans un logiciel comme Visual Studio.</i></p>
                    <p class="details"><i>- D'autres améliorations mineures ont été éffectués comme la possibilité de choisir le nom du compte administrateur (le script mettait un nom par défaut précédemment) et de redémarrer le poste dès que le processus est fini.</i></p>
                    <h4 class="main_task">Script secondaire pour facilement rajouter ou supprimer des applications.</h4>
                    <p class="details"><i>- Les tableaux contenant le nom des applications et les lignes de commandes permmetant de les installer qui étaient précédemment directemebt dans le script ont été bougé dans des fichier séparés dans le dossier <strong>array</strong> afin de pouvoir être édité plus facilement par ce script, le premier script l'appelle ensuite avec des commandes <strong>Get-Content</strong> ou <strong>Invoke-Expression</strong>.</i></p>
                    <h4 class="main_task">Deuxième modification pour une page d'audit de collecte de données</h4>
                    <p class="details"><i>- La version originale du document avait une fonction Javascript pour enregistrer la page en format HTML après que l'utilisateur ai rempli les champs. La nouvelle version remplace la fonction pour que le document soit enregistré en PDF à la place, le rendant plus facile à transférer et lire sur n'importe quel appareil.</i></p>
                </div>

                <div class="img_div">
                    <img src="../Images/Projets/Capture d'écran 2026-07-02 153412.png" alt="Placeholder" class="img_desc">
                    <p class="img_notes"><i>Script d'ajout / suppression d'applications</i></p>
                </div>

            </div>

            <!-- Semaine 5 -->

            <div class="stage_div">

                <div class="text_div">
                    <h2 class="week">Semaine 5 - 15/06/26 au 19/06/26</h2>
                    <h4 class="main_task">Troisième modification pour une page d'audit de collecte de données</h4>
                    <p class="details"><i>- La dernière version de la page restaure la fonction originale pour enregistrer la page en HTML, en plus de pouvoir l'enregistrer en PDF, permettant ainsi donc d'avoir l'avantage du fichier PDF lisable facilement, mais aussi du fichier HTML plus facilement éditable.</i></p>
                    <h4 class="main_task">Petites tâches quotidiennes</h4>
                    <p class="details"><i>- Réinitialisation de 10 postes.</i></p>
                    <p class="details"><i>- Mise en place de 2 postes</i></p>
                </div>

                <div class="img_div">
                    <img src="../Images/Autres/audit_collect-1.png" alt="Placeholder" class="img_desc">
                    <p class="img_notes"><i>Extrait de la page d'audit de collecte de données</i></p>
                </div>

            </div>

            <!-- Semaine 6 -->

            <div class="stage_div">

                <div class="text_div">
                    <h2 class="week">Semaine 6 - 22/06/26 au 26/06/26</h2>
                    <h4 class="main_task">Petites tâches quotidiennes</h4>
                    <p class="details"><i>- Labélisation des composants des 10 postes réinistialisés de la semaine précédente</i></p>
                    <p class="details"><i>- Mise en place de 15 postes</i></p>
                </div>

                <div class="img_div">
                    <img src="../Images/Autres/20260624_155547.jpg" alt="Placeholder" class="img_desc">
                    <p class="img_notes"><i>Mise en place d'ordinateurs portable</i></p>
                </div>

            </div>

            <!-- Semaine 7 -->

            <div class="stage_div">

                <div class="text_div">
                    <h2 class="week">Semaine 7 - 29/06/26 au 03/07/26</h2>
                    <h4 class="main_task">Tâches effectués pour préparer le départ de l'entreprise</h4>
                    <p class="details"><i>- Cela inclut réinitialiser des postes utilisé pour travailler ou faire des tests dessus, ranger de l'équipement dont nous avons plus besoin, et bien d'autres.</i></p>
                    <h4 class="main_task">Petites tâches quotidiennes</h4>
                    <p class="details"><i>- Mise en place de 8 postes</i></p>
                    <p class="details"><i>- Mise en place d'une dizaine de postes pour récupérer la RAM & les SSD</i></p>
                </div>

                <div class="img_div">
                    <img src="../Images/Autres/20260630_154604.jpg" alt="Placeholder" class="img_desc">
                    <p class="img_notes"><i>Ordinateur portable démonté</i></p>
                </div>

            </div>

        </div>
    
    </div>

`;

const element = document.getElementById("stage_1");
const bouton = document.getElementById("bouton");

function afficher(i){

    if (i = 1){
        bouton.setAttribute('onclick', 'afficher(0)');
        element.appendChild(para);
    }
    if (i = 0){
        bouton.setAttribute('onclick', 'afficher(1)');
        const para = document.createElement("div");
        para.innerHTML = ``;
        element.appendChild(para);
    }

    

}
