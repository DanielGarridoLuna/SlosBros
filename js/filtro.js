$(document).ready(
    function() {

        let personajes=["Luffy", "Nika", "Uta", "Kaido", "Gear", "Merry", "Law"];

        $( "#palabra" ).autocomplete({
            source: personajes,
            minlength: 2
          });

        $('.card').hide();

        $('#btnluffy').click(
            function() {
            $('.card').hide();
            $('.Luffy').show();
            }
        );

        $('#btnnika').click(
            function() {
                $('.card').hide();
            $('.Nika').show();
            }
        );

        $('#btnuta').click(
            function() {
                $('.card').hide();
            $('.Uta').show();
            }
        );

        $('#btnkaido').click(
            function() {
                $('.card').hide();
            $('.Kaido').show();
            }
        );

        $('#btnmerry').click(
            function() {
                $('.card').hide();
            $('.Merry').show();
            }
        );

        $('#btnlaw').click(
            function() {
                $('.card').hide();
            $('.Law').show();
            }
        );


        $('#btnbusqueda').click(
            function() {
                
                let personaje=document.getElementById('palabra').value;

                if(personaje=="Luffy"){
                    $('.card').hide();
                    $('.Luffy').show();
                }

                if(personaje=="Nika"){
                    $('.card').hide();
                    $('.Nika').show();
                }

                if(personaje=="Uta"){
                    $('.card').hide();
                    $('.Uta').show();
                }


                if(personaje=="Kaido"){
                    $('.card').hide();
                    $('.Kaido').show();
                }

                if(personaje=="Merry"){
                    $('.card').hide();
                    $('.Merry').show();
                }

                if(personaje=="Law"){
                    $('.card').hide();
                    $('.Law').show();
                }

            }
        );

    }
);