jQuery(document).ready(listo);

alert("hola Soy Keny, bienvenido");


function listo()
{
    jQuery(".hamb").click(function(ABRIR){
        ABRIR.preventDefault();
        jQuery(".menu").toggleClass("open");

        jQuery(".hamb i").toggleClass("fa-times");

    });

    jQuery("header .menu a").click(function(){

        jQuery(".menu").removeClass("open");
        jQuery(".hamb i").removeClass("fa-times");

        var seccion = jQuery(this).attr("href");
        
        jQuery("html,body").animate({
            "scrollTop": jQuery(dev).offset().top

        })

    })


}