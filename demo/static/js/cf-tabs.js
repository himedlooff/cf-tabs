/*! cf-tabs 2014-03-19 5:21:26 PM */
(function($) {
    $.fn.cTab = function() {
        var $tabset = this;
        $tabset.find(".tabcontent > div").hide().filter(".active").show();
        $tabset.find(".tabs a").click(function(e) {
            e.preventDefault();
            var $this = $(this), $this_tabset = $this.closest(".tabset"), this_tabname = $this.attr("data-tabname"), $this_tabcontent = $this_tabset.find(".tabcontent [data-tabname=" + this_tabname + "]");
            $this_tabset.find(".tabcontent .active").hide();
            $this_tabset.find(".active").removeClass("active");
            $this_tabcontent.addClass("active").show();
            $this.addClass("active");
        });
    };
    $(function() {
        $(".tabset").cTab();
    });
})(jQuery);