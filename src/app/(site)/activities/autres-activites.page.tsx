import type { Metadata } from "next";
import ActivitePage from "@/ui/components/ActivitiesPage/ActivitePage";

export const metadata: Metadata = {
  title: "Autres activités | Maison du Numérique",
  description:
    "Découvrez les interventions de la Maison du Numérique en dehors de ses murs.",
};

export default function AutresActivitesPage() {
  return (
    <ActivitePage
      tag="TERRITOIRE"
      titre="Autres activités"
      intro="Au-delà de nos murs, nous intervenons dans les écoles, les entreprises et lors d'événements locaux pour sensibiliser et promouvoir les usages numériques auprès d'un public toujours plus large."
      couleurClair="#4C63D2"
      couleurSombre="#7C9CFF"
      sections={[
        {
          titre: "Interventions hors de la MDN",
          description:
            "Journées de sensibilisation en entreprise, animations dans d'autres écoles, participation à des événements numériques locaux : nous allons à la rencontre de nouveaux publics pour étendre notre impact.",
          photos: [
            "https://placehold.co/600x450?text=Hors+MDN+1",
            "https://placehold.co/600x450?text=Hors+MDN+2",
            "https://placehold.co/600x450?text=Hors+MDN+3",
            "https://placehold.co/600x450?text=Hors+MDN+4",
          ],
        },
      ]}
    />
  );
}
