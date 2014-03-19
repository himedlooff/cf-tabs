
(function( $ ) {
  $.fn.cTab = function() {
  
    var $tabset = this;
    
    // Hide all the inactive tabs. They are not hidden by CSS for 508 compliance
    $tabset.find(".tabcontent > div").hide().filter(".active").show();
    
    // Attach a click handler to all tab anchor elements
    $tabset.find(".tabs a").click(function(e) {
      e.preventDefault();
      
      // The clicked <a> tag is this
      var $this = $(this),
      $this_tabset = $this.closest(".tabset"),
      this_tabname = $this.attr('data-tabname'),
      $this_tabcontent = $this_tabset.find('.tabcontent [data-tabname=' + this_tabname + ']');

      // make everything inactive
      $this_tabset.find('.tabcontent .active').hide();
      $this_tabset.find('.active').removeClass('active');
      
      // make clicked active
      $this_tabcontent.addClass("active").show();
      $this.addClass("active");
    });
  };

  // auto-init
  $(function(){
    $('.tabset').cTab();
  });

})( jQuery );
