// on nav link click scroll to div
document.ready = function() {
    document.getElementsByTagName("a").on('click', function(){
        if (this.hash !== "") {
            event.preventDefault();
            let hash = this.hash;
            document.getElementsByTagName("html, body").scrollIntoView({ behavior: "smooth", block: "end"})
        }
    })
}
// makes nav bar sticky when scrolling down, refresh top on resize
// let navbar = document.getElementById("navbar");
// let sticky = navbar.offsetTop;
// window.onresize = function(){ location.reload(); }
// window.onscroll = function() {
//   if (window.pageYOffset >= sticky) { 
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }

$(".imageClickable").click(function(){
  let image = $(this).attr("src")
  $("modal img").attr("src", image);
  $("modal").fadeIn(200).css("display", "grid")
})
//close animation
$("#close h2").click(function(){
  $("modal").fadeOut(200)
  $("#project").fadeOut(500);
  $("#work").animate({marginTop: "0px"}, 1000);
});