# Enreach Global
Buyer-focused metal procurement website, built with Next.js 16 and React 19.

## Run
```sh
npm install
npm run dev
```
Open http://localhost:3000.

## Check
```sh
npm test
npm run build
```
The contact test uses a mock email sender. It never sends live email.

## Enquiry delivery
Create `.env.local` with your Resend configuration:
```dotenv
RESEND_API_KEY=your_resend_key
RESEND_FROM_EMAIL=Enreach Global <info@enreachglobal.com>
CONTACT_ADMIN_EMAIL=info@enreachglobal.com
```
The sending domain must be verified in Resend. Without a key, the form shows an email fallback and does not report a successful submission.

Material offers accept up to four JPG, PNG, WebP or PDF attachments, with an 8 MB combined limit. Attachments are sent to the buying team; they are not published on the website.

## Content and branding
- Company/contact settings and the shared logo path: `src/lib/site.js`.
- Existing aluminium and copper grades: `src/data/homeContent.js`.
- Procurement copy and material categories: `src/data/procurement.js`.
- The sourcing map is illustrative. Calgary is the only marked company base.
- The original supplied logo should be copied unchanged into `public` and referenced by `COMPANY_LOGO`. Header, footer, metadata and article publisher schemas share this value.

The pre-redesign versions of replaced files are stored in `.redesign-backup`, which is excluded from Git.
