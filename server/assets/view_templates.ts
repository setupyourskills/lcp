export const VIEW_NAMES = [
  {
    view: "hero_view",
    template: `
CREATE OR REPLACE VIEW hero_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   sections s
JOIN   component_article_header ah ON s.component_id = ah.id
WHERE  s.name = "hero"
  AND  s.component_type = "component_article_header"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL
FROM   sections s
JOIN   component_button b ON s.component_id = b.id
WHERE  s.name = "hero"
  AND  s.component_type = "component_button"

UNION ALL

SELECT "component_image"      AS component_type,
       i.filename      AS component_name,
       NULL,
       NULL
FROM   sections s
JOIN   component_image i ON s.component_id = i.id
WHERE  s.name = "hero"
  AND  s.component_type = "component_image";
`,
  },

  {
    view: "features_view",
    template: `
CREATE OR REPLACE VIEW features_view AS

SELECT "component_info_card" AS component_type,
       ic.title        AS component_name,
       ic.content      AS component_content
FROM   sections s
JOIN   component_info_card ic ON s.component_id = ic.id
WHERE  s.name = "features"
  AND  s.component_type = "component_info_card";
`,
  },

  {
    view: "video_view",
    template: `
CREATE OR REPLACE VIEW video_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   sections s
JOIN   component_article_header ah ON s.component_id = ah.id
WHERE  s.name = "video"
  AND  s.component_type = "component_article_header";
`,
  },

  {
    view: "colors_view",
    template: `
CREATE OR REPLACE VIEW colors_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   sections s
JOIN   component_article_header ah ON s.component_id = ah.id
WHERE  s.name = "colors"
  AND  s.component_type = "component_article_header"

UNION ALL

SELECT "component_color_card"      AS component_type,
       cc.name         AS component_name,
       cc.label        AS component_content,
       NULL
FROM   sections s
JOIN   component_color_card cc ON s.component_id = cc.id
WHERE  s.name = "colors"
  AND  s.component_type = "component_color_card";
`,
  },

  {
    view: "purchase_view",
    template: `
CREATE OR REPLACE VIEW purchase_view AS

SELECT "component_article_header" AS component_type,
       NULL            AS component_number,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   sections s
JOIN   component_article_header ah ON s.component_id = ah.id
WHERE  s.name = "purchase"
  AND  s.component_type = "component_article_header"

UNION ALL

SELECT "component_info_card" AS component_type,
       ic.number       AS component_number,
       ic.title        AS component_name,
       ic.content      AS component_content,
       NULL
FROM   sections s
JOIN   component_info_card ic ON s.component_id = ic.id
WHERE  s.name = "purchase"
  AND  s.component_type = "component_info_card"

UNION ALL

SELECT "component_image"      AS component_type,
       NULL,
       i.filename      AS component_name,
       NULL,
       NULL
FROM   sections s
JOIN   component_image i ON s.component_id = i.id
WHERE  s.name = "purchase"
  AND  s.component_type = "component_image"

UNION ALL

SELECT "component_button"      AS component_type,
       NULL,
       b.title         AS component_name,
       NULL,
       NULL
FROM   sections s
JOIN   component_button b ON s.component_id = b.id
WHERE  s.name = "purchase"
  AND  s.component_type = "component_button"

UNION ALL

SELECT "component_info"      AS component_type,
       NULL,
       i.content         AS component_name,
       NULL,
       NULL
FROM   sections s
JOIN   component_info i ON s.component_id = i.id
WHERE  s.name = "purchase"
  AND  s.component_type = "component_info";
`,
  },

  {
    view: "faq_view",
    template: `
CREATE OR REPLACE VIEW faq_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   sections s
JOIN   component_article_header ah ON s.component_id = ah.id
WHERE  s.name = "faq"
  AND  s.component_type = "component_article_header"

UNION ALL

SELECT "component_faq"      AS component_type,
       f.question         AS component_name,
       f.answer         AS component_content,
       f.height         AS component_number
FROM   sections s
JOIN   component_faq f ON s.component_id = f.id
WHERE  s.name = "faq"
  AND  s.component_type = "component_faq";
`,
  },

  {
    view: "testimonials_view",
    template: `
CREATE OR REPLACE VIEW testimonials_view AS

SELECT
    'component_article_header'      AS component_type,
    ah.title                       AS component_name,
    ah.subtitle                    AS component_content,
    NULL                           AS component_avatar,
    NULL                           AS component_country,
    ah.mark                        AS component_boolean
FROM
    sections s
JOIN
    component_article_header ah ON s.component_id = ah.id
WHERE
    s.name            = 'testimonials'
    AND s.component_type = 'component_article_header'

UNION ALL

-- 2️⃣  component_testimonial_card (card d’un témoignage)
SELECT
    'component_testimonial_card'    AS component_type,
    tc.name                        AS component_name,
    tc.content                     AS component_content,
    tc.avatar                      AS component_avatar,
    tc.country                     AS component_country,
    NULL                           AS component_boolean
FROM
    sections s
JOIN
    component_testimonial_card tc ON s.component_id = tc.id
WHERE
    s.name            = 'testimonials'
    AND s.component_type = 'component_testimonial_card';
`,
  },

  {
    view: "newsletter_view",
    template: `
CREATE OR REPLACE VIEW newsletter_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean,
       NULL,
       NULL
FROM   sections s
JOIN   component_article_header ah ON s.component_id = ah.id
WHERE  s.name = "newsletter"
  AND  s.component_type = "component_article_header"

UNION ALL

SELECT "component_input"      AS component_type,
       i.placeholder      AS component_name,
       NULL,
       NULL,
       NULL,
       NULL
FROM   sections s
JOIN   component_input i ON s.component_id = i.id
WHERE  s.name = "newsletter"
  AND  s.component_type = "component_input"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL,
       NULL,
       NULL
FROM   sections s
JOIN   component_button b ON s.component_id = b.id
WHERE  s.name = "newsletter"
  AND  s.component_type = "component_button"

UNION ALL

SELECT "component_info"      AS component_type,
       i.content         AS component_name,
       NULL,
       NULL,
       NULL,
       NULL
FROM   sections s
JOIN   component_info i ON s.component_id = i.id
WHERE  s.name = "newsletter"
  AND  s.component_type = "component_info"

UNION ALL

SELECT "component_status"      AS component_type,
       NULL,
       st.ok         AS component_content,
       NULL,
       st.failed         AS component_failed,
       st.invalid         AS component_invalid
FROM   sections s
JOIN   component_status st ON s.component_id = st.id
WHERE  s.name = "newsletter"
  AND  s.component_type = "component_status";
`,
  },

  {
    view: "footer_view",
    template: `
CREATE OR REPLACE VIEW footer_view AS

SELECT "component_info_card" AS component_type,
       ic.title        AS component_name,
       ic.content      AS component_content,
       ic.style      AS component_style
FROM   sections s
JOIN   component_info_card ic ON s.component_id = ic.id
WHERE  s.name = "footer"
  AND  s.component_type = "component_info_card"

UNION ALL

SELECT "component_info"      AS component_type,
       i.content         AS component_name,
       NULL,
       NULL
FROM   sections s
JOIN   component_info i ON s.component_id = i.id
WHERE  s.name = "footer"
  AND  s.component_type = "component_info";
`,
  },

  {
    view: "cookies_popup_view",
    template: `
CREATE OR REPLACE VIEW cookies_popup_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   popups p
JOIN   component_article_header ah ON p.component_id = ah.id
WHERE  p.name = "cookies"
  AND  p.component_type = "component_article_header"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL
FROM   popups p
JOIN   component_button b ON p.component_id = b.id
WHERE  p.name = "cookies"
  AND  p.component_type = "component_button";
`,
  },

  {
    view: "alertOdd_popup_view",
    template: `
CREATE OR REPLACE VIEW alertOdd_popup_view AS

SELECT "component_info"      AS component_type,
       i.content         AS component_name
FROM   popups p
JOIN   component_info i ON p.component_id = i.id
WHERE  p.name = "alertOdd"
  AND  p.component_type = "component_info";
`,
  },

  {
    view: "contact_modal_view",
    template: `
CREATE OR REPLACE VIEW contact_modal_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean,
       NULL,
       NULL
FROM   modals m
JOIN   component_article_header ah ON m.component_id = ah.id
WHERE  m.name = "contact"
  AND  m.component_type = "component_article_header"

UNION ALL

SELECT "component_input"      AS component_type,
       i.placeholder      AS component_name,
       NULL,
       NULL,
       NULL,
       NULL
FROM   modals m
JOIN   component_input i ON m.component_id = i.id
WHERE  m.name = "contact"
  AND  m.component_type = "component_input"

UNION ALL

SELECT "component_textarea"      AS component_type,
       t.placeholder      AS component_name,
       NULL,
       NULL,
       NULL,
       NULL
FROM   modals m
JOIN   component_textarea t ON m.component_id = t.id
WHERE  m.name = "contact"
  AND  m.component_type = "component_textarea"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL,
       NULL,
       NULL
FROM   modals m
JOIN   component_button b ON m.component_id = b.id
WHERE  m.name = "contact"
  AND  m.component_type = "component_button"

UNION ALL

SELECT "component_status"      AS component_type,
       NULL,
       st.ok         AS component_content,
       NULL,
       st.failed         AS component_failed,
       st.invalid         AS component_invalid
FROM   modals m
JOIN   component_status st ON m.component_id = st.id
WHERE  m.name = "contact"
  AND  m.component_type = "component_status";
`,
  },

  {
    view: "confidential_modal_view",
    template: `
CREATE OR REPLACE VIEW confidential_modal_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   modals m
JOIN   component_article_header ah ON m.component_id = ah.id
WHERE  m.name = "confidential"
  AND  m.component_type = "component_article_header"

UNION ALL

SELECT "component_info"      AS component_type,
       i.content         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_info i ON m.component_id = i.id
WHERE  m.name = "confidential"
  AND  m.component_type = "component_info"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_button b ON m.component_id = b.id
WHERE  m.name = "confidential"
  AND  m.component_type = "component_button";
`,
  },

  {
    view: "use_modal_view",
    template: `
CREATE OR REPLACE VIEW use_modal_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   modals m
JOIN   component_article_header ah ON m.component_id = ah.id
WHERE  m.name = "use"
  AND  m.component_type = "component_article_header"

UNION ALL

SELECT "component_info"      AS component_type,
       i.content         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_info i ON m.component_id = i.id
WHERE  m.name = "use"
  AND  m.component_type = "component_info"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_button b ON m.component_id = b.id
WHERE  m.name = "use"
  AND  m.component_type = "component_button";
`,
  },

  {
    view: "mentions_modal_view",
    template: `
CREATE OR REPLACE VIEW mentions_modal_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   modals m
JOIN   component_article_header ah ON m.component_id = ah.id
WHERE  m.name = "mentions"
  AND  m.component_type = "component_article_header"

UNION ALL

SELECT "component_info"      AS component_type,
       i.content         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_info i ON m.component_id = i.id
WHERE  m.name = "mentions"
  AND  m.component_type = "component_info"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_button b ON m.component_id = b.id
WHERE  m.name = "mentions"
  AND  m.component_type = "component_button";
`,
  },

  {
    view: "terms_modal_view",
    template: `
CREATE OR REPLACE VIEW terms_modal_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   modals m
JOIN   component_article_header ah ON m.component_id = ah.id
WHERE  m.name = "terms"
  AND  m.component_type = "component_article_header"

UNION ALL

SELECT "component_info"      AS component_type,
       i.content         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_info i ON m.component_id = i.id
WHERE  m.name = "terms"
  AND  m.component_type = "component_info"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_button b ON m.component_id = b.id
WHERE  m.name = "terms"
  AND  m.component_type = "component_button";
`,
  },

  {
    view: "cookies_modal_view",
    template: `
CREATE OR REPLACE VIEW cookies_modal_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   modals m
JOIN   component_article_header ah ON m.component_id = ah.id
WHERE  m.name = "cookies"
  AND  m.component_type = "component_article_header"

UNION ALL

SELECT "component_info"      AS component_type,
       i.content         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_info i ON m.component_id = i.id
WHERE  m.name = "cookies"
  AND  m.component_type = "component_info"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_button b ON m.component_id = b.id
WHERE  m.name = "cookies"
  AND  m.component_type = "component_button"

UNION ALL

SELECT "component_cookies_parameters"      AS component_type,
       cp.cookie_key         AS component_name,
       cp.label         AS component_content,
       cp.mutable         AS component_boolean
FROM   modals m
JOIN   component_cookies_parameters cp ON m.component_id = cp.id
WHERE  m.name = "cookies"
  AND  m.component_type = "component_cookies_parameters";
`,
  },

  {
    view: "purchase_modal_view",
    template: `
CREATE OR REPLACE VIEW purchase_modal_view AS

SELECT "component_article_header" AS component_type,
       ah.title        AS component_name,
       ah.subtitle     AS component_content,
       ah.mark         AS component_boolean
FROM   modals m
JOIN   component_article_header ah ON m.component_id = ah.id
WHERE  m.name = "purchase"
  AND  m.component_type = "component_article_header"

UNION ALL

SELECT "component_color_card"      AS component_type,
       cc.name         AS component_name,
       cc.label        AS component_content,
       NULL
FROM   modals m
JOIN   component_color_card cc ON m.component_id = cc.id
WHERE  m.name = "purchase"
  AND  m.component_type = "component_color_card"

UNION ALL

SELECT "component_info"      AS component_type,
       i.content         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_info i ON m.component_id = i.id
WHERE  m.name = "purchase"
  AND  m.component_type = "component_info"

UNION ALL

SELECT "component_psp"   AS component_type,
       p.name         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_psp p ON m.component_id = p.id
WHERE  m.name = "purchase"
  AND  m.component_type = "component_psp"

UNION ALL

SELECT "component_button"      AS component_type,
       b.title         AS component_name,
       NULL,
       NULL
FROM   modals m
JOIN   component_button b ON m.component_id = b.id
WHERE  m.name = "purchase"
  AND  m.component_type = "component_button";
`,
  },
];
