/* Injects shared nav and footer into every page */
(function () {
  const NAV = `
<nav class="site-nav" role="navigation" aria-label="Main">
  <a href="../index.html" class="nav-logo">Irshan<span>.</span></a>
  <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">
    <span></span><span></span><span></span>
  </button>
  <div class="nav-menu" id="nav-menu">
    <a href="../index.html">Home</a>
    <a href="../pages/products.html">Products</a>
    <a href="../pages/services.html">Services</a>
    <a href="../pages/innovation.html">Innovation</a>
    <a href="../pages/casestudy.html">Case Study</a>
    <a href="../pages/about.html">About</a>
    <a href="../pages/contact.html" class="nav-cta">Contact</a>
  </div>
</nav>`;

  const FOOTER = `
<footer class="site-footer">
  <div>
    <div class="footer-name">Irshan<br><em>Khan</em></div>
    <p class="footer-bio">Results-driven product leader across private wireless, edge computing, and intelligent location technologies. 34+ patents filed.</p>
  </div>
  <div>
    <div class="footer-col-label">Navigate</div>
    <ul class="footer-links">
      <li><a href="../pages/products.html">Products</a></li>
      <li><a href="../pages/services.html">Services</a></li>
      <li><a href="../pages/innovation.html">Innovation</a></li>
      <li><a href="../pages/casestudy.html">Case Study</a></li>
      <li><a href="../pages/about.html">About</a></li>
    </ul>
    <div class="footer-col-label">Connect</div>
    <ul class="footer-links">
      <li><a href="https://irshankhan.wordpress.com" target="_blank" rel="noopener">Portfolio Blog</a></li>
      <li><a href="http://www.linkedin.com/in/irshankhan" target="_blank" rel="noopener">LinkedIn</a></li>
    </ul>
    <div class="tags footer-tags">
      <span class="tag tag-dark">Private Wireless</span>
      <span class="tag tag-dark">Edge Computing</span>
      <span class="tag tag-dark">Platform Strategy</span>
      <span class="tag tag-dark">34+ Patents</span>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-copy">&copy; <span id="footer-year"></span> Irshan Khan &mdash; Product, Program &amp; Project Manager</span>
    <span class="footer-copy">irshankhan.github.io</span>
  </div>
</footer>`;

  // Insert nav before first element in body
  document.body.insertAdjacentHTML('afterbegin', NAV);
  document.body.insertAdjacentHTML('beforeend', FOOTER);
})();
