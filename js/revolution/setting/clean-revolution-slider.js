	jQuery(document).ready(function() { 
		jQuery("#rev-slider").revolution({
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
					hide_onleave: false,
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
					hide_onleave: false,
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
	}); 