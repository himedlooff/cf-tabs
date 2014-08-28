(function( $ ) {

  'use strict';

  $.fn.cfTabs = function() {
    var tabList = this.find('.tabs_list');
    var tabListItems = this.find('.tabs_list-item');
    var tabPanels = this.find('.tabs_panel');
    var tabs = tabList.find('.tabs_tab');

    // Hide all the inactive tab panels.
    // They are not hidden by CSS for 508 compliance.
    tabPanels.hide();
    tabPanels.first().show().addClass('is-active');

    // Set the first tab as the active tab.
    tabs.first().addClass('is-active');
    
    // Set the default aria attributes to the tab list.
    tabList
        .attr( 'role', 'tablist' );
    tabListItems
        .attr( 'role', 'presentation' );
    tabs
        .attr( 'role', 'tab' )
        .attr( 'aria-selected', 'false' )
        .attr( 'aria-expanded', 'false' )
        .attr( 'tabindex', '-1' );
    tabs.first()
        .attr( 'aria-selected', 'true' )
        .attr( 'aria-expanded', 'true' )
        .attr( 'tabindex', '0' );

    // Add the default aria attributes to the tab panel.
    tabPanels
        .attr( 'role', 'tabpanel' )
        .attr( 'aria-hidden',  'true')
        .attr( 'tabindex', '-1' );
    tabPanels.first()
        .attr( 'aria-hidden', 'false' )
        .attr( 'tabindex', '0' );

    // Create IDs for each anchor for the area-labelledby.
    tabs.each( function() {
      var tabID = $( this ).attr('href').substring( 1 );
      $( this )
        .attr( 'id','tablist-' + tabID )
        .attr( 'aria-controls', tabID );
    });

    tabPanels.each( function() {
      var tabID = 'tablist-' + $( this ).attr('id');
      $( this )
        .attr( 'aria-labelledby', tabID );
    });

    tabs.click( function(event) {
      // Prevent the anchor link from modifing the url.
      // We don't want the brower scrolling down to the anchor.
      event.preventDefault();
      // The entire tabset, the parent of the clicked tab.
      var $thisTabset = $( this ).closest('.tabs');
      var thisTabID = $( this ).attr('href');

      // Remove all the active classes on the tabs and panels.
      $thisTabset.find('.is-active')
        .removeClass('is-active');
      // Set the aria roles to the default settings for all.
      $thisTabset.find('.tabs_tab')
        .attr( 'aria-selected', 'false' )
        .attr( 'aria-expanded', 'false' )
        .attr( 'tabindex', '-1' );
      $thisTabset.find('.tabs_panel')
        .hide()
        .attr( 'aria-hidden', 'true' )
        .attr( 'tabindex', '-1' );
      $( thisTabID )
        .addClass('is-active')
        .show()
        .attr( 'aria-hidden', 'false' )
        .attr( 'tabindex', '0' );
      $(this)
        .addClass('is-active')
        .attr( 'aria-selected', 'true' )
        .attr( 'aria-expanded', 'true' )
        .attr( 'tabindex', '0' );
      $(this)
        .focus();
    });

    // Set keydown events on tabList item for navigating tabs.
    $( tabList ).delegate( '.tabs_tab', 'keydown',
      function ( e ) {
        switch ( e.which ) {
          case 37: case 38:
            if ( $(this).parent().prev().length !== 0 ) {
              $( this ).parent().prev().find('.tabs_tab').click();
            } else {
              $( tabsList ).find('.tabs_list-item:last .tabs_tab').click();
            }
            break;
          case 39: case 40:
            if ( $( this ).parent().next().length !==0 ) {
              $( this ).parent().next().find('.tabs_tab').click();
            } else {
              $( tabsList ).find('.tabs_list-item:first .tabs_tab').click();
            }
            break;
        }
      }
    );
  };

  // auto-init
  $(function() {
    $('.tabs').cfTabs();
  });

})( jQuery );
