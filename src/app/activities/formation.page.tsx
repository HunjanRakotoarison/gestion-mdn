import type { Metadata } from "next";
import ActivitePage from "@/ui/components/ActivitePage/ActivitePage";

export const metadata: Metadata = {
  title: "Formation | Maison du Numérique",
  description:
    "Découvrez nos formations numériques : bureautique, programmation, cybersécurité et création de contenu.",
};

export default function FormationPage() {
  return (
    <ActivitePage
      tag="COMPÉTENCES"
      titre="Formation"
      intro="Toute l'année, nous organisons des sessions de formation pour permettre à chacun d'acquérir des compétences numériques solides et directement utiles au quotidien ou dans la recherche d'emploi."
      couleurClair="#B9790E"
      couleurSombre="#F2A93B"
      sections={[
        {
          titre: "Nos ateliers de formation",
          description:
            "Bureautique, initiation à la programmation, cybersécurité, création de contenu numérique : nos formateurs et partenaires (Spoon Consulting, Madagascar Data Camp, Google for Education) animent des ateliers adaptés à tous les niveaux.",
          photos: [
            "https://placehold.co/600x450?text=Formation+1",
            "https://placehold.co/600x450?text=Formation+2",
            "https://placehold.co/600x450?text=Formation+3",
            "https://placehold.co/600x450?text=Formation+4",
          ],
        },
      ]}
    />
  );
}
