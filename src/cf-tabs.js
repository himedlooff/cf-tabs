
(function( $ ) {
  $.fn.cfTabs = function() {
  
    // Hide all the inactive tab panels. They are not hidden by CSS for 508 compliance
    this.find("> div").hide().addClass('cf-tabpanel');
    this.find("> div").first().show().addClass('active');

    // Set the first tab to dark green
    this.find("> ul").addClass('cf-tablist');
    this.find("> ul > li a").first().addClass('active');
    
    //set the default aria attributes to the tab list
    this.find("> ul").attr("role", "tablist");
    this.find("> ul > li").attr("role", "presentation");
    this.find("> ul > li > a").attr("role", "tab").attr("aria-selected", "false").attr("aria-expanded", "false").attr("tabindex", "-1");
    this.find("> ul > li > a").first().attr("aria-selected", "true").attr("aria-expanded", "true").attr("tabindex", "0");

    // add the default aria attributes to the tab panel
    this.find("> div").attr("role", "tabpanel").attr("aria-hidden", "true").attr("tabindex", "0");
    this.find("> div").first().attr("aria-hidden", "false").attr("tabindex", "0");

    // create IDs for each anchor for the area-labelledby
    this.find("> ul > li > a").each(function() {
      var tabID = $( this ).attr('href').substring(1);

      //console.log(tabID);
      $(this).attr("id","tablist-" + tabID).attr("aria-controls", tabID);
    });

    this.find("> div").each(function() {
      //console.log( index + ": " + $( this ).attr('href').substring(1) );
      var tabID = "tablist-" + $( this ).attr('id');
      console.log(tabID);
      $(this).attr("aria-labelledby",tabID);
    });


    // Attach a click handler to all tab anchor elements
    this.find("> ul a").click(function(e) {
      
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
      // set the aria roles to the default settings for all
      $thisTabset.find("> ul > li > a").attr("aria-selected", "false").attr("aria-expanded", "false");
      // hide all the tab panels
      $thisTabset.find('.cf-tabpanel').hide().attr("aria-hidden", "true");
      
      
      // show the panel
      $(thisTabID).addClass("active").show().attr("aria-hidden", "false");
      //highlight the clicked tab
      $(this).addClass("active").attr("aria-selected", "true").attr("aria-expanded", "true");
    });
  };

  // auto-init
  $(function(){
    $('.tabs').cfTabs();
  });

})( jQuery );
