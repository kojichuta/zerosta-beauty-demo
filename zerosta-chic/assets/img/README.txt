Zerosta Beauty Demo — Image Starter Pack
========================================

Put these files into: /assets/img

Included:
- hero-800/1200/1600/2000.(webp|jpg)  → use with <picture> + srcset
- salon-01/02/03.(webp|jpg)           → gallery or service cards
- stylist-aya.(webp|jpg)              → stylist profile portrait
- logo.png (transparent)              → header or footer brand mark
- ogp.jpg                             → SNS share image (1200x630)

HTML snippet for the hero section (replace paths if needed):

<picture>
  <source type="image/webp"
    srcset="assets/img/hero-800.webp 800w,
            assets/img/hero-1200.webp 1200w,
            assets/img/hero-1600.webp 1600w,
            assets/img/hero-2000.webp 2000w"
    sizes="100vw">
  <img src="assets/img/hero-1600.jpg" alt="美容室のイメージ"
       class="hero-img" width="1600" height="900"
       loading="eager" decoding="async">
</picture>
