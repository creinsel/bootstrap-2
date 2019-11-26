function hideDivs(){
    $(".about-me").show();
    $(".portfolio").hide();
    $(".contact").hide();
    $(".resume").hide();
};

hideDivs();

$(".aboutLink").on("click", function(event){
    hideDivs();
})

$(".portfolioLink").on("click", function(event){
    $(".portfolio").show();
    $(".about-me").hide();
    $(".contact").hide();
})

$(".contactLink").on("click", function(event){
    $(".portfolio").hide();
    $(".about-me").hide();
    $(".contact").show();
})

$(".resumeLink").on("click", function(event){
    $(".portfolio").hide();
    $(".about-me").hide();
    $(".contact").hide();
})