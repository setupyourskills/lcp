export const INSERT_PREFIX = "INSERT INTO";

export const CONTENT_BDD = [
  {
    table: "sections",
    content: `
(id, name, lang, component_type, component_id) VALUES
(1, 'hero', 'fr', 'component_article_header', 1),
(2, 'hero', 'fr', 'component_button', 1),
(3, 'hero', 'fr', 'component_image', 1),
(4, 'features', 'fr', 'component_info_card', 1),
(5, 'features', 'fr', 'component_info_card', 2),
(6, 'features', 'fr', 'component_info_card', 3),
(7, 'video', 'fr', 'component_article_header', 2),
(8, 'colors', 'fr', 'component_article_header', 3),
(9, 'colors', 'fr', 'component_color_card', 1),
(10, 'colors', 'fr', 'component_color_card', 2),
(11, 'colors', 'fr', 'component_color_card', 3),
(12, 'colors', 'fr', 'component_color_card', 4),
(13, 'colors', 'fr', 'component_color_card', 5),
(14, 'colors', 'fr', 'component_color_card', 6),
(15, 'colors', 'fr', 'component_color_card', 7),
(16, 'colors', 'fr', 'component_color_card', 8),
(17, 'colors', 'fr', 'component_color_card', 9),
(20, 'purchase', 'fr', 'component_article_header', 4),
(21, 'purchase', 'fr', 'component_info_card', 4),
(22, 'purchase', 'fr', 'component_info_card', 5),
(23, 'purchase', 'fr', 'component_image', 2),
(24, 'purchase', 'fr', 'component_image', 3),
(25, 'purchase', 'fr', 'component_button', 1),
(26, 'purchase', 'fr', 'component_info', 1),
(27, 'faq', 'fr', 'component_article_header', 5),
(28, 'faq', 'fr', 'component_faq', 1),
(29, 'faq', 'fr', 'component_faq', 2),
(30, 'faq', 'fr', 'component_faq', 3),
(31, 'faq', 'fr', 'component_faq', 4),
(34, 'testimonials', 'fr', 'component_article_header', 6),
(35, 'testimonials', 'fr', 'component_testimonial_card', 1),
(36, 'testimonials', 'fr', 'component_testimonial_card', 2),
(37, 'testimonials', 'fr', 'component_testimonial_card', 3),
(38, 'newsletter', 'fr', 'component_article_header', 7),
(39, 'newsletter', 'fr', 'component_input', 1),
(40, 'newsletter', 'fr', 'component_button', 2),
(41, 'newsletter', 'fr', 'component_info', 2),
(42, 'newsletter', 'fr', 'component_info', 3),
(43, 'newsletter', 'fr', 'component_status', 1),
(44, 'footer', 'fr', 'component_info_card', 6),
(45, 'footer', 'fr', 'component_info_card', 7),
(50, 'footer', 'fr', 'component_info_card', 8),
(51, 'footer', 'fr', 'component_info', 4);
`,
  },

  {
    table: "popups",
    content: `
(id, name, lang, component_type, component_id) VALUES
(1, 'cookies', 'fr', 'component_article_header', 8),
(2, 'cookies', 'fr', 'component_button', 3),
(3, 'cookies', 'fr', 'component_button', 4);
`,
  },

  {
    table: "modals",
    content: `
(id, name, lang, component_type, component_id) VALUES
(1, 'contact', 'fr', 'component_article_header', 9),
(2, 'contact', 'fr', 'component_input', 2),
(3, 'contact', 'fr', 'component_input', 1),
(4, 'contact', 'fr', 'component_textarea', 1),
(5, 'contact', 'fr', 'component_button', 5),
(6, 'contact', 'fr', 'component_status', 2),
(8, 'confidential', 'fr', 'component_article_header', 10),
(9, 'confidential', 'fr', 'component_info', 5),
(10, 'confidential', 'fr', 'component_button', 4),
(11, 'use', 'fr', 'component_article_header', 11),
(12, 'use', 'fr', 'component_info', 6),
(13, 'use', 'fr', 'component_button', 4),
(14, 'mentions', 'fr', 'component_article_header', 12),
(15, 'mentions', 'fr', 'component_info', 7),
(16, 'mentions', 'fr', 'component_button', 4),
(17, 'terms', 'fr', 'component_article_header', 13),
(18, 'terms', 'fr', 'component_info', 8),
(19, 'terms', 'fr', 'component_button', 4),
(20, 'cookies', 'fr', 'component_article_header', 14),
(21, 'cookies', 'fr', 'component_info', 9),
(22, 'cookies', 'fr', 'component_button', 4),
(23, 'cookies', 'fr', 'component_cookies_parameters', 1),
(24, 'cookies', 'fr', 'component_cookies_parameters', 2),
(25, 'cookies', 'fr', 'component_cookies_parameters', 3);
`,
  },

  {
    table: "component_article_header",
    content: `
(id, title, subtitle, mark) VALUES
(1, 'La <span class=\"font-title-accent\">Couleur</span> au service de vos gravures !', 'Sublimez vos gravures lasers avec nos poudres de couleurs intenses, durables et faciles à utiliser.', NULL),
(2, 'Les poudres <span class=\"font-accent\">en Action</span>', '<span class=\"font-bold\">Découvrez</span> les fonctionnalités, <span class=\"font-bold\">performances</span>, applications et astuces pour <span class=\"font-bold\">des créations réussies !</span>', 1),
(3, '<span class=\"font-accent\">9 couleurs</span> et des millions d''idées !', '<span class=\"font-bold\">Sélectionnez</span> les couleurs <span class=\"font-bold\"> parfaites</span> pour <span class=\"font-bold\"> vos projets uniques !</span>', 1),
(4, '<span class=\"font-accent\">Commander</span> le lot Duo', '<span class=\"font-bold\">Béneficier</span> de la <span class=\"font-bold\">couleur</span> pour <span class=\"font-bold\">plus de créativité !</span>', NULL),
(5, '<span class=\"font-accent\">Questions</span> fréquentes', '<span class=\"font-bold\">Trouvez les réponses</span> à toutes vos interrogations sur nos poudres laser, <span class=\"font-bold\">tout doit rester clair !</span>', 1),
(6, 'Les <span class=\"font-accent\">avis</span> de nos clients', 'Votre <span class=\"font-bold\">satisfaction</span> est <span class=\"font-bold\">notre priorité !</span>', 1),
(7, 'Rejoignez <span class=\"font-accent\">la newsletter</span>', '<span class=\"font-bold\">Recevez</span> les dernières <span class=\"font-bold\">nouvelles</span> pour <span class=\"font-bold\">rester toujours informé !</span>', NULL),
(8, 'Cookies', 'Nous utilisons des cookies pour améliorer votre expérience et analyser le trafic de manière anonyme. Vous pouvez accepter ou refuser les cookies non essentiels.', NULL),
(9, 'Nous contacter', 'Veuillez remplir le formulaire ci-dessous pour nous laisser un message.<br />Vous pouvez aussi nous écrire à <a href=\"mailto:setupyourskills@gmail.com\">setupyourskills@gmail.com</a>', NULL),
(10, 'Confidentialité / RGPD', 'Protection de vos données personnelles - droits, traitements et garanties RGPD', NULL),
(11, 'Conditions générales d''utilisation', 'Accès, utilisation et droits des utilisateurs, principes fondamentaux du site', NULL),
(12, 'Mentions Légales', 'Identité du site, responsabilité et cadre juridique - informations obligatoires à connaître', NULL),
(13, 'Conditions générales de vente', 'Modalités d''achat, paiement et obligations contractuelles', NULL),
(14, 'Gestion des cookies', 'Consentement, finalités et contrôle de votre expérience en ligne', NULL);

`,
  },

  {
    table: "component_button",
    content: `
(id, title) VALUES
(1, 'Commander'),
(2, 'S''abonner'),
(3, 'En savoir plus...'),
(4, 'Accepter'),
(5, 'Envoyer'),
(6, 'fermer');
`,
  },

  {
    table: "component_color_card",
    content: `
(id, name, type) VALUES
(1, 'red', NULL),
(2, 'blue', NULL),
(3, 'green', NULL),
(4, 'purple', NULL),
(5, 'gold', NULL),
(6, 'orange', NULL),
(7, 'white', NULL),
(8, 'yellow', NULL),
(9, 'black', NULL);
`,
  },

  {
    table: "component_cookies_parameters",
    content: `
(id, cookie_key, label, mutable) VALUES
(1, 'functional', 'Fonctionnels', 0),
(2, 'advertising', 'Publicitaires', 1),
(3, 'analytics', 'Analytiques', 1);
`,
  },

  {
    table: "component_faq",
    content: `
(id, question, answer, height) VALUES
(1, 'Choix des couleurs', 'Vous pouvez choisir entre <span class=\"font-bold\">9 couleurs</span> différentes que vous pouvez commander par lot de deux boîtes de 300g', 200),
(2, 'Quelle quantité utiliser par application ?', 'Vous n''avez besoin que de seulement quelques grammes par application.', 200),
(3, 'Délais de livraison', 'Cela dépend de là où vous résider, mais en général, il faudra compte 2 semaines maximum pour recevoir votre colis. Les poudres sont envoyées de Taïwan.', 230),
(4, 'Configuration et installation du laser', 'Il vous faudra trouver la meilleur configuration en fonction de votre laser. Quelqes tests seront nécessaires les premières fois jusqu''à trouver les bons paramètres.', 240);

`,
  },

  {
    table: "component_image",
    content: `
(id, filename) VALUES
(1, 'hero.webp'),
(2, 'box.webp'),
(3, 'box.webp');
`,
  },

  {
    table: "component_info",
    content: `
(id, content) VALUES
(1, 'Le coupon <span class=\"font-accent font-bold\">FIRST</span> vous permet de bénéficiez d''une réduction de 10% sur votre 1er achat.'),
(2, '<span class=\"font-accent font-bold font-normal\">🗹</span> Pas de Spam'),
(3, '<span class=\"font-accent font-bold font-normal\">🗹</span> Votre Email reste confidentiel'),
(4, '<span class=\"font-bold font-normal\">©</span> 2026 - <a href=\"mailto:contact@setupyourskills\">SetupYourSkills</a>'),
(5, '<div class=\"modal-content\">\r\n<p class=\"font-s\">Conformément aux dispositions du Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés n° 78‑17, ce Site internet (https://www.setupyourskills.com – ci‑après « le Site ») s’engage à protéger vos données personnelles.</p>\r\n\r\n<h4>Responsable du traitement</h4>\r\n<p>Carrillo Sébastien José (micro‑entreprise) est le responsable du traitement des données. Son adresse est le 8 rue Berthelot – 95330 Domont (France), et l’e‑mail de contact est <a href=\"mailto:setupyourskills@gmail.com\">setupyourskills@gmail.com</a>.</p>\r\n\r\n<h4>Finalités et bases légales du traitement</h4>\r\n<p><strong>Inscription à la newsletter</strong> : e‑mail – consentement explicite.</p>\r\n<p><strong>Réception de messages via le formulaire</strong> : Nom, prénom, e‑mail, message – nécessité contractuelle.</p>\r\n<p><strong>Paiements Stripe / PayPal</strong> : Adresse postale, nom, prénom, e‑mail, données bancaires – nécessité contractuelle (les informations bancaires ne sont jamais conservées sur le Site).</p>\r\n<p><strong>Publicités ciblées Google AdSense</strong> : Identifiants anonymisés, cookies tiers – consentement explicite.</p>\r\n<p><strong>Analyse du trafic (Matomo hébergé sur o2switch)</strong> : Adresse IP anonyme, comportement de navigation – nécessité fonctionnelle.</p>\r\n<p><strong>Gestion des cookies</strong> : Identifiants de session, préférences cookie – obligation légale.</p>\r\n\r\n<h4>Conservation des données</h4>\r\n<p>Les informations relatives aux commandes sont conservées pendant cinq ans à compter de la dernière transaction, conformément aux obligations comptables françaises. Les données d’inscription à la newsletter sont gardées tant que l’utilisateur ne se désinscrit pas ou ne demande pas la suppression de ses données. Les cookies fonctionnels expirent après deux jours (''session_id'') et six mois (''last_order_id''). Le cookie ''cookie_consent'', qui stocke les préférences de consentement, est conservé pendant un an.</p>\r\n\r\n<h4>Droits des personnes concernées</h4>\r\n<p>Vous disposez des droits suivants (article 15‑21 RGPD) : accès, rectification, effacement, limitation du traitement, portabilité et opposition. Vous pouvez également retirer votre consentement à tout moment (ex. désinscription newsletter). Pour exercer ces droits, veuillez nous contacter par e‑mail à <a href=\"mailto:setupyourskills@gmail.com\">setupyourskills@gmail.com</a>.</p>\r\n\r\n<h4>Sécurité des données</h4>\r\n<p>Toutes les communications entre l’utilisateur et le Site sont chiffrées via HTTPS (certificat SSL). Les informations sensibles liées aux paiements (numéro de carte bancaire, IBAN) sont traitées exclusivement par Stripe ou PayPal, qui disposent d’une certification PCI‑DSS 3.1+. Le serveur hébergé chez o2switch bénéficie d’un contrôle d’accès strict. Des sauvegardes régulières sont effectuées sur des supports sécurisés et chiffrés.</p>\r\n\r\n<h4>Transferts internationaux</h4>\r\n<p>Les seules données transférées hors de l’UE concernent les identifiants publicitaires déposés par Google AdSense, qui transitent vers les serveurs américains. Ce transfert est sécurisé grâce aux Standard Contractual Clauses (SCC) approuvées par le RGPD, garantissant un niveau de protection équivalent à celui de l’Union européenne.</p>\r\n\r\n<h4>Cookies et technologies similaires</h4>\r\n<p>Le Site utilise des cookies strictement nécessaires (''session_id'', ''last_order_id''), ainsi que des cookies publicitaires (''adsense_optin'') et analytiques (Matomo hébergé sur o2switch). Vous pouvez gérer vos préférences via le bandeau cookie ou en supprimant les cookies depuis votre navigateur. Pour plus d’informations, consultez notre <a href=\"/cookies\" target=\"_blank\">Gestion des Cookies</a>.</p>\r\n\r\n<h4>Modifications de la politique</h4>\r\n<p>Cette politique peut être mise à jour afin de refléter l’évolution législative ou technique. Toute modification sera publiée sur le Site et prendra effet dès sa mise en ligne.</p>\r\n<br />\r\n<p>En continuant votre navigation sans modifier vos préférences, vous acceptez implicitement les traitements décrits ci‑dessus.</p>\r\n</div>'),
(6, '<div class=\"modal-content\">\r\n<p class=\".font-s\">En accédant ou en utilisant ce Site internet (https://www.setupyourskills.com – ci‑après « le Site »), vous acceptez sans réserve les présentes conditions générales d’utilisation.</p>\r\n\r\n<h4>Objet</h4>\r\n<p>Le Site a pour objet de présenter et de vendre des poudres de couleur destinées à la gravure laser, ainsi que de fournir aux utilisateurs des informations techniques, commerciales et promotionnelles relatives à ces produits.</p>\r\n\r\n<h4>Accès au Site</h4>\r\n<p>L’utilisation du Site est librement accessible à toute personne majeure disposant d’une connexion internet et ne faisant pas l’objet d’un interdiction légale ou administrative. Le Site se réserve le droit de refuser l’accès ou de suspendre temporairement la disponibilité pour des raisons techniques, de maintenance ou pour tout autre motif jugé nécessaire.</p>\r\n\r\n<h4>Propriété intellectuelle</h4>\r\n<p>Tous les contenus présents sur le Site (textes, images, vidéos, logos, sons, bases de données) sont protégés par le droit d’auteur, le droit des marques et la législation relative à la propriété intellectuelle. Toute reproduction, représentation, modification ou diffusion partielle ou totale sans autorisation expresse du titulaire des droits est strictement interdite.</p>\r\n\r\n<h4>Utilisation du Site</h4>\r\n<p>Les utilisateurs s’engagent à utiliser le Site conformément aux dispositions légales en vigueur et aux présentes CGU. Il est formellement interdit d’utiliser le Site à des fins illicites, diffamatoires, harcelantes ou portant atteinte aux droits de tiers (ex. piratage, injection SQL, spamming).</p>\r\n\r\n<h4>Inscription et compte utilisateur</h4>\r\n<p>Pour accéder à certaines fonctionnalités (newsletter, historique des commandes), l’utilisateur peut s’inscrire en fournissant son nom, prénom et e‑mail. L’e‑mail fourni devient l’identifiant unique de l’utilisateur ; le mot de passe doit rester confidentiel. Le responsable du Site n’est pas responsable des pertes ou malveillances résultant d’une mauvaise gestion du compte par l’utilisateur.</p>\r\n\r\n<h4>Commandes et paiement</h4>\r\n<p>Les commandes se passent exclusivement via Stripe, PayPal ou carte bancaire (traités par Stripe). Les informations bancaires ne sont jamais conservées sur le Site ; elles transitent directement vers les serveurs sécurisés des prestataires. Le prix affiché inclut la TVA applicable (si nécessaire) et tout frais supplémentaires (expédition, taxes d’importation) est indiqué clairement avant la validation finale.</p>\r\n\r\n<h4>Livraison</h4>\r\n<p>Les produits sont expédiés depuis Taïwan vers le pays de livraison indiqué par l’utilisateur. Les délais estimés varient entre 5 et 15 jours ouvrables selon la destination, sans garantie d’arrivée à une date précise. Les frais de douane, taxes d’importation ou autres charges supplémentaires à l’arrivée sont à la charge du client.</p>\r\n\r\n<h4>Retours et rétractation</h4>\r\n<p>Conformément aux dispositions du Code de la consommation (article L221‑18), le consommateur dispose d’un délai de 14 jours à compter de la réception pour se rétracter sans donner de motif. Le produit doit être retourné dans son emballage d’origine, non ouvert et en parfait état. Les frais de retour sont à la charge du client, sauf erreur du vendeur.</p>\r\n\r\n<h4>Responsabilité</h4>\r\n<p>Le responsable du Site s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site. Néanmoins, il ne saurait être tenu responsable en cas d’erreurs, omissions ou de tout dommage indirect (perte de données, interruption de service) lié à l’utilisation du Site.</p>\r\n\r\n<h4>Cookies et suivi</h4>\r\n<p>Le Site utilise des cookies pour garantir son bon fonctionnement, personnaliser l’expérience utilisateur, gérer la newsletter, suivre les ventes et afficher des publicités ciblées via Google AdSense. L’utilisateur peut gérer ses préférences via le bandeau cookie présent sur chaque page ou en supprimant les cookies depuis son navigateur.</p>\r\n\r\n<h4>Modifications des CGU</h4>\r\n<p>Le responsable du Site se réserve le droit de modifier, compléter ou mettre à jour ces CGU à tout moment. Les versions mises à jour seront publiées sur le Site et entreront immédiatement en vigueur. L’utilisation continue du Site après publication constitue l’acceptation tacite des modifications.</p>\r\n\r\n<h4>Loi applicable et juridiction</h4>\r\n<p>Les présentes CGU sont régies par la loi française. Tout litige relatif à leur interprétation ou exécution sera soumis, à défaut de résolution amiable, aux tribunaux compétents du ressort du siège social (Domont).</p>\r\n</div>'),
(7, '<div class=\"modal-content\">\r\n<p class=\"font-s\">Conformément aux dispositions des articles 6‑III et 19 de la loi n° 2004‑575 du 21 juin 2004 (LCEN), le présent site internet https://www.setupyourskills.com (ci‑après « le Site ») est soumis aux mentions légales suivantes.</p>\r\n\r\n<h4>1. Édition du site</h4>\r\n<p>Le Site est édité par la micro‑entreprise Carrillo Sébastien José, dont le siège social se situe au 8 rue Berthelot – 95330 Domont (France), immatriculée sous le numéro R.C.S. Pontoise : 992 139 279 ; bénéficiant de la franchise en base de TVA, elle ne possède pas de numéro intracommunautaire.</p>\r\n<br />\r\n<p>La publication est assurée par Sébastien Carrillo et tout contact peut être adressé à l’e‑mail : <a href=\"mailto:setupyourskills@gmail.com\">setupyourskills@gmail.com</a> ou via le formulaire de contact.</p>\r\n\r\n<h4>2. Hébergement</h4>\r\n<p>Le Site est hébergé par l’entreprise o2switch, dont le siège social se trouve au Chemin des Pardiaux – 63000 Clermont‑Ferrand (France), joignable au <a href=\"tel:+33444446040\">04 44 44 60 40</a> et disponible sur le site web : <a href=\"https://www.o2switch\" target=\"_blank\">o2switch</a>.</p>\r\n\r\n<h4>3. Propriété intellectuelle</h4>\r\n<p>Tous les contenus présents sur le Site (textes, images, vidéos, logos, sons, bases de données, etc.) sont la propriété exclusive de SetupYourSkills ou font l’objet d’une autorisation d’utilisation préalable.</p>\r\n<br />\r\n<p>Toute reproduction, représentation, modification, diffusion ou utilisation de ces éléments, même partielle, est strictement interdite sans l’accord écrit exprès du titulaire des droits.</p>\r\n\r\n<h4>4. Données personnelles</h4>\r\n<p>Le Site traite les données utilisateurs conformément au Règlement Général sur la Protection des Données (RGPD).</p>\r\n<br />\r\n<p>Pour connaître le détail des informations collectées, leur usage et les modalités d’exercice de vos droits, veuillez consulter notre <a href=\"/confidentialite\" target=\"_blank\">Politique de confidentialité</a>.</p>\r\n\r\n<h4>5. Cookies</h4>\r\n<p>Le Site utilise uniquement des cookies strictement nécessaires au bon fonctionnement du site.</p>\r\n<p>Aucun cookie de suivi publicitaire ou d’analyse tiers n’est installé sans votre consentement préalable.</p>\r\n<br />\r\n<p>Pour plus d’information et pour consulter la page dédiée aux cookies, cliquez : <a href=\"/cookies\" target=\"_blank\">Gestion des Cookies</a>.</p>\r\n\r\n<h4>6. Responsabilité</h4>\r\n<p>SetupYourSkills s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site. Toutefois, elle ne saurait être tenue responsable en cas d’erreurs, d’omissions, d’indisponibilités temporaires ou d’un mauvais usage du site par l’utilisateur.</p>\r\n\r\n<h4>7. Loi applicable et juridiction</h4>\r\n<p>Les présentes mentions légales sont régies par le droit français. Tout litige né à l’occasion de l’utilisation du Site sera soumis, à défaut de résolution amiable, aux tribunaux compétents du ressort du siège social de SetupYourSkills (Domont).</p>\r\n<br />\r\n<p> En accédant au Site, vous reconnaissez avoir pris connaissance et accepté les présentes mentions légales.</p>\r\n\r\n<h4>8. Médiation de la consommation</h4>\r\n<p>Conformément aux articles L. 212‑1 et suivants du Code de la consommation, tout litige entre le consommateur (personne physique) et SetupYourSkills relatif à l’utilisation du Site ou à toute prestation proposée pourra être soumis à une médiation amiable avant toute procédure judiciaire.</p>\r\n<br />\r\n<p>La société de médiation est Médiation Professionnelle et possède le numéro SIRET 814 385 357 00029.</p>\r\n<p>Elle est située au 17 Rue Marc Sangnier – 33130 Bégles (France), et son site internet se trouve à l’adresse suivante : <a href=\"https://www.mediateur-consommation-smp.fr\" target=\"_blank\">Médiation Professionnelle</a>.</p>\r\n<br />\r\n<p>Cette structure a été habilitée pour intervenir en tant que tiers neutre afin de faciliter la recherche d’une solution amiable entre les parties concernées.</p>\r\n\r\n<h4>Liens hypertextes</h4>\r\n<p>Le site peut contenir des liens vers d’autres sites web qui ne sont pas édités par nous. Nous déclinons toute responsabilité quant au contenu, à la disponibilité ou à l’utilisation de ces sites tiers.</p>\r\n<br />\r\n<p> La mise en place de liens hypertextes par des tiers vers des pages ou des documents diffusés sur le Site est autorisée sous réserve que les liens ne contreviennent pas aux intérêts de SetupYourSkills et qu’ils garantissent la possibilité pour l’utilisateur d’identifier l’origine et l’auteur du document.</p>\r\n<br />\r\n<p>Il est précisé que la mise en place de tels liens hypertextes à des fins de promotion commerciale des produits ou services proposés par un tiers est interdite.</p>\r\n</div>'),
(8, '<div class=\"modal-content\">\r\n<p class=\"font-s\"> En passant une commande sur le Site https://www.setupyourskills.com – ci‑après « le Site » – vous acceptez sans réserve les présentes conditions générales de vente.</p>\r\n\r\n<h4>Objet</h4>\r\n<p>Les présentes CGV régissent la commercialisation de poudres de couleur pour gravure laser vendues par lot de deux boîtes contenant chacune 300 g. Le site propose neuf couleurs différentes ; chaque achat implique l’achat d’un lot complet (deux boîtes).</p>\r\n\r\n<h4>Prix</h4>\r\n<p>Tous les prix indiqués sur le Site sont exprimés en euros (€) et incluent la TVA applicable selon la législation française (exonération ou franchise en base). Les frais de livraison, les taxes d’importation et tout autre coût supplémentaire (douane, frais bancaires) seront clairement affichés avant la validation finale de la commande.</p>\r\n\r\n<h4>Commande</h4>\r\n<p>Pour passer une commande, l’utilisateur doit :</p>\r\n<ol>\r\n  <li>Sélectionner la couleur désirée parmi les neuf options disponibles.</li>\r\n  <li>Choisir le nombre de lots souhaité (minimum un lot = deux boîtes).</li\r\n  <li>Remplir le formulaire d’achat avec ses coordonnées complètes (nom, prénom, adresse postale, e‑mail).</li>\r\n  <li>Valider le paiement via Stripe, PayPal ou carte bancaire.</li>\r\n</ol>\r\n<p>La commande n’est confirmée que lorsqu’un message de confirmation est envoyé à l’e‑mail fourni et qu’une facture électronique est générée.</p>\r\n\r\n<h4>Paiement</h4>\r\n<p>Les paiements sont traités exclusivement par les prestataires Stripe et PayPal. Les données bancaires (numéro de carte, IBAN) ne sont jamais stockées sur le Site ; elles transitent directement vers les serveurs sécurisés des prestataires. Le paiement doit être effectué immédiatement lors de la validation de la commande.</p>\r\n\r\n<h4>Livraison</h4>\r\n<p>Les produits sont expédiés depuis Taïwan vers l’adresse indiquée par le client. Les délais de livraison varient entre 5 et 15 jours ouvrables selon la destination, sans garantie d’arrivée à une date précise. Les frais de douane, taxes d’importation ou autres charges supplémentaires à l’arrivée sont à la charge du client.</p>\r\n\r\n<h4>Droit de rétractation</h4>\r\n<p>Conformément aux dispositions du Code de la consommation (article L221‑18), le consommateur dispose d’un délai de 14 jours à compter de la réception pour se rétracter sans donner de motif. Le produit doit être retourné dans son emballage d’origine, non ouvert et en parfait état. Les frais de retour sont à la charge du client, sauf erreur du vendeur.</p>\r\n\r\n<h4>Garanties</h4>\r\n<p>Les produits bénéficient de la garantie légale contre les défauts de conformité et de qualité pendant deux ans à compter de la date de livraison. Le responsable du Site n’est pas responsable des dommages indirects ou pertes de données liées à l’utilisation du produit, sauf faute manifeste.</p>\r\n\r\n<h4>Responsabilité</h4>\r\n<p>Le responsable du Site s’efforce d’assurer l’exactitude et la mise à jour des informations diffusées sur le Site. Néanmoins, il ne saurait être tenu responsable en cas d’erreurs, omissions ou de tout dommage indirect (perte de données, interruption de service) lié à l’utilisation du Site.</p>\r\n\r\n<h4>Modifications des CGV</h4>\r\n<p>Les CGV peuvent être modifiées à tout moment. Les versions mises à jour seront publiées sur le Site et entreront immédiatement en vigueur. L’utilisation continue du Site après publication constitue l’acceptation tacite des modifications.</p>\r\n\r\n<h4>Loi applicable et juridiction</h4>\r\n<p>Les présentes CGV sont régies par la loi française. Tout litige relatif à leur interprétation ou exécution sera soumis, à défaut de résolution amiable, aux tribunaux compétents du ressort du siège social (Domont).</p>\r\n</div>'),
(9, '<div class=\"modal-content\">\r\n<p class=\"font-s\">Conformément aux exigences du Règlement Général sur la Protection des Données (RGPD) et à la directive e‑Privacy, ce site web (https://www.setupyourskills.com – ci‑après « le Site ») utilise différents types de cookies.</p>\r\n\r\n<h4>Catégories de cookies</h4>\r\n<p>Le Site emploie des cookies strictement nécessaires au fonctionnement (ex. panier, connexion à la newsletter) ainsi que des cookies tiers pour la publicité ciblée via Google AdSense et l’analyse du trafic avec Matomo hébergé sur le serveur o2switch.</p>\r\n\r\n<h4>Cookies fonctionnels</h4>\r\n<p>Ils permettent de conserver votre session active (ex. panier, inscription à la newsletter) ou d’identifier votre dernière commande pour un retour plus rapide. Ces cookies sont indispensables au bon fonctionnement du Site et ne nécessitent pas de consentement préalable.</p>\r\n\r\n<h4>Cookies publicitaires</h4>\r\n<p>Ils activent ou désactivent les publicités ciblées Google AdSense. Le dépôt de ces cookies repose sur votre consentement explicite, que vous pouvez donner via le bandeau cookie.</p>\r\n\r\n<h4>Cookies d’analyse</h4>\r\n<p>Ils sont utilisés pour mesurer la fréquentation et améliorer l’expérience utilisateur. Les données collectées restent anonymisées (adresse IP anonyme) et ne sont pas transférées hors de l’UE.</p>\r\n\r\n<h4>Consentement</h4>\r\n<p>Dès votre première visite, un bandeau clair apparaît en bas de page avec deux options :</p>\r\n<ul>\r\n  <li><strong>« Accepter »</strong> – active tous les cookies, y compris ceux à des fins publicitaires.</li>\r\n  <li><strong>« En savoir plus... »</strong> – ouvre cette fenêtre modale où vous pouvez cocher ou décocher chaque catégorie.</li>\r\n<p>Le cookie <code>cookie_consent</code> est créé après votre décision et contient la valeur (<code>true/false</code>) pour chaque catégorie de cookies. Si vous choisissez de refuser les cookies publicitaires, le cookie <code>adsense_optin</code> n’est pas déposé et Google AdSense affichera alors des annonces non ciblées (cookies strictement nécessaires uniquement).</p>\r\n\r\n<h4>Cookies tiers et publicité</h4>\r\n<p>Google AdSense dépose des cookies tiers pour diffuser des publicités ciblées basées sur votre historique de navigation. Le traitement est soumis à votre consentement explicite via <code>adsense_optin</code>. Les données transférées vers les serveurs américains sont sécurisées par les Standard Contractual Clauses (SCC) approuvées par le RGPD, garantissant un niveau de protection équivalent à celui de l’UE.</p>\r\n\r\n<h4>Politique d’utilisation des cookies</h4>\r\n<ul>\r\n  <li><strong>Cookies nécessaires</strong> : obligatoires pour assurer le bon fonctionnement du Site.</li>\r\n  <li><strong>Cookies fonctionnels</strong> : essentiels pour la navigation et l’interaction avec les services du Site.</li>\r\n  <li><strong>Cookies publicitaires</strong> : permettent d’afficher des annonces pertinentes mais ne compromettent pas votre confidentialité.</li>\r\n  <li><strong>Cookies analytiques</strong> : aident à améliorer la performance et l’expérience utilisateur sans transfert de données vers des sites tiers.</li>\r\n</ul>\r\n\r\n<h4>Modifications</h4>\r\n<p>Cette politique peut être mise à jour pour refléter l’évolution législative ou technique. Toute modification sera publiée sur le Site et prendra effet dès sa mise en ligne.</p>\r\n<br />\r\n<p>En continuant votre navigation sans modifier vos préférences, vous acceptez implicitement le dépôt des cookies décrits ci‑dessus.</p>\r\n\r\n<h4>Paramètres des cookies</h4>\r\n</div>');
`,
  },

  {
    table: "component_info_card",
    content: `
(id, number, title, content, style, transition) VALUES
(1, NULL, 'Couleurs', 'Des couleurs <span class=\"font-bold\">vibrantes</span> qui embélissent vos œuvres et <span class=\"font-bold\">résistent</span> à l''épreuve du temps.', NULL, NULL),
(2, NULL, 'Adaptable', 'Nos poudres peuvent adhérer à <span class=\"font-bold\">tous types de matériaux</span> (bois, métal, verre, plastique...), laissez parler votre créativité.', NULL, NULL),
(3, NULL, 'Compatible', 'Que vous utilisiez un laser Diode, CO2 ou Fibre, nos poudres sont conçues pour fonctionner <span class=\"font-bold\">sur la majorité des machines.</span>', NULL, NULL),
(4, 1, 'Quantités', 'Nos poudres laser sont vendues par lot de deux boîtes de 300g, idéal pour tous vos projets.', NULL, NULL),
(5, 2, 'Couleurs', 'Choisissez parmi une palette de 9 couleurs pour donner vie à vos créations.', NULL, NULL),
(6, NULL, 'Laser Skills', 'Nous avons créé une poudre qui permet d’ajouter <span class=\"font-bold\">une dimension chromatique exceptionnelle et durable</span> à vos gravures lasers.<br /><br /><span class=\"font-accent\">✉</span> <a href=\"#contact\" class=\"modal\">Nous contacter</a>', 'italic', NULL),
(7, NULL, 'Notre Produit', '<a href=\"#features\" class=\"inner-link\">Caractéristiques</a><br /><a href=\"#demo\" class=\"inner-link\">Démonstration</a><br /><a href=\"#colors\" class=\"inner-link\">Couleurs disponibles</a><br /><a href=\"#purchase\" class=\"inner-link\">Commander le lot Duo</a><br /><a href=\"#faq\" class=\"inner-link\">FAQ</a><br /><a href=\"#testimonials\" class=\"inner-link\">Témoignages</a><br /><a href=\"#newsletter\" class=\"inner-link\">Newsletter</a>', 'normal', NULL),
(8, NULL, 'Mentions', '<a href=\"#mentions\" class=\"modal\">Mentions légales</a><br /><a href=\"#terms\" class=\"modal\">Conditions générales de vente</a><br /><a href=''#confidential'' class=\"modal\">Confidentialité / RGPD</a><br /><a href=\"#cookies\" class=\"modal\">Gestion des cookies</a><br /><a href=\"#use\" class=\"modal\">Conditions générales d''utilisation</a>', 'normal', NULL);

`,
  },

  {
    table: "component_input",
    content: `
(id, placeholder) VALUES
(1, 'Email'),
(2, 'Nom');
`,
  },

  {
    table: "component_status",
    content: `
(id, ok, failed, invalid) VALUES
(1, '✅ Vous êtes abonné !', '❌ Une erreur s''est produite !', '❌ Email est invalide !'),
(2, '✅ Votre message a bien été envoyé !', '❌ Une erreur s''est produite !', '❌ Votre formulaire est invalide !');
`,
  },

  {
    table: "component_testimonial_card",
    content: `
(id, content, avatar, name, country) VALUES
(1, 'Merci beaucoup pour ces belles couleurs ! Je les utilise maintenant dans toutes mes gravures !', '', 'yang', 'Taïwan'),
(2, 'Il faut un petit temps d''adaptation mais ça vaut le coup car ça ajoute une véritable touche vivante à mes produits.', '', 'Léa', 'France'),
(3, 'Merci, j''apprécie vraiment les quantités disponibles et bien protégées dans leur boîte, c''est assez facile d''emploi !', '', 'John', 'USA');
`,
  },

  {
    table: "component_textarea",
    content: `
(id, placeholder) VALUES
(1, 'Message');
`,
  },
];
