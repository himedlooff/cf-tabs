/*! cf-tabs 2014-03-20 3:20:27 PM */
(function($) {
    $.fn.cfTab = function() {
        var $tabset = this;
        $tabset.find(".tab-content > div").hide().filter(".active").show();
        $tabset.find(".tab-list a").click(function(e) {
            e.preventDefault();
            var $this = $(this);
            var $this_tabset = $this.closest(".tabs");
            var this_tabid = $this.attr("href").substring(1);
            console.log("this_tabid:");
            console.log(this_tabid);
            var $this_tabcontent = $this_tabset.find(".tab-content [id=" + this_tabid + "]");
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