"use client";

import { motion, type Variants } from "framer-motion";
import ContactInfo from "@/ui/components/Contact/ContactInfo";
import ContactForm from "@/ui/components/Contact/ContactForm";
import SocialLinks from "@/ui/components/Contact/SocialLinks";
import styles from "./ContactAnimations.module.css";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

export default function ContactAnimations() {
  return (
    <>
      <motion.section
        className={styles.hero}
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className={styles.heroInner}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <span className={styles.eyebrow}>Nous contacter</span>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            Contactez-nous
          </motion.h1>
          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            Une question, une suggestion ou envie de rejoindre l&apos;équipe ?
            Écrivez-nous, nous répondrons dans les plus brefs délais.
          </motion.p>
        </motion.div>
      </motion.section>

      <motion.section
        className={styles.content}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className={styles.inner}>
          <motion.div className={styles.grid} variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <ContactInfo />
            </motion.div>
            <motion.div variants={itemVariants}>
              <ContactForm />
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <SocialLinks />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}