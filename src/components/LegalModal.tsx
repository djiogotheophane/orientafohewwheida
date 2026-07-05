import { X } from 'lucide-react';
import { Language } from '../types';
import { motion, AnimatePresence } from 'motion/react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'legal' | null;
  onClose: () => void;
  currentLang: Language;
}

export default function LegalModal({ type, onClose, currentLang }: LegalModalProps) {
  if (!type) return null;

  const content: Record<'privacy' | 'terms' | 'legal', Record<Language, { title: string; body: string[] }>> = {
    privacy: {
      fr: {
        title: 'Politique de Confidentialité',
        body: [
          'Chez Orienta Fohew Wheida, accessible depuis orientafohewwheida.com, la vie privée de nos visiteurs est l’une de nos priorités absolues. Ce document décrit les types d’informations collectées et stockées par notre site, ainsi que leur utilisation.',
          '1. Informations que nous collectons : Lorsque vous utilisez notre formulaire de contact, notre module de prise de rendez-vous ou notre chat, nous collectons les informations que vous fournissez (Nom, adresse e-mail, numéro de téléphone, et notes personnelles). Nous ne collectons aucune donnée sensible.',
          '2. Utilisation de vos données : Nous utilisons vos informations uniquement pour répondre à vos demandes de conseil, confirmer vos rendez-vous bien-être, ou préparer vos demandes de commande de produits par WhatsApp. Vos informations ne sont jamais partagées ou vendues à des tiers.',
          '3. Sécurité : Nous mettons en œuvre des mesures de sécurité rigoureuses pour protéger vos données personnelles contre tout accès non autorisé. Vos communications par chat ou WhatsApp sont sécurisées.'
        ]
      },
      en: {
        title: 'Privacy Policy',
        body: [
          'At Orienta Fohew Wheida, accessible from orientafohewwheida.com, protecting the privacy of our visitors is one of our primary priorities. This Privacy Policy documents outlines the types of information collected, stored, and utilized.',
          '1. Information We Collect: When using our contact forms, booking module, or live chat support, we collect the details you actively share (Full Name, email, phone number, and consultation notes). We do not collect any highly sensitive data.',
          '2. Data Usage: We utilize your contact details solely to reply to inquiries, schedule your free wellness consultations, or prepare pre-formatted order templates for WhatsApp dispatch. We never sell or share your data.',
          '3. Protection: We implement secure protocols to safeguard your personal details against unauthorized data breaches. All chat and WhatsApp channels remain confidential.'
        ]
      },
      de: {
        title: 'Datenschutzerklärung',
        body: [
          'Bei Orienta Fohew Wheida, erreichbar unter orientafohewwheida.com, hat der Schutz der Privatsphäre unserer Besucher oberste Priorität. Dieses Dokument beschreibt die Arten von Informationen, die von unserer Website gesammelt und gespeichert werden, sowie deren Verwendung.',
          '1. Gesammelte Informationen: Wenn Sie unser Kontaktformular, Buchungsmodul oder unseren Live-Chat nutzen, erfassen wir die von Ihnen bereitgestellten Daten (Name, E-Mail-Adresse, Telefonnummer und Beratungsnotizen).',
          '2. Datennutzung: Wir verwenden Ihre Daten ausschließlich, um auf Ihre Anfragen zu antworten, Beratungstermine zu bestätigen oder WhatsApp-Bestellungen vorzubereiten. Ihre Daten werden niemals an Dritte verkauft.',
          '3. Sicherheit: Wir setzen strenge Sicherheitsmaßnahmen ein, um Ihre persönlichen Daten vor unbefugtem Zugriff zu schützen.'
        ]
      }
    },
    terms: {
      fr: {
        title: 'Conditions Générales',
        body: [
          'Bienvenue chez Orienta Fohew Wheida. En naviguant sur ce site, vous acceptez nos présentes conditions générales d’utilisation.',
          '1. Nature des produits : Nos produits sont des compléments de bien-être formulés à partir d’ingrédients naturels s’inspirant de recettes traditionnelles. Ils ne constituent en aucun cas des remèdes médicaux et ne remplacent pas une prescription médicale.',
          '2. Commandes : Orienta Fohew Wheida facilite la mise en relation avec des conseillers pour la commande de produits. Les commandes finales s’effectuent directement via notre numéro WhatsApp ou par appel.',
          '3. Modification du service : Nous nous réservons le droit d’ajuster le catalogue de produits, les conseils d’utilisation et les présentes conditions générales à tout moment pour nous conformer aux règlementations européennes et internationales.'
        ]
      },
      en: {
        title: 'Terms of Service',
        body: [
          'Welcome to Orienta Fohew Wheida. By accessing and browsing our website, you agree to comply with our general Terms of Service.',
          '1. Nature of Products: All items represented on this catalog are natural wellness food supplements. Under no circumstances do they constitute prescription medicine or medical treatments.',
          '2. Ordering Workflow: Orienta Fohew Wheida acts as an informational catalog. Final purchase processes and shipping details are facilitated directly via WhatsApp messaging or secure telephone calls with an advisor.',
          '3. Modifications: We reserve the right to modify our products list, usage guidelines, or these terms at any point to remain compliant with international standards.'
        ]
      },
      de: {
        title: 'Allgemeine Geschäftsbedingungen',
        body: [
          'Willkommen bei Orienta Fohew Wheida. Durch die Nutzung dieser Website erklären Sie sich mit unseren Allgemeinen Geschäftsbedingungen einverstanden.',
          '1. Produktcharakter: Unsere Produkte sind Nahrungsergänzungsmittel auf natürlicher Basis. Sie sind keine Arzneimittel und ersetzen keine ärztliche Verschreibung.',
          '2. Bestellvorgang: Die endgültige Bestellung und Versandabwicklung erfolgt direkt über unseren WhatsApp-Kundenservice oder per Telefon.',
          '3. Änderungen: Wir behalten uns das Recht vor, das Sortiment, die Verzehrempfehlungen und diese Bedingungen jederzeit anzupassen.'
        ]
      }
    },
    legal: {
      fr: {
        title: 'Mentions Légales',
        body: [
          'Propriétaire du site : Orienta Fohew Wheida',
          'Directeur de la publication : Équipe de Direction Orienta Fohew Wheida, spécialiste en médecine naturelle et compléments de bien-être.',
          'Hébergement : Hébergé sur des serveurs sécurisés conformes aux normes internationales.',
          'Contact : Email: contact@orientafohewwheida.com | Tél: +237 697 254 607 / +237 676 437 678.',
          'Avertissement : Les photos et illustrations de produits sont proposées à des fins d’illustration. Les compléments présentés ne revendiquent pas de propriétés curatives et doivent être associés à un mode de vie équilibré.'
        ]
      },
      en: {
        title: 'Legal Notice',
        body: [
          'Website Owner: Orienta Fohew Wheida',
          'Chief Editor: Orienta Fohew Wheida Management Team, specializing in natural medicine and wellness supplementation.',
          'Server Hosting: Hosted on cloud containers compliant with data protection standards.',
          'Contact Details: Email: contact@orientafohewwheida.com | Tel: +237 697 254 607 / +237 676 437 678.',
          'Disclaimer: Product images and illustrations are for informational support. The supplements do not claim any therapeutic property and should be integrated with a healthy life balance.'
        ]
      },
      de: {
        title: 'Impressum',
        body: [
          'Seitenbetreiber: Orienta Fohew Wheida',
          'Verantwortlich für den Inhalt: Orienta Fohew Wheida Management Team, Spezialisten für Naturheilkunde und Nahrungsergänzung.',
          'Hosting: Gehostet auf sicheren Servern gemäß Datenschutz-Grundverordnung.',
          'Kontakt: E-Mail: contact@orientafohewwheida.com | Tel: +237 697 254 607 / +237 676 437 678.',
          'Haftungsausschluss: Die gezeigten Produktbilder dienen der Veranschaulichung. Die vorgestellten Ergänzungsmittel erheben keinen Anspruch auf heilende Wirkungen.'
        ]
      }
    }
  };

  const selectedContent = content[type][currentLang];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4" id="legal-modal">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-xs"
        />

        {/* Modal body */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-xl bg-white dark:bg-stone-900 border border-stone-200/20 dark:border-stone-800/20 rounded-3xl p-6 sm:p-8 z-10 max-h-[80vh] overflow-y-auto text-left"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 bg-stone-100 dark:bg-stone-800 rounded-full hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 text-stone-600 dark:text-stone-300" />
          </button>

          {/* Title */}
          <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 dark:text-white pb-3 border-b border-stone-100 dark:border-stone-800 mb-5">
            {selectedContent.title}
          </h3>

          {/* Content paragraphs */}
          <div className="space-y-4 text-xs sm:text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
            {selectedContent.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
