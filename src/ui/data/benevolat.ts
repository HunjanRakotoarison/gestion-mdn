// ============================================================
// Données du bénévolat.
// Remplace les valeurs ci-dessous (photos, textes, liens Facebook)
// par le vrai contenu au fur et à mesure que tu l'as.
// ============================================================

export type BenevolatCategory = {
  slug: string;
  label: string;
  description: string;
};

export const BENEVOLAT_CATEGORIES: BenevolatCategory[] = [
  {
    slug: "temoignages",
    label: "Témoignages des bénévoles",
    description:
      "Ce qu'ils racontent de leur expérience à la Maison du Numérique.",
  },
  {
    slug: "en-action",
    label: "Bénévoles en action",
    description:
      "Des moments capturés sur le terrain, pendant les formations et les ateliers.",
  },
  {
    slug: "partage",
    label: "Partage entre bénévoles",
    description: "Les temps d'échange et d'entraide au sein de l'équipe.",
  },
  {
    slug: "remerciements",
    label: "Remerciements des bénévoles",
    description:
      "Les messages de reconnaissance envers celles et ceux qui s'investissent.",
  },
  {
    slug: "hors-mdn",
    label: "Participation en dehors de la Maison du Numérique",
    description:
      "Leur engagement dans d'autres initiatives solidaires à Madagascar.",
  },
];

export type BenevolatItem = {
  id: string;
  title: string;
  description: string;
  facebookUrl: string;
  /** optionnel : /assets/images/benevolat/<categorie>/xxx.jpg dans /public */
  image?: string;
};

// Contenu d'exemple à remplacer par les vrais posts Facebook.
export const BENEVOLAT_ITEMS: Record<string, BenevolatItem[]> = {
  temoignages: [
    {
      id: "temoignage-1",
      title: "Fenitra, bénévole depuis 2024",
      description:
        "Exemple de témoignage à remplacer par le vrai texte tiré du post Facebook.",
      facebookUrl: "https://www.facebook.com/",
    },
    {
      id: "temoignage-2",
      title: "Noro, bénévole formatrice",
      description:
        "Exemple de témoignage à remplacer par le vrai texte tiré du post Facebook.",
      facebookUrl: "https://www.facebook.com/",
    },
  ],
  "en-action": [
    {
      id: "action-1",
      title: "Atelier découverte du code",
      description: "Légende à remplacer, tirée de la publication Facebook.",
      facebookUrl: "https://www.facebook.com/",
    },
    {
      id: "action-2",
      title: "Formation bureautique",
      description: "Légende à remplacer, tirée de la publication Facebook.",
      facebookUrl: "https://www.facebook.com/",
    },
  ],
  partage: [
    {
      id: "partage-1",
      title: "Réunion mensuelle de l'équipe",
      description: "Légende à remplacer, tirée de la publication Facebook.",
      facebookUrl: "https://www.facebook.com/",
    },
  ],
  remerciements: [
    {
      id: "remerciement-1",
      title: "Message de l'équipe fondatrice",
      description: "Légende à remplacer, tirée de la publication Facebook.",
      facebookUrl: "https://www.facebook.com/",
    },
  ],
  "hors-mdn": [
    {
      id: "hors-mdn-1",
      title: "Journée solidaire dans un autre quartier",
      description: "Légende à remplacer, tirée de la publication Facebook.",
      facebookUrl: "https://www.facebook.com/",
    },
  ],
};

// Stat mise en avant dans la section (page d'accueil).
export const TOTAL_BENEVOLES = 150;
export const BENEVOLES_DEPUIS = "novembre 2023";