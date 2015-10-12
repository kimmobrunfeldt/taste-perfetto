/**
 * Main JS file for Casper behaviours
 */

/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(".post-content").fitVids();

        var $videos = $('video');
        setInterval(function() {
            var playingVideos = 0;

            var inViewport = $videos.inViewport();
            inViewport.each(function() {
                if (playingVideos > 3) {
                    this.pause();
                    return;
                }

                this.play();
                playingVideos++;
            });

            var notInViewport = $videos.not(inViewport);
            notInViewport.each(function() {
                this.pause();
            });
        }, 100);
    });

}(jQuery));
