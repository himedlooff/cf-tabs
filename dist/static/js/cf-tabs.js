/*! cf-tabs 2014-04-10 12:16:34 PM */
(function($) {
    $.fn.cfTabs = function() {
        var tabList = this.find("> ul");
        console.log(tabList);
        this.find("> div").hide().addClass("cf-tabpanel");
        this.find("> div").first().show().addClass("active");
        this.find("> ul").addClass("cf-tablist");
        this.find("> ul > li a").first().addClass("active");
        this.find("> ul").attr("role", "tablist");
        this.find("> ul > li").attr("role", "presentation");
        this.find("> ul > li > a").attr("role", "tab").attr("aria-selected", "false").attr("aria-expanded", "false").attr("tabindex", "-1");
        this.find("> ul > li > a").first().attr("aria-selected", "true").attr("aria-expanded", "true").attr("tabindex", "0");
        this.find("> div").attr("role", "tabpanel").attr("aria-hidden", "true").attr("tabindex", "-1");
        this.find("> div").first().attr("aria-hidden", "false").attr("tabindex", "0");
        this.find("> ul > li > a").each(function() {
            var tabID = $(this).attr("href").substring(1);
            $(this).attr("id", "tablist-" + tabID).attr("aria-controls", tabID);
        });
        this.find("> div").each(function() {
            var tabID = "tablist-" + $(this).attr("id");
            console.log(tabID);
            $(this).attr("aria-labelledby", tabID);
        });
        this.find("> ul a").click(function(e) {
            var $thisTabset = $(this).closest(".tabs");
            var thisTabID = $(this).attr("href");
            $thisTabset.find(".active").removeClass("active");
            $thisTabset.find("> ul > li > a").attr("aria-selected", "false").attr("aria-expanded", "false").attr("tabindex", "-1");
            $thisTabset.find(".cf-tabpanel").hide().attr("aria-hidden", "true").attr("tabindex", "-1");
            $(thisTabID).addClass("active").show().attr("aria-hidden", "false").attr("tabindex", "0");
            $(this).addClass("active").attr("aria-selected", "true").attr("aria-expanded", "true").attr("tabindex", "0");
            $(this).focus();
        });
        $(tabList).delegate("a", "keydown", function(e) {
            switch (e.which) {
              case 37:
              case 38:
                if ($(this).parent().prev().length !== 0) {
                    $(this).parent().prev().find(">a").click();
                } else {
                    $(tabsList).find("li:last>a").click();
                }
                break;

              case 39:
              case 40:
                if ($(this).parent().next().length !== 0) {
                    $(this).parent().next().find(">a").click();
                } else {
                    $(tabsList).find("li:first>a").click();
                }
                break;
            }
        });
    };
    $(function() {
        $(".tabs").cfTabs();
    });
})(jQuery);