
setTimeout(function(){ window.confirm("Hey le site xxxvidsxxx est trop bien. Viens dessus stp"); }, 5000)
        alert(temp)
        if (window.confirm("Une nouvelle fenêtre va s'ouvrir.")) {
            window.open("xxxvidsxxx.html");
        }

        var Titre = document.querySelectorAll('h1,h2,h3');
        var Titre_init= Titre;
        var Paragraphes= document.querySelectorAll('p');
        var Paragraphes_init=Paragraphes;
        var Fond=document.body.style.backgroundColor;
        var Fond_init=Fond;

        function ModePsychedelique(){
            Fond='magenta';
            for (var i = 0; i<Titre.length; i++){
                Titre[i].style.color='green';
                Titre[i].style.fontFamily='Comic Sans';
            }
            for (var i = 0; i<Paragraphes.length; i++){
                Paragraphes[i].style.color='blue';
                Paragraphes[i].style.fontFamily='papyrus';
            }
        }
