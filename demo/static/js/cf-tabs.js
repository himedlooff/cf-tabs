/*! cf-tabs 2014-03-21 5:13:13 PM */
(function($) {
    $.fn.cfTab = function() {
        var $tabset = this;
        $tabset.find(".tabs > div").hide();
        $tabset.find(".tabs > div").first().addClass("active");
        $tabset.find(".tabs > ul").addClass("tab-list");
        $tabset.find(".tabs > ul > li").first().addClass("active");
        $tabset.find(".tab-list a").click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $this_tab = $this.closest(".tabs");
            console.log("this_tab:");
            console.log(this_tab);
            var this_tabid = $this.attr("href").substring(1);
            console.log("this_tabid:");
            console.log(this_tabid);
            var $this_tabcontent = $this_tabset[this_tabid];
            console.log("this_tabcontent:");
            console.log($this_tabcontent);
            $this_tabset.find(".tab-content .active").hide();
            $this_tabset.find(".active").removeClass("active");
            $this_tabcontent.addClass("active").show();
            $this.addClass("active");
        });
    };
    $(function() {
        $(".tabs").cfTab();
    });
})(jQuery);