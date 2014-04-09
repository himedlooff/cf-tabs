/*! cf-tabs 2014-04-09 2:51:18 PM */
(function($) {
    $.fn.cfTabs = function() {
        this.find("> div").hide().addClass("cf-tabpanel");
        this.find("> div").first().show().addClass("active");
        this.find("> ul").addClass("cf-tablist");
        this.find("> ul > li a").first().addClass("active");
        this.find("> ul a").click(function(e) {
            e.preventDefault();
            var $thisTabset = $(this).closest(".tabs");
            var thisTabID = $(this).attr("href");
            $thisTabset.find(".active").removeClass("active");
            $thisTabset.find(".tab-content").hide();
            $(thisTabID).addClass("active").show();
            $(this).addClass("active");
        });
    };
    $(function() {
        $(".tabs").cfTabs();
    });
})(jQuery);