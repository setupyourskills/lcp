export const CREATE_PREFIX = "CREATE TABLE IF NOT EXISTS";
export const CREATE_SUFFIX = "ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE utf8mb4_unicode_ci";

export const TABLE_NAMES = [
  {
    table: "users",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
email VARCHAR(255) NOT NULL,
PRIMARY KEY (id),
UNIQUE KEY uq_email (email))
`,
  },

  {
    table: "sections",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
component_type VARCHAR(255) NOT NULL,
component_id INT(11) NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "popups",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
component_type VARCHAR(255) NOT NULL,
component_id INT(11) NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "modals",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
component_type VARCHAR(255) NOT NULL,
component_id INT(11) NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_article_header",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
title LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
subtitle LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
mark TINYINT(1) DEFAULT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_button",
    template: `
(id INT(11) NOT NULL AUTO_INCREMENT,
title LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_color_card",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
label LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
type VARCHAR(255) DEFAULT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_cookies_parameters",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
cookie_key VARCHAR(255) NOT NULL,
label LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
mutable TINYINT(1) NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_faq",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
question LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
answer LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_image",
    template: `
(id INT(11) NOT NULL AUTO_INCREMENT,
filename VARCHAR(255) NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_info",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
content LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_info_card",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
number TINYINT(4) DEFAULT NULL,
title LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
content LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
style VARCHAR(255) DEFAULT NULL,
transition TINYINT(1) DEFAULT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_input",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
placeholder LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_status",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
ok LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
failed LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
invalid LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_testimonial_card",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
content LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
avatar TEXT NOT NULL,
name LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
country LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_textarea",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
placeholder LONGTEXT CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_psp",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
PRIMARY KEY (id))
`,
  },

];
