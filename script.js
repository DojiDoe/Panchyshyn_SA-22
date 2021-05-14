$(document).ready(function() {
        $('.header_burger').click(function(event){
            $('.header_burger').toggleClass('active');
       $('.menu').toggleClass('active');
        });
        $('body').toggleClass('lock');
});