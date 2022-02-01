$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    });
});
function about() {
    var elmnt = document.getElementById("About");
    elmnt.scrollIntoView({ block: 'start',  behavior: 'smooth' });
}

