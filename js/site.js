/* WhyPayFees — site.js
   Renders listing cards from js/listings.js, runs filters,
   the fee-savings calculator and the photo gallery. */

(function () {
  var gbp = function (n) {
    return "£" + Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  /* ---------- Listing cards ---------- */
  var grid = document.getElementById("listingsGrid");

  function cardHTML(l) {
    var media = "";
    media += '<img src="' + l.photos[0] + '" alt="' + l.title + '" loading="lazy">';
    if (l.example) media += '<span class="badge example">Example listing</span>';
    else if (l.tier === "Premium") media += '<span class="badge">Premium</span>';
    media += '<span class="badge photos">' + l.photos.length + (l.photos.length === 1 ? " photo" : " photos") + "</span>";
    if (l.status !== "For sale") media += '<span class="status-strip">' + l.status.toUpperCase() + "</span>";

    return (
      '<a class="card" href="' + l.page + '">' +
      '<div class="card-media">' + media + "</div>" +
      '<div class="card-body">' +
      '<span class="price-tag">' + gbp(l.price) + "</span>" +
      "<h3>" + l.title + "</h3>" +
      '<p class="card-meta">' + l.beds + " bed · " + l.propertyType + " · " + l.road + "</p>" +
      '<p class="card-cta">Message about this home →</p>' +
      "</div></a>"
    );
  }

  function render() {
    if (!grid) return;
    var maxPrice = document.getElementById("fPrice");
    var minBeds = document.getElementById("fBeds");
    var status = document.getElementById("fStatus");
    var count = document.getElementById("listingCount");

    var list = (window.LISTINGS || []).filter(function (l) {
      if (maxPrice && maxPrice.value !== "any" && l.price > +maxPrice.value) return false;
      if (minBeds && minBeds.value !== "any" && l.beds < +minBeds.value) return false;
      if (status && status.value !== "any" && l.status !== status.value) return false;
      return true;
    });

    grid.innerHTML = list.length
      ? list.map(cardHTML).join("")
      : '<p style="grid-column:1/-1;color:var(--slate)">No homes match those filters yet — try widening them, or <a href="sell.html">be the first to list</a>.</p>';

    if (count) {
      var live = (window.LISTINGS || []).length;
      count.textContent = list.length + " of " + live + " home" + (live === 1 ? "" : "s") + " shown";
    }
  }

  ["fPrice", "fBeds", "fStatus"].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) el.addEventListener("change", render);
  });
  render();

  /* ---------- Fee-savings calculator ---------- */
  var input = document.getElementById("calcPrice");
  function calc() {
    if (!input) return;
    var price = parseFloat(String(input.value).replace(/[^0-9.]/g, "")) || 0;
    var low = price * 0.012 * 1.2;   // 1.2% + VAT
    var high = price * 0.018 * 1.2;  // 1.8% + VAT
    var ours = 0;
    set("calcLow", gbp(low));
    set("calcHigh", gbp(high));
    set("calcOurs", gbp(ours));
    set("calcSave", gbp(Math.max(low - ours, 0)) + " – " + gbp(Math.max(high - ours, 0)));
  }
  function set(id, v) { var el = document.getElementById(id); if (el) el.textContent = v; }
  if (input) { input.addEventListener("input", calc); calc(); }

  /* ---------- Detail-page gallery ---------- */
  var main = document.getElementById("galleryMain");
  document.querySelectorAll(".thumbs button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      if (!main) return;
      main.src = btn.getAttribute("data-src");
      document.querySelectorAll(".thumbs button").forEach(function (b) { b.classList.remove("on"); });
      btn.classList.add("on");
    });
  });

  /* ---------- Footer year ---------- */
  var yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();
})();
