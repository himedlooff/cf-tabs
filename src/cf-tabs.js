
(function( $ ) {
  $.fn.cfTab = function() {
  
    var $tabset = this;
    
    // Hide all the inactive tabs. They are not hidden by CSS for 508 compliance
    $tabset.find(".tab-content > div").hide().filter(".active").show();
    
    // Attach a click handler to all tab anchor elements
    $tabset.find(".tab-list a").click(function(e) {
      e.preventDefault();
      
      // The clicked <a> tag is this
      var $this = $(this);
      var $this_tabset = $this.closest(".tabs");
      var this_tabid = $this.attr('href').substring(1);

      console.log("this_tabid:");
      console.log(this_tabid);

      var $this_tabcontent = $this_tabset.find('.tab-content [id=' + this_tabid + ']');

      console.log("this_tabcontent:");
      console.log($this_tabcontent);

      // make everything inactive
      $this_tabset.find('.tab-content .active').hide();
      $this_tabset.find('.active').removeClass('active');
      
      // make clicked active
      $this_tabcontent.addClass("active").show();
      $this.addClass("active");
    });
  };

  // auto-init
  $(function(){
    $('.tabs').cfTab();
  });

})( jQuery );
