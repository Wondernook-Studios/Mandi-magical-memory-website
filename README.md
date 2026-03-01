# Alaska 2027 Cruise Landing Page

Static site rebuild of the Canva page for deployment through GitHub + Cloudflare Pages.

## Project structure

- `index.html` - page markup and section content
- `styles.css` - visual design and responsive layout
- `script.js` - mobile nav + footer year
- `assets/images` - migrated Canva images/icons
- `assets/videos/hero-alaska.mp4` - migrated hero background video

## Deploy with GitHub + Cloudflare Pages

1. Push this folder to a GitHub repository.
2. In Cloudflare Dashboard, go to **Workers & Pages** -> **Create** -> **Pages** -> **Connect to Git**.
3. Select the GitHub repository and branch.
4. Build settings:
   - Framework preset: `None`
   - Build command: *(leave blank)*
   - Build output directory: `/`
5. Deploy.
6. In Cloudflare Pages project settings, add custom domain `lftravels.com` (or a subpath/subdomain target as needed).
7. Update DNS in Cloudflare if prompted.

## Notes

- All core copy, itinerary details, links, and media from the Canva page were migrated.
- The testimonials section is preserved via Canva embed to retain original testimonial content.
