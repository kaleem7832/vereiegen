var revapi;
        
		jQuery(document).ready(function() {
            $("#preloader").fadeOut("300");
            $("#rev-slider").revolution({
                sliderType:"standard",
                sliderLayout:"auto",
                delay:5000,
                responsiveLevels: [1240, 1024, 778, 480],
                gridwidth:[1240, 1024, 778, 480],
                gridheight:[600, 768, 960, 720],
             
                navigation: {
                    keyboardNavigation: "on",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation: "off",
                    onHoverStop: "off",
                    touch: {
                        touchenabled: "on",
                        swipe_threshold: 75,
                        swipe_min_touches: 1,
                        swipe_direction: "horizontal",
                        drag_block_vertical: false
                    },
                    arrows: {
                        style: "hephaistos",
                        enable: true,
                        hide_onmobile: true,
                        hide_onleave: true,
                        tmp: '',
                        left: {
                            h_align: "left",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 10
                        },
                        right: {
                            h_align: "right",
                            v_align: "center",
                            h_offset: 0,
                            v_offset: 10
                        }
                    },
                    bullets: {
                        enable: true,
                        hide_onmobile: true,
                        style: "hephaistos",
                        hide_onleave: true,
                        direction: "horizontal",
                        h_align: "center",
                        v_align: "bottom",
                        h_offset: 0,
                        v_offset: 30,
                        space: 5,
                        tmp: ''
                    }
                }, 
                disableProgressBar:"on",
             
            });

                $('.testimonials').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay:true,
                    dots:true,
                    arrows:true
                    }
                    );
                    
                    // $(".work-item-upper").connections();
                    // $(".work-item-lower").connections();
                    // $('#end').connections({
                    //     to: '#start',
                    //     'class': 'related'
                    //   });    

                    //   $("#work").HTMLSVGconnect({
                    //     strokeWidth: 2,

                    //     paths: [
                    //       { start: "#start", end: "#end", text: "hello" },
                           
                    //     ]
                    //   });
                    $('.counter').counterUp({
                        delay: 20,
                        time: 2000
                        });

                        
        });	//ready
        
         