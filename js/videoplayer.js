$(document).ready(function(){
    $('.video-button').on("mouseenter", function() {
      var element = $(this).closest(".m-video__thumbnail").next();
      var vidId = $(element).data("vid-src");
      var youtube = '<iframe width="560" height="315" src="//www.youtube.com/embed/'+ vidId +'?autoplay=1&showinfo=0&modestbranding=1&rel=0" frameborder="0" allowfullscreen></iframe>';
      $(this).closest("div.m-video__thumbnail").fadeTo(300, 0, function() {
          $(element).prepend(youtube);
          $(element).fadeIn(300);
          $(this).hide();
      });
      return false;
    });
  
    $('.m-video__vid button').on("click", function() {
      var iframe = $(this).prev();
      var vid = $(this).parent();
      var thumbnail = $(this).parent().prev();
      iframe.remove('iframe');
      thumbnail.fadeTo(600, 1.0);
      vid.hide();
    });
  });