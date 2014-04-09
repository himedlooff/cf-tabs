
(function( $ ) {
  $.fn.cfTabs = function() {
  
  /*
    var $thisTabset = $(this);
    var thisTabset = this;

    console.log("$thisTabset:");
    console.log($thisTabset);
    console.log("thisTabset:");
    console.log(thisTabset);
  */
    // Hide all the inactive tabs. They are not hidden by CSS for 508 compliance

    this.find("> div").hide().addClass('cf-tabpanel');
    this.find("> div").first().show().addClass('active');

    // Add classes for styling
    this.find("> ul").addClass('cf-tablist');
    this.find("> ul > li a").first().addClass('active');
    
    //set the default aria attributes
    
    

    // Attach a click handler to all tab anchor elements
    this.find("> ul a").click(function(e) {
      e.preventDefault();
      
      // The entire tabset, the parent of the clicked tab
      var $thisTabset = $(this).closest(".tabs");

      //console.log("$thisTabset:");
      //console.log($thisTabset);

      var thisTabID = $(this).attr('href');

      //console.log("thisTabID:");
      //console.log(thisTabID);

      //var $thisTabContent = $thisTabset.find(thisTabID);

      //console.log("$thisTabContent:");
      //console.log($thisTabContent);

      // remove all the active classes on the tabs and panels
      $thisTabset.find('.active').removeClass('active');
      // hide all the tab panels
      $thisTabset.find('.tab-content').hide();
      
      
      // show the panel
      $(thisTabID).addClass("active").show();
      //highlight the clicked tab
      $(this).addClass("active");
    });
  };

  // auto-init
  $(function(){
    $('.tabs').cfTabs();
  });

})( jQuery );
