// @target ES2020 – no transpilation, no polyfills, modern browsers only
// ─── Translations ───
const T = {
  fr: {
    "nav.home":"Accueil","nav.services":"Services","nav.luljeta":"Luljeta Selimi","nav.contact":"Contact","nav.cta":"Prendre rendez-vous",
    "hero.eyebrow":"Cabinet de courtage indépendant · Genève",
    "hero.title":"Votre courtier en assurances, <em>à vos côtés.</em>",
    "hero.sub":"Alpha Office accompagne entreprises, indépendants et particuliers dans toute la Suisse avec des solutions sur mesure.",
    "hero.cta1":"Découvrir nos services","hero.cta2":"Nous contacter",
    "about.eyebrow":"Qui sommes-nous","about.title":"Un partenaire de confiance pour vos assurances",
    "about.desc":"Fondée à Genève, Alpha Office est un cabinet de courtage en assurance indépendant opérant dans toute la Suisse. Nous accompagnons nos clients avec des conseils objectifs, sans frais cachés, en toute transparence.",
    "val.eyebrow":"Nos valeurs","val.title":"Ce qui nous distingue",
    "v1.t":"Transparence","v1.d":"Conseils clairs et honnêtes, sans frais dissimulés. Vous savez toujours où vous en êtes.",
    "v2.t":"Indépendance","v2.d":"Libre de choisir parmi tous les acteurs majeurs du marché pour vous proposer la meilleure solution.",
    "v3.t":"Proximité","v3.d":"Un suivi humain et personnalisé. Nous sommes toujours disponibles pour vous accompagner.",
    "v4.t":"Professionnalisme","v4.d":"Agréé FINMA, certifié AFA. Nous respectons les plus hauts standards de la profession.",
    "svc.eyebrow":"Nos services","svc.title":"Des solutions pour chaque besoin","svc.desc":"De l'analyse de vos besoins à la gestion des sinistres, nous vous accompagnons à chaque étape.",
    "s1.t":"Conseils personnalisés","s1.d":"Analyse complète de votre situation pour identifier les meilleures couvertures.",
    "s2.t":"Gestion des polices","s2.d":"Prise en charge intégrale de l'administration de vos contrats.",
    "s3.t":"Gestion des sinistres","s3.d":"Assistance complète du début à la fin lors de vos déclarations.",
    "s4.t":"Solutions entreprise","s4.d":"Réduisez vos charges et optimisez vos couvertures professionnelles.",
    "svc.link":"Voir tous nos services →",
    "team.eyebrow":"Notre équipe","team.title":"Une direction expérimentée",
    "team.role":"Directrice · Alpha Office Sàrl",
    "team.bio":"Forte de nombreuses années d'expérience dans le secteur des assurances, Luljeta Selimi a fondé Alpha Office avec une vision claire : offrir un service de courtage transparent, indépendant et humain. Son expertise fait d'Alpha Office un partenaire de confiance.",
    "cta.title":"Prêt à optimiser vos assurances ?","cta.desc":"Contactez-nous pour un premier entretien gratuit et sans engagement.","cta.btn":"Prendre rendez-vous",
    "sp.eyebrow":"Nos services","sp.title":"Des solutions complètes en assurance","sp.sub":"Nous vous accompagnons dans tous vos besoins, qu'il s'agisse d'une couverture personnelle ou professionnelle.",
    "sv1.n":"01","sv1.t":"Conseils & Analyse","sv1.d":"Nous réalisons une analyse approfondie de votre situation pour identifier les lacunes de couverture et vous proposer des solutions adaptées à votre profil et à votre budget.",
    "sv2.n":"02","sv2.t":"Gestion des polices","sv2.d":"Nous prenons en charge l'ensemble de l'administration de vos polices : souscription, renouvellements, modifications, résiliations. Un seul interlocuteur pour tous vos contrats.",
    "sv3.n":"03","sv3.t":"Suivi des sinistres","sv3.d":"En cas de sinistre, nous vous assistons du début à la fin : déclaration, suivi, négociation et indemnisation. Vous n'êtes jamais seul.",
    "sv4.n":"04","sv4.t":"Solutions entreprise","sv4.d":"Solutions complètes : responsabilité civile, couverture des collaborateurs, protection du matériel, assurance perte de gains.",
    "pr.eyebrow":"Comment ça marche","pr.title":"Notre processus en 3 étapes",
    "p1.t":"Premier entretien","p1.d":"Nous prenons le temps de comprendre votre situation lors d'un entretien gratuit et sans engagement.",
    "p2.t":"Analyse & recommandations","p2.d":"Nous analysons le marché et vous présentons des solutions claires, personnalisées et comparées.",
    "p3.t":"Accompagnement continu","p3.d":"Nous gérons vos polices et mettons à jour vos couvertures selon l'évolution de votre vie.",
    "cp.eyebrow":"Contactez-nous","cp.title":"Parlons de vos besoins","cp.sub":"Premier entretien gratuit et sans engagement. Réponse sous 48 heures.",
    "cf.title":"Envoyez-nous un message",
    "f.fn":"Prénom","f.ln":"Nom","f.em":"Adresse email","f.ph":"Téléphone","f.pol":"Numéro de police (optionnel)","f.su":"Sujet","f.ms":"Votre message","f.sb":"Envoyer le message","f.doc.info":"Pour joindre des documents (polices, contrats, sinistres…), envoyez-les directement par :","f.doc.wa":"WhatsApp","f.doc":"Documents (optionnel)","f.doc.hint":"PDF, Word, images – max 10 Mo par fichier","f.doc.btn":"Choisir des fichiers","f.doc.drop":"ou glisser-déposer ici",
    "f.o0":"Sélectionner un sujet","f.o1":"Conseils en assurance","f.o2":"Gestion de police","f.o3":"Déclaration de sinistre","f.o4":"Solutions entreprise","f.o5":"Autre",
    "ci.ad":"Adresse","ci.em":"Email","ci.hr":"Horaires","ci.hv":"Lun–Ven : 9h00 – 18h00",
    "ci.title":"Nos coordonnées",
    "ty.eyebrow":"Message reçu","ty.title":"Merci pour votre message !","ty.sub":"Nous avons bien reçu votre demande et nous vous répondrons dans les <strong>48 heures</strong>. À très bientôt.","ty.home":"Retour à l'accueil","ty.svc":"Nos services","ty.redirect":"Redirection automatique dans 8 secondes…",
    "ft.desc":"Cabinet de courtage en assurance indépendant basé à Genève, opérant dans toute la Suisse.",
    "ft.pages":"Pages","ft.svc":"Services","ft.cnt":"Contact",
    "ft.leg":"Mentions légales","ft.prv":"Politique de confidentialité","ft.copy":"© 2026 Alpha Office Sàrl. Tous droits réservés.","ft.credit":"Créé par",
    "fsv1":"Conseils personnalisés","fsv2":"Gestion des polices","fsv3":"Gestion des sinistres","fsv4":"Solutions entreprise",
    "rev.eyebrow":"Avis clients","rev.title":"Ils nous font confiance","rev.desc":"La satisfaction de nos clients est notre meilleure récompense.",
    "r1.text":"« Luljeta a pris le temps d'analyser toutes mes assurances existantes et j'ai pu réaliser des économies significatives tout en améliorant mes couvertures. Un service d'une qualité rare. »","r1.label":"Particulier · Genève",
    "r2.text":"« En tant qu'indépendant, je ne savais pas quelles couvertures étaient vraiment nécessaires. Alpha Office m'a guidé avec une clarté et une honnêteté que je n'avais jamais trouvées ailleurs. »","r2.label":"Indépendant · Lausanne",
    "r3.text":"« Suite à un sinistre complexe, Luljeta a géré tout le dossier à notre place. Elle a négocié avec l'assureur et obtenu une indemnisation bien supérieure à ce que nous espérions. »","r3.label":"Propriétaires · Cointrin",
    "r4.text":"« Nous avons confié toute la gestion des assurances de notre PME à Alpha Office. Le gain de temps est considérable et les conditions obtenues sont excellentes. Je recommande vivement. »","r4.label":"Dirigeant PME · Vernier",
    "r5.text":"« J'ai été bluffée par la réactivité et la disponibilité de Luljeta. Elle répond toujours rapidement et explique chaque détail avec une grande pédagogie. Une vraie professionnelle. »","r5.label":"Particulière · Meyrin",
    "r6.text":"« Alpha Office nous a permis d'optimiser l'ensemble de notre couverture professionnelle. Conseil objectif, sans pression commerciale. Exactement ce que cherche un entrepreneur. »","r6.label":"Entrepreneur · Genève",
    "part.eyebrow":"Nos partenaires","part.title":"Des assureurs de référence","part.desc":"En tant que courtier indépendant, nous collaborons avec les principaux acteurs du marché suisse pour vous offrir les meilleures couvertures.",
    "ls.eyebrow":"Directrice fondatrice","ls.role":"Directrice · Alpha Office Sàrl",
    "ls.stat1":"ans d'expérience","ls.stat2":"indépendant","ls.stat3":"toute la Suisse",
    "ls.intro":"Forte de 25 ans d'expérience dans le secteur des assurances en Suisse, Luljeta Selimi a fondé Alpha Office avec une vision claire : offrir un courtage transparent, indépendant et profondément humain.",
    "ls.badge":"ans<br/>d'exp.",
    "ls.parcours.eyebrow":"Parcours","ls.parcours.title":"Une carrière au service de nos clients","ls.parcours.desc":"Depuis ses débuts dans le secteur, Luljeta Selimi a toujours mis l'humain au cœur de sa pratique.",
    "ls.t1.title":"Conseillère en assurances","ls.t1.desc":"Premiers pas dans le conseil aux particuliers et PME, spécialisation en assurances vie et santé.",
    "ls.t2.title":"Responsable de portefeuille","ls.t2.desc":"Gestion d'un portefeuille clients entreprises, expertise en assurances commerciales et sinistres complexes.",
    "ls.t3.title":"Courtière indépendante","ls.t3.desc":"Exercice en indépendante agréée FINMA, développement d'une clientèle fidèle grâce à un service personnalisé.",
    "ls.t4.title":"Fondatrice & Directrice – Alpha Office Sàrl","ls.t4.desc":"Création d'Alpha Office à Genève pour un courtage indépendant et transparent à l'échelle nationale.",
    "ls.approach.eyebrow":"Son approche","ls.approach.title":"Ce qui guide chaque conseil",
    "ls.a1.t":"Écoute avant tout","ls.a1.d":"Chaque client est unique. Luljeta prend le temps de comprendre la situation réelle avant de proposer la moindre solution.",
    "ls.a2.t":"Analyse rigoureuse","ls.a2.d":"25 ans d'expérience permettent de lire entre les lignes d'un contrat et de détecter les lacunes invisibles pour un non-spécialiste.",
    "ls.a3.t":"Engagement durable","ls.a3.d":"La relation ne s'arrête pas à la signature. Luljeta suit ses clients dans la durée et les accompagne en cas de sinistre.",
    "ls.finma.eyebrow":"Agrément officiel","ls.finma.title":"Agréée par la FINMA","ls.finma.desc":"Luljeta Selimi est enregistrée et agréée auprès de l'Autorité fédérale de surveillance des marchés financiers (FINMA), garantissant un exercice conforme aux exigences légales suisses.",
    "ls.afa":"Certifiée AFA",
    "nav.tp":"3ème pilier",
    "tp.eyebrow":"Prévoyance privée","tp.title":"Le 3ème pilier expliqué","tp.sub":"Comprenez comment fonctionne la prévoyance suisse et pourquoi le 3ème pilier est essentiel pour votre avenir financier.",
    "tp.s1.eyebrow":"Le système suisse","tp.s1.title":"Les 3 piliers de la prévoyance","tp.s1.desc":"La Suisse dispose d'un système de prévoyance unique, structuré en trois piliers complémentaires. Ensemble, ils visent à maintenir votre niveau de vie après la retraite.",
    "tp.p1.tag":"Obligatoire","tp.p1.title":"AVS / AI","tp.p1.desc":"Assurance vieillesse et survivants. Couvre les besoins vitaux de base. Financée par les cotisations de tous les salariés et employeurs.",
    "tp.p2.tag":"Obligatoire","tp.p2.title":"LPP / Caisse de pension","tp.p2.desc":"Prévoyance professionnelle. Obligatoire pour les salariés. Maintient le niveau de vie habituel en complément de l'AVS.",
    "tp.p3.tag":"Volontaire","tp.p3.badge":"Vous êtes ici","tp.p3.title":"Prévoyance privée","tp.p3.desc":"Épargne individuelle et volontaire. Comble l'écart entre votre dernier salaire et vos rentes. Avec des avantages fiscaux significatifs.",
    "tp.info":"En Suisse, les deux premiers piliers remplacent généralement <strong>60 à 70 %</strong> de votre dernier salaire. Le 3ème pilier comble ce manque pour maintenir votre qualité de vie.",
    "tp.s2.eyebrow":"Deux options","tp.s2.title":"Pilier 3a ou 3b : quelle différence ?","tp.s2.desc":"Le troisième pilier se divise en deux formes distinctes, avec des avantages et des contraintes différents.",
    "tp.3a.sub":"Prévoyance liée – avec déduction fiscale",
    "tp.3a.f1":"Déductible à 100 % du revenu imposable","tp.3a.f2":"Intérêts et rendements non imposables","tp.3a.f3":"Disponible : banque ou compagnie d'assurance","tp.3a.f4":"Idéal pour : salariés et indépendants","tp.3a.f5":"Retrait uniquement dans des cas précis",
    "tp.3a.lim1":"CHF 7'258 / an","tp.3a.lim1s":"pour les salariés (2025)","tp.3a.lim2":"CHF 36'288 / an","tp.3a.lim2s":"pour les indépendants (max 20 % revenu AVS net)",
    "tp.3b.sub":"Prévoyance libre – sans restriction de retrait",
    "tp.3b.f1":"Aucune restriction sur le retrait des fonds","tp.3b.f2":"Pas de limite de cotisation annuelle","tp.3b.f3":"Déduction fiscale partielle selon les cantons","tp.3b.f4":"Assurance-vie mixte, compte épargne libre","tp.3b.f5":"Idéal pour : objectifs à moyen terme",
    "tp.3b.lim":"Aucun plafond légal","tp.3b.lims":"Flexibilité totale sur les montants et le retrait",
    "tp.s3.eyebrow":"Avantages concrets","tp.s3.title":"Ce que vous économisez réellement","tp.s3.desc":"En cotisant au pilier 3a, vous réduisez directement votre revenu imposable. L'économie d'impôt dépend de votre revenu et de votre canton.",
    "tp.tax1":"Déduction maximale annuelle pour un salarié (2025)","tp.tax2":"Économie d'impôt selon votre revenu et votre canton","tp.tax3":"Économie fiscale annuelle estimée pour un revenu moyen à Genève",
    "tp.withdraw.title":"Quand peut-on retirer son pilier 3a ?",
    "tp.w1.t":"Achat immobilier","tp.w1.d":"Financement ou remboursement d'une résidence principale en Suisse.",
    "tp.w2.t":"Départ de Suisse","tp.w2.d":"Retrait possible en cas d'émigration définitive hors de Suisse.",
    "tp.w3.t":"Indépendant","tp.w3.d":"Retrait si vous cessez d'être affilié à une caisse de pension (LPP).",
    "tp.w4.t":"Retraite","tp.w4.d":"À partir de 60 ans (ou 5 ans avant l'âge légal de la retraite).",
    "tp.w5.t":"Invalidité","tp.w5.d":"En cas d'invalidité totale ou partielle reconnue par l'AI.",
    "tp.w6.t":"Décès","tp.w6.d":"Versement aux bénéficiaires désignés ou aux héritiers légaux.",
    "tp.s4.eyebrow":"Profils","tp.s4.title":"À qui s'adresse le 3ème pilier ?",
    "tp.pr1.t":"Salariés","tp.pr1.d":"Vous avez accès au pilier 3a avec la déduction maximale de CHF 7'258. C'est la façon la plus simple d'économiser des impôts tout en préparant votre retraite.",
    "tp.pr2.t":"Indépendants","tp.pr2.d":"Sans 2ème pilier obligatoire, le 3ème pilier est votre principal outil de prévoyance. Vous pouvez déduire jusqu'à CHF 36'288 par an — un levier fiscal majeur.",
    "tp.pr3.t":"Expatriés & frontaliers","tp.pr3.d":"Si vous travaillez en Suisse et êtes affilié à l'AVS, vous pouvez cotiser au 3ème pilier, même si vous résidez à l'étranger.",
    "tp.faq.eyebrow":"Questions fréquentes","tp.faq.title":"Ce que nos clients demandent",
    "tp.q1":"Quelle est la différence entre un 3a en banque et en assurance ?","tp.a1":"Un 3a bancaire est un compte d'épargne ou de placement : vous versez librement, sans engagement de durée. Un 3a en assurance combine l'épargne avec une couverture en cas de décès ou d'invalidité — si vous ne pouvez plus cotiser, la compagnie continue à votre place.",
    "tp.q2":"Puis-je avoir plusieurs piliers 3a ?","tp.a2":"Oui. Il est possible d'avoir plusieurs comptes ou polices 3a simultanément. C'est même conseillé : lors du retrait, chaque compte est imposé séparément, ce qui permet d'étaler la charge fiscale sur plusieurs années.",
    "tp.q3":"Combien d'impôts vais-je économiser ?","tp.a3":"Cela dépend de votre revenu brut, de votre situation familiale et de votre canton. À Genève, pour un célibataire avec un revenu de CHF 80'000, cotiser CHF 7'258 peut représenter une économie d'impôt de CHF 1'800 à CHF 2'500 par an.",
    "tp.q4":"À partir de quel âge est-il utile de commencer ?","tp.a4":"Le plus tôt est le mieux. Commencer à 25 ans plutôt qu'à 40 ans peut représenter une différence de CHF 100'000 à 200'000 à la retraite. Mais il n'est jamais trop tard : même à 50 ans, les avantages fiscaux annuels restent très significatifs.",
    "tp.q5":"Le pilier 3a est-il imposé au moment du retrait ?","tp.a5":"Oui, mais à un taux réduit. Le capital est imposé séparément du revenu, à un taux préférentiel (environ 1/5 du taux ordinaire). Cette imposition reste bien inférieure aux économies fiscales cumulées pendant les années de cotisation.",
    "tp.cta.title":"Prêt à optimiser votre prévoyance ?","tp.cta.desc":"Chaque situation est unique. Nos conseillers analysent votre profil et vous recommandent la solution 3ème pilier la plus adaptée à vos objectifs.","tp.cta.btn":"Demander un conseil gratuit",
    "ck.text":"Nous utilisons des cookies pour améliorer votre expérience et analyser notre trafic, conformément à la <a href=\"confidentialite.html\">nLPD</a>.",
    "ck.accept":"Accepter","ck.decline":"Refuser",
    "nav.am":"Assurance maladie",
    "am.eyebrow":"Assurance maladie","am.title":"LAMal et complémentaires expliquées","am.sub":"Comprenez le système d'assurance maladie suisse, vos obligations légales et comment optimiser votre couverture.",
    "am.s1.eyebrow":"L'assurance de base","am.s1.title":"La LAMal : obligatoire pour tous","am.s1.desc":"En Suisse, toute personne résidant sur le territoire doit s'affilier à un assureur-maladie reconnu. La LAMal garantit un accès égal aux soins de base pour tous.",
    "am.lamal.tag":"Obligatoire","am.lamal.title":"LAMal – Assurance de base","am.lamal.f1":"Médecin généraliste et spécialistes","am.lamal.f2":"Hospitalisation en division commune","am.lamal.f3":"Médicaments de la liste officielle","am.lamal.f4":"Maternité, urgences, prévention",
    "am.comp.tag":"Facultative","am.comp.title":"Assurances complémentaires","am.comp.f1":"Chambre privée ou semi-privée à l'hôpital","am.comp.f2":"Médecines alternatives et lunettes","am.comp.f3":"Soins dentaires et orthodontie","am.comp.f4":"Couverture internationale étendue",
    "am.info":"La prime LAMal peut varier jusqu'à <strong>40 %</strong> selon l'assureur, la région et la franchise choisie. Un courtier indépendant compare toutes les offres pour vous.",
    "am.s2.eyebrow":"Au-delà du minimum","am.s2.title":"Les assurances complémentaires","am.s2.desc":"Les complémentaires étendent votre couverture selon votre mode de vie et vos besoins. Facultatives mais souvent très avantageuses.",
    "am.c1.t":"Hospitalisation","am.c1.d":"Chambre privée ou semi-privée, libre choix du médecin dans toute la Suisse, couverture à l'étranger.",
    "am.c2.t":"Ambulatoire","am.c2.d":"Ostéopathie, chiropractie, acupuncture, lunettes, bilans de santé et médecines alternatives.",
    "am.c3.t":"Dentaire","am.c3.d":"Soins dentaires courants, orthodontie, prothèses — non couverts par la LAMal.",
    "am.c4.t":"International","am.c4.d":"Soins à l'étranger, rapatriement médical, assistance voyage — idéal pour expatriés et grands voyageurs.",
    "am.s3.eyebrow":"Optimiser votre couverture","am.s3.title":"Franchise et prime : faire le bon choix","am.s3.desc":"La franchise est le montant annuel à votre charge avant que l'assurance intervienne. Plus elle est élevée, plus votre prime mensuelle est basse.",
    "am.stat1":"CHF 300 à 2'500 — Fourchette de franchise annuelle","am.stat2":"~40 % — Réduction de prime possible avec franchise maximale","am.stat3":"26 assureurs — En concurrence pour votre LAMal",
    "am.tip.title":"Règle générale","am.tip.d1":"Franchise élevée (CHF 2'500) si vous êtes en bonne santé et consultez peu.","am.tip.d2":"Franchise basse (CHF 300) si vous avez des frais médicaux réguliers.","am.tip.d3":"Le modèle (médecin de famille, HMO, télémédecine) peut aussi réduire votre prime de 10–20 %.",
    "am.s4.eyebrow":"Profils","am.s4.title":"Quelle couverture pour qui ?",
    "am.pr1.t":"Familles","am.pr1.d":"Les enfants sont assurés gratuitement jusqu'à 18 ans pour la LAMal de base. Pensez aux complémentaires dentaires et pédiatriques pour une protection complète.",
    "am.pr2.t":"Personnes en bonne santé","am.pr2.d":"Une franchise élevée et un modèle alternatif (HMO ou télémédecine) permettent de réduire significativement la prime tout en gardant une couverture solide.",
    "am.pr3.t":"Besoins médicaux réguliers","am.pr3.d":"Une franchise basse et des complémentaires ambulatoires bien choisies vous protègent efficacement sans mauvaises surprises en fin d'année.",
    "am.faq.eyebrow":"Questions fréquentes","am.faq.title":"Ce que nos clients demandent",
    "am.q1":"Puis-je changer d'assureur LAMal chaque année ?","am.a1":"Oui. Vous pouvez changer d'assureur-maladie pour le 1er janvier en envoyant votre résiliation avant le 30 novembre. Alpha Office compare les offres du marché et effectue le changement à votre place.",
    "am.q2":"Quelle est la différence entre LAMal et complémentaire ?","am.a2":"La LAMal est obligatoire et couvre les soins de base définis par la loi. Les assurances complémentaires sont facultatives et complètent la couverture de base : chambre privée, médecines alternatives, dentaire, etc.",
    "am.q3":"Les primes LAMal sont-elles déductibles des impôts ?","am.a3":"Vous pouvez déduire un montant forfaitaire pour les primes de caisse maladie. Ce montant dépend de votre canton et de votre situation familiale — ce n'est pas une déduction directe des primes versées.",
    "am.q4":"Mon enfant doit-il aussi être assuré LAMal ?","am.a4":"Oui, chaque enfant résidant en Suisse doit être assuré LAMal dès sa naissance. Les subventions cantonales réduisent souvent la prime à zéro ou quasi-zéro pour les familles à revenus modestes.",
    "am.q5":"Comment réduire ma prime LAMal sans perdre de couverture ?","am.a5":"Plusieurs leviers : augmenter la franchise, choisir un modèle alternatif (médecin de famille, HMO, télémédecine), comparer les assureurs chaque automne. Alpha Office fait cette analyse gratuitement.",
    "am.cta.title":"Optimisez votre couverture maladie","am.cta.desc":"Alpha Office compare les offres LAMal et complémentaires pour vous trouver la meilleure couverture au meilleur prix.","am.cta.btn":"Demander un bilan gratuit",
  },
  de: {
    "nav.home":"Startseite","nav.services":"Dienstleistungen","nav.luljeta":"Luljeta Selimi","nav.contact":"Kontakt","nav.cta":"Termin vereinbaren","nav.tp":"3. Säule",
    "hero.eyebrow":"Unabhängiger Versicherungsmakler · Genf",
    "hero.title":"Ihr Versicherungsmakler, <em>immer für Sie da.</em>",
    "hero.sub":"Alpha Office begleitet Unternehmen, Selbstständige und Privatpersonen in der ganzen Schweiz mit massgeschneiderten Versicherungslösungen.",
    "hero.cta1":"Unsere Dienstleistungen","hero.cta2":"Kontakt aufnehmen",
    "about.eyebrow":"Über uns","about.title":"Ein vertrauenswürdiger Partner für Ihre Versicherungen",
    "about.desc":"Alpha Office ist ein in Genf ansässiger, unabhängiger Versicherungsmakler, tätig in der ganzen Schweiz. Wir beraten unsere Kunden objektiv, ohne versteckte Kosten und mit vollständiger Transparenz.",
    "val.eyebrow":"Unsere Werte","val.title":"Was uns auszeichnet",
    "v1.t":"Transparenz","v1.d":"Klare und ehrliche Beratung ohne versteckte Kosten. Sie wissen immer genau, woran Sie sind.",
    "v2.t":"Unabhängigkeit","v2.d":"Frei in der Wahl aller Marktakteure, um Ihnen die beste Lösung anzubieten.",
    "v3.t":"Nähe","v3.d":"Persönliche und massgeschneiderte Betreuung. Wir sind immer für Sie da.",
    "v4.t":"Professionalität","v4.d":"FINMA-zugelassen, AFA-zertifiziert. Wir erfüllen die höchsten Berufsstandards.",
    "svc.eyebrow":"Unsere Dienstleistungen","svc.title":"Lösungen für jeden Bedarf","svc.desc":"Von der Bedarfsanalyse bis zur Schadenabwicklung – wir begleiten Sie auf jedem Schritt.",
    "s1.t":"Persönliche Beratung","s1.d":"Vollständige Analyse Ihrer Situation zur Ermittlung der besten Versicherungsdeckungen.",
    "s2.t":"Policenverwaltung","s2.d":"Vollständige Verwaltung Ihrer Versicherungsverträge von Abschluss bis Kündigung.",
    "s3.t":"Schadenabwicklung","s3.d":"Vollständige Begleitung und Unterstützung bei Schadenmeldungen bis zur Entschädigung.",
    "s4.t":"Unternehmenslösungen","s4.d":"Spezialisierte Lösungen zur Kostenreduzierung und Optimierung Ihrer Berufsversicherungen.",
    "svc.link":"Alle Dienstleistungen anzeigen →",
    "team.eyebrow":"Unser Team","team.title":"Erfahrene Führung",
    "team.role":"Direktorin · Alpha Office Sàrl",
    "team.bio":"Mit langjähriger Erfahrung in der Versicherungsbranche gründete Luljeta Selimi Alpha Office mit einer klaren Vision: einen transparenten, unabhängigen und persönlichen Maklerdienst anzubieten. Ihre Expertise macht Alpha Office zu einem vertrauenswürdigen Partner.",
    "cta.title":"Bereit, Ihre Versicherungen zu optimieren?","cta.desc":"Kontaktieren Sie uns für ein kostenloses und unverbindliches Erstgespräch.","cta.btn":"Termin vereinbaren",
    "sp.eyebrow":"Dienstleistungen","sp.title":"Umfassende Versicherungslösungen","sp.sub":"Wir begleiten Sie bei allen Versicherungsbedürfnissen, ob für den privaten oder beruflichen Bereich.",
    "sv1.n":"01","sv1.t":"Beratung & Analyse","sv1.d":"Wir führen eine eingehende Analyse Ihrer Situation durch, um Deckungslücken zu identifizieren und Ihnen auf Ihr Profil und Budget zugeschneiderte Lösungen vorzuschlagen.",
    "sv2.n":"02","sv2.t":"Policenverwaltung","sv2.d":"Wir übernehmen die gesamte Verwaltung Ihrer Versicherungspolicen: Abschluss, Verlängerung, Änderungen, Kündigungen. Ein Ansprechpartner für alle Verträge.",
    "sv3.n":"03","sv3.t":"Schadenbegleitung","sv3.d":"Im Schadensfall begleiten wir Sie von Anfang bis Ende: Meldung, Aktenverfolgung, Verhandlung und Entschädigung. Sie sind nie allein.",
    "sv4.n":"04","sv4.t":"Unternehmenslösungen","sv4.d":"Umfassende Lösungen: Haftpflichtversicherung, Mitarbeiterversicherung, Sachversicherung, Erwerbsausfallversicherung.",
    "pr.eyebrow":"So funktioniert es","pr.title":"Unser 3-Schritte-Prozess",
    "p1.t":"Erstgespräch","p1.d":"Wir nehmen uns Zeit, Ihre Situation in einem kostenlosen, unverbindlichen Gespräch zu verstehen.",
    "p2.t":"Analyse & Empfehlungen","p2.d":"Wir analysieren den Markt und präsentieren Ihnen klare, verglichene und massgeschneiderte Lösungen.",
    "p3.t":"Dauerhafte Begleitung","p3.d":"Wir verwalten Ihre Policen langfristig und passen Ihre Deckungen an die Veränderungen Ihres Lebens an.",
    "cp.eyebrow":"Kontaktieren Sie uns","cp.title":"Sprechen wir über Ihre Bedürfnisse","cp.sub":"Kostenloses und unverbindliches Erstgespräch. Antwort innerhalb von 48 Stunden.",
    "cf.title":"Senden Sie uns eine Nachricht",
    "f.fn":"Vorname","f.ln":"Nachname","f.em":"E-Mail-Adresse","f.ph":"Telefon","f.pol":"Policennummer (optional)","f.su":"Betreff","f.ms":"Ihre Nachricht","f.sb":"Nachricht senden","f.doc.info":"Um Dokumente (Policen, Verträge, Schadenmeldungen…) beizufügen, senden Sie diese direkt per:","f.doc.wa":"WhatsApp","f.doc":"Dokumente (optional)","f.doc.hint":"PDF, Word, Bilder – max. 10 MB pro Datei","f.doc.btn":"Dateien auswählen","f.doc.drop":"oder hierher ziehen",
    "f.o0":"Betreff auswählen","f.o1":"Versicherungsberatung","f.o2":"Policenverwaltung","f.o3":"Schadenmeldung","f.o4":"Unternehmenslösungen","f.o5":"Sonstiges",
    "ci.ad":"Adresse","ci.em":"E-Mail","ci.hr":"Öffnungszeiten","ci.hv":"Mo–Fr: 9:00 – 18:00 Uhr",
    "ci.title":"Unsere Kontaktdaten",
    "ty.eyebrow":"Nachricht erhalten","ty.title":"Vielen Dank für Ihre Nachricht!","ty.sub":"Wir haben Ihre Anfrage erhalten und werden uns innerhalb von <strong>48 Stunden</strong> bei Ihnen melden. Bis bald.","ty.home":"Zur Startseite","ty.svc":"Unsere Leistungen","ty.redirect":"Automatische Weiterleitung in 8 Sekunden…",
    "ft.desc":"Unabhängiger Versicherungsmakler mit Sitz in Genf, tätig in der ganzen Schweiz.",
    "ft.pages":"Seiten","ft.svc":"Dienstleistungen","ft.cnt":"Kontakt",
    "ft.leg":"Impressum","ft.prv":"Datenschutzrichtlinie","ft.copy":"© 2026 Alpha Office Sàrl. Alle Rechte vorbehalten.","ft.credit":"Erstellt von",
    "fsv1":"Persönliche Beratung","fsv2":"Policenverwaltung","fsv3":"Schadenabwicklung","fsv4":"Unternehmenslösungen",
    "rev.eyebrow":"Kundenstimmen","rev.title":"Sie vertrauen uns","rev.desc":"Die Zufriedenheit unserer Kunden ist unsere grösste Auszeichnung.",
    "r1.text":"« Luljeta hat sich die Zeit genommen, alle meine bestehenden Versicherungen zu analysieren. Ich konnte erheblich sparen und gleichzeitig meine Deckungen verbessern. Ein seltener Qualitätsservice. »","r1.label":"Privatperson · Genf",
    "r2.text":"« Als Selbstständiger wusste ich nicht, welche Deckungen wirklich notwendig sind. Alpha Office hat mich mit einer Klarheit beraten, die ich nie zuvor gefunden hatte. »","r2.label":"Selbstständiger · Lausanne",
    "r3.text":"« Nach einem komplexen Schadenfall hat Luljeta alles für uns übernommen. Sie verhandelte mit dem Versicherer und erzielte eine weit höhere Entschädigung als erwartet. »","r3.label":"Eigentümer · Cointrin",
    "r4.text":"« Wir haben Alpha Office die gesamte Verwaltung unserer KMU-Versicherungen anvertraut. Die Zeitersparnis ist enorm und die erhaltenen Konditionen ausgezeichnet. Sehr empfehlenswert. »","r4.label":"KMU-Leiter · Vernier",
    "r5.text":"« Ich war beeindruckt von der Reaktionsfähigkeit und Verfügbarkeit von Luljeta. Sie antwortet immer schnell und erklärt jedes Detail mit grosser Geduld. Eine echte Profi. »","r5.label":"Privatperson · Meyrin",
    "r6.text":"« Alpha Office hat uns ermöglicht, unsere gesamte Berufsversicherung zu optimieren. Objektive Beratung, ohne Verkaufsdruck. Genau das, was ein Unternehmer braucht. »","r6.label":"Unternehmer · Genf",
    "part.eyebrow":"Unsere Partner","part.title":"Führende Versicherungsgesellschaften","part.desc":"Als unabhängiger Makler arbeiten wir mit den wichtigsten Akteuren des Schweizer Marktes zusammen.",
    "ls.eyebrow":"Gründerin & Direktorin","ls.role":"Direktorin · Alpha Office Sàrl",
    "ls.stat1":"Jahre Erfahrung","ls.stat2":"unabhängig","ls.stat3":"ganze Schweiz",
    "ls.intro":"Mit 25 Jahren Erfahrung in der Schweizer Versicherungsbranche gründete Luljeta Selimi Alpha Office mit einer klaren Vision: transparente, unabhängige und persönliche Maklerdienstleistungen anzubieten.",
    "ls.badge":"Jahre<br/>Erf.",
    "ls.parcours.eyebrow":"Werdegang","ls.parcours.title":"Eine Karriere im Dienst unserer Kunden","ls.parcours.desc":"Seit Beginn ihrer Karriere hat Luljeta Selimi den Menschen stets in den Mittelpunkt ihrer Arbeit gestellt.",
    "ls.t1.title":"Versicherungsberaterin","ls.t1.desc":"Erste Schritte in der Beratung von Privatpersonen und KMUs, Spezialisierung auf Lebens- und Krankenversicherungen.",
    "ls.t2.title":"Portfoliomanagerin","ls.t2.desc":"Verwaltung eines Unternehmenskundenstamms, Expertise in Gewerbeversicherungen und komplexen Schadensfällen.",
    "ls.t3.title":"Unabhängige Maklerin","ls.t3.desc":"Selbstständige Tätigkeit als FINMA-zugelassene Maklerin, Aufbau eines treuen Kundenstamms.",
    "ls.t4.title":"Gründerin & Direktorin – Alpha Office Sàrl","ls.t4.desc":"Gründung von Alpha Office in Genf für eine unabhängige und transparente Maklertätigkeit auf nationaler Ebene.",
    "ls.approach.eyebrow":"Ihre Arbeitsweise","ls.approach.title":"Was jede Beratung leitet",
    "ls.a1.t":"Zuhören zuerst","ls.a1.d":"Jeder Kunde ist einzigartig. Luljeta nimmt sich Zeit, die reale Situation zu verstehen, bevor sie eine Lösung vorschlägt.",
    "ls.a2.t":"Gründliche Analyse","ls.a2.d":"25 Jahre Erfahrung ermöglichen es, zwischen den Zeilen eines Vertrags zu lesen und unsichtbare Lücken zu erkennen.",
    "ls.a3.t":"Dauerhaftes Engagement","ls.a3.d":"Die Beziehung endet nicht mit der Unterschrift. Luljeta begleitet ihre Kunden langfristig und im Schadenfall.",
    "ls.finma.eyebrow":"Offizielle Zulassung","ls.finma.title":"FINMA-zugelassen","ls.finma.desc":"Luljeta Selimi ist bei der Eidgenössischen Finanzmarktaufsicht (FINMA) registriert und zugelassen, was eine gesetzeskonforme Berufsausübung nach Schweizer Recht garantiert.",
    "ls.afa":"AFA-zertifiziert",
    "nav.tp":"3. Säule",
    "tp.eyebrow":"Private Vorsorge","tp.title":"Die 3. Säule erklärt","tp.sub":"Verstehen Sie das Schweizer Vorsorgesystem und warum die 3. Säule für Ihre finanzielle Zukunft unerlässlich ist.",
    "tp.s1.eyebrow":"Das Schweizer System","tp.s1.title":"Die 3 Säulen der Vorsorge","tp.s1.desc":"Die Schweiz verfügt über ein einzigartiges Vorsorgesystem, das aus drei sich ergänzenden Säulen besteht. Gemeinsam sollen sie Ihren Lebensstandard im Ruhestand sichern.",
    "tp.p1.tag":"Obligatorisch","tp.p1.title":"AHV / IV","tp.p1.desc":"Alters- und Hinterlassenenversicherung. Deckt die grundlegenden Lebensbedürfnisse ab. Finanziert durch Beiträge aller Arbeitnehmer und Arbeitgeber.",
    "tp.p2.tag":"Obligatorisch","tp.p2.title":"BVG / Pensionskasse","tp.p2.desc":"Berufliche Vorsorge. Obligatorisch für Arbeitnehmer. Ergänzt die AHV und sichert den gewohnten Lebensstandard.",
    "tp.p3.tag":"Freiwillig","tp.p3.badge":"Sie sind hier","tp.p3.title":"Private Vorsorge","tp.p3.desc":"Individuelle und freiwillige Ersparnis. Schliesst die Lücke zwischen Ihrem letzten Lohn und den Renten. Mit erheblichen Steuervorteilen.",
    "tp.info":"In der Schweiz ersetzen die ersten beiden Säulen in der Regel <strong>60 bis 70 %</strong> Ihres letzten Lohns. Die 3. Säule schliesst diese Lücke und sichert Ihren Lebensstandard.",
    "tp.s2.eyebrow":"Zwei Optionen","tp.s2.title":"Säule 3a oder 3b: Was ist der Unterschied?","tp.s2.desc":"Die dritte Säule ist in zwei verschiedene Formen unterteilt, mit unterschiedlichen Vorteilen und Einschränkungen.",
    "tp.3a.sub":"Gebundene Vorsorge – mit Steuerabzug",
    "tp.3a.f1":"100 % vom steuerbaren Einkommen abziehbar","tp.3a.f2":"Zinsen und Renditen steuerfrei","tp.3a.f3":"Verfügbar: Bank oder Versicherungsgesellschaft","tp.3a.f4":"Ideal für: Arbeitnehmer und Selbstständige","tp.3a.f5":"Auszahlung nur in bestimmten Fällen möglich",
    "tp.3a.lim1":"CHF 7'258 / Jahr","tp.3a.lim1s":"für Arbeitnehmer (2025)","tp.3a.lim2":"CHF 36'288 / Jahr","tp.3a.lim2s":"für Selbstständige (max. 20 % des AHV-Nettoeinkommens)",
    "tp.3b.sub":"Freie Vorsorge – ohne Bezugseinschränkung",
    "tp.3b.f1":"Keine Einschränkungen beim Bezug der Mittel","tp.3b.f2":"Kein jährliches Beitragslimit","tp.3b.f3":"Teilweiser Steuerabzug je nach Kanton","tp.3b.f4":"Gemischte Lebensversicherung, freies Sparkonto","tp.3b.f5":"Ideal für: mittelfristige Ziele",
    "tp.3b.lim":"Keine gesetzliche Obergrenze","tp.3b.lims":"Volle Flexibilität bei Beträgen und Bezug",
    "tp.s3.eyebrow":"Konkrete Vorteile","tp.s3.title":"Was Sie wirklich sparen","tp.s3.desc":"Durch Einzahlungen in die Säule 3a reduzieren Sie direkt Ihr steuerbares Einkommen. Die Steuerersparnis hängt von Ihrem Einkommen und Ihrem Kanton ab.",
    "tp.tax1":"Maximaler Jahresabzug für Arbeitnehmer (2025)","tp.tax2":"Steuerersparnis je nach Einkommen und Kanton","tp.tax3":"Geschätzte jährliche Steuerersparnis für ein mittleres Einkommen in Genf",
    "tp.withdraw.title":"Wann kann man die Säule 3a beziehen?",
    "tp.w1.t":"Immobilienkauf","tp.w1.d":"Finanzierung oder Rückzahlung eines Erstwohnsitzes in der Schweiz.",
    "tp.w2.t":"Auswanderung","tp.w2.d":"Bezug bei definitiver Auswanderung aus der Schweiz möglich.",
    "tp.w3.t":"Selbstständigkeit","tp.w3.d":"Bezug bei Aufgabe der Pensionskassenzugehörigkeit (BVG).",
    "tp.w4.t":"Pension","tp.w4.d":"Ab 60 Jahren (oder 5 Jahre vor dem ordentlichen Rentenalter).",
    "tp.w5.t":"Invalidität","tp.w5.d":"Bei vollständiger oder teilweiser IV-anerkannter Invalidität.",
    "tp.w6.t":"Todesfall","tp.w6.d":"Auszahlung an designierte Begünstigte oder gesetzliche Erben.",
    "tp.s4.eyebrow":"Profile","tp.s4.title":"Für wen ist die 3. Säule gedacht?",
    "tp.pr1.t":"Arbeitnehmer","tp.pr1.d":"Sie haben Zugang zur Säule 3a mit dem maximalen Abzug von CHF 7'258. Es ist die einfachste Möglichkeit, Steuern zu sparen und gleichzeitig für die Rente vorzusorgen.",
    "tp.pr2.t":"Selbstständige","tp.pr2.d":"Ohne obligatorische 2. Säule ist die 3. Säule Ihr wichtigstes Vorsorge­instrument. Sie können bis zu CHF 36'288 pro Jahr abziehen — ein wichtiger Steuerhebel.",
    "tp.pr3.t":"Expatriates & Grenzgänger","tp.pr3.d":"Wenn Sie in der Schweiz arbeiten und der AHV angeschlossen sind, können Sie in die 3. Säule einzahlen, auch wenn Sie im Ausland wohnen.",
    "tp.faq.eyebrow":"Häufige Fragen","tp.faq.title":"Was unsere Kunden fragen",
    "tp.q1":"Was ist der Unterschied zwischen 3a bei einer Bank und bei einer Versicherung?","tp.a1":"Ein Bank-3a ist ein Spar- oder Anlagekonto: Sie zahlen frei ein, ohne Laufzeitverpflichtung. Ein Versicherungs-3a kombiniert das Sparen mit einer Absicherung bei Tod oder Invalidität — wenn Sie nicht mehr einzahlen können, übernimmt die Gesellschaft.",
    "tp.q2":"Kann ich mehrere Säulen 3a haben?","tp.a2":"Ja. Es ist möglich, mehrere 3a-Konten oder Policen gleichzeitig zu haben. Das ist sogar empfehlenswert: Bei der Auszahlung wird jedes Konto separat besteuert, was die Steuerlast auf mehrere Jahre verteilt.",
    "tp.q3":"Wie viel Steuern spare ich?","tp.a3":"Das hängt von Ihrem Bruttoeinkommen, Ihrer familiären Situation und Ihrem Kanton ab. In Genf kann das Einzahlen von CHF 7'258 für einen Alleinstehenden mit CHF 80'000 Einkommen eine Steuerersparnis von CHF 1'800 bis 2'500 pro Jahr bedeuten.",
    "tp.q4":"Ab welchem Alter lohnt es sich anzufangen?","tp.a4":"Je früher, desto besser. Mit 25 statt mit 40 anzufangen kann dank Zinseszins CHF 100'000 bis 200'000 mehr bei der Rente bedeuten. Aber es ist nie zu spät: Selbst mit 50 sind die jährlichen Steuervorteile sehr bedeutsam.",
    "tp.q5":"Wird die Säule 3a bei der Auszahlung besteuert?","tp.a5":"Ja, aber zu einem reduzierten Satz. Das Kapital wird separat vom Einkommen zu einem Vorzugssatz besteuert (ca. 1/5 des ordentlichen Satzes). Diese Besteuerung bleibt weit unter den kumulierten Steuerersparnissen der Einzahlungsjahre.",
    "tp.cta.title":"Bereit, Ihre Vorsorge zu optimieren?","tp.cta.desc":"Jede Situation ist einzigartig. Unsere Berater analysieren Ihr Profil und empfehlen Ihnen die am besten geeignete 3. Säule Lösung.","tp.cta.btn":"Kostenlose Beratung anfragen",
    "ck.text":"Wir verwenden Cookies zur Verbesserung Ihres Erlebnisses und zur Analyse unseres Traffics, gemäss <a href=\"confidentialite.html\">DSG</a>.",
    "ck.accept":"Akzeptieren","ck.decline":"Ablehnen",
    "nav.am":"Krankenversicherung",
    "am.eyebrow":"Krankenversicherung","am.title":"KVG und Zusatzversicherungen erklärt","am.sub":"Verstehen Sie das Schweizer Krankenversicherungssystem, Ihre gesetzlichen Pflichten und wie Sie Ihren Versicherungsschutz optimieren.",
    "am.s1.eyebrow":"Die Grundversicherung","am.s1.title":"Das KVG: obligatorisch für alle","am.s1.desc":"In der Schweiz muss jede wohnhafte Person einer anerkannten Krankenkasse beitreten. Das KVG garantiert allen einen gleichberechtigten Zugang zur Grundversorgung.",
    "am.lamal.tag":"Obligatorisch","am.lamal.title":"KVG – Grundversicherung","am.lamal.f1":"Haus- und Fachärzte","am.lamal.f2":"Spitalaufenthalt in der Allgemeinen Abteilung","am.lamal.f3":"Medikamente der Spezialitätenliste","am.lamal.f4":"Mutterschaft, Notfälle, Prävention",
    "am.comp.tag":"Freiwillig","am.comp.title":"Zusatzversicherungen","am.comp.f1":"Privat- oder Halbprivatabteilung im Spital","am.comp.f2":"Alternativmedizin und Brillen","am.comp.f3":"Zahnpflege und Kieferorthopädie","am.comp.f4":"Erweiterte internationale Deckung",
    "am.info":"Die KVG-Prämie kann je nach Versicherer, Region und Franchise um bis zu <strong>40 %</strong> variieren. Ein unabhängiger Makler vergleicht alle Angebote für Sie.",
    "am.s2.eyebrow":"Über das Minimum hinaus","am.s2.title":"Die Zusatzversicherungen","am.s2.desc":"Zusatzversicherungen erweitern Ihren Schutz je nach Lebensstil. Sie sind freiwillig, oft aber sehr vorteilhaft.",
    "am.c1.t":"Spital","am.c1.d":"Privat- oder Halbprivatklasse, freie Arztwahl in der Schweiz, Auslandsdeckung.",
    "am.c2.t":"Ambulant","am.c2.d":"Osteopathie, Chiropraktik, Akupunktur, Brillen, Gesundheitschecks und Komplementärmedizin.",
    "am.c3.t":"Zahnarzt","am.c3.d":"Zahnbehandlungen, Kieferorthopädie, Zahnprothesen — nicht durch das KVG gedeckt.",
    "am.c4.t":"International","am.c4.d":"Behandlung im Ausland, medizinische Rückführung, Reiseassistenz — ideal für Expatriates und Vielreisende.",
    "am.s3.eyebrow":"Versicherungsschutz optimieren","am.s3.title":"Franchise und Prämie: die richtige Wahl","am.s3.desc":"Die Franchise ist der jährliche Selbstbehalt, bevor die Versicherung leistet. Je höher die Franchise, desto tiefer die Prämie.",
    "am.stat1":"CHF 300 bis 2'500 — Jährliche Franchise-Spanne","am.stat2":"~40 % — Mögliche Prämienreduktion mit maximaler Franchise","am.stat3":"26 Versicherer — Im Wettbewerb um Ihre KVG",
    "am.tip.title":"Grundregel","am.tip.d1":"Hohe Franchise (CHF 2'500) wenn Sie gesund sind und selten zum Arzt gehen.","am.tip.d2":"Tiefe Franchise (CHF 300) bei regelmässigen Arztkosten.","am.tip.d3":"Das Modell (Hausarzt, HMO, Telemedizin) kann Ihre Prämie zusätzlich um 10–20 % senken.",
    "am.s4.eyebrow":"Profile","am.s4.title":"Welcher Schutz für wen?",
    "am.pr1.t":"Familien","am.pr1.d":"Kinder sind bis 18 Jahre KVG-prämienfrei. Zahnarzt- und Kinderarzt-Zusatzversicherungen bieten vollständigen Schutz.",
    "am.pr2.t":"Gesunde Personen","am.pr2.d":"Eine hohe Franchise und ein alternatives Modell (HMO oder Telemedizin) senken die Prämie erheblich bei solider Grunddeckung.",
    "am.pr3.t":"Regelmässige Arztbesuche","am.pr3.d":"Eine tiefe Franchise und geeignete ambulante Zusatzversicherungen schützen wirksam ohne Überraschungen am Jahresende.",
    "am.faq.eyebrow":"Häufige Fragen","am.faq.title":"Was unsere Kunden fragen",
    "am.q1":"Kann ich jedes Jahr den Versicherer wechseln?","am.a1":"Ja. Sie können die Krankenkasse zum 1. Januar wechseln, wenn Sie die Kündigung bis 30. November einreichen. Alpha Office vergleicht die Angebote und erledigt den Wechsel für Sie.",
    "am.q2":"Was ist der Unterschied zwischen KVG und Zusatzversicherung?","am.a2":"Das KVG ist obligatorisch und deckt die gesetzlich definierten Grundleistungen. Zusatzversicherungen sind freiwillig: Privatklasse, Komplementärmedizin, Zahnarzt usw.",
    "am.q3":"Sind KVG-Prämien steuerlich abzugsfähig?","am.a3":"Sie können einen Pauschalabzug für Krankenkassenprämien geltend machen. Der Betrag hängt vom Kanton und Ihrer familiären Situation ab — kein direkter Abzug der bezahlten Prämien.",
    "am.q4":"Muss auch mein Kind KVG-versichert sein?","am.a4":"Ja, jedes in der Schweiz wohnhafte Kind muss ab Geburt KVG-versichert sein. Kantonale Prämienverbilligungen reduzieren die Prämie für Familien mit bescheidenem Einkommen oft auf null.",
    "am.q5":"Wie kann ich meine KVG-Prämie senken?","am.a5":"Franchise erhöhen, alternatives Modell wählen (Hausarzt, HMO, Telemedizin), Versicherer jährlich vergleichen. Alpha Office führt diese Analyse kostenlos für Sie durch.",
    "am.cta.title":"Optimieren Sie Ihren Krankenversicherungsschutz","am.cta.desc":"Alpha Office vergleicht KVG- und Zusatzversicherungsangebote für die beste Deckung zum besten Preis.","am.cta.btn":"Kostenloses Beratungsgespräch",
  },
  en: {
    "nav.home":"Home","nav.services":"Services","nav.contact":"Contact","nav.cta":"Book appointment","nav.tp":"3rd pillar",
    "hero.title":"Your insurance broker, <em>by your side.</em>",
    "hero.sub":"Alpha Office supports businesses, self-employed and individuals throughout Switzerland with tailored insurance solutions.",
    "hero.cta1":"Discover our services","hero.cta2":"Contact us",
    "about.eyebrow":"About us","about.title":"A trusted partner for your insurance",
    "about.desc":"Founded in Geneva, Alpha Office is an independent insurance brokerage operating throughout Switzerland. We advise clients objectively, with no hidden costs.",
    "val.eyebrow":"Our values","val.title":"What sets us apart",
    "v1.t":"Transparency","v1.d":"Clear and honest advice, no hidden fees. You always know where you stand.",
    "v2.t":"Independence","v2.d":"Free to choose among all major market players to offer you the best solution.",
    "v3.t":"Proximity","v3.d":"Personal and tailored support. We are always available to assist you.",
    "v4.t":"Professionalism","v4.d":"FINMA registered, AFA certified. We meet the highest professional standards.",
    "svc.eyebrow":"Our services","svc.title":"Solutions for every need","svc.desc":"From needs analysis to claims management, we support you at every step.",
    "s1.t":"Personal advice","s1.d":"Complete analysis of your situation to identify the best coverage.",
    "s2.t":"Policy management","s2.d":"Full administration of all your insurance contracts.",
    "s3.t":"Claims management","s3.d":"Full assistance from start to finish for your claims.",
    "s4.t":"Business solutions","s4.d":"Reduce costs and optimise your professional coverage.",
    "svc.link":"View all services →",
    "team.eyebrow":"Our team","team.title":"Experienced leadership","team.role":"Director · Alpha Office Sàrl",
    "team.bio":"With 25 years of experience in insurance, Luljeta Selimi founded Alpha Office with a clear vision: transparent, independent and human brokerage.",
    "cta.title":"Ready to optimise your insurance?","cta.desc":"Contact us for a free, no-obligation initial consultation.","cta.btn":"Book appointment",
    "sp.eyebrow":"Services","sp.title":"Complete insurance solutions","sp.sub":"We support you with all your insurance needs, whether personal or professional.",
    "pr.eyebrow":"How it works","pr.title":"Our 3-step process",
    "p1.t":"Initial consultation","p1.d":"We take time to understand your situation in a free, no-obligation meeting.",
    "p2.t":"Analysis & recommendations","p2.d":"We analyse the market and present clear, personalised solutions.",
    "p3.t":"Ongoing support","p3.d":"We manage your policies and update your coverage as your life evolves.",
    "cp.eyebrow":"Contact us","cp.title":"Let's talk about your needs","cp.sub":"Free initial consultation. Response within 48 hours.",
    "cf.title":"Send us a message",
    "f.fn":"First name","f.ln":"Last name","f.em":"Email address","f.ph":"Phone","f.pol":"Policy number (optional)","f.su":"Subject","f.ms":"Your message","f.sb":"Send message","f.doc.info":"To attach documents (policies, contracts, claims…), send them directly via:","f.doc.wa":"WhatsApp","f.doc":"Documents (optional)","f.doc.hint":"PDF, Word, images – max 10 MB per file","f.doc.btn":"Choose files","f.doc.drop":"or drag and drop here",
    "f.o0":"Select a subject","f.o1":"Insurance advice","f.o2":"Policy management","f.o3":"Claims declaration","f.o4":"Business solutions","f.o5":"Other",
    "ci.ad":"Address","ci.em":"Email","ci.hr":"Opening hours","ci.hv":"Mon–Fri: 9:00 am – 6:00 pm","ci.title":"Our contact details",
    "ty.eyebrow":"Message received","ty.title":"Thank you for your message!","ty.sub":"We have received your request and will get back to you within <strong>48 hours</strong>. See you soon.","ty.home":"Back to home","ty.svc":"Our services","ty.redirect":"Automatic redirect in 8 seconds…",
    "ft.desc":"Independent insurance brokerage based in Geneva, operating throughout Switzerland.",
    "ft.pages":"Pages","ft.svc":"Services","ft.cnt":"Contact",
    "ft.leg":"Legal notice","ft.prv":"Privacy policy","ft.copy":"© 2026 Alpha Office Sàrl. All rights reserved.","ft.credit":"Created by",
    "fsv1":"Personal advice","fsv2":"Policy management","fsv3":"Claims management","fsv4":"Business solutions",
    "rev.eyebrow":"Client reviews","rev.title":"They trust us","rev.desc":"Client satisfaction is our greatest reward.",
    "r1.label":"Private client · Geneva","r2.label":"Self-employed · Lausanne","r3.label":"Homeowners · Cointrin","r4.label":"SME Director · Vernier","r5.label":"Private client · Meyrin","r6.label":"Entrepreneur · Geneva",
    "part.eyebrow":"Our partners","part.title":"Reference insurers","part.desc":"As an independent broker, we work with the main players in the Swiss insurance market.",
    "ls.eyebrow":"Founding Director","ls.role":"Director · Alpha Office Sàrl","ls.stat1":"years of experience","ls.stat2":"independent","ls.stat3":"all Switzerland",
    "ls.intro":"With 25 years of experience in Swiss insurance, Luljeta Selimi founded Alpha Office with a clear vision: transparent, independent and deeply human brokerage.",
    "ls.badge":"years<br/>exp.",
    "ls.parcours.eyebrow":"Career","ls.parcours.title":"A career in service of our clients","ls.parcours.desc":"Luljeta Selimi has always put people at the heart of her practice.",
    "ls.t1.title":"Insurance adviser","ls.t1.desc":"First steps advising individuals and SMEs, specialisation in life and health insurance.",
    "ls.t2.title":"Portfolio manager","ls.t2.desc":"Managing a corporate client portfolio, expertise in commercial insurance and complex claims.",
    "ls.t3.title":"Independent broker","ls.t3.desc":"FINMA-licensed independent broker, building a loyal client base through personalised service.",
    "ls.t4.title":"Founder & Director – Alpha Office Sàrl","ls.t4.desc":"Founded Alpha Office in Geneva for independent and transparent brokerage at national level.",
    "ls.approach.eyebrow":"Her approach","ls.approach.title":"What guides every consultation",
    "ls.a1.t":"Listening first","ls.a1.d":"Every client is unique. Luljeta takes time to understand the real situation before proposing any solution.",
    "ls.a2.t":"Rigorous analysis","ls.a2.d":"25 years of experience allow reading between the lines of a contract and detecting invisible gaps.",
    "ls.a3.t":"Lasting commitment","ls.a3.d":"The relationship doesn't end at signing. Luljeta accompanies clients long-term and through claims.",
    "ls.finma.eyebrow":"Official licence","ls.finma.title":"FINMA registered","ls.finma.desc":"Luljeta Selimi is registered and licensed with FINMA, guaranteeing compliant practice under Swiss law.",
    "ls.afa":"AFA certified",
    "nav.tp":"3rd pillar",
    "tp.eyebrow":"Private pension","tp.title":"The 3rd pillar explained","tp.sub":"Understand the Swiss pension system and why the 3rd pillar is essential for your financial future.",
    "tp.s1.eyebrow":"The Swiss system","tp.s1.title":"The 3 pillars of pension","tp.s1.desc":"Switzerland has a unique pension system structured around three complementary pillars. Together, they aim to maintain your standard of living after retirement.",
    "tp.p1.tag":"Mandatory","tp.p1.title":"AHV / IV","tp.p1.desc":"Old age and survivors insurance. Covers basic living needs. Funded by contributions from all employees and employers.",
    "tp.p2.tag":"Mandatory","tp.p2.title":"BVG / Pension fund","tp.p2.desc":"Occupational pension. Mandatory for employees. Maintains your usual standard of living in addition to the AHV.",
    "tp.p3.tag":"Voluntary","tp.p3.badge":"You are here","tp.p3.title":"Private pension","tp.p3.desc":"Individual and voluntary savings. Bridges the gap between your last salary and your pension. With significant tax benefits.",
    "tp.info":"In Switzerland, the first two pillars generally replace <strong>60 to 70%</strong> of your last salary. The 3rd pillar bridges this gap to maintain your quality of life.",
    "tp.s2.eyebrow":"Two options","tp.s2.title":"Pillar 3a or 3b: what's the difference?","tp.s2.desc":"The third pillar is divided into two distinct forms, with different advantages and constraints.",
    "tp.3a.sub":"Tied pension – with tax deduction",
    "tp.3a.f1":"100% deductible from taxable income","tp.3a.f2":"Interest and returns tax-free","tp.3a.f3":"Available: bank or insurance company","tp.3a.f4":"Ideal for: employees and self-employed","tp.3a.f5":"Withdrawal only in specific cases",
    "tp.3a.lim1":"CHF 7,258 / year","tp.3a.lim1s":"for employees (2025)","tp.3a.lim2":"CHF 36,288 / year","tp.3a.lim2s":"for self-employed (max. 20% of net AHV income)",
    "tp.3b.sub":"Free pension – no withdrawal restriction",
    "tp.3b.f1":"No restrictions on fund withdrawal","tp.3b.f2":"No annual contribution limit","tp.3b.f3":"Partial tax deduction depending on canton","tp.3b.f4":"Mixed life insurance, free savings account","tp.3b.f5":"Ideal for: medium-term goals",
    "tp.3b.lim":"No legal cap","tp.3b.lims":"Full flexibility on amounts and withdrawals",
    "tp.s3.eyebrow":"Concrete benefits","tp.s3.title":"What you actually save","tp.s3.desc":"By contributing to pillar 3a, you directly reduce your taxable income. The tax saving depends on your income and your canton.",
    "tp.tax1":"Maximum annual deduction for an employee (2025)","tp.tax2":"Tax saving depending on income and canton","tp.tax3":"Estimated annual tax saving for an average income in Geneva",
    "tp.withdraw.title":"When can you withdraw your pillar 3a?",
    "tp.w1.t":"Property purchase","tp.w1.d":"Financing or repaying a primary residence in Switzerland.",
    "tp.w2.t":"Leaving Switzerland","tp.w2.d":"Withdrawal possible upon definitive emigration from Switzerland.",
    "tp.w3.t":"Self-employment","tp.w3.d":"Withdrawal if you cease to be affiliated with a pension fund (BVG).",
    "tp.w4.t":"Retirement","tp.w4.d":"From age 60 (or 5 years before the legal retirement age).",
    "tp.w5.t":"Disability","tp.w5.d":"In case of total or partial disability recognised by the IV.",
    "tp.w6.t":"Death","tp.w6.d":"Paid to designated beneficiaries or legal heirs.",
    "tp.s4.eyebrow":"Profiles","tp.s4.title":"Who is the 3rd pillar for?",
    "tp.pr1.t":"Employees","tp.pr1.d":"You have access to pillar 3a with the maximum deduction of CHF 7,258. It's the simplest way to save on taxes while preparing for retirement.",
    "tp.pr2.t":"Self-employed","tp.pr2.d":"Without a mandatory 2nd pillar, the 3rd pillar is your main pension tool. You can deduct up to CHF 36,288 per year — a major tax lever.",
    "tp.pr3.t":"Expats & cross-border workers","tp.pr3.d":"If you work in Switzerland and are affiliated with the AHV, you can contribute to the 3rd pillar even if you live abroad.",
    "tp.faq.eyebrow":"Frequently asked questions","tp.faq.title":"What our clients ask",
    "tp.q1":"What is the difference between a 3a at a bank and at an insurance company?","tp.a1":"A bank 3a is a savings or investment account: you contribute freely, with no duration commitment. An insurance 3a combines savings with cover in case of death or disability — if you can no longer contribute, the company continues on your behalf.",
    "tp.q2":"Can I have multiple 3a pillars?","tp.a2":"Yes. It is possible to have several 3a accounts or policies simultaneously. It is even recommended: at withdrawal, each account is taxed separately, allowing you to spread the tax burden over several years.",
    "tp.q3":"How much tax will I save?","tp.a3":"It depends on your gross income, family situation and canton. In Geneva, a single person earning CHF 80,000 contributing CHF 7,258 may save CHF 1,800 to CHF 2,500 in tax per year.",
    "tp.q4":"From what age is it useful to start?","tp.a4":"The earlier the better. Starting at 25 rather than 40 can make a difference of CHF 100,000 to 200,000 at retirement thanks to compound interest. But it's never too late: even at 50, the annual tax benefits remain very significant.",
    "tp.q5":"Is pillar 3a taxed at withdrawal?","tp.a5":"Yes, but at a reduced rate. The capital is taxed separately from income at a preferential rate (approximately 1/5 of the ordinary rate). This taxation remains far below the cumulative tax savings over the contribution years.",
    "tp.cta.title":"Ready to optimise your pension?","tp.cta.desc":"Every situation is unique. Our advisers analyse your profile and recommend the most suitable 3rd pillar solution for your goals.","tp.cta.btn":"Request a free consultation",
    "ck.text":"We use cookies to improve your experience and analyse our traffic, in accordance with the <a href=\"confidentialite.html\">nFADP</a>.",
    "ck.accept":"Accept","ck.decline":"Decline",
    "nav.am":"Health insurance",
    "am.eyebrow":"Health insurance","am.title":"LAMal and supplementary insurance explained","am.sub":"Understand the Swiss health insurance system, your legal obligations and how to optimise your coverage.",
    "am.s1.eyebrow":"Basic insurance","am.s1.title":"LAMal: mandatory for everyone","am.s1.desc":"In Switzerland, every resident must join a recognised health insurer. LAMal guarantees equal access to basic healthcare for all.",
    "am.lamal.tag":"Mandatory","am.lamal.title":"LAMal – Basic insurance","am.lamal.f1":"General practitioners and specialists","am.lamal.f2":"Hospital stay in standard ward","am.lamal.f3":"Medications on the official list","am.lamal.f4":"Maternity, emergencies, prevention",
    "am.comp.tag":"Optional","am.comp.title":"Supplementary insurance","am.comp.f1":"Private or semi-private hospital room","am.comp.f2":"Alternative medicine and glasses","am.comp.f3":"Dental care and orthodontics","am.comp.f4":"Extended international coverage",
    "am.info":"LAMal premiums can vary by up to <strong>40%</strong> depending on insurer, region and deductible. An independent broker compares all offers for you.",
    "am.s2.eyebrow":"Beyond the minimum","am.s2.title":"Supplementary insurance","am.s2.desc":"Supplementary insurance extends your coverage to suit your lifestyle. Optional but often very advantageous.",
    "am.c1.t":"Hospitalisation","am.c1.d":"Private or semi-private room, free choice of doctor in Switzerland, international coverage.",
    "am.c2.t":"Outpatient","am.c2.d":"Osteopathy, chiropractic, acupuncture, glasses, health check-ups and alternative medicine.",
    "am.c3.t":"Dental","am.c3.d":"Routine dental care, orthodontics, prostheses — not covered by LAMal.",
    "am.c4.t":"International","am.c4.d":"Medical care abroad, repatriation, travel assistance — ideal for expats and frequent travellers.",
    "am.s3.eyebrow":"Optimise your coverage","am.s3.title":"Deductible and premium: making the right choice","am.s3.desc":"The deductible is the annual amount you pay before insurance steps in. The higher the deductible, the lower your premium.",
    "am.stat1":"CHF 300 to 2,500 — Annual deductible range","am.stat2":"~40% — Possible premium reduction with maximum deductible","am.stat3":"26 insurers — Competing for your LAMal",
    "am.tip.title":"General rule","am.tip.d1":"High deductible (CHF 2,500) if you are healthy and rarely visit a doctor.","am.tip.d2":"Low deductible (CHF 300) if you have regular medical expenses.","am.tip.d3":"The model (family doctor, HMO, telemedicine) can also reduce your premium by 10–20%.",
    "am.s4.eyebrow":"Profiles","am.s4.title":"Which coverage for whom?",
    "am.pr1.t":"Families","am.pr1.d":"Children are covered free under LAMal until age 18. Consider dental and paediatric supplements for complete protection.",
    "am.pr2.t":"Healthy individuals","am.pr2.d":"A high deductible and an alternative model (HMO or telemedicine) significantly reduce premiums while maintaining solid coverage.",
    "am.pr3.t":"Regular medical needs","am.pr3.d":"A low deductible and well-chosen outpatient supplements protect you effectively with no surprises at year end.",
    "am.faq.eyebrow":"Frequently asked questions","am.faq.title":"What our clients ask",
    "am.q1":"Can I change insurer every year?","am.a1":"Yes. You can switch for 1 January by sending cancellation before 30 November. Alpha Office compares offers and handles the switch for you.",
    "am.q2":"What is the difference between LAMal and supplementary?","am.a2":"LAMal is mandatory, covering legally defined basic benefits. Supplementary insurance is optional: private room, alternative medicine, dental, etc.",
    "am.q3":"Are LAMal premiums tax deductible?","am.a3":"You can deduct a lump sum for health insurance premiums. The amount depends on your canton and family situation — not a direct deduction of premiums paid.",
    "am.q4":"Does my child need LAMal too?","am.a4":"Yes, every child in Switzerland must be insured from birth. Cantonal subsidies often reduce the premium to zero for lower-income families.",
    "am.q5":"How can I reduce my LAMal premium?","am.a5":"Raise the deductible, choose an alternative model (family doctor, HMO, telemedicine), compare insurers each autumn. Alpha Office does this analysis free of charge.",
    "am.cta.title":"Optimise your health coverage","am.cta.desc":"Alpha Office compares LAMal and supplementary offers to find you the best coverage at the best price.","am.cta.btn":"Request a free review",
  },
  it: {
    "nav.home":"Inizio","nav.services":"Servizi","nav.contact":"Contatto","nav.cta":"Fissa appuntamento","nav.tp":"3° pilastro",
    "hero.title":"Il vostro broker assicurativo, <em>al vostro fianco.</em>",
    "hero.sub":"Alpha Office accompagna aziende, lavoratori autonomi e privati in tutta la Svizzera con soluzioni assicurative su misura.",
    "hero.cta1":"Scopri i nostri servizi","hero.cta2":"Contattaci",
    "about.eyebrow":"Chi siamo","about.title":"Un partner di fiducia per le vostre assicurazioni",
    "about.desc":"Fondata a Ginevra, Alpha Office è uno studio di brokeraggio assicurativo indipendente operante in tutta la Svizzera.",
    "val.eyebrow":"I nostri valori","val.title":"Ciò che ci distingue",
    "v1.t":"Trasparenza","v1.d":"Consigli chiari e onesti, senza costi nascosti.",
    "v2.t":"Indipendenza","v2.d":"Liberi di scegliere la migliore soluzione per voi.",
    "v3.t":"Prossimità","v3.d":"Supporto umano e personalizzato, sempre disponibili.",
    "v4.t":"Professionalità","v4.d":"Autorizzato FINMA, certificato AFA.",
    "svc.eyebrow":"I nostri servizi","svc.title":"Soluzioni per ogni esigenza","svc.desc":"Dall'analisi dei bisogni alla gestione dei sinistri, vi accompagniamo ad ogni passo.",
    "s1.t":"Consulenza personale","s1.d":"Analisi completa per identificare le migliori coperture.",
    "s2.t":"Gestione delle polizze","s2.d":"Amministrazione completa di tutti i vostri contratti assicurativi.",
    "s3.t":"Gestione dei sinistri","s3.d":"Assistenza completa dall'inizio alla fine.",
    "s4.t":"Soluzioni aziendali","s4.d":"Riducete i costi e ottimizzate le vostre coperture professionali.",
    "svc.link":"Vedi tutti i servizi →",
    "team.eyebrow":"Il nostro team","team.title":"Una direzione esperta","team.role":"Direttrice · Alpha Office Sàrl",
    "team.bio":"Con 25 anni di esperienza nel settore assicurativo, Luljeta Selimi ha fondato Alpha Office con una visione chiara: un brokeraggio trasparente, indipendente e umano.",
    "cta.title":"Pronti a ottimizzare le vostre assicurazioni?","cta.desc":"Contattateci per un primo colloquio gratuito e senza impegno.","cta.btn":"Fissa appuntamento",
    "cp.eyebrow":"Contattateci","cp.title":"Parliamo delle vostre esigenze","cp.sub":"Primo colloquio gratuito. Risposta entro 48 ore.",
    "cf.title":"Inviateci un messaggio",
    "f.fn":"Nome","f.ln":"Cognome","f.em":"Indirizzo email","f.ph":"Telefono","f.pol":"Numero di polizza (opzionale)","f.su":"Oggetto","f.ms":"Il vostro messaggio","f.sb":"Invia messaggio","f.doc.info":"Per allegare documenti (polizze, contratti, sinistri…), inviateli direttamente tramite:","f.doc.wa":"WhatsApp","f.doc":"Documenti (opzionale)","f.doc.hint":"PDF, Word, immagini – max 10 MB per file","f.doc.btn":"Scegli file","f.doc.drop":"o trascina qui",
    "f.o0":"Seleziona oggetto","f.o1":"Consulenza assicurativa","f.o2":"Gestione polizza","f.o3":"Dichiarazione sinistro","f.o4":"Soluzioni aziendali","f.o5":"Altro",
    "ci.ad":"Indirizzo","ci.em":"Email","ci.hr":"Orari","ci.hv":"Lun–Ven: 9:00 – 18:00","ci.title":"I nostri contatti",
    "ty.eyebrow":"Messaggio ricevuto","ty.title":"Grazie per il vostro messaggio!","ty.sub":"Abbiamo ricevuto la vostra richiesta e vi risponderemo entro <strong>48 ore</strong>. A presto.","ty.home":"Torna alla home","ty.svc":"I nostri servizi","ty.redirect":"Reindirizzamento automatico tra 8 secondi…",
    "ft.desc":"Studio di brokeraggio assicurativo indipendente con sede a Ginevra.","ft.pages":"Pagine","ft.svc":"Servizi","ft.cnt":"Contatto",
    "ft.leg":"Note legali","ft.prv":"Informativa sulla privacy","ft.copy":"© 2026 Alpha Office Sàrl. Tutti i diritti riservati.","ft.credit":"Creato da",
    "fsv1":"Consulenza personale","fsv2":"Gestione polizze","fsv3":"Gestione sinistri","fsv4":"Soluzioni aziendali",
    "rev.eyebrow":"Recensioni clienti","rev.title":"Si fidano di noi","rev.desc":"La soddisfazione dei nostri clienti è la nostra migliore ricompensa.",
    "part.eyebrow":"I nostri partner","part.title":"Assicuratori di riferimento","part.desc":"Come broker indipendente, collaboriamo con i principali attori del mercato svizzero.",
    "ls.role":"Direttrice · Alpha Office Sàrl","ls.stat1":"anni di esperienza","ls.stat2":"indipendente","ls.stat3":"tutta la Svizzera",
    "ls.afa":"Certificata AFA",
    "nav.tp":"3° pilastro",
    "tp.eyebrow":"Previdenza privata","tp.title":"Il 3° pilastro spiegato","tp.sub":"Capite come funziona il sistema previdenziale svizzero e perché il 3° pilastro è essenziale per il vostro futuro finanziario.",
    "tp.s1.eyebrow":"Il sistema svizzero","tp.s1.title":"I 3 pilastri della previdenza","tp.s1.desc":"La Svizzera dispone di un sistema previdenziale unico, strutturato in tre pilastri complementari che mirano a mantenere il tenore di vita dopo il pensionamento.",
    "tp.p1.tag":"Obbligatorio","tp.p1.title":"AVS / AI","tp.p1.desc":"Assicurazione vecchiaia e superstiti. Copre i bisogni vitali di base. Finanziata dai contributi di tutti i dipendenti e datori di lavoro.",
    "tp.p2.tag":"Obbligatorio","tp.p2.title":"LPP / Cassa pensione","tp.p2.desc":"Previdenza professionale. Obbligatoria per i dipendenti. Mantiene il tenore di vita abituale in aggiunta all'AVS.",
    "tp.p3.tag":"Volontario","tp.p3.badge":"Siete qui","tp.p3.title":"Previdenza privata","tp.p3.desc":"Risparmio individuale e volontario. Colma il divario tra l'ultimo salario e le rendite. Con significativi vantaggi fiscali.",
    "tp.info":"In Svizzera, i primi due pilastri sostituiscono generalmente <strong>il 60-70%</strong> dell'ultimo salario. Il 3° pilastro colma questa lacuna per mantenere la qualità di vita.",
    "tp.s2.eyebrow":"Due opzioni","tp.s2.title":"Pilastro 3a o 3b: qual è la differenza?","tp.s2.desc":"Il terzo pilastro si divide in due forme distinte, con diversi vantaggi e vincoli.",
    "tp.3a.sub":"Previdenza vincolata – con deduzione fiscale",
    "tp.3a.f1":"Deducibile al 100% dal reddito imponibile","tp.3a.f2":"Interessi e rendimenti non imponibili","tp.3a.f3":"Disponibile: banca o compagnia assicurativa","tp.3a.f4":"Ideale per: dipendenti e indipendenti","tp.3a.f5":"Prelievo solo in casi specifici",
    "tp.3a.lim1":"CHF 7'258 / anno","tp.3a.lim1s":"per i dipendenti (2025)","tp.3a.lim2":"CHF 36'288 / anno","tp.3a.lim2s":"per gli indipendenti (max 20% del reddito netto AVS)",
    "tp.3b.sub":"Previdenza libera – senza restrizioni di prelievo",
    "tp.3b.f1":"Nessuna restrizione sul prelievo dei fondi","tp.3b.f2":"Nessun limite di contribuzione annuale","tp.3b.f3":"Deduzione fiscale parziale secondo il cantone","tp.3b.f4":"Assicurazione vita mista, conto risparmio libero","tp.3b.f5":"Ideale per: obiettivi a medio termine",
    "tp.3b.lim":"Nessun tetto legale","tp.3b.lims":"Piena flessibilità sugli importi e il prelievo",
    "tp.s3.eyebrow":"Vantaggi concreti","tp.s3.title":"Quanto risparmiate davvero","tp.s3.desc":"Versando nel pilastro 3a, riducete direttamente il reddito imponibile. Il risparmio fiscale dipende dal reddito e dal cantone.",
    "tp.tax1":"Deduzione massima annuale per un dipendente (2025)","tp.tax2":"Risparmio fiscale in base al reddito e al cantone","tp.tax3":"Risparmio fiscale annuale stimato per un reddito medio a Ginevra",
    "tp.withdraw.title":"Quando si può ritirare il pilastro 3a?",
    "tp.w1.t":"Acquisto immobiliare","tp.w1.d":"Finanziamento o rimborso di una residenza principale in Svizzera.",
    "tp.w2.t":"Partenza dalla Svizzera","tp.w2.d":"Prelievo possibile in caso di emigrazione definitiva.",
    "tp.w3.t":"Lavoro indipendente","tp.w3.d":"Prelievo se si cessa di essere affiliati a una cassa pensione (LPP).",
    "tp.w4.t":"Pensionamento","tp.w4.d":"A partire dai 60 anni (o 5 anni prima dell'età legale di pensionamento).",
    "tp.w5.t":"Invalidità","tp.w5.d":"In caso di invalidità totale o parziale riconosciuta dall'AI.",
    "tp.w6.t":"Decesso","tp.w6.d":"Versamento ai beneficiari designati o agli eredi legali.",
    "tp.s4.eyebrow":"Profili","tp.s4.title":"A chi si rivolge il 3° pilastro?",
    "tp.pr1.t":"Dipendenti","tp.pr1.d":"Avete accesso al pilastro 3a con la deduzione massima di CHF 7'258. È il modo più semplice per risparmiare sulle tasse preparando la pensione.",
    "tp.pr2.t":"Indipendenti","tp.pr2.d":"Senza 2° pilastro obbligatorio, il 3° pilastro è il vostro principale strumento previdenziale. Potete dedurre fino a CHF 36'288 all'anno.",
    "tp.pr3.t":"Espatriati & frontalieri","tp.pr3.d":"Se lavorate in Svizzera e siete affiliati all'AVS, potete contribuire al 3° pilastro anche se risiedete all'estero.",
    "tp.faq.eyebrow":"Domande frequenti","tp.faq.title":"Cosa chiedono i nostri clienti",
    "tp.q1":"Qual è la differenza tra un 3a in banca e in assicurazione?","tp.a1":"Un 3a bancario è un conto di risparmio o investimento: versate liberamente, senza vincoli di durata. Un 3a assicurativo combina il risparmio con una copertura in caso di decesso o invalidità.",
    "tp.q2":"Posso avere più pilastri 3a?","tp.a2":"Sì. È possibile avere più conti o polizze 3a contemporaneamente. È persino consigliato: al momento del prelievo, ogni conto è tassato separatamente, distribuendo il carico fiscale su più anni.",
    "tp.q3":"Quante tasse risparmierò?","tp.a3":"Dipende dal reddito lordo, dalla situazione familiare e dal cantone. A Ginevra, per un single con CHF 80'000 di reddito, versare CHF 7'258 può rappresentare un risparmio di CHF 1'800–2'500 all'anno.",
    "tp.q4":"Da quale età è utile iniziare?","tp.a4":"Prima è meglio. Iniziare a 25 anni invece che a 40 può fare una differenza di CHF 100'000–200'000 alla pensione. Ma non è mai troppo tardi: anche a 50 anni i vantaggi fiscali annuali rimangono molto significativi.",
    "tp.q5":"Il pilastro 3a è tassato al momento del prelievo?","tp.a5":"Sì, ma a un'aliquota ridotta. Il capitale è tassato separatamente dal reddito a un'aliquota preferenziale (circa 1/5 dell'aliquota ordinaria). Questa tassazione rimane molto inferiore ai risparmi fiscali cumulati.",
    "tp.cta.title":"Pronti a ottimizzare la vostra previdenza?","tp.cta.desc":"Ogni situazione è unica. I nostri consulenti analizzano il vostro profilo e vi consigliano la soluzione 3° pilastro più adatta.","tp.cta.btn":"Richiedere una consulenza gratuita",
    "ck.text":"Utilizziamo cookie per migliorare la vostra esperienza e analizzare il traffico, in conformità con la <a href=\"confidentialite.html\">LPD</a>.",
    "ck.accept":"Accettare","ck.decline":"Rifiutare",
    "nav.am":"Assicurazione malattia",
    "am.eyebrow":"Assicurazione malattia","am.title":"LAMal e complementari spiegate","am.sub":"Comprendete il sistema assicurativo malattia svizzero, i vostri obblighi legali e come ottimizzare la copertura.",
    "am.s1.eyebrow":"L'assicurazione di base","am.s1.title":"La LAMal: obbligatoria per tutti","am.s1.desc":"In Svizzera ogni residente deve affiliarsi a un assicuratore malattia riconosciuto. La LAMal garantisce a tutti un accesso equo alle cure di base.",
    "am.lamal.tag":"Obbligatoria","am.lamal.title":"LAMal – Assicurazione di base","am.lamal.f1":"Medico di base e specialisti","am.lamal.f2":"Degenza in reparto comune","am.lamal.f3":"Medicamenti della lista ufficiale","am.lamal.f4":"Maternità, urgenze, prevenzione",
    "am.comp.tag":"Facoltativa","am.comp.title":"Assicurazioni complementari","am.comp.f1":"Camera privata o semiprivata","am.comp.f2":"Medicine alternative e occhiali","am.comp.f3":"Cure dentali e ortodonzia","am.comp.f4":"Copertura internazionale estesa",
    "am.info":"Il premio LAMal può variare fino al <strong>40%</strong> in base all'assicuratore, alla regione e alla franchigia. Un broker indipendente confronta tutte le offerte per voi.",
    "am.s2.eyebrow":"Oltre il minimo","am.s2.title":"Le assicurazioni complementari","am.s2.desc":"Le complementari estendono la copertura in base allo stile di vita. Facoltative ma spesso molto vantaggiose.",
    "am.c1.t":"Ospedalizzazione","am.c1.d":"Camera privata o semiprivata, libera scelta del medico, copertura estera.",
    "am.c2.t":"Ambulatoriale","am.c2.d":"Osteopatia, chiropratica, agopuntura, occhiali, bilanci di salute e medicine alternative.",
    "am.c3.t":"Dentale","am.c3.d":"Cure dentali correnti, ortodonzia, protesi — non coperte dalla LAMal.",
    "am.c4.t":"Internazionale","am.c4.d":"Cure all'estero, rimpatrio medico, assistenza viaggio — ideale per espatriati e grandi viaggiatori.",
    "am.s3.eyebrow":"Ottimizzare la copertura","am.s3.title":"Franchigia e premio: la scelta giusta","am.s3.desc":"La franchigia è l'importo annuale a vostro carico prima che intervenga l'assicurazione. Più è alta, più basso è il premio.",
    "am.stat1":"CHF 300–2'500 — Fascia di franchigia annuale","am.stat2":"~40% — Possibile riduzione del premio con franchigia massima","am.stat3":"26 assicuratori — In concorrenza per la vostra LAMal",
    "am.tip.title":"Regola generale","am.tip.d1":"Franchigia alta (CHF 2'500) se siete in buona salute e consultate raramente il medico.","am.tip.d2":"Franchigia bassa (CHF 300) in caso di spese mediche regolari.","am.tip.d3":"Il modello (medico di famiglia, HMO, telemedicina) può ridurre il premio del 10–20%.",
    "am.s4.eyebrow":"Profili","am.s4.title":"Quale copertura per chi?",
    "am.pr1.t":"Famiglie","am.pr1.d":"I bambini sono assicurati gratuitamente fino a 18 anni. Pensate alle complementari dentali e pediatriche per una protezione completa.",
    "am.pr2.t":"Persone in buona salute","am.pr2.d":"Franchigia alta e modello alternativo (HMO o telemedicina) riducono significativamente il premio.",
    "am.pr3.t":"Esigenze mediche regolari","am.pr3.d":"Franchigia bassa e complementari ambulatoriali ben scelte vi proteggono senza brutte sorprese a fine anno.",
    "am.faq.eyebrow":"Domande frequenti","am.faq.title":"Cosa chiedono i nostri clienti",
    "am.q1":"Posso cambiare assicuratore ogni anno?","am.a1":"Sì. Potete cambiare cassa malati al 1° gennaio inviando la disdetta entro il 30 novembre. Alpha Office confronta le offerte e gestisce il cambio per voi.",
    "am.q2":"Qual è la differenza tra LAMal e complementare?","am.a2":"La LAMal è obbligatoria e copre le prestazioni di base. Le complementari sono facoltative: camera privata, medicine alternative, dentale, ecc.",
    "am.q3":"I premi LAMal sono deducibili dalle tasse?","am.a3":"È possibile dedurre un importo forfettario per i premi. L'importo dipende dal cantone e dalla situazione familiare.",
    "am.q4":"Anche mio figlio deve essere assicurato LAMal?","am.a4":"Sì, ogni bambino residente deve essere assicurato dalla nascita. Le sovvenzioni cantonali spesso riducono il premio a zero per le famiglie a basso reddito.",
    "am.q5":"Come posso ridurre il mio premio LAMal?","am.a5":"Aumentare la franchigia, scegliere un modello alternativo, confrontare gli assicuratori ogni autunno. Alpha Office fa questa analisi gratuitamente.",
    "am.cta.title":"Ottimizzate la vostra copertura malattia","am.cta.desc":"Alpha Office confronta le offerte LAMal e complementari per trovare la migliore copertura al miglior prezzo.","am.cta.btn":"Richiedere una consulenza gratuita",
  },
  sq: {
    "nav.home":"Ballina","nav.services":"Shërbime","nav.contact":"Kontakt","nav.cta":"Rezervo takim","nav.tp":"Shtylla 3",
    "hero.eyebrow":"Broker i pavarur sigurimi · Gjenevë",
    "hero.title":"Broker-i juaj i sigurimit, <em>gjithmonë pranë jush.</em>",
    "hero.sub":"Alpha Office mbështet bizneset, të vetëpunësuarit dhe individët në të gjithë Zvicrën me zgjidhje sigurimi të personalizuara.",
    "hero.cta1":"Zbulo shërbimet tona","hero.cta2":"Na kontaktoni",
    "about.eyebrow":"Rreth nesh","about.title":"Një partner i besuar për sigurimet tuaja",
    "about.desc":"E themeluar në Gjenevë, Alpha Office është një studio e pavarur brokerimi sigurimesh që operon në të gjithë Zvicrën. Këshillojmë klientët tanë objektivisht, pa kosto të fshehura dhe me transparencë të plotë.",
    "val.eyebrow":"Vlerat tona","val.title":"Çfarë na dallon",
    "v1.t":"Transparencë","v1.d":"Këshilla të qarta dhe të ndershme, pa tarifa të fshehura. Ju gjithmonë e dini ku qëndroni.",
    "v2.t":"Pavarësi","v2.d":"Të lirë të zgjedhim ndër të gjithë aktorët kryesorë të tregut për t'ju ofruar zgjidhjen më të mirë.",
    "v3.t":"Afërsi","v3.d":"Mbështetje njerëzore dhe e personalizuar. Ne jemi gjithmonë të disponueshëm për t'ju shoqëruar.",
    "v4.t":"Profesionalizëm","v4.d":"E licencuar nga FINMA, e certifikuar AFA. Respektojmë standardet më të larta të profesionit.",
    "svc.eyebrow":"Shërbimet tona","svc.title":"Zgjidhje për çdo nevojë","svc.desc":"Nga analiza e nevojave deri te menaxhimi i dëmeve, ju mbështesim në çdo hap.",
    "s1.t":"Këshillim personal","s1.d":"Analizë e plotë e situatës suaj për të identifikuar mbulimin më të mirë.",
    "s2.t":"Menaxhimi i policave","s2.d":"Administrim i plotë i të gjitha kontratave tuaja të sigurimit.",
    "s3.t":"Menaxhimi i dëmeve","s3.d":"Asistencë e plotë nga fillimi deri në fund.",
    "s4.t":"Zgjidhje biznesi","s4.d":"Ulni kostot dhe optimizoni mbulimin tuaj profesional.",
    "svc.link":"Shiko të gjitha shërbimet →",
    "team.eyebrow":"Ekipi ynë","team.title":"Udhëheqje me përvojë","team.role":"Drejtoreshë · Alpha Office Sàrl",
    "team.bio":"Me 25 vjet përvojë në sektorin e sigurimeve, Luljeta Selimi themeloi Alpha Office me vizion të qartë: të ofrojë brokerim transparent, të pavarur dhe njerëzor. Ekspertiza e saj e bën Alpha Office një partner të besuar.",
    "cta.title":"Gati të optimizoni sigurimet tuaja?","cta.desc":"Na kontaktoni për një konsultim të parë falas dhe pa detyrime.","cta.btn":"Rezervo takim",
    "sp.eyebrow":"Shërbimet tona","sp.title":"Zgjidhje të plota sigurimi","sp.sub":"Ju mbështesim në të gjitha nevojat tuaja, qoftë për mbulim personal ose profesional.",
    "sv1.n":"01","sv1.t":"Këshillim & Analizë","sv1.d":"Kryejmë një analizë të thelluar të situatës suaj për të identifikuar boshllëqet e mbulimit dhe për t'ju propozuar zgjidhje të përshtatura me profilin dhe buxhetin tuaj.",
    "sv2.n":"02","sv2.t":"Menaxhimi i policave","sv2.d":"Marrim përsipër të gjithë administrimin e policave tuaja: nënshkrimin, rinovimet, ndryshimet, anulimin. Një ndërmjetës i vetëm për të gjitha kontratat tuaja.",
    "sv3.n":"03","sv3.t":"Ndjekja e dëmeve","sv3.d":"Në rast dëmi, ju asistojmë nga fillimi deri në fund: deklarim, ndjekje, negocim dhe kompensim. Ju nuk jeni kurrë vetëm.",
    "sv4.n":"04","sv4.t":"Zgjidhje biznesi","sv4.d":"Zgjidhje të plota: përgjegjësi civile, mbulim punonjësish, mbrojtje pajisjesh, sigurim humbje fitimi.",
    "pr.eyebrow":"Si funksionon","pr.title":"Procesi ynë në 3 hapa",
    "p1.t":"Konsultimi i parë","p1.d":"Marrim kohën e nevojshme për të kuptuar situatën tuaj gjatë një takimi falas dhe pa detyrime.",
    "p2.t":"Analizë & rekomandime","p2.d":"Analizojmë tregun dhe ju prezantojmë zgjidhje të qarta, të personalizuara dhe të krahasuara.",
    "p3.t":"Mbështetje e vazhdueshme","p3.d":"Menaxhojmë polica tuaja dhe përditësojmë mbulimin tuaj sipas evolucionit të jetës suaj.",
    "cp.eyebrow":"Na kontaktoni","cp.title":"Le të flasim për nevojat tuaja","cp.sub":"Konsultim i parë falas. Përgjigje brenda 48 orëve.",
    "cf.title":"Na dërgoni një mesazh",
    "f.fn":"Emri","f.ln":"Mbiemri","f.em":"Adresa email","f.ph":"Telefon","f.pol":"Numri i policës (opsional)","f.su":"Subjekti","f.ms":"Mesazhi juaj","f.sb":"Dërgo mesazh","f.doc.info":"Për të bashkangjitur dokumente (polica, kontrata, dëme…), dërgojini drejtpërdrejt me:","f.doc.wa":"WhatsApp","f.doc":"Dokumente (opsionale)","f.doc.hint":"PDF, Word, imazhe – maks 10 MB","f.doc.btn":"Zgjidh skedarë","f.doc.drop":"ose tërhiq këtu",
    "f.o0":"Zgjidh subjektin","f.o1":"Këshillim sigurimi","f.o2":"Menaxhim police","f.o3":"Deklarim dëmi","f.o4":"Zgjidhje biznesi","f.o5":"Tjetër",
    "ci.ad":"Adresa","ci.em":"Email","ci.hr":"Orari","ci.hv":"Hën–Pre: 9:00 – 18:00","ci.title":"Kontaktet tona",
    "ty.eyebrow":"Mesazhi u mor","ty.title":"Faleminderit për mesazhin tuaj!","ty.sub":"Kemi marrë kërkesën tuaj dhe do t'ju përgjigjemi brenda <strong>48 orëve</strong>. Shihemi së shpejti.","ty.home":"Kthehu në faqe kryesore","ty.svc":"Shërbimet tona","ty.redirect":"Ridrejtim automatik për 8 sekonda…",
    "ft.desc":"Studio e pavarur brokerimi sigurimesh me seli në Gjenevë, që operon në të gjithë Zvicrën.","ft.pages":"Faqe","ft.svc":"Shërbime","ft.cnt":"Kontakt",
    "ft.leg":"Njoftim ligjor","ft.prv":"Politika e privatësisë","ft.copy":"© 2026 Alpha Office Sàrl. Të gjitha të drejtat e rezervuara.","ft.credit":"Krijuar nga",
    "fsv1":"Këshillim personal","fsv2":"Menaxhim policash","fsv3":"Menaxhim dëmesh","fsv4":"Zgjidhje biznesi",
    "rev.eyebrow":"Mendime klientësh","rev.title":"Ata na besojnë","rev.desc":"Kënaqësia e klientëve tanë është shpërblimi ynë më i madh.",
    "r1.text":"« Luljeta mori kohën për të analizuar të gjitha sigurimet e mia ekzistuese dhe arrita të kurseja ndjeshëm duke përmirësuar njëkohësisht mbulimin tim. Një shërbim me cilësi të rrallë. »","r1.label":"Individ · Gjenevë",
    "r2.text":"« Si i vetëpunësuar, nuk dija cilat mbulime ishin vërtet të nevojshme. Alpha Office më udhëzoi me qartësi dhe ndershmëri që nuk e kisha gjetur kurrë diku tjetër. »","r2.label":"I vetëpunësuar · Lozanë",
    "r3.text":"« Pas një dëmi kompleks, Luljeta menaxhoi të gjithë dosjen për ne. Ajo negocioi me siguruesin dhe arriti një kompensim shumë më të lartë se sa prisnim. »","r3.label":"Pronarë · Cointrin",
    "r4.text":"« I kemi besuar Alpha Office të gjithë menaxhimin e sigurimeve të biznesit tonë. Kursimi i kohës është i konsiderueshëm dhe kushtet e marra janë të shkëlqyera. E rekomandoj me forcë. »","r4.label":"Drejtues NVM · Vernier",
    "r5.text":"« Mbeta e mahnitur nga reagimshmëria dhe disponibilshmëria e Luljetës. Ajo gjithmonë përgjigjet shpejt dhe shpjegon çdo detaj me durim të madh. Një profesioniste e vërtetë. »","r5.label":"Individe · Meyrin",
    "r6.text":"« Alpha Office na mundësoi të optimizojmë të gjithë mbulimin tonë profesional. Këshilla objektive, pa presion tregtar. Pikërisht çfarë kërkon një sipërmarrës. »","r6.label":"Sipërmarrës · Gjenevë",
    "part.eyebrow":"Partnerët tanë","part.title":"Sigurues referues","part.desc":"Si broker i pavarur, bashkëpunojmë me aktorët kryesorë të tregut zviceran për t'ju ofruar mbulimin më të mirë.",
    "ls.eyebrow":"Drejtoreshë themeluese","ls.role":"Drejtoreshë · Alpha Office Sàrl",
    "ls.stat1":"vite përvojë","ls.stat2":"e pavarur","ls.stat3":"e gjithë Zvicra",
    "ls.intro":"Me 25 vjet përvojë në sektorin e sigurimeve në Zvicër, Luljeta Selimi themeloi Alpha Office me vizion të qartë: të ofrojë brokerim transparent, të pavarur dhe thellësisht njerëzor.",
    "ls.badge":"vite<br/>përv.",
    "ls.parcours.eyebrow":"Karriera","ls.parcours.title":"Një karrierë në shërbim të klientëve tanë","ls.parcours.desc":"Që nga fillimi i karrierës, Luljeta Selimi e ka vendosur gjithmonë njeriun në qendër të praktikës së saj.",
    "ls.t1.title":"Këshilltare sigurimesh","ls.t1.desc":"Hapat e parë në këshillimin e individëve dhe NVM-ve, specializim në sigurime jete dhe shëndetësore.",
    "ls.t2.title":"Menaxhere portofoli","ls.t2.desc":"Menaxhim i portofolit të klientëve korporativë, ekspertizë në sigurime tregtare dhe dëme komplekse.",
    "ls.t3.title":"Brokere e pavarur","ls.t3.desc":"Ushtrim si brokere e pavarur e licencuar FINMA, zhvillim i bazës besnike të klientëve nëpërmjet shërbimit të personalizuar.",
    "ls.t4.title":"Themeluese & Drejtoreshë – Alpha Office Sàrl","ls.t4.desc":"Themelimi i Alpha Office në Gjenevë për brokerim të pavarur dhe transparent në nivel kombëtar.",
    "ls.approach.eyebrow":"Qasja e saj","ls.approach.title":"Çfarë udhëzon çdo këshillë",
    "ls.a1.t":"Dëgjimi para gjithçkaje","ls.a1.d":"Çdo klient është unik. Luljeta merr kohë të kuptojë situatën reale para se të propozojë ndonjë zgjidhje.",
    "ls.a2.t":"Analizë rigoroze","ls.a2.d":"25 vjet përvojë lejojnë leximin ndërmjet rreshtave të një kontrate dhe zbulimin e boshllëqeve të padukshme.",
    "ls.a3.t":"Angazhim i qëndrueshëm","ls.a3.d":"Marrëdhënia nuk mbaron me nënshkrimin. Luljeta shoqëron klientët e saj afatgjatë dhe në rast dëmi.",
    "ls.finma.eyebrow":"Licencë zyrtare","ls.finma.title":"E licencuar nga FINMA","ls.finma.desc":"Luljeta Selimi është e regjistruar dhe e licencuar pranë Autoritetit Federal të Mbikëqyrjes së Tregjeve Financiare (FINMA), duke garantuar ushtrim konform me kërkesat ligjore zvicerane.",
    "ls.afa":"E certifikuar AFA",
    "nav.tp":"Shtylla 3",
    "tp.eyebrow":"Pensioni privat","tp.title":"Shtylla e 3-të e shpjeguar","tp.sub":"Kuptoni si funksionon sistemi zviceran i pensioneve dhe pse shtylla e 3-të është thelbësore për të ardhmen tuaj financiare.",
    "tp.s1.eyebrow":"Sistemi zviceran","tp.s1.title":"3 shtyllat e pensionit","tp.s1.desc":"Zvicra ka një sistem unik pensioni të strukturuar në tre shtylla plotësuese. Së bashku synojnë të ruajnë standardin tuaj të jetesës pas pensionimit.",
    "tp.p1.tag":"Obligator","tp.p1.title":"AVS / AI","tp.p1.desc":"Sigurim pleqërie dhe mbijetesës. Mbulon nevojat bazë jetike. Financohet nga kontributet e të gjithë punëmarrësve dhe punëdhënësve.",
    "tp.p2.tag":"Obligator","tp.p2.title":"LPP / Kasa pensioni","tp.p2.desc":"Pension profesional. Obligator për punëmarrësit. Ruan standardin e jetesës në plotësim të AVS-it.",
    "tp.p3.tag":"Vullnetar","tp.p3.badge":"Ju jeni këtu","tp.p3.title":"Pension privat","tp.p3.desc":"Kursim individual dhe vullnetar. Mbush boshllëkun midis pagës suaj të fundit dhe pensioneve. Me përfitime të rëndësishme tatimore.",
    "tp.info":"Në Zvicër, dy shtyllat e para zëvendësojnë zakonisht <strong>60 deri 70%</strong> të pagës suaj të fundit. Shtylla e 3-të mbush këtë boshllëk për të ruajtur cilësinë e jetesës.",
    "tp.s2.eyebrow":"Dy opsione","tp.s2.title":"Shtylla 3a apo 3b: cili është ndryshimi?","tp.s2.desc":"Shtylla e tretë ndahet në dy forma të ndryshme, me avantazhe dhe kufizime të ndryshme.",
    "tp.3a.sub":"Pension i lidhur – me zbritje tatimore",
    "tp.3a.f1":"100% e zbritshme nga të ardhurat e tatueshme","tp.3a.f2":"Interesat dhe rendimentet pa taksa","tp.3a.f3":"E disponueshme: bankë ose kompani sigurimi","tp.3a.f4":"Ideal për: punëmarrës dhe të vetëpunësuar","tp.3a.f5":"Tërheqja vetëm në raste specifike",
    "tp.3a.lim1":"CHF 7'258 / vit","tp.3a.lim1s":"për punëmarrësit (2025)","tp.3a.lim2":"CHF 36'288 / vit","tp.3a.lim2s":"për të vetëpunësuarit (maks 20% e të ardhurave neto AVS)",
    "tp.3b.sub":"Pension i lirë – pa kufizime tërheqjeje",
    "tp.3b.f1":"Asnjë kufizim në tërheqjen e fondeve","tp.3b.f2":"Asnjë limit kontributi vjetor","tp.3b.f3":"Zbritje tatimore e pjesshme sipas kantonit","tp.3b.f4":"Sigurimi i jetës i kombinuar, llogari kursimi e lirë","tp.3b.f5":"Ideal për: objektiva afatmesme",
    "tp.3b.lim":"Asnjë tavan ligjor","tp.3b.lims":"Fleksibilitet i plotë mbi shumat dhe tërheqjen",
    "tp.s3.eyebrow":"Avantazhe konkrete","tp.s3.title":"Çfarë kurseni realisht","tp.s3.desc":"Duke kontribuar në shtyllën 3a, reduktoni drejtpërdrejt të ardhurat tuaja të tatueshme. Kursimi tatimor varet nga të ardhurat dhe kantoni juaj.",
    "tp.tax1":"Zbritja maksimale vjetore për një punëmarrës (2025)","tp.tax2":"Kursim tatimor sipas të ardhurave dhe kantonit","tp.tax3":"Kursim tatimor vjetor i vlerësuar për të ardhura mesatare në Gjenevë",
    "tp.withdraw.title":"Kur mund të tërhiqni shtyllën 3a?",
    "tp.w1.t":"Blerje prone","tp.w1.d":"Financimi ose shlyerja e një banesë kryesore në Zvicër.",
    "tp.w2.t":"Largim nga Zvicra","tp.w2.d":"Tërheqja e mundshme në rast emigrimi definitiv nga Zvicra.",
    "tp.w3.t":"I vetëpunësuar","tp.w3.d":"Tërheqja nëse pushoni së qeni i lidhur me një kasë pensioni (LPP).",
    "tp.w4.t":"Pension","tp.w4.d":"Nga mosha 60 vjeç (ose 5 vjet para moshës ligjore të pensionimit).",
    "tp.w5.t":"Paaftësi","tp.w5.d":"Në rast paaftësie totale ose të pjesshme të njohur nga AI.",
    "tp.w6.t":"Vdekje","tp.w6.d":"Pagesa bënët përfituesve të caktuar ose trashëgimtarëve ligjorë.",
    "tp.s4.eyebrow":"Profile","tp.s4.title":"Për kë është shtylla e 3-të?",
    "tp.pr1.t":"Punëmarrës","tp.pr1.d":"Keni qasje në shtyllën 3a me zbritjen maksimale prej CHF 7'258. Është mënyra më e thjeshtë për të kursyer taksa duke u përgatitur për pension.",
    "tp.pr2.t":"Të vetëpunësuar","tp.pr2.d":"Pa shtyllën e 2-të obligatore, shtylla e 3-të është instrumenti juaj kryesor i pensionit. Mund të zbritni deri në CHF 36'288 në vit.",
    "tp.pr3.t":"Ekspatriatë & punëtorë kufitarë","tp.pr3.d":"Nëse punoni në Zvicër dhe jeni të lidhur me AVS-in, mund të kontribuoni në shtyllën e 3-të edhe nëse jetoni jashtë vendit.",
    "tp.faq.eyebrow":"Pyetje të shpeshta","tp.faq.title":"Çfarë pyesin klientët tanë",
    "tp.q1":"Cili është ndryshimi midis 3a-s në bankë dhe në sigurim?","tp.a1":"Një 3a bankare është llogari kursimi ose investimi: kontribuoni lirisht, pa angazhim afati. Një 3a sigurimi kombinon kursimin me mbulim në rast vdekjeje ose paaftësie.",
    "tp.q2":"A mund të kem disa shtylla 3a?","tp.a2":"Po. Është e mundur të keni disa llogari ose polica 3a njëkohësisht. Kjo është edhe e rekomanduar: gjatë tërheqjes, secila llogari tatohet veçmas, duke shpërndarë ngarkesën tatimore në disa vite.",
    "tp.q3":"Sa taksa do të kursej?","tp.a3":"Varet nga të ardhurat bruto, situata familjare dhe kantoni. Në Gjenevë, për një të vetëm me të ardhura CHF 80'000, kontributi prej CHF 7'258 mund të sjellë kursim prej CHF 1'800-2'500 në vit.",
    "tp.q4":"Nga cila moshë është e dobishme të fillosh?","tp.a4":"Sa më herët aq më mirë. Fillimi në moshën 25 vjeç në vend të 40 vjeç mund të bëjë ndryshim prej CHF 100'000-200'000 në pension. Por kurrë nuk është tepër vonë.",
    "tp.q5":"A tatohet shtylla 3a gjatë tërheqjes?","tp.a5":"Po, por me normë të reduktuar. Kapitali tatohet veçmas nga të ardhurat me një normë preferenciale (rreth 1/5 e normës ordinare). Ky tatim mbetet shumë më i ulët se kursimet tatimore të grumbulluara.",
    "tp.cta.title":"Gati të optimizoni pensionin tuaj?","tp.cta.desc":"Çdo situatë është unike. Këshilltarët tanë analizojnë profilin tuaj dhe rekomandojnë zgjidhjen e shtyllës 3-të më të përshtatshme.","tp.cta.btn":"Kërkoni këshillim falas",
    "ck.text":"Përdorim cookie për të përmirësuar përvojën tuaj dhe për të analizuar trafikun tonë, në përputhje me <a href=\"confidentialite.html\">LPD</a>.",
    "ck.accept":"Pranoj","ck.decline":"Refuzoj",
    "nav.am":"Sigurim shëndetësor",
    "am.eyebrow":"Sigurim shëndetësor","am.title":"LAMal dhe plotësueset e shpjeguara","am.sub":"Kuptoni sistemin zviceran të sigurimit shëndetësor, detyrimet tuaja ligjore dhe si të optimizoni mbulimin tuaj.",
    "am.s1.eyebrow":"Sigurimi bazë","am.s1.title":"LAMal: i detyrueshëm për të gjithë","am.s1.desc":"Në Zvicër, çdo person banues duhet t'i bashkohet një siguruesi shëndetësor të njohur. LAMal garanton akses të barabartë të kujdesit bazë për të gjithë.",
    "am.lamal.tag":"I detyrueshëm","am.lamal.title":"LAMal – Sigurim bazë","am.lamal.f1":"Mjek i përgjithshëm dhe specialistë","am.lamal.f2":"Qëndrim spitalor në dhomë të zakonshme","am.lamal.f3":"Medikamente të listës zyrtare","am.lamal.f4":"Maternitet, urgjenca, parandalim",
    "am.comp.tag":"Vullnetar","am.comp.title":"Sigurime plotësuese","am.comp.f1":"Dhomë private ose gjysmë-private në spital","am.comp.f2":"Mjekësi alternative dhe syze","am.comp.f3":"Kujdes dentar dhe ortodonci","am.comp.f4":"Mbulim ndërkombëtar i zgjeruar",
    "am.info":"Primi i LAMal mund të variojë deri në <strong>40%</strong> sipas siguruesit, rajonit dhe franshizës. Një broker i pavarur krahason të gjitha ofertat për ju.",
    "am.s2.eyebrow":"Përtej minimumit","am.s2.title":"Sigurimet plotësuese","am.s2.desc":"Sigurimet plotësuese zgjerojnë mbulimin tuaj sipas stilit të jetës. Vullnetare por shpesh shumë të avantazhueshme.",
    "am.c1.t":"Spitalizim","am.c1.d":"Dhomë private ose gjysmë-private, zgjedhje e lirë e mjekut, mbulim ndërkombëtar.",
    "am.c2.t":"Ambulator","am.c2.d":"Osteopati, kiropraksi, akupunkturë, syze, bilance shëndetësore dhe mjekësi alternative.",
    "am.c3.t":"Dentar","am.c3.d":"Kujdes dentar i zakonshëm, ortodonci, proteza — të pambuluara nga LAMal.",
    "am.c4.t":"Ndërkombëtar","am.c4.d":"Kujdes jashtë vendit, ripatriatim mjekësor, asistencë udhëtimi — ideal për ekspatriatët dhe udhëtarët e shpeshtë.",
    "am.s3.eyebrow":"Optimizoni mbulimin tuaj","am.s3.title":"Franshiza dhe primi: zgjedhja e duhur","am.s3.desc":"Franshiza është shuma vjetore në ngarkesën tuaj para ndërhyrjes së sigurimit. Sa më e lartë, aq më i ulët primi.",
    "am.stat1":"CHF 300–2'500 — Hapësira e franshizës vjetore","am.stat2":"~40% — Reduktim i mundshëm i primeve me franshizë maksimale","am.stat3":"26 sigurues — Në konkurrencë për LAMal-in tuaj",
    "am.tip.title":"Rregull e përgjithshme","am.tip.d1":"Franshizë e lartë (CHF 2'500) nëse jeni shëndetshëm dhe vizitoni rrallë mjekun.","am.tip.d2":"Franshizë e ulët (CHF 300) nëse keni shpenzime mjekësore të rregullta.","am.tip.d3":"Modeli (mjek familjeje, HMO, telemjekësi) mund të reduktojë edhe 10–20% primin.",
    "am.s4.eyebrow":"Profile","am.s4.title":"Çfarë mbulimi për kë?",
    "am.pr1.t":"Familje","am.pr1.d":"Fëmijët mbulohen falas deri në 18 vjeç. Mendoni për plotësueset dentare dhe pediatrike për mbrojtje të plotë.",
    "am.pr2.t":"Persona shëndetshëm","am.pr2.d":"Franshizë e lartë dhe model alternativ (HMO ose telemjekësi) reduktojnë ndjeshëm primin me mbulim solid.",
    "am.pr3.t":"Nevoja mjekësore të rregullta","am.pr3.d":"Franshizë e ulët dhe plotësuese ambulatorie të zgjedhura mirë ju mbrojnë pa surpriza në fund të vitit.",
    "am.faq.eyebrow":"Pyetje të shpeshta","am.faq.title":"Çfarë pyesin klientët tanë",
    "am.q1":"A mund të ndërroj siguruesin çdo vit?","am.a1":"Po. Mund të ndërroni kasën shëndetësore për 1 janar duke dërguar anulimin para 30 nëntorit. Alpha Office krahason ofertat dhe kryen ndërrimin.",
    "am.q2":"Cili është ndryshimi midis LAMal dhe plotësueses?","am.a2":"LAMal është e detyrueshme dhe mbulon përfitimet bazë ligjore. Plotësueset janë vullnetare: dhomë private, mjekësi alternative, dentare, etj.",
    "am.q3":"A janë primet e LAMal të zbritshme nga taksat?","am.a3":"Mund të zbritni një shumë forfetare. Shuma varet nga kantoni dhe situata familjare.",
    "am.q4":"A duhet edhe fëmija im të sigurohet me LAMal?","am.a4":"Po, çdo fëmijë banues duhet të sigurohet nga lindja. Subvencionet kantonale shpesh reduktojnë primin në zero.",
    "am.q5":"Si mund të reduktoj primin tim të LAMal?","am.a5":"Rrisni franshizën, zgjidhni model alternativ, krahasoni siguruesit çdo vjeshtë. Alpha Office kryen këtë analizë falas.",
    "am.cta.title":"Optimizoni mbulimin tuaj shëndetësor","am.cta.desc":"Alpha Office krahason ofertat LAMal dhe plotësueset për mbulimin më të mirë me çmimin më të mirë.","am.cta.btn":"Kërkoni një vlerësim falas",
  },
  hr: {
    "nav.home":"Početna","nav.services":"Usluge","nav.contact":"Kontakt","nav.cta":"Zakaži termin","nav.tp":"3. stup",
    "hero.eyebrow":"Neovisni broker osiguranja · Ženeva",
    "hero.title":"Vaš broker osiguranja, <em>uvijek uz vas.</em>",
    "hero.sub":"Alpha Office podržava poduzeća, samozaposlene i privatne osobe diljem Švicarske s prilagođenim rješenjima osiguranja.",
    "hero.cta1":"Otkrijte naše usluge","hero.cta2":"Kontaktirajte nas",
    "about.eyebrow":"O nama","about.title":"Pouzdan partner za vaša osiguranja",
    "about.desc":"Osnovana u Ženevi, Alpha Office je neovisni broker osiguranja koji posluje diljem Švicarske. Savjetujemo klijente objektivno, bez skrivenih troškova i uz potpunu transparentnost.",
    "val.eyebrow":"Naše vrijednosti","val.title":"Što nas razlikuje",
    "v1.t":"Transparentnost","v1.d":"Jasni i pošteni savjeti bez skrivenih naknada. Uvijek znate gdje stojite.",
    "v2.t":"Neovisnost","v2.d":"Slobodni da odaberemo među svim glavnim akterima tržišta kako bismo vam ponudili najbolje rješenje.",
    "v3.t":"Bliskost","v3.d":"Osobna i prilagođena podrška. Uvijek smo dostupni da vas pratimo.",
    "v4.t":"Profesionalnost","v4.d":"FINMA licencirani, AFA certificirani. Poštujemo najviše standarde struke.",
    "svc.eyebrow":"Naše usluge","svc.title":"Rješenja za svaku potrebu","svc.desc":"Od analize potreba do upravljanja štetama, podržavamo vas na svakom koraku.",
    "s1.t":"Osobno savjetovanje","s1.d":"Potpuna analiza vaše situacije za identifikaciju najbolje pokrivenosti.",
    "s2.t":"Upravljanje policama","s2.d":"Potpuna administracija svih vaših ugovora o osiguranju.",
    "s3.t":"Upravljanje štetama","s3.d":"Potpuna asistencija od početka do kraja.",
    "s4.t":"Poslovne solucije","s4.d":"Smanjite troškove i optimizirajte svoju profesionalnu pokrivenost.",
    "svc.link":"Pogledaj sve usluge →",
    "team.eyebrow":"Naš tim","team.title":"Iskusno vodstvo","team.role":"Direktorica · Alpha Office Sàrl",
    "team.bio":"S 25 godina iskustva u osiguranju, Luljeta Selimi osnovala je Alpha Office s jasnom vizijom: transparentno, neovisno i humano posredništvo. Njezina stručnost čini Alpha Office pouzdanim partnerom.",
    "cta.title":"Spremni optimizirati svoja osiguranja?","cta.desc":"Kontaktirajte nas za besplatni, neobvezujući razgovor.","cta.btn":"Zakaži termin",
    "sp.eyebrow":"Naše usluge","sp.title":"Sveobuhvatna rješenja osiguranja","sp.sub":"Podržavamo vas u svim vašim potrebama, bilo za osobnu ili poslovnu pokrivenost.",
    "sv1.n":"01","sv1.t":"Savjetovanje & Analiza","sv1.d":"Provodimo dubinsku analizu vaše situacije kako bismo identificirali nedostatke u pokrivenosti i predložili rješenja prilagođena vašem profilu i budžetu.",
    "sv2.n":"02","sv2.t":"Upravljanje policama","sv2.d":"Preuzimamo cjelokupnu administraciju vaših polica: sklapanje, obnove, izmjene, raskide. Jedan sugovornik za sve ugovore.",
    "sv3.n":"03","sv3.t":"Praćenje šteta","sv3.d":"U slučaju štete, asistiramo vam od početka do kraja: prijava, praćenje, pregovaranje i naknada. Nikad niste sami.",
    "sv4.n":"04","sv4.t":"Poslovne solucije","sv4.d":"Sveobuhvatna rješenja: odgovornost prema trećima, osiguranje zaposlenika, zaštita imovine, osiguranje od gubitka prihoda.",
    "pr.eyebrow":"Kako funkcionira","pr.title":"Naš proces u 3 koraka",
    "p1.t":"Prvi razgovor","p1.d":"Uzimamo si vremena da razumijemo vašu situaciju u besplatnom, neobvezujućem razgovoru.",
    "p2.t":"Analiza & preporuke","p2.d":"Analiziramo tržište i predstavljamo vam jasna, personalizirana i uspoređena rješenja.",
    "p3.t":"Trajna podrška","p3.d":"Upravljamo vašim policama i ažuriramo pokrivenost prema promjenama u vašem životu.",
    "cp.eyebrow":"Kontaktirajte nas","cp.title":"Razgovarajmo o vašim potrebama","cp.sub":"Besplatni prvi razgovor. Odgovor unutar 48 sati.",
    "cf.title":"Pošaljite nam poruku",
    "f.fn":"Ime","f.ln":"Prezime","f.em":"Email adresa","f.ph":"Telefon","f.pol":"Broj police (neobavezno)","f.su":"Predmet","f.ms":"Vaša poruka","f.sb":"Pošalji poruku","f.doc.info":"Za prilaganje dokumenata (police, ugovori, štete…), pošaljite ih direktno putem:","f.doc.wa":"WhatsApp","f.doc":"Dokumenti (neobavezno)","f.doc.hint":"PDF, Word, slike – maks 10 MB po datoteci","f.doc.btn":"Odaberi datoteke","f.doc.drop":"ili prevuci ovdje",
    "f.o0":"Odaberi predmet","f.o1":"Savjetovanje o osiguranju","f.o2":"Upravljanje policom","f.o3":"Prijava štete","f.o4":"Poslovne solucije","f.o5":"Ostalo",
    "ci.ad":"Adresa","ci.em":"Email","ci.hr":"Radno vrijeme","ci.hv":"Pon–Pet: 9:00 – 18:00","ci.title":"Naši kontakti",
    "ty.eyebrow":"Poruka primljena","ty.title":"Hvala vam na poruci!","ty.sub":"Primili smo vaš upit i odgovorit ćemo vam u roku od <strong>48 sati</strong>. Vidimo se uskoro.","ty.home":"Povratak na početnu","ty.svc":"Naše usluge","ty.redirect":"Automatski preusmjer za 8 sekundi…",
    "ft.desc":"Neovisni broker osiguranja sa sjedištem u Ženevi, koji posluje diljem Švicarske.","ft.pages":"Stranice","ft.svc":"Usluge","ft.cnt":"Kontakt",
    "ft.leg":"Pravna napomena","ft.prv":"Politika privatnosti","ft.copy":"© 2026 Alpha Office Sàrl. Sva prava pridržana.","ft.credit":"Izradio",
    "fsv1":"Osobno savjetovanje","fsv2":"Upravljanje policama","fsv3":"Upravljanje štetama","fsv4":"Poslovne solucije",
    "rev.eyebrow":"Mišljenja klijenata","rev.title":"Oni nam vjeruju","rev.desc":"Zadovoljstvo naših klijenata naša je najveća nagrada.",
    "r1.text":"« Luljeta je uzela vremena da analizira sva moja postojeća osiguranja i uspio sam ostvariti značajne uštedine uz istovremeno poboljšanje pokrivenosti. Rijetko kvalitetna usluga. »","r1.label":"Privatna osoba · Ženeva",
    "r2.text":"« Kao samozaposlena osoba, nisam znao/la koja pokrivenost je zaista potrebna. Alpha Office me vodio s jasnoćom i iskrenošću kakvu nisam našao/la nigdje drugdje. »","r2.label":"Samozaposleni · Lausanne",
    "r3.text":"« Nakon kompleksne štete, Luljeta je upravljala cijelim predmetom umjesto nas. Pregovarala je s osiguravateljem i dobila naknadu daleko veću od naših očekivanja. »","r3.label":"Vlasnici · Cointrin",
    "r4.text":"« Povjerili smo Alpha Officeu cjelokupno upravljanje osiguranjima naše tvrtke. Ušteda vremena je znatna, a dobiveni uvjeti su odlični. Toplo preporučujem. »","r4.label":"Direktor tvrtke · Vernier",
    "r5.text":"« Bila sam impresijonirana reakcijama i dostupnošću Luljete. Uvijek odgovara brzo i objašnjava svaki detalj s velikom strpljivošću. Prava profesionalka. »","r5.label":"Privatna osoba · Meyrin",
    "r6.text":"« Alpha Office nam je omogućio optimizaciju cjelokupne naše profesionalne pokrivenosti. Objektivan savjet, bez komercijalnog pritiska. Točno ono što poduzetnik traži. »","r6.label":"Poduzetnik · Ženeva",
    "part.eyebrow":"Naši partneri","part.title":"Referentni osiguravatelji","part.desc":"Kao neovisni broker, surađujemo s glavnim akterima švicarskog tržišta kako bismo vam ponudili najbolju pokrivenost.",
    "ls.eyebrow":"Osnivačica i direktorica","ls.role":"Direktorica · Alpha Office Sàrl",
    "ls.stat1":"godina iskustva","ls.stat2":"neovisna","ls.stat3":"cijela Švicarska",
    "ls.intro":"S 25 godina iskustva u švicarskom osigurateljnom sektoru, Luljeta Selimi osnovala je Alpha Office s jasnom vizijom: pružiti transparentno, neovisno i duboko humano posredništvo.",
    "ls.badge":"god.<br/>isku.",
    "ls.parcours.eyebrow":"Karijera","ls.parcours.title":"Karijera u službi naših klijenata","ls.parcours.desc":"Od početka karijere, Luljeta Selimi je uvijek stavljala čovjeka u središte svoje prakse.",
    "ls.t1.title":"Savjetnica za osiguranja","ls.t1.desc":"Prvi koraci u savjetovanju fizičkih osoba i tvrtki, specijalizacija za životna i zdravstvena osiguranja.",
    "ls.t2.title":"Menadžerica portfelja","ls.t2.desc":"Upravljanje portfeljem poslovnih klijenata, stručnost u komercijalnim osiguranjima i složenim štetama.",
    "ls.t3.title":"Neovisna brokerica","ls.t3.desc":"Samostalni rad kao FINMA-licencirana brokerica, izgradnja vjerne klijentele kroz personaliziranu uslugu.",
    "ls.t4.title":"Osnivačica i direktorica – Alpha Office Sàrl","ls.t4.desc":"Osnivanje Alpha Officea u Ženevi za neovisno i transparentno posredništvo na nacionalnoj razini.",
    "ls.approach.eyebrow":"Njezin pristup","ls.approach.title":"Što vodi svaki savjet",
    "ls.a1.t":"Slušanje prije svega","ls.a1.d":"Svaki klijent je jedinstven. Luljeta uzima vremena da razumije stvarnu situaciju prije nego predloži bilo koje rješenje.",
    "ls.a2.t":"Rigorozna analiza","ls.a2.d":"25 godina iskustva omogućuje čitanje između redaka ugovora i otkrivanje nevidljivih praznina.",
    "ls.a3.t":"Trajno zalaganje","ls.a3.d":"Odnos ne završava potpisom. Luljeta prati svoje klijente dugoročno i u slučaju štete.",
    "ls.finma.eyebrow":"Službena licenca","ls.finma.title":"FINMA licencirana","ls.finma.desc":"Luljeta Selimi je registrirana i licencirana pri Federalnoj agenciji za nadzor financijskih tržišta (FINMA), jamčeći usklađeno obavljanje djelatnosti prema švicarskim pravnim zahtjevima.",
    "ls.afa":"AFA certificirana",
    "nav.tp":"3. stup",
    "tp.eyebrow":"Privatna mirovina","tp.title":"3. stup objašnjen","tp.sub":"Razumijte švicarski mirovinski sustav i zašto je 3. stup ključan za vašu financijsku budućnost.",
    "tp.s1.eyebrow":"Švicarski sustav","tp.s1.title":"3 stupa mirovinskog sustava","tp.s1.desc":"Švicarska ima jedinstveni mirovinski sustav strukturiran u tri komplementarna stupa. Zajedno teže očuvanju vašeg životnog standarda u mirovini.",
    "tp.p1.tag":"Obavezno","tp.p1.title":"AHV / IV","tp.p1.desc":"Starosno i obiteljsko osiguranje. Pokriva osnovne životne potrebe. Financira se doprinosima svih zaposlenika i poslodavaca.",
    "tp.p2.tag":"Obavezno","tp.p2.title":"BVG / Mirovinski fond","tp.p2.desc":"Strukovno mirovinsko osiguranje. Obavezno za zaposlenike. Uz AHV održava uobičajeni životni standard.",
    "tp.p3.tag":"Dobrovoljno","tp.p3.badge":"Vi ste ovdje","tp.p3.title":"Privatna mirovina","tp.p3.desc":"Individualna i dobrovoljna štednja. Premošćuje jaz između zadnje plaće i mirovine. Sa značajnim poreznim prednostima.",
    "tp.info":"U Švicarskoj, prva dva stupa obično zamjenjuju <strong>60 do 70%</strong> zadnje plaće. 3. stup premošćuje taj jaz kako bi se održao životni standard.",
    "tp.s2.eyebrow":"Dvije opcije","tp.s2.title":"Stup 3a ili 3b: koja je razlika?","tp.s2.desc":"Treći stup dijeli se u dva različita oblika, s različitim prednostima i ograničenjima.",
    "tp.3a.sub":"Vezana mirovina – s poreznim odbitkom",
    "tp.3a.f1":"100% odbitno od oporezivog prihoda","tp.3a.f2":"Kamate i prinosi bez poreza","tp.3a.f3":"Dostupno: banka ili osiguravajuće društvo","tp.3a.f4":"Idealno za: zaposlenike i samozaposlene","tp.3a.f5":"Isplata samo u specifičnim slučajevima",
    "tp.3a.lim1":"CHF 7'258 / godina","tp.3a.lim1s":"za zaposlenike (2025)","tp.3a.lim2":"CHF 36'288 / godina","tp.3a.lim2s":"za samozaposlene (maks. 20% neto AHV prihoda)",
    "tp.3b.sub":"Slobodna mirovina – bez ograničenja isplate",
    "tp.3b.f1":"Nema ograničenja pri povlačenju sredstava","tp.3b.f2":"Nema godišnjeg limita doprinosa","tp.3b.f3":"Djelomični porezni odbitak ovisno o kantonu","tp.3b.f4":"Mješovito životno osiguranje, slobodan štedni račun","tp.3b.f5":"Idealno za: srednjoročne ciljeve",
    "tp.3b.lim":"Bez zakonskog gornjeg ograničenja","tp.3b.lims":"Potpuna fleksibilnost iznosa i povlačenja",
    "tp.s3.eyebrow":"Konkretne prednosti","tp.s3.title":"Što stvarno uštedite","tp.s3.desc":"Uplatama u stup 3a direktno smanjujete oporezivi prihod. Porezna ušteda ovisi o prihodu i kantonu.",
    "tp.tax1":"Maksimalni godišnji odbitak za zaposlenika (2025)","tp.tax2":"Porezna ušteda ovisno o prihodu i kantonu","tp.tax3":"Procijenjene godišnje porezne uštedine za prosječni prihod u Ženevi",
    "tp.withdraw.title":"Kada se može povući stup 3a?",
    "tp.w1.t":"Kupnja nekretnine","tp.w1.d":"Financiranje ili otplata primarnog boravišta u Švicarskoj.",
    "tp.w2.t":"Odlazak iz Švicarske","tp.w2.d":"Povlačenje moguće pri definitiv­nom iseljavanju iz Švicarske.",
    "tp.w3.t":"Samozaposlenje","tp.w3.d":"Povlačenje ako prestanete biti učlanjeni u mirovinski fond (BVG).",
    "tp.w4.t":"Mirovina","tp.w4.d":"Od 60. godine (ili 5 godina prije zakonske dobi za mirovinu).",
    "tp.w5.t":"Invalidnost","tp.w5.d":"U slučaju potpune ili djelomične invalidnosti priznate od IV.",
    "tp.w6.t":"Smrt","tp.w6.d":"Isplata imenovanim korisnicima ili zakonskim nasljednicima.",
    "tp.s4.eyebrow":"Profili","tp.s4.title":"Kome je namijenjen 3. stup?",
    "tp.pr1.t":"Zaposlenici","tp.pr1.d":"Imate pristup stupu 3a s maksimalnim odbitkom od CHF 7'258. Najjednostavniji način za uštedu na porezima uz pripremu za mirovinu.",
    "tp.pr2.t":"Samozaposleni","tp.pr2.d":"Bez obaveznog 2. stupa, 3. stup je vaš glavni mirovinski alat. Možete odbiti do CHF 36'288 godišnje — važna porezna poluga.",
    "tp.pr3.t":"Expati i pogranični radnici","tp.pr3.d":"Ako radite u Švicarskoj i učlanjeni ste u AHV, možete uplaćivati u 3. stup čak i ako živite u inozemstvu.",
    "tp.faq.eyebrow":"Česta pitanja","tp.faq.title":"Što naši klijenti pitaju",
    "tp.q1":"Koja je razlika između 3a u banci i osiguravajućem društvu?","tp.a1":"Bankovni 3a je štedni ili investicijski račun: uplaćujete slobodno, bez obveze trajanja. Osiguravajući 3a kombinira štednju s pokrićem u slučaju smrti ili invalidnosti.",
    "tp.q2":"Mogu li imati više stupova 3a?","tp.a2":"Da. Moguće je imati više 3a računa ili polica istovremeno. To je čak i preporučljivo: pri isplati, svaki račun se oporezuje zasebno, čime se porezno opterećenje raspoređuje na više godina.",
    "tp.q3":"Koliko poreza ću uštediti?","tp.a3":"Ovisi o bruto prihodu, obiteljskoj situaciji i kantonu. U Ženevi, samac s prihodom od CHF 80'000 koji uplati CHF 7'258 može uštedjeti CHF 1'800–2'500 poreza godišnje.",
    "tp.q4":"Od koje dobi je korisno početi?","tp.a4":"Što ranije, to bolje. Početak s 25 umjesto s 40 godina može značiti razliku od CHF 100'000–200'000 pri odlasku u mirovinu. No nikad nije prekasno.",
    "tp.q5":"Oporezuje li se stup 3a pri isplati?","tp.a5":"Da, ali po smanjenoj stopi. Kapital se oporezuje odvojeno od prihoda po povlašteno stopi (oko 1/5 redovne stope). Taj porez ostaje daleko ispod kumuliranih poreznih uštedina.",
    "tp.cta.title":"Spremni optimizirati svoju mirovinu?","tp.cta.desc":"Svaka situacija je jedinstvena. Naši savjetnici analiziraju vaš profil i preporučuju najprikladnije rješenje 3. stupa.","tp.cta.btn":"Zatražite besplatni savjet",
    "ck.text":"Koristimo kolačiće za poboljšanje vašeg iskustva i analizu prometa, sukladno <a href=\"confidentialite.html\">LPD</a>.",
    "ck.accept":"Prihvatiti","ck.decline":"Odbiti",
    "nav.am":"Zdravstveno osiguranje",
    "am.eyebrow":"Zdravstveno osiguranje","am.title":"LAMal i dopunska osiguranja objašnjena","am.sub":"Razumijte švicarski sustav zdravstvenog osiguranja, vaše zakonske obveze i kako optimizirati pokrivenost.",
    "am.s1.eyebrow":"Osnovno osiguranje","am.s1.title":"LAMal: obvezno za sve","am.s1.desc":"U Švicarskoj svaka osoba koja boravi na njenom teritoriju mora se pridružiti priznatom zdravstvenom osiguratelju. LAMal garantira svima jednak pristup osnovnoj zdravstvenoj zaštiti.",
    "am.lamal.tag":"Obvezno","am.lamal.title":"LAMal – Osnovno osiguranje","am.lamal.f1":"Liječnik opće prakse i specijalisti","am.lamal.f2":"Boravak u zajedničkom odjelu bolnice","am.lamal.f3":"Lijekovi sa službene liste","am.lamal.f4":"Porodništvo, hitni slučajevi, prevencija",
    "am.comp.tag":"Dobrovoljno","am.comp.title":"Dopunska osiguranja","am.comp.f1":"Privatna ili poluprivatna soba u bolnici","am.comp.f2":"Alternativna medicina i naočale","am.comp.f3":"Stomatološka njega i ortodoncija","am.comp.f4":"Proširena međunarodna pokrivenost",
    "am.info":"LAMal premija može varirati i do <strong>40%</strong> ovisno o osiguravatelju, regiji i franšizi. Neovisni broker uspoređuje sve ponude za vas.",
    "am.s2.eyebrow":"Iznad minimuma","am.s2.title":"Dopunska osiguranja","am.s2.desc":"Dopunska osiguranja proširuju pokrivenost prema životnom stilu. Dobrovoljna su, ali često vrlo povoljna.",
    "am.c1.t":"Hospitalizacija","am.c1.d":"Privatna ili poluprivatna soba, slobodan izbor liječnika, međunarodna pokrivenost.",
    "am.c2.t":"Ambulantno","am.c2.d":"Osteopatija, kiropraktika, akupunktura, naočale, zdravstveni pregledi i alternativna medicina.",
    "am.c3.t":"Stomatološko","am.c3.d":"Redovna stomatološka njega, ortodoncija, proteze — nije pokriveno LAMal-om.",
    "am.c4.t":"Međunarodno","am.c4.d":"Liječenje u inozemstvu, repatrijacija, putna asistencija — idealno za ekspate i česte putnike.",
    "am.s3.eyebrow":"Optimizirajte pokrivenost","am.s3.title":"Franšiza i premija: pravi izbor","am.s3.desc":"Franšiza je godišnji iznos koji plaćate prije aktivacije osiguranja. Što je viša, niža je premija.",
    "am.stat1":"CHF 300–2'500 — Raspon godišnje franšize","am.stat2":"~40% — Moguće smanjenje premije s maksimalnom franšizom","am.stat3":"26 osiguravatelja — U konkurenciji za vašu LAMal",
    "am.tip.title":"Opće pravilo","am.tip.d1":"Visoka franšiza (CHF 2'500) ako ste zdravi i rijetko posjećujete liječnika.","am.tip.d2":"Niska franšiza (CHF 300) pri redovnim medicinskim troškovima.","am.tip.d3":"Model (obiteljski liječnik, HMO, telemedicina) može smanjiti premiju za 10–20%.",
    "am.s4.eyebrow":"Profili","am.s4.title":"Koja pokrivenost za koga?",
    "am.pr1.t":"Obitelji","am.pr1.d":"Djeca su besplatno osigurana do 18. godine. Razmotrite dopunska za zubar i pedijatriju za potpunu zaštitu.",
    "am.pr2.t":"Zdrave osobe","am.pr2.d":"Visoka franšiza i alternativni model (HMO ili telemedicina) značajno smanjuju premiju uz solidnu pokrivenost.",
    "am.pr3.t":"Redovne medicinske potrebe","am.pr3.d":"Niska franšiza i dobro odabrana ambulantna dopunska štite vas bez iznenađenja na kraju godine.",
    "am.faq.eyebrow":"Česta pitanja","am.faq.title":"Što naši klijenti pitaju",
    "am.q1":"Mogu li svake godine promijeniti osiguravatelja?","am.a1":"Da. Možete promijeniti za 1. siječnja slanjem otkaza do 30. studenog. Alpha Office uspoređuje ponude i obavlja promjenu umjesto vas.",
    "am.q2":"Koja je razlika između LAMal-a i dopunskog?","am.a2":"LAMal je obvezan, pokriva osnovne zakonske usluge. Dopunska su dobrovoljna: privatna soba, alternativna medicina, zubar, itd.",
    "am.q3":"Mogu li odbiti LAMal premije od poreza?","am.a3":"Možete odbiti paušalni iznos. Iznos ovisi o kantonu i obiteljskoj situaciji.",
    "am.q4":"Mora li i dijete biti osigurano LAMal-om?","am.a4":"Da, svako dijete od rođenja. Kantonalne subvencije često smanjuju premiju na nulu za obitelji s nižim primanjima.",
    "am.q5":"Kako smanjiti LAMal premiju?","am.a5":"Povećajte franšizu, odaberite alternativni model, usporedite osiguravatelje svake jeseni. Alpha Office to radi besplatno.",
    "am.cta.title":"Optimizirajte zdravstvenu pokrivenost","am.cta.desc":"Alpha Office uspoređuje LAMal i dopunske ponude za najbolju pokrivenost po najboljoj cijeni.","am.cta.btn":"Zatražite besplatnu procjenu",
  }
};

// ─── Language ───
let lang = localStorage.getItem('ao-lang') || 'fr';

function applyLang(l) {
  if (!T[l]) l = 'fr';
  lang = l;
  localStorage.setItem('ao-lang', l);
  document.documentElement.lang = l;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = T[l]?.[key] ?? T['fr'][key];
    if (val !== undefined) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.getAttribute('data-i18n-ph');
    const val = T[l]?.[key] ?? T['fr'][key];
    if (val !== undefined) el.placeholder = val;
  });
  document.querySelectorAll('.lang-current').forEach(el => el.textContent = l.toUpperCase());
  document.querySelectorAll('.lang-dropdown li').forEach(li => {
    li.classList.toggle('active', li.dataset.lang === l);
  });

  // Update page-specific meta
  const metas = document.querySelectorAll('[data-meta-fr],[data-meta-de]');
  metas.forEach(m => {
    const val = l === 'fr' ? m.dataset.metaFr : m.dataset.metaDe;
    if (val) m.setAttribute('content', val);
  });
  const titles = document.querySelectorAll('[data-title-fr],[data-title-de]');
  titles.forEach(t => {
    const val = l === 'fr' ? t.dataset.titleFr : t.dataset.titleDe;
    if (val) document.title = val;
  });
}

// ─── Nav scroll ───
function initNav() {
  const nav = document.querySelector('nav');
  const toggle = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  if (toggle) toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);
    // Close lang picker when nav opens
    document.querySelectorAll('.lang-picker.open').forEach(p => p.classList.remove('open'));
  });
  // Close menu when a link is clicked
  if (links) links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    links.classList.remove('open');
    if (toggle) toggle.classList.remove('open');
  }));

  // Active link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    a.classList.toggle('active', a.dataset.page === page);
  });
}

// ─── Scroll reveal ───
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(el => obs.observe(el));
}

// ─── Scroll progress bar ───
function initScrollProgress() {
  const bar = document.createElement('div');
  bar.className = 'scroll-progress';
  document.body.prepend(bar);
  window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
    bar.style.width = pct + '%';
  }, { passive: true });
}

// ─── Animated counters ───
function initCounters() {
  const els = document.querySelectorAll('.stat-num[data-target]');
  if (!els.length) return;
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      obs.unobserve(e.target);
      const target = +e.target.dataset.target;
      const suffix = e.target.dataset.suffix || '';
      const duration = 1400;
      const start = performance.now();
      const update = (now) => {
        const t = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        e.target.textContent = Math.round(ease * target) + suffix;
        if (t < 1) requestAnimationFrame(update);
      };
      requestAnimationFrame(update);
    });
  }, { threshold: 0.4 });
  els.forEach(el => obs.observe(el));
}

// ─── 3D card tilt ───
function initCardTilt() {
  const cards = document.querySelectorAll('.card, .review-card');
  cards.forEach(card => {
    let bounds = null;
    card.addEventListener('mouseenter', () => {
      bounds = card.getBoundingClientRect();
    });
    card.addEventListener('mousemove', e => {
      if (!bounds) return;
      const x = ((e.clientX - bounds.left) / bounds.width  - 0.5) * 12;
      const y = ((e.clientY - bounds.top)  / bounds.height - 0.5) * -12;
      card.style.transform = `perspective(800px) rotateX(${y}deg) rotateY(${x}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', () => {
      bounds = null;
      card.style.transform = '';
    });
  });
}

// ─── Staggered grid children ───
function initStagger() {
  document.querySelectorAll('.cards-grid, .values-grid, .reviews-grid, .withdraw-grid').forEach(grid => {
    Array.from(grid.children).forEach((child, i) => {
      child.style.transitionDelay = (i * 80) + 'ms';
    });
  });
}

// ─── Cookie Banner ───
function initCookieBanner() {
  if (localStorage.getItem('ao-cookies')) return;

  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Gestion des cookies');
  banner.setAttribute('aria-live', 'polite');
  banner.innerHTML = `
    <p data-i18n="ck.text"></p>
    <div class="ck-btns">
      <button id="ck-accept" data-i18n="ck.accept"></button>
      <button id="ck-decline" data-i18n="ck.decline"></button>
    </div>`;
  document.body.appendChild(banner);

  requestAnimationFrame(() => banner.classList.add('visible'));

  function dismiss(choice) {
    localStorage.setItem('ao-cookies', choice);
    banner.classList.remove('visible');
    banner.addEventListener('transitionend', () => banner.remove(), { once: true });
  }
  document.getElementById('ck-accept').addEventListener('click', () => dismiss('accepted'));
  document.getElementById('ck-decline').addEventListener('click', () => dismiss('declined'));
}

// ─── FAQ accordion ───
function initFaq() {
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.parentElement;
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

// ─── Marquee clone ───
function initMarquee() {
  const t = document.getElementById('marquee-track');
  if (!t) return;
  Array.from(t.children).forEach(c => {
    const cl = c.cloneNode(true);
    cl.setAttribute('aria-hidden', 'true');
    t.appendChild(cl);
  });
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  initScrollProgress();
  initNav();
  initReveal();
  initCounters();
  initCardTilt();
  initStagger();
  initFaq();
  initMarquee();
  initCookieBanner();
  applyLang(lang);

  // Lang picker toggle
  document.querySelectorAll('.lang-picker').forEach(picker => {
    const btn = picker.querySelector('.lang-btn');
    const dropdown = picker.querySelector('.lang-dropdown');
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const isOpen = picker.classList.contains('open');
      document.querySelectorAll('.lang-picker.open').forEach(p => {
        p.classList.remove('open');
        p.querySelector('.lang-btn').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        picker.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
    dropdown.querySelectorAll('li').forEach(li => {
      li.addEventListener('click', () => {
        applyLang(li.dataset.lang);
        picker.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  });
  document.addEventListener('click', () => {
    document.querySelectorAll('.lang-picker.open').forEach(p => {
      p.classList.remove('open');
      p.querySelector('.lang-btn').setAttribute('aria-expanded', 'false');
    });
  });
});
