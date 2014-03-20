/*! cf-tabs 2014-03-20 3:08:42 PM */
(function($) {
    $.fn.cfTab = function() {
        var $tabset = this;
        $tabset.find(".tab-content > div").hide().filter(".active").show();
        $tabset.find(".tab-list a").click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $this_tabset = $this.closest(".tabs");
            var this_tabname = $this.attr("href");
            console.log("this_tabname:");
            console.log(this_tabname);
            var $this_tabcontent = $this_tabset.find(".tab-content [id=" + this_tabname + "]");
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