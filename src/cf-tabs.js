
(function( $ ) {
  $.fn.cfTab = function() {
  
    var $tabset = this;
    
    // Hide all the inactive tabs. They are not hidden by CSS for 508 compliance
    // add class 

    $tabset.find(".tabs > div").hide();
    $tabset.find(".tabs > div").first().addClass('active');

    $tabset.find(".tabs > ul").addClass('tab-list');
    $tabset.find(".tabs > ul > li").first().addClass('active');


    
    // Attach a click handler to all tab anchor elements
    $tabset.find(".tab-list a").click(function(e) {
      e.preventDefault();
      
      // The clicked <a> tag is this
      var $this = $(this);
      // The entire tabset
      var $this_tab = $this.closest(".tabs");

      console.log("this_tab:");
      console.log(this_tab);

      // remove the first char of the href attribute (the # symbol)
      var this_tabid = $this.attr('href').substring(1);

      console.log("this_tabid:");
      console.log(this_tabid);

      var $this_tabcontent = $this_tabset[this_tabid];

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
