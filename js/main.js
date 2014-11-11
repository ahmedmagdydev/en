jQuery(document).ready(function($) {
	var article 	= $(".center-article"),
		leftBar		= $(".left-side-bar"),
		store 		= $("article.store"),
		profile		= $("article.profile"),
		options 	=  {cursorcolor : "#b6b6b6",horizrailenabled: false,cursorborder:0},
		notif		= $(".notifications");

		 // jqueryUi
	$("#accordion").accordion();
	$( ".select" ).selectmenu();
	

	 // divider
	$("section.result").append('<div class="divider"></div>');
	 
	$("#search,.messages,.book-add,.article-add,.compose").parents("article").css('background-color', '#fff');
	 	 // niceScroll
	// var myNiceScroll = function  (element) {
	//  	var maxHeight	= $(".side-bar").height()-20;
	//  	if (element.height() > maxHeight) {
	// 	element.height(maxHeight);
	// 	element.niceScroll(options);
	//  	};
	// };
	 // myNiceScroll(article);
	 // myNiceScroll(leftBar);
	 // myNiceScroll(store);
	 // myNiceScroll(profile);
 	$(".notifications").niceScroll(options);
 	$('.ui-accordion-content').css('height'	, '450px').niceScroll({cursorcolor : "#b6b6b6",horizrailenabled: false,cursorborder:0});
 	// $(".side-bar.store").niceScroll(options);

 	$('.left-side-bar').scrollToFixed({
	    marginTop: function() {
	        var marginTop = $(window).height() - $('.left-side-bar').outerHeight(true) ;
	        if (marginTop >= 0) return 0;
	        return marginTop;
	    }
    });

    
	notif.hide();
	$('html').click(function() {
		notif.hide(100);
		$(".flag a").removeClass('active');
	});
	notif.on('click', function(event) {
		 event.stopPropagation();
		/* Act on the event */
	});
 	$(".flag").on('click', 'a', function(event) {
 		event.stopPropagation();
 		/* Act on the event */
 		$(this).toggleClass('active');
 		notif.toggle(100);

 	});

 	// when like or dislike or retweet add class active and increase the number

 	$('.article-actions').on('click', 'a', function(event) {
 		event.preventDefault();
 		var pop = $(this),
 		popNumber = parseInt(pop.find('span').text(),10);

 		if (! pop.hasClass('active')) {
 			pop.addClass('active').find('span').html(++popNumber);
 		}else{
 			pop.removeClass('active').find('span').html(--popNumber);
 		};
 	});


 	// messages view message 

 	$('.messages td').on('click', '.messageTitle', function(event) {
 		event.preventDefault();
 		$(this).next('p').toggleClass('show',500);
 		
 	});

 	// Change login background each refresh
	var totalCount = 4;
	function ChangeIt(){
		var num = Math.ceil( Math.random() * totalCount );
		var loginbg = 'url(img/background/login'+num+'.jpg)';
		$('body.login').css({
			'background':loginbg,
			'background-size': 'cover',
			'background-position': 'top center'
		});
	};
	ChangeIt() ;

	// textarea auto sizing
	$('textarea').autosize(); 



	 // Switch Click
        $('.Switch').click(function() {
            // Check If Enabled (Has 'On' Class)
            if ($(this).hasClass('On')){
                // Try To Find Checkbox Within Parent Div, And Check It
                $(this).parent().find('input:checkbox').attr('checked', true);
                // Change Button Style - Remove On Class, Add Off Class
                $(this).removeClass('On').addClass('Off');
            } else { // If Button Is Disabled (Has 'Off' Class)
                // Try To Find Checkbox Within Parent Div, And Uncheck It
                $(this).parent().find('input:checkbox').attr('checked', false);
                // Change Button Style - Remove Off Class, Add On Class
                $(this).removeClass('Off').addClass('On'); 
            }  
        });
        // Loops Through Each Toggle Switch On Page
        $('.Switch').each(function() {
            // Search of a checkbox within the parent
            if ($(this).parent().find('input:checkbox').length){
 
                // This just hides all Toggle Switch Checkboxs
                // Uncomment line below to hide all checkbox's after Toggle Switch is Found
                // $(this).parent().find('input:checkbox').hide();
 
                // For Demo, Allow showing of checkbox's with the 'show' class
                // If checkbox doesnt have the show class then hide it
                if (!$(this).parent().find('input:checkbox').hasClass("show")){
                    $(this).parent().find('input:checkbox').hide(); }
                // Comment / Delete out the above 2 lines when using this on a real site
 
                // Look at the checkbox's checkked state
                if ($(this).parent().find('input:checkbox').is(':checked')){
                    // Checkbox is not checked, Remove the On Class and Add the Off Class
                    $(this).removeClass('On').addClass('Off');
                } else {           
                    // Checkbox Is Checked Remove Off Class, and Add the On Class
                    $(this).removeClass('Off').addClass('On');
                }
            }
        });

if(!Modernizr.csscalc){
	var viewportWidth = $(window).width();
		if (viewportWidth > 1330) {
	    $('.center-article').width(viewportWidth-560);
	    var searchParent = $('.top-nav .main-search').parent().width();
	    $('.top-nav .main-search').width(searchParent-657);
	    var homeParent = $('.home').parent().width();
	    $('.home').width(homeParent - 221);
	    };
	$(window).resize(function() {
		var viewportWidth = $(window).width();
		if (viewportWidth > 1360) {
		    $('.center-article').width(viewportWidth-560);
		    var searchParent = $('.top-nav .main-search').parent().width();
		    $('.top-nav .main-search').width(searchParent-657);
		    homeParent = $('.home').parent().width();
		    $('.home').width(homeParent - 221);
	    };
});

}
});