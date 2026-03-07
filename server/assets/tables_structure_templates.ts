export const CREATE_PREFIX = "CREATE TABLE IF NOT EXISTS";
export const CREATE_SUFFIX =
  "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci";

export const TABLE_NAMES = [
  {
    table: "products",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  color varchar(255) NOT NULL,
  name longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  description longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  price int(11) NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "users",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  email varchar(255) NOT NULL,
  UNIQUE KEY uq_email (email),
  PRIMARY KEY (id))
`,
  },

  {
    table: "sections",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  component_type varchar(255) NOT NULL,
  component_id int(11) NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "popups",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  component_type varchar(255) NOT NULL,
  component_id int(11) NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "modals",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  component_type varchar(255) NOT NULL,
  component_id int(11) NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_article_header",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  title longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  subtitle longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  mark tinyint(1) DEFAULT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_button",
    template: `
(id int(11) NOT NULL AUTO_INCREMENT,
  title longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  redirect longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_color_card",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  label longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_cookies_parameters",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  cookie_key varchar(255) NOT NULL,
  label longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  mutable tinyint(1) NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_faq",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  question longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  answer longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_image",
    template: `
(id int(11) NOT NULL AUTO_INCREMENT,
  filename varchar(255) NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_info",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  content longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_info_card",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  number tinyint(4) DEFAULT NULL,
  title longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  content longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  style varchar(255) DEFAULT NULL,
  transition tinyint(1) DEFAULT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_input",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  placeholder longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_psp",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  name varchar(255) NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_status",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  ok longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  failed longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  invalid longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_testimonial_card",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  content longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  avatar text NOT NULL,
  name longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  country longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (id))
`,
  },

  {
    table: "component_textarea",
    template: `
(id int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  placeholder longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  PRIMARY KEY (id))
`,
  },
];
