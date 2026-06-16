# START HERE — Putting WhyPayFees on the internet

**Time needed: about 15 minutes. Difficulty: if you can attach a photo to an email, you can do this.**

Everything happens in a web browser — nothing to install, so your older Mac is fine. Use **Google Chrome** (not Safari) for the upload step, because Chrome lets you drag whole folders.

You already did all of this once for thecitytruckco.com. This is the same recipe with a different folder.

---

## What you've got

Unzip `whypayfees-site.zip` (double-click it). Inside is one folder called **whypayfees** containing:

| Thing | What it is |
|---|---|
| `index.html`, `sell.html`, `guide.html`, `advertise.html`, `legal.html`, `404.html` | The pages of the site |
| `css/`, `js/`, `images/` | Styling, code and photos — don't worry about these |
| `js/listings.js` | **The important one** — the file Claude edits to add or sell a house |
| `templates/` | The blank listing page Claude fills in for each new home |
| `robots.txt`, `sitemap.xml` | For Google |
| `START-HERE.md`, `RUNNING-THE-SITE.md` | These instructions |

---

## Part 1 — Put the files on GitHub (7 minutes)

1. In Chrome, go to **github.com** and sign in (same account as City Truck Co).
2. Click the **+** in the top-right corner → **New repository**.
3. Repository name: type `whypayfees` (all lowercase, no spaces).
4. Choose **Public**, leave everything else alone, click **Create repository**.
5. On the next page, click the small link that says **uploading an existing file**.
6. Open Finder, go inside your unzipped **whypayfees** folder, press **Cmd+A** to select everything in it, and **drag the lot** into the dotted upload box in Chrome. Folders and all — Chrome handles it.
7. Wait for the file list to finish appearing (the folders upload lots of small files — give it a minute).
8. Scroll down and click the green **Commit changes** button.

**Checkpoint:** your repo page should now show `css`, `images`, `js`, `listings`, `templates` folders plus the html files. If a folder is missing, click **Add file → Upload files** and drag that folder in again.

---

## Part 2 — Connect Cloudflare Pages (5 minutes)

1. Go to **dash.cloudflare.com** and sign in (your City Truck Co account).
2. In the left menu click **Workers & Pages** → **Create** → choose the **Pages** tab → **Connect to Git**.
3. Authorise GitHub if it asks, then pick the **whypayfees** repository.
4. On the set-up screen, change **nothing**: no framework, no build command, build output directory blank (or `/`). This is a plain site — there's nothing to build.
5. Click **Save and Deploy**.
6. Wait about a minute. Cloudflare gives you a live address like **whypayfees.pages.dev** — click it.

**Checkpoint:** you should see the red FOR SALE board and two example houses. Congratulations — you're live on the internet.

---

## Part 3 — Get the proper domain (5 minutes, ~£8/year)

1. In Cloudflare, left menu → **Domain Registration** → **Register Domains**.
2. Search **whypayfees.co.uk** and buy it (Cloudflare sells at cost — no markup, no upsells).
3. Go back to **Workers & Pages** → click your **whypayfees** project → **Custom domains** tab → **Set up a custom domain** → type `whypayfees.co.uk` → Cloudflare does the rest automatically because the domain lives there too.
4. Repeat once more adding `www.whypayfees.co.uk`.

Within an hour or so, whypayfees.co.uk shows your site.

---

## Part 4 — Make it yours (5 minutes)

The site ships with placeholder contact details. Three things to swap:

- **`07000 000000`** → your real mobile (appears on every page footer and the buttons)
- **`447000000000`** → your mobile in international format, e.g. 4477########  (used in the WhatsApp links)
- **`hello@whypayfees.co.uk`** → leave it, and set it up free: Cloudflare → your domain → **Email Routing** → forward `hello@` to your normal inbox. Two clicks.

Easiest way to do the swap: come back to this chat, say **"replace the placeholder contact details with [your number]"**, and upload the new versions of the files Claude gives you (Part 5 shows how).

---

## Part 5 — How you update the site, forever

This is the whole maintenance routine:

1. Ask Claude for the change ("add this listing", "mark Penn Lane as sold", "change the Boost price to £39").
2. Claude gives you back one or more files.
3. On github.com, open your **whypayfees** repo → **Add file → Upload files** → drag the new file(s) in → **Commit changes**.
   - Uploading a file with the **same name** automatically replaces the old one. If it belongs in a folder (like `js/listings.js`), open that folder first, *then* upload.
   - Photos: open the `images/listings` folder → **Add file → Upload files** → drag the JPEGs in.
4. Cloudflare notices the change and republishes automatically. Refresh the live site after ~60 seconds.

That's it. No FTP, no servers, no hosting bills.

---

## Part 6 — Tell Google you exist (10 minutes, do this once)

1. Go to **search.google.com/search-console** and sign in with your Google account.
2. Click **Add property** → choose the **Domain** option → type `whypayfees.co.uk`.
3. Google shows a TXT record to prove you own it. In another tab: Cloudflare → your domain → **DNS** → **Add record** → Type **TXT**, Name **@**, paste the value Google gave you → Save. Back in Search Console, click **Verify**.
4. In Search Console's left menu, click **Sitemaps**, type `sitemap.xml`, press **Submit**.

While you're in there: add **thecitytruckco.com** as a second property and submit its sitemap too — it's the same 10 minutes again and it gets the Jimny site properly into Google, which is still on the to-do list.

---

## If something goes wrong

- **Site shows a list of files instead of the homepage** → `index.html` ended up inside a subfolder on GitHub. The html files must be at the top level of the repo, with `css`, `js`, `images` as folders beside them.
- **Pictures missing** → the `images` folder didn't upload. Add file → Upload files → drag the whole `images` folder in.
- **Changed something but the site looks the same** → wait 60 seconds, then hard-refresh: **Cmd+Shift+R**.
- **Anything else** → screenshot it, paste it into this chat, and Claude will tell you exactly which button to press.
