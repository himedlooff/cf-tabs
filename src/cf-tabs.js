(function( $ ) {
  'use strict';
  $.fn.cfTabs = function() {

    var tabList = this.find('.tabs_list');
    var tabPanel = this.find('.tabs_panel');

    //console.log(tabList);

    // Hide all the inactive tab panels. They are not hidden by CSS for 508 compliance
    tabPanel.hide().addClass('tabs_panel');
    tabPanel.first().show().addClass('active');

    // Set the first tab to dark green
    tabList.addClass('tabs_list');
    tabList.find('.tabs_tab').first().addClass('is-active');
    
    //set the default aria attributes to the tab list
    tabList.attr('role', 'tablist');
    tabList.find('.tabs_list-item').attr('role', 'presentation');
    tabList.find('.tabs_tab').attr('role', 'tab').attr('aria-selected', 'false').attr('aria-expanded', 'false').attr('tabindex', '-1');
    tabList.find('.tabs_tab').first().attr('aria-selected', 'true').attr('aria-expanded', 'true').attr('tabindex', '0');

    // add the default aria attributes to the tab panel
    tabPanel.attr('role', 'tabpanel').attr('aria-hidden', 'true').attr('tabindex', '-1');
    tabPanel.first().attr('aria-hidden', 'false').attr('tabindex', '0');

    // create IDs for each anchor for the area-labelledby
    tabList.find('.tabs_tab').each(function() {
      var tabID = $( this ).attr('href').substring(1);

      //console.log(tabID);
      $(this).attr('id','tablist-' + tabID).attr('aria-controls', tabID);
    });

    tabPanel.each(function() {
      //console.log( index + ': ' + $( this ).attr('href').substring(1) );
      var tabID = 'tablist-' + $( this ).attr('id');
      //console.log(tabID);
      $(this).attr('aria-labelledby',tabID);
    });


    // Attach a click handler to all tab anchor elements
    this.find('.tabs_tab').click(function(event) {
      // prevent the anchor link from modifing the url. We don't want the brower scrolling down to the anchor.
      event.preventDefault();
      // The entire tabset, the parent of the clicked tab
      var $thisTabset = $(this).closest('.tabs');

      //console.log('$thisTabset:');
      //console.log($thisTabset);

      var thisTabID = $(this).attr('href');

      //console.log('thisTabID:');
      //console.log(thisTabID);

      //var $thisTabContent = $thisTabset.find(thisTabID);

      //console.log('$thisTabContent:');
      //console.log($thisTabContent);

      // remove all the active classes on the tabs and panels
      $thisTabset.find('.is-active').removeClass('is-active');
      // set the aria roles to the default settings for all
      $thisTabset.find('.tabs_tab').attr('aria-selected', 'false').attr('aria-expanded', 'false').attr('tabindex', '-1');
      // hide all the tab panels
      $thisTabset.find('.tabs_panel').hide().attr('aria-hidden', 'true').attr('tabindex', '-1');
      
      
      // show the panel
      $(thisTabID).addClass('active').show().attr('aria-hidden', 'false').attr('tabindex', '0');
      //highlight the clicked tab
      $(this).addClass('is-active').attr('aria-selected', 'true').attr('aria-expanded', 'true').attr('tabindex', '0');
      $(this).focus();
    });

    //set keydown events on tabList item for navigating tabs
    $(tabList).delegate('.tabs_tab', 'keydown',
      function (e) {
        switch (e.which) {
          case 37: case 38:
            if ($(this).parent().prev().length!==0) {
              $(this).parent().prev().find('.tabs_tab').click();
            } else {
              $(tabsList).find('.tabs_list-item:last .tabs_tab').click();
            }
            break;
          case 39: case 40:
            if ($(this).parent().next().length!==0) {
              $(this).parent().next().find('.tabs_tab').click();
            } else {
              $(tabsList).find('.tabs_list-item:first .tabs_tab').click();
            }
            break;
        }
      }
    );


  };

  // auto-init
  $(function(){
    $('.tabs').cfTabs();
  });

})( jQuery );
