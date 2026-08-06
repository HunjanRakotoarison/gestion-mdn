import type { Metadata } from "next";
import ActivitePage from "@/ui/components/ActivitiesPage/ActivitePage";

export const metadata: Metadata = {
  title: "Inclusion Numérique | Maison du Numérique",
  description:
    "Découvrez nos actions d'inclusion numérique auprès des écoles primaires publiques et des enfants à besoins spécifiques.",
};

export default function InclusionNumeriquePage() {
  return (
    <ActivitePage
      tag="ACCÈS"
      titre="Inclusion Numérique"
      intro="Nous œuvrons pour que le numérique profite à tous, sans exception. Deux publics sont au cœur de notre action : les élèves des écoles primaires publiques (EPP) et les enfants à besoins spécifiques."
      couleurClair="#1C7C74"
      couleurSombre="#2DD4C0"
      sections={[
        {
          titre: "Écoles Primaires Publiques (EPP)",
          description:
            "Nous accueillons régulièrement des classes d'écoles primaires publiques pour leur faire découvrir l'outil informatique, souvent pour la première fois. Ces séances mêlent initiation ludique, ateliers guidés et découverte d'Internet dans un cadre sécurisé.",
          photos: [
            "https://placehold.co/600x450?text=EPP+1",
            "https://placehold.co/600x450?text=EPP+2",
            "https://placehold.co/600x450?text=EPP+3",
            "https://placehold.co/600x450?text=EPP+4",
          ],
        },
        {
          titre: "Enfants à besoins spécifiques",
          description:
            "Des ateliers adaptés sont conçus avec des éducateurs spécialisés pour permettre aux enfants à besoins spécifiques d'explorer le numérique à leur rythme, avec du matériel et un accompagnement pensés pour leurs besoins particuliers.",
          photos: [
            "https://placehold.co/600x450?text=Enfants+1",
            "https://placehold.co/600x450?text=Enfants+2",
            "https://placehold.co/600x450?text=Enfants+3",
            "https://placehold.co/600x450?text=Enfants+4",
          ],
        },
      ]}
    />
  );
}
