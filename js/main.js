(function() {
	
	var Progress = function( element ) {
		
		this.context = element.getContext( "2d" );
		this.refElement = element.parentNode;
		this.loaded = 0;
		this.start = 4.72;
		this.width = this.context.canvas.width;
		this.height = this.context.canvas.height;
		this.total = parseInt( this.refElement.dataset.percent, 10 );
		this.timer = null;
		
		this.diff = 0;
		
		this.init();	
	};
	
	Progress.prototype = {
		init: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.run();	
			}, 25);
		},
		run: function() {
			var self = this;
			
			self.diff = ( ( self.loaded / 100 ) * Math.PI * 2 * 10 ).toFixed( 2 );	
			self.context.clearRect( 0, 0, self.width, self.height );
			self.context.lineWidth = 4;
			self.context.fillStyle = "#000";
			self.context.strokeStyle = "#D6AC4B";
			self.context.textAlign = "center";
			
			self.context.fillText( self.loaded + "%", self.width * .5, self.height * .5 + 2, self.width );
			self.context.beginPath();
			self.context.arc( 35, 35, 30, self.start, self.diff / 10 + self.start, false );
			self.context.stroke();
			
			if( self.loaded >= self.total ) {
				clearInterval( self.timer );
			}
			
			self.loaded++;
		}
	};
	
	var CircularSkillBar = function( elements ) {
		this.bars = document.querySelectorAll( elements );
		if( this.bars.length > 0 ) {
			this.init();
		}	
	};
	
	CircularSkillBar.prototype = {
		init: function() {
			this.tick = 25;
			this.progress();
			
		},
		progress: function() {
			var self = this;
			var index = 0;
			var firstCanvas = self.bars[0].querySelector( "canvas" );
			var firstProg = new Progress( firstCanvas );
			
			var timer = setInterval(function() {
				index++;
					
				var canvas = self.bars[index].querySelector( "canvas" );
				var prog = new Progress( canvas );
				
				if( index == self.bars.length ) {
						clearInterval( timer );
				} 
				
			}, self.tick * 100);
				
		}
	};
var button = document.getElementById("softs");
  
	button.addEventListener( "click", function() {
		var circularBars = new CircularSkillBar( "#sbars .sbar" );
	},false);
		document.addEventListener( "DOMContentLoaded", function() {
		var circularBars = new CircularSkillBar( "#hbars .hbar" );
	});
})();


$(document).ready(function () { 
	$("#hards").click(function(){
		$(".sbar")
            .filter(function(){ return ! $(this).is(":hidden"); })
            .fadeOut(200, function(){
				$('.hbar,.hbars').fadeIn(300);
			});
			$('#softs').removeClass("bactive");
			$('#hards').addClass("bactive");		
	});
	$("#softs").click(function(){
		$(".hbar")
            .filter(function(){ return ! $(this).is(":hidden"); })
            .fadeOut(200, function(){
				$('.sbar,.sbars').fadeIn(300);
			});
			$('#hards').removeClass("bactive");
			$('#softs').addClass("bactive");
	});
});

window.sr = ScrollReveal();
	sr.reveal('.logo', {
		origin: 'top',
		duration: 2000,
		distance: '300px'
	});
	sr.reveal('.title', {
		duration: 2000,
		origin: 'bottom'
	});
	sr.reveal('.navbar', {
		duration: 2000,
		origin: 'bottom'
	});
	sr.reveal('.header-content-left', {
		duration: 2000,
		origin: 'top',
		distance: '300px'
	});
	sr.reveal('.header-content-right', {
		duration: 2000,
		origin: 'right',
		distance: '300px'
	});
	sr.reveal('.header-btn', {
		duration: 2000,
		origin: 'bottom',
		delay: 1000
	});
	sr.reveal('#testimonial', {
		duration: 2000,
		origin: 'left',
		distance: '300px',
		viewFactor: 0.2
	});
	sr.reveal('.info-left', {
		duration: 2000,
		origin: 'bottom',
		distance: '300px'
	});
	sr.reveal('.info-right', {
		duration: 2000,
		origin: 'right',
		distance: '300px'
	});
	sr.reveal('.info-btn', {
		duration: 2000,
		origin: 'bottom',
		delay: 1000
	});
	sr.reveal('#info-two', {
		duration: 2000,
		origin: 'left',
		distance: '300px',
		viewFactor: 0.2
	});
	sr.reveal('#contact', {
		duration: 2000,
		origin: 'bottom',
		distance: '300px',
		viewFactor: 0.2
	});

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});