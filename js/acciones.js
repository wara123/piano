//JavaScript
	
$(document).ready(function(e){	
    $('#principal').height($('#page').height()); 
	
	audio= window.plugins.LowLatencyAudio;
	document.addEventListener("deviceready",function(){
        audio.preloadFX('do','audio/DO.mp3',function(){},
		         function(e){ alert('error '+e);});
		audio.preloadFX('re','audio/RE.mp3',function(){},
		         function(e){ alert('error '+e);});	
		audio.preloadFX('mi','audio/MI.mp3',function(){},
		         function(e){ alert('error '+e);});	
	    audio.preloadFX('fa','audio/FA.mp3',function(){},
		         function(e){ alert('error '+e);});			 	 	 
      	audio.preloadFX('so','audio/SO.mp3',function(){},
		         function(e){ alert('error '+e);});	
		audio.preloadFX('la','audio/LA.mp3',function(){},
		         function(e){ alert('error '+e);});	
	    audio.preloadFX('si','audio/SI.mp3',function(){},
		         function(e){ alert('error '+e);});	
		$('.nota').bind('touchstart',function(){
			$(this).addClass('tocada');
			audio.play($(this).attr('id'));});
		$('.nota').bind('touchend',function(){
		  $(this).removeClass('tocada');
		});
	},false); //deviceready
});//ready