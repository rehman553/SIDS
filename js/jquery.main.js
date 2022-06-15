//langSwitch init
jQuery(function () {
    langSwitch();
    initInViewport();
    initPathDetail();
});

function initPathDetail() {
    jQuery('.path-details').each(function () {
        var holder = jQuery(this),
            headingBox = holder.find('.heading-box'),
            heading = headingBox.find('.heading'),
            contentBox = holder.find('.box'),

            activeClass = 'active',
            stickyClass = 'sticky';

        jQuery(window).on('scroll', function () {
            stickyHeadingBox();
            checkCurrentHeading();
        });

        function stickyHeadingBox() {
            var win = jQuery(window),
                winScroll = win.scrollTop(),
                holderHeight = holder.height(),
                holderOffset = holder.offset().top,
                headingBoxHeight = headingBox.height(),

                calcPositionTop = holderOffset + (holderHeight - headingBoxHeight),
                calcPosition = winScroll - calcPositionTop;

            if (winScroll > holderOffset) {
                headingBox.addClass(stickyClass);
            } else {
                headingBox.removeClass(stickyClass);
            }
            if (winScroll > calcPositionTop) {
                headingBox.css('top', '-' + calcPosition + 'px');
            } else {
                headingBox.css('top', 0);
            }
        }

        function checkCurrentHeading() {
            var contentActiveBox = holder.find('.box.active').data('content');
            jQuery('[data-heading="' + contentActiveBox + '"]').addClass(activeClass).siblings().removeClass(activeClass);
        }
    });
}

// initInViewport()
function initInViewport() {
    jQuery('.viewport').each(function () {
        var self = jQuery(this),
            activeClass = 'active';

        jQuery(window).scroll(function (e) {
            checkViewport();
        });

        function checkViewport() {
            var win = jQuery(window),
                scrollTop = win.scrollTop(),
                selfHeight = self.outerHeight(),
                selfTop = self.offset().top,
                winHeight = win.outerHeight() * 0.8;

            if ((scrollTop + winHeight) > selfTop && scrollTop < (selfHeight + selfTop)) {
                self.addClass(activeClass).siblings().removeClass(activeClass);
            } else {
                self.removeClass(activeClass);
            }
        }
    });
};
