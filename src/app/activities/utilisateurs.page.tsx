import type { Metadata } from "next";
import ActivitePage from "@/ui/components/ActivitePage/ActivitePage";

export const metadata: Metadata = {
  title: "Utilisateurs | Maison du Numérique",
  description:
    "Découvrez notre accompagnement quotidien des utilisateurs de la Maison du Numérique.",
};

export default function UtilisateursPage() {
  return (
    <ActivitePage
      tag="ACCOMPAGNEMENT"
      titre="Utilisateurs"
      intro="Au-delà des formations, nous accompagnons nos utilisateurs au quotidien dans leurs démarches numériques : accès aux services publics en ligne, création de comptes, prise en main des outils essentiels."
      couleurClair="#D9481F"
      couleurSombre="#FF6B4A"
      sections={[
        {
          titre: "Accompagnement au quotidien",
          description:
            "Nos équipes sont présentes chaque jour dans nos locaux pour aider les utilisateurs à réaliser leurs démarches en ligne, s'orienter dans l'usage d'un ordinateur ou simplement se familiariser avec Internet.",
          photos: [
            "https://placehold.co/600x450?text=Utilisateurs+1",
            "https://placehold.co/600x450?text=Utilisateurs+2",
            "https://placehold.co/600x450?text=Utilisateurs+3",
            "https://placehold.co/600x450?text=Utilisateurs+4",
          ],
        },
      ]}
    />
  );
}
