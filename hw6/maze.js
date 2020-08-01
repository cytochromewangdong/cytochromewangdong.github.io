$(document).ready(function(){
    let started = false;
    function cstAlert(txt)
    {
        $("#status").text(txt);
    }
    function lostGame(){
        $(".boundary").addClass("youlose");
        cstAlert("You lose!");
    }
    $(".boundary").mouseover(function(){
        if(started)
        {
            started = false;
            lostGame();
        }

    });
    $("#end").mouseover(function(){
        if(started)
        {
            cstAlert("you win!");
            started = false;
        }
    });
    $("#start").click(function(){
        started = true;
        $(".boundary").removeClass("youlose");
    });
    $("#maze").mouseover(function(e){
        e.stopPropagation();
    });
    $(document).mouseover(function(){
        if(started)
        {
            lostGame();
        }

    });
})