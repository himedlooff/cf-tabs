
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
      var this_tabname = $this.attr('href');

      console.log("this_tabname:");
      console.log(this_tabname);

      var $this_tabcontent = $this_tabset.find('.tab-content [id=' + this_tabname + ']');

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
