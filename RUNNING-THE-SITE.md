# RUNNING THE SITE — Claude as your back office

The division of labour: **sellers WhatsApp you, you forward to Claude, Claude does the website work, you press Upload.** Ten minutes per listing, start to finish.

---

## Adding a new listing (the core routine)

### Step 1 — Collect from the seller
The sell page tells them exactly what to send (the eight things). Before publishing, check you have:

- [ ] Address, asking price, beds/baths/type/tenure
- [ ] Description in their words
- [ ] EPC rating (it's a legal requirement before marketing — no EPC, no listing; point them to the assessor or the gov register to check for an existing one)
- [ ] Photo(s) — 1 free, up to 10 on Boost
- [ ] First name + mobile they're happy to publish
- [ ] Proof of ownership (council tax bill / mortgage statement). **Look at it, then delete it** — don't keep copies.

### Step 2 — Prep the photos (2 minutes on your Mac)
1. Open the photo in **Preview**.
2. **Tools → Adjust Size** → width **1600** pixels.
3. **File → Export** → JPEG, quality slider about three-quarters → aim for **under 1MB**.
4. Rename to the listing slug + number: `42-blanch-croft-1.jpg`, `42-blanch-croft-2.jpg`...
   (The slug is the address in lowercase with hyphens — Claude will confirm it in Step 3.)

### Step 3 — Paste PROMPT A into Claude

> **PROMPT A — NEW LISTING**
>
> New listing for WhyPayFees. Use templates/listing-template.html and the house style. Details:
> - Address/road: …
> - Asking price: …
> - Beds / baths / type / tenure: …
> - EPC: …  Council tax band: …
> - Tier: Free / Boost / Premium
> - Photos: [how many, and confirm filenames]
> - Seller first name + mobile: …
> - Seller's description: "…"
>
> Here is my current `js/listings.js`: [paste the whole file — view it on GitHub, click Raw, Cmd+A, Cmd+C]
>
> Give me back: (1) the new listing page for /listings/, (2) the full updated js/listings.js, (3) the updated sitemap.xml with the new page added, and (4) the photo filenames I should use.

### Step 4 — Upload (3 minutes)
1. GitHub → `images/listings` folder → upload the JPEGs.
2. GitHub → `listings` folder → upload the new html file.
3. GitHub → `js` folder → upload the new `listings.js` (replaces the old one).
4. GitHub → repo root → upload the new `sitemap.xml`.
5. Wait 60 seconds, check the live site, send the seller the link. Done.

---

## The other routine prompts

> **PROMPT B — SOLD / SSTC:** "Mark [listing] as SSTC/Sold on WhyPayFees. Here's my current js/listings.js: [paste]. Give me back the updated listings.js and the updated listing page with the status changed."

> **PROMPT C — EDIT:** "Change [price/description/photos] on [listing]. Here's my current js/listings.js: [paste]. Return the updated files."

> **PROMPT D — NEW SPONSOR:** "New advertiser for WhyPayFees: [business name], trade: [conveyancer/mortgage/EPC/removals/photographer/surveyor], link: …, phone: … . Update the sponsor tiles on index.html and advertise.html to show them as live, and return both files."

> **PROMPT E — MONTHLY HEALTH CHECK:** "Monthly check on WhyPayFees: review my listings.js [paste] for anything stale, suggest this month's local SEO improvement, and draft one Facebook post promoting the site to Melbourne groups."

**Removing the example listings:** once you have two or three real homes, run: "Remove both example listings from WhyPayFees — updated listings.js please, and tell me which files to delete on GitHub." (Deleting on GitHub: open the file → click the bin icon → Commit.)

---

## Money

Suggested launch prices (change them any time with Prompt C-style requests):

| Product | Price | Notes |
|---|---|---|
| Standard listing | Free | The growth engine — fills the site |
| Boost (10 photos) | £29 one-off | The volume earner |
| Premium (+ video, featured) | £49 one-off | Video = seller uploads to YouTube as **Unlisted**, sends you the link |
| Trade sponsor | £25/month | Six trades × £25 = £150/month at full house |
| Annual sponsor | £250/year | Two months free |

**Taking payment, simplest first:**
1. **Launch week:** bank transfer. Confirm the listing, send your details, publish when paid.
2. **Soon after:** Stripe Payment Links — stripe.com → create account → Payment Links → make one each for £29, £49, £25/month recurring, £250/year. Then tell Claude: "here are my Stripe links, wire them into the Boost/Premium/sponsor buttons" and upload the returned pages. No code, no card details ever touch your site.

Keep WhyPayFees income in its own ledger from day one — you'll thank yourself when deciding whether it sits inside The City Truck Co. Ltd or its own company. Worth a quick word with your accountant once it's earning.

---

## Staying on the right side of the rules

- **EPC first, always.** Marketing a home without one is the seller's legal breach, but the site shouldn't enable it. It's baked into the intake checklist.
- **Stay an advertising platform.** This is the big one. The moment you introduce buyers to sellers on a seller's behalf or get involved in negotiations, you start looking like an estate agent under the Estate Agents Act 1979 — which brings legal duties, redress-scheme membership and money-laundering supervision. The model that keeps you clear: **sellers' numbers on the adverts, buyers ring sellers, you never sit in the middle.** The site's footer and terms already say this; live by it.
- **Accuracy.** Listings must not mislead (price, tenure, material facts). You hold the right to decline or pull a listing — use it if something smells off.
- **Privacy.** Publish only what sellers agreed to publish. Delete ownership proofs after checking. If anyone asks to be removed, do it same-day.
- **The legal.html page** is a solid plain-English start — have Zoe or a colleague at Smith Partnership glance over it before you push paid volume.

---

## Launch checklist for Melbourne

1. Site live on whypayfees.co.uk, your real number in place, Search Console submitted.
2. Replace example listings with **one real one** — even a friend's house "testing the water" makes the site real.
3. Facebook: post in the Melbourne community groups — the calculator angle lands well ("an agent charges £5,400 to sell a £300k house in DE73 — here's the local alternative").
4. 200 leaflets through doors on streets where boards are already up. You're literally targeting people mid-decision.
5. Walk Market Place and sign the six trade sponsors — lead with the conveyancer and the EPC assessor, they convert easiest because every seller on the site needs them.

---

## Later, when it outgrows you (a good problem)

When you're publishing more listings than the 10-minute routine can handle, the upgrade path is: Cloudflare Pages **Functions** + **D1** database + **R2** photo storage + Stripe checkout = sellers upload themselves and pay at the till, you just approve. Same Cloudflare account, same repo, no migration. Don't build it until the volume demands it — the manual loop is your moderation, your fraud check and your customer service all in one.
