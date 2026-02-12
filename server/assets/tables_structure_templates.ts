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
lang VARCHAR(16) NOT NULL,
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
lang VARCHAR(16) NOT NULL,
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
lang VARCHAR(16) NOT NULL,
component_type VARCHAR(255) NOT NULL,
component_id INT(11) NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_article_header",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
title TEXT NOT NULL,
subtitle TEXT NOT NULL,
mark TINYINT(1) DEFAULT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_button",
    template: `
(id INT(11) NOT NULL AUTO_INCREMENT,
title VARCHAR(255) NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_color_card",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
name VARCHAR(255) NOT NULL,
type VARCHAR(255) DEFAULT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_cookies_parameters",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
cookie_key VARCHAR(255) NOT NULL,
label TEXT NOT NULL,
mutable TINYINT(1) NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_faq",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
question TEXT NOT NULL,
answer TEXT NOT NULL,
height SMALLINT(6) NOT NULL,
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
content TEXT NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_info_card",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
number TINYINT(4) DEFAULT NULL,
title VARCHAR(255) NOT NULL,
content TEXT NOT NULL,
style VARCHAR(255) DEFAULT NULL,
transition TINYINT(1) DEFAULT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_input",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
placeholder VARCHAR(255) NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_status",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
ok TEXT NOT NULL,
failed TEXT NOT NULL,
invalid TEXT NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_testimonial_card",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
content TEXT NOT NULL,
avatar TEXT NOT NULL,
name TEXT NOT NULL,
country TEXT NOT NULL,
PRIMARY KEY (id))
`,
  },

  {
    table: "component_textarea",
    template: `
(id INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
placeholder VARCHAR(255) NOT NULL,
PRIMARY KEY (id))
`,
  },
];
