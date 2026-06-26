/* ============================================================
   LISTINGS DATA — this is the file Claude updates for you.
   To add, edit or mark a property as sold, paste this file into
   Claude with your changes and upload the new version it returns.
   ============================================================ */

window.LISTINGS = [
  {
    id: "example-penn-lane-terrace",
    example: true,                       // remove this line on real listings
    title: "2-bed Victorian terrace, Penn Lane",
    road: "Penn Lane, Melbourne DE73",
    price: 230000,
    beds: 2,
    baths: 1,
    propertyType: "Terraced house",
    tenure: "Freehold",
    epc: "D",
    tier: "Free",                        // Free | Boost | Premium
    status: "For sale",                  // For sale | SSTC | Sold
    photos: ["images/listings/penn-lane-1.svg"],
    video: null,                         // YouTube video ID for Premium, e.g. "dQw4w9WgXcQ"
    sellerName: "Sarah",
    phone: "07700 900111",
    blurb: "Characterful two-bed terrace a short walk from Melbourne Pool, with original fireplaces and a south-facing courtyard garden.",
    page: "penn-lane-terrace.html"
  },
  {
    id: "example-market-place-townhouse",
    example: true,
    title: "4-bed Georgian townhouse, Market Place",
    road: "Market Place, Melbourne DE73",
    price: 495000,
    beds: 4,
    baths: 2,
    propertyType: "Townhouse",
    tenure: "Freehold",
    epc: "C",
    tier: "Premium",
    status: "For sale",
    photos: [
      "images/listings/market-place-1.svg",
      "images/listings/market-place-2.svg",
      "images/listings/market-place-3.svg",
      "images/listings/market-place-4.svg"
    ],
    video: null,
    sellerName: "James",
    phone: "07700 900222",
    blurb: "Handsome Georgian townhouse in the heart of Melbourne, with sash windows, a walled garden and views towards the church.",
    page: "market-place-townhouse.html"
  }
];
