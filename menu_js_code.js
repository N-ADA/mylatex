$(window).load(function(){
//Jquery code for the Chapters toggle function

	$.fn.scrollView = function () {
	  return this.each(function () {
		$('#menu').animate({
		  scrollTop: ($(this).offset().top - $(menu).offset().top - 215)
		}, 1000);
	  });
	}
	
	$('#menu li').click(function(ev) {
		$(this).find('>ul').slideToggle().end().siblings().find('ul').slideUp();
		ev.stopPropagation();
	});

	var temp = ''
	var sPath = window.location.pathname;
	console.log('Full path of current page : '+sPath)
	var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
	sPage = sPage.split('%20')
	for (let i = 0; i < sPage.length; i++) {
		console.log('we have : '+sPage[i])
		temp += sPage[i]
		if (i != sPage.length - 1)temp += ' '
	
	}

	$('#menu li').each(function(i, val){
		var fullPath = $('a', val).attr('href');
		console.log('This is link inside href : '+fullPath)
		if(typeof fullPath != 'undefined'){
			var menuItem = fullPath.substring(fullPath.lastIndexOf('/') + 1);
			console.log('Menu Item: '+menuItem+' --- Page name :' +temp)
      			if(menuItem == temp) {
        			$(val).addClass('active');
					$(val).parent().show();
					$(val).parent().parent().show();

					if($(val).parent().parent().parent().is("ul")){
						$(val).parent().parent().parent().show();
					}
				if($.contains($(val), $(val).parent())){
					$(val).parent().parent().parent().scrollView();
				} else {
					$(val).scrollView();
				}

			}	
		}					
    });
});
