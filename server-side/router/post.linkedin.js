// Initialisation de mon parcours en développement web et IA
const monParcours = () => {
  ecole: 'EPSI Nantes',
  programme: 'Bachelor Développement Web & Intelligence Artificielle',
  statut: 'ADMISE',
  date: '05-09-2024',
  lieu: 'Nantes',
}

// Recherche d'une alternance pour mettre en pratique mes compétences
const rechercheAlternance = () => {
  poste: 'Développeur Web',
  localisation: 'Nantes' || 'distance < 10km',
  disponibilité: 'disponible',
  dateDébut: new Date('05-09-2024'),
  dateFin: new Date('05-09-2024'),
  duree: '1 an',
}

function publierPost(parcours, recherche) {
  console.log(`🎉 Fière de partager mon admission en
    ${parcours.programme} à
    ${parcours.ecole} pour l'année
    ${parcours.annee} !`);

  console.log(`🔍 Actuellement à la recherche d'une alternance en tant que
    ${recherche.poste}, à partir de
    ${recherche.dateDebut.toLocaleDateString()}
    pour une durée de
    ${recherche.duree}.`);

  console.log("📩 N'hésitez pas à me contacter pour toute opportunité ou \à
    partager cette information avec votre réseau !");
}

// Appel de la fonction
publierPost(monParcours(), rechercheAlternance());
