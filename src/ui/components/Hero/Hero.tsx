"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

type TabKey = "mission" | "objectif" | "plus";

const TABS: { key: TabKey; label: string; content: string }[] = [
  {
    key: "mission",
    label: "Notre mission",
    content:
      "Depuis notre ouverture en Novembre 2023, nous œuvrons sans relâche pour offrir gratuitement un accès privilégié aux outils informatiques et à une connexion Internet fiable. Plus qu'un simple accès, nous proposons des formations et des événements personnalisés centrés sur l'éducation et les technologies numériques.",
  },
  {
    key: "objectif",
    label: "Notre objectif",
    content:
      "Notre objectif ? Créer de nouveaux usages du numérique à Madagascar et donner à la prochaine génération les compétences indispensables pour réussir pleinement au XXIe siècle.",
  },
  {
    key: "plus",
    label: "Voir plus",
    content:
      "À ce jour, nous sommes fiers d'avoir accueilli et formé plus de 5000 enfants et étudiants à Antananarivo. Rejoignez-nous dans cette belle aventure pour bâtir un avenir connecté et inclusif aux jeunes Malagasy !",
  },
];

export default function Hero() {
  const [activeTab, setActiveTab] = useState<TabKey | null>(null);

  function handleTabClick(key: TabKey) {
    setActiveTab((current) => (current === key ? null : key));
  }

  const active = TABS.find((t) => t.key === activeTab);

  return (
    <section className={styles.hero} id="accueil">
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Qui sommes-nous ?</span>

        <p className={styles.lead}>
          Nous sommes une association à but non lucratif, animée par une
          mission essentielle&nbsp;: réduire la fracture numérique à
          Madagascar, en particulier auprès des populations défavorisées et
          vulnérables.
        </p>

        <div className={styles.tabs}>
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabClick(tab.key)}
              className={`${styles.tabButton} ${
                activeTab === tab.key ? styles.tabButtonActive : ""
              }`}
              aria-expanded={activeTab === tab.key}
            >
              {tab.label}
              <span className={styles.tabIcon}>
                {activeTab === tab.key ? "−" : "+"}
              </span>
            </button>
          ))}
        </div>

        <div className={`${styles.panelWrap} ${active ? styles.panelWrapOpen : ""}`}>
          <div className={styles.panelInner}>
            {active && <p className={styles.panelText}>{active.content}</p>}
          </div>
        </div>

        <Link href="/benevole" className={styles.cta}>
          Rejoignez-nous
        </Link>
      </div>
    </section>
  );
}