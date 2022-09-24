class MyNav extends HTMLElement {
    connectedCallback () {
        this.innerHTML =
    '<nav class="navbar navbar-custom bg-light"><div class="logo"><a class="navbar-brand" href="../src/index.html"><h4><img src="/src/images/logodorado.png" class="logo-custom" alt=""></h4></a></div><ul class="nav-links"><li><a href="../src/index.html">Inicio</a></li><li><a href="/pages/quienessomos.html">¿Quienes Somos?</a></li><li><a href="/pages/areas.html">Areas</a></li><li><a href="/pages/eventos.html">Eventos</a></li><li><a href="/pages/contactanos.html">Contactanos</a></li></ul><div class="burger"><div class="line1"></div><div class="line2"></div><div class="line3"></div></div></nav>'
    }
}

customElements.define('my-nav', MyNav)


class MyFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML =
    '<footer class="site-footer"><div class="container"><div class="row"><div class="col-sm-12 col-md-6"><h6>Ministerio Palabra Miel</h6><p class="text-justify">Iglesia de Jesucristo se dedica a la instruccion y cuidado de la desposada con el proposito de prepararla para la venida de su desposado. Mas halla de nuestro mundo fisico en los planos esprirituales creemos que existe una manera de ser, que es la manera como el desposado nos quiere encontrar cuando regrese.</p></div><div class="col-xs-6 col-md-3"><h6>Categorias</h6><ul class="footer-links"><li><a href="/pages/predicas.html">Predicas</a></li><li><a href="http://www.palabramielguatemala.com/">Guatemala</a></li><li><a href="/pages/tienda.html">Tienda</a></li><li><a href="/pages/diezmo.html">Diezmos</a></li><li><a href="/pages/alabanza.html">Alabanza</a></li><li><a href="/pages/galeria.html">Galeria</a></li></ul></div><div class="col-xs-6 col-md-3"><h6>Enlaces Rapidos</h6><ul class="footer-links"><li><a href="/pages/quienessomos.html">¿Quienes Somos?</a></li><li><a href="/pages/contactanos.html">Contactanos</a></li><li><a href="/pages/eventos.html">Eventos</a></li><li><a href="/pages/areas.html">Areas</a></li><li><a href="/pages/mapa.html">Mapa del Sitio</a></li></ul></div></div><hr></div><div class="container"><div class="row"><div class="col-md-8 col-sm-6 col-xs-12"><p class="copyright-text">Copyright &copy; 2022 All Rights Reserved by <a href="../src/index.html">Palabra Miel Mexicali</a>.</p></div><div class="col-md-4 col-sm-6 col-xs-12"><ul class="social-icons"><li><a class="whatsapp" href="https://www.whatsapp.com"><i class="fa fa-whatsapp"></i></a></li><li><a class="facebook" href="https://www.facebook.com/Iglesia-Palabra-Miel-Nuevo-Mexicali-107890711892608"><i class="fa fa-facebook"></i></a></li><li><a class="twitter" href="https://www.twitter.com"><i class="fa fa-twitter"></i></a></li><li><a class="linkedin" href="https://www.linkedin.com"><i class="fa fa-linkedin"></i></a></li></ul></div></div></div></footer>'
    }
}

customElements.define('my-footer', MyFooter)