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
    $(".resume").hide();
})

$(".contactLink").on("click", function(event){
    $(".portfolio").hide();
    $(".about-me").hide();
    $(".contact").show();
    $(".resume").hide();
})

$(".resumeLink").on("click", function(event){
    $(".portfolio").hide();
    $(".about-me").hide();
    $(".contact").hide();
    $(".resume").show();
})
let arr=[1,3,4,4,5,6]
function dupNum(x){
    for (let i = 0; i < arr.length; i++) {
            if(x===arr[i]){
            arr.remove(x)
        }
        
    }
   return arr;
}
console.log("***")
console.log(dupNum(arr))