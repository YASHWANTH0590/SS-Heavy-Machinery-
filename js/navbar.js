/* ============================================
   SHARED NAVBAR — used on every page
   Edit this ONE file to change the navbar markup/links/logo everywhere.
   Requires: <div id="site-navbar"></div> placed at top of <body>,
   and css/navbar.css linked in <head>.
   ============================================ */

(function () {
  const navbarHTML = `
    <header class="navbar">
        <a href="index.html" class="logo">
            <img src="images/logo.png" alt="SS Traders - Saleem & Sons">
        </a>

        <nav>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About Us</a></li>
                <li><a href="products.html">Products </i></a></li>
                <li><a href="spareparts.html">Spare Parts</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="contact.html">Contact Us</a></li>
            </ul>
        </nav>

        <div class="nav-buttons">
            <a href="contact.html" class="btn"><i class="fas fa-phone"></i> Enquiry Now</a>
        </div>

        <div class="menu-toggle">
            <i class="fas fa-bars"></i>
        </div>
    </header>
  `;

  document.addEventListener("DOMContentLoaded", function () {
    const mount = document.getElementById("site-navbar");
    if (!mount) return;
    mount.innerHTML = navbarHTML;

    // Highlight the active page link
    const currentPage = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    mount.querySelectorAll(".nav-links a").forEach(function (link) {
      const linkPage = link.getAttribute("href").toLowerCase();
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });

    // Hamburger menu toggle
    const menu = mount.querySelector(".menu-toggle");
    const nav = mount.querySelector(".nav-links");
    menu.addEventListener("click", function () {
      nav.classList.toggle("active");
    });

    // Close mobile menu when a link is clicked
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("active");
      });
    });
  });
})();
