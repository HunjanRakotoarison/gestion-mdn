export const BENEVOLES_DEPUIS = "Octobre 2023"; // à garder en dur, c'est une date fixe de lancement
export const TOTAL_BENEVOLES = 300;

export type BenevolatContributor = {
  name: string;
  role: string;
  photo: string;
  quote: string;
  facebookUrl: string;
};

export type BenevolatCategory = {
  slug: "temoignages" | "en-action" | "partage" | "remerciements" | "hors-mdn";
  label: string;
  description: string;
  contributors: BenevolatContributor[];
};

export const BENEVOLAT_CATEGORIES: BenevolatCategory[] = [
  {
    slug: "temoignages",
    label: "Témoignages des bénévoles",
    description:
      "Ce qu'ils racontent de leur expérience à la Maison du Numérique.",
    contributors: [
      {
        name: "Nantenaina",
        role: "Étudiant en M1 — Filière informatique",
        photo: "/assets/images/benevolat/temoignages/1-Nantenaina.jpg",
        quote:
          "Depuis que je suis bénévole à la Maison du numérique, j'ai ressenti une grosse évolution de ma personne.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Honjaniaina",
        role: "23 ans — Étudiante en informatique, M1",
        photo: "/assets/images/benevolat/temoignages/2-Honjaniaina.jpg",
        quote:
          "Grâce à la Maison du numérique, j'ai pu confronter ma peur de parler en public, de discuter avec les autres et de réaliser ce qui me tient à cœur. Je voudrais dire à la moi qui venait d'arriver ici : ne fais plus de ta peur un blocage pour oser. Ça va tuer ta personne. Tu mérites de te réaliser.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Freddy",
        role: "21 ans — L1 en Informatique",
        photo: "/assets/images/benevolat/temoignages/3-Freddy.jpg",
        quote:
          "À Madagascar, si on s'entraidait plus et si on se soutenait tous, on aurait plus de projets réalisés dans ce pays. Par des personnes qu'on espérait le moins. Parce qu'au fond, elles sont capables de belles choses. Il suffit d'une solidarité, et nous verrons.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Kanto Antema Onjaniaina",
        role: "M2 en sciences du tourisme à Ankatso",
        photo: "/assets/images/benevolat/temoignages/4-Kanto Antema.jpg",
        quote:
          "Je me comparais beaucoup aux autres avant : c'est pour ça que je n'ai jamais osé agir. Tout a changé depuis que je suis devenue bénévole ici. J'ai compris que c'est en se lançant qu'on apprend à s'adapter sur terrain. Chère ancienne moi : si t'as une chose qui te tient à cœur, vas-y.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Nomena",
        role: "23 ans — L3 en création d'entreprise",
        photo: "/assets/images/benevolat/temoignages/5-Nomena.jpg",
        quote:
          "Les pays développés utilisent la technologie. Alors, on ne peut plus s'en passer à l'ère actuelle. Quand la population se développe, automatiquement, le pays se développe. Le numérique contribue à ça.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Fihobiana",
        role: "M1 en science de la terre et de l'environnement",
        photo: "/assets/images/benevolat/temoignages/6-Fihobiana.jpg",
        quote:
          "Chaque situation de notre vie est une occasion de sortir la meilleure version de nous. Et c'est la même chose avec le numérique : une occasion d'améliorer nos compétences.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Mahery",
        role: "25 ans — M2 en Droit",
        photo: "/assets/images/benevolat/temoignages/7-Mahery.jpg",
        quote:
          "Le numérique m'a énormément aidé dans mes études. Et j'aimerais voir plus de jeunes s'entraider sur cet usage, même sans confiance en soi. La vie est une question de choix. Osons, notre contribution compte.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Annécka",
        role: "24 ans — M2 en agronomie",
        photo: "/assets/images/benevolat/temoignages/8-Annecka.jpg",
        quote:
          "Le numérique a facilité toutes mes recherches à combler dans mes études universitaires. Et toi aussi, jeune, viens profiter des 2H/jour gratuites à la Maison du numérique !",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Alain",
        role: "26 ans — M1 en Gestion",
        photo: "/assets/images/benevolat/temoignages/9-Alain.jpg",
        quote:
          "Yo ! Ho antsika eo Antananarivo sy ny manodidina : ho antsika mpianatra, tongava aty MDN, fa mahazo connexion gratuite 2H/jour.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Hantatiana",
        role: "23 ans — L3 en commerce international",
        photo: "/assets/images/benevolat/temoignages/10-Hantatiana.jpg",
        quote:
          "Ny fotoana izao efa vidiana lafo, ka hanaovy zavatra mahasoa ilay fotoana. Misy opportunités maro afaka hararaotina.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Ando",
        role: "24 ans — M1 en Informatique",
        photo: "/assets/images/benevolat/temoignages/11-Ando.jpg",
        quote:
          "Apprenons à utiliser le numérique, car c'est un domaine très utile au quotidien. Peu importe ton activité et ta filière, tu vas t'améliorer si au moins tu sais utiliser un ordinateur.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Maminiaina",
        role: "23 ans — L3 en Gestion",
        photo: "/assets/images/benevolat/temoignages/12-Maminiaina.jpg",
        quote:
          "Ndao hampitombo fahalalana. Efa maro be ny fitaovana mampita fahalalana fa tsy any am-pianarana ihany. Anaty numérique feno opportunités asa.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Safidy",
        role: "22 ans — M2 en Informatique",
        photo: "/assets/images/benevolat/temoignages/13-Safidy.jpg",
        quote:
          "Considère tout ce que tu fais comme une passion : pour avancer et pour faire face à la procrastination. Ce sont les petits efforts combinés qui nous aident à atteindre nos objectifs. Pas à pas !",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Harisoa",
        role: "M2 en Droit à CNTEMAD",
        photo: "/assets/images/benevolat/temoignages/14-Harisoa.jpg",
        quote:
          "Ne considère pas ta peur comme un frein. Sinon, tu vas rater de nombreuses opportunités. La peur sera toujours là. Allons la défier avec nos actions.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Louydys",
        role: "L2 en Droit",
        photo: "/assets/images/benevolat/temoignages/15-Louydis.jpg",
        quote:
          "Saisissons les opportunités qui se présentent à nous, dans ce monde qui se numérise. La Maison du numérique inspire — elle nous prouve que le peu qu'on a peut déjà améliorer notre communauté.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Antsa",
        role: "23 ans — M2 en Management des organisations et des stratégies",
        photo: "/assets/images/benevolat/temoignages/16-Antsa.jpg",
        quote:
          "Devenir bénévole m'a fait rendre compte que notre participation à une cause qui impacte quelques Malagasy contribue à l'évolution de notre pays.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Aina",
        role:
          "Étudiante en psychologie sociale et interculturelle — bénévole depuis 10 mois",
        photo: "/assets/images/benevolat/temoignages/17-Ndimbiniaina.jpg",
        quote:
          "L'existence de la Maison du numérique est un véritable support à mes études. Je suis fière de redonner aux plus jeunes en devenant bénévole. Cette expérience m'a aussi permis de m'épanouir pleinement.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Vahatry Ny Aina",
        role: "Étudiant en Mathématiques et Informatique",
        photo: "/assets/images/benevolat/temoignages/18-Vahatra.jpg",
        quote:
          "Le monde évolue sans cesse, et nous vivons dans une ère numérique où seul le digital nous permettra de suivre cette transformation. La Maison du Numérique m'a offert l'opportunité de saisir ces chances.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Lalaina Ratsirarison",
        role: "L3 en Informatique",
        photo: "/assets/images/benevolat/temoignages/19-Lalaina.jpg",
        quote:
          "Deux heures par semaine ont changé ma vie... et celle des enfants que j'ai aidés.",
        facebookUrl: "https://facebook.com/...",
      },
       {
        name: "Ifaliana",
        role: "L2 en Informatique",
        photo: "/assets/images/benevolat/temoignages/20-Ifaliana.jpg",
        quote:
          "Etre bénévole à la maison du numérique, c’est à la fois aider les autres et s’enrichir soi-même tout en vivant une expérience unique.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Miranto",
        role: "L2 en Informatique",
        photo: "/assets/images/benevolat/temoignages/21-Miranto.jpg",
        quote:
          "Être bénévole, c'est partager une part de soi pour aider les autres.",
        facebookUrl: "https://facebook.com/...",
      },
       {
        name: "Kanto", 
        role: "Bénévole depuis juin 2025",
        photo: "/assets/images/benevolat/temoignages/22-Kanto.mp4",
        quote:
          "Étant bénévole chez MDN, j'ai eu l'opportunité d'apprendre de nombreuses choses comme la patience, la persévérance et le sens de l'engagement. Cette expérience m'a permis de développer des compétences humaines et professionnelles précieuses.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Iavosoa",
        role: "Étudiante en économie, stagiaire chez Youth First Madagascar",
        photo: "/assets/images/benevolat/temoignages/23-Iavisoa.jpg",
        quote:
          "Etant bénévole chez MDN depuis le mois de juin 2025, j’ai eu l’opportunité d’apprendre de nombreuses choses, comme la patience, la persévérance et le sens de l’engagement. Cette expérience m’a permis de développer des compétences humaines et professionnelles précieuses. Être bénévole m’a également ouvert des portes vers le monde professionnel, en m’offrant de nouvelles perspectives, des opportunités de collaboration et une meilleure compréhension du milieu associatif et du travail en équipe.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Andriamifidy Hasinjaka",
        role: "Étudiant en informatique",
        photo: "/assets/images/benevolat/temoignages/24-Njaka.jpg",
        quote:
          "À la Maison du Numérique, nous ne faisons pas que connecter des ordinateurs ; nous connectons des talents à leurs ambitions.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Tsanta",
        role: "Bénévole Maison du Numérique",
        photo: "/assets/images/benevolat/temoignages/25-Tsanta.jpg",
        quote:
          "Avance sans jamais te retourner et tu verras que le succès est devant toi.",
        facebookUrl: "https://facebook.com/...",
      },
      {
        name: "Karine Rajaofera",
        role: "Bénévole Maison du Numérique",
        photo: "/assets/images/benevolat/temoignages/26-Karine.jpg",
        quote:
          "Avance sans jamais te retourner et tu verras que le succès est devant toi.",
        facebookUrl: "https://facebook.com/...",
      },
       
    ],
  },
  {
    slug: "en-action",
    label: "Bénévoles en action",
    description:
      "Des moments capturés sur le terrain, pendant les formations et les ateliers.",
    contributors: [
      {
        name: "Tsanta",
        role: "Bénévole en séance d'accompagnement",
        photo: "/assets/images/benevolat/en-action/25-Tsanta.jpg",
        quote: "",
        facebookUrl: "https://facebook.com/...",
      },
    ],
  },
  {
    slug: "partage",
    label: "Partage entre bénévoles",
    description: "Les temps d'échange et d'entraide au sein de l'équipe.",
    contributors: [
      // même structure
    ],
  },
  {
    slug: "remerciements",
    label: "Remerciements des bénévoles",
    description:
      "Les messages de reconnaissance envers celles et ceux qui s'investissent.",
    contributors: [
      {
        name: "Ifaliana",
        role: "Bénévole Maison du Numérique",
        photo: "/assets/images/benevolat/remerciements/20-Ifaliana.jpg",
        quote: "Merci à la Maison du Numérique pour cette belle expérience.",
        facebookUrl: "https://facebook.com/...",
      },
    ],
  },
  {
    slug: "hors-mdn",
    label: "Participation en dehors de la Maison du Numérique",
    description:
      "Leur engagement dans d'autres initiatives solidaires à Madagascar.",
    contributors: [
      // même structure
    ],
  },
];