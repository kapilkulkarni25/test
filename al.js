$(document).ready(
    function()
    {
        $("input").focus(
            function()
            {
                $(this).css("background-color","Blue")
            }
        )
        $("input").blur(
            function()
            {
                $(this).css("background-color","white")
            }
        )
        
       // $("p").text("AA");
       // $("p").css({"color":"Red","background-color":"Blue"});
      //  attr("","color","Green");
    //   $("#a").val();
    //   $("#a").focus(
    //       function()
    //       {
    //           $("#a").css("background-color","Blue")
    //       }
    //   )
    //   $("#a").blur(
    //       function()
    //       {
    //         $("#a").css("background-color","white")
    //       }
    //   )
    //     alert("Hey");
    }
)