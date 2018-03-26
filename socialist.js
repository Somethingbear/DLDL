var a_idx = 0;
jQuery(document).ready(function($) {
   $(".textarea-container").click(function(e) {
       var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善");
       var $i = $("<span/>").text(a[a_idx]);
       a_idx = (a_idx + 1) % a.length;
       var x = e.offsetX,
       y = e.offsetY;
console.log(x+"-"+y)
       $i.css({
           "z-index": 999999999999999999999999999999999999999999999999999999999999999999999,
           "top": y - 20,
           "left": x,
           "position": "absolute",
           "font-weight": "bold",
           "color": "#00a1d6"
       });
       $(".textarea-container").append($i);
       $i.animate({
           "top": y - 180,
           "opacity": 0
       },
       1500,
       function() {
           $i.remove();
       });
   });
});