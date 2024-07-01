const typed = new Typed('.typed', {
    strings: [
        '<h4 class="h4Typed">Desarrolladores</h4><br><ul><li>Yeison López</li><br><br><li>Yulian Moreno</li><br><br><li>Fabián Carvajal</li></ul>',
        '<h4 class="h4Typed">Linux es </h4><br><ul><li>Seguro</li><li>De código abierto</li><li>Gratis</li><li>Estable</li><li>Personalizable</li><li>Multitarea</li><li>Multiusuario</li><li>Compatible</li><li>Activo en comunidad</li></ul>',
        '<h4 class="h4Typed">Gitlab </h4><br><br><ul><li>Sistema Operativo: Ubuntu, Debian, CentOs, RHEL</li><li>CPU: 4 núcleos</li><li>RAM: 8GB mínimo (16 GB recomendado)</li><li>50 GB</li></ul>',
        '<h4 class="h4Typed">Postgresql </h4><br><ul><li>Sistema operativo: Ubuntu (en este caso)</li><li>CPU: 2 núcleos (recomendado)</li><li>RAM: 2 GB</li><li>Espacio en disco: 12 GB</li></ul>',
        '<h4 class="h4Typed">Dependencias </h4><br><ul><li>Postfix</li><li>Perl</li><li>tzdata</li><li>ca-certificates</li><li>Openssh-server</li><li>Curl</li></ul>'
    ],
    typeSpeed: 50, //velocidad de escritura 
    startDelay: 0, //tiempo en iniciar el efecto una vez inicie la pagina
    backSpeed: 20, //velocidad de borrado de escritura
    shuffle: false,
    backDelay: 200, //tiempo en borrar lo que se escribió
    loop: true, //repetir el ciclo
    loopCount: false, //agregarle un limite de repeticiones al ciclo
    showCursor: false, //para que aparezca el cursor
    cursorChar: '|', //seleccionar que caracter quiere que aparezca en el efecto de cursor
    contentType: 'html', //que tipo de texto está leyendo JS
});