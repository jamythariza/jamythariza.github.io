(function() {
	$(function () {
		$('[data-toggle="tooltip"]').tooltip()
	})

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
		

var button = document.getElementById("softs");
  
	button.addEventListener( "click", function() {
		var circularBars = new CircularSkillBar( "#sbars .sbar" );
	},false);
		document.addEventListener( "DOMContentLoaded", function() {
		var circularBars = new CircularSkillBar( "#hbars .hbar" );
	});
})();

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
	sr.reveal('.header-content-left', {
		duration: 2000,
		origin: 'top',
		distance: '300px'
	});
	sr.reveal('.header-content-right', {
		duration: 2000,
		origin: 'bottom',
		distance: '300px'
	});
	sr.reveal('.header-btn', {
		duration: 2000,
		origin: 'bottom',
		delay: 1000
	});
	sr.reveal('#testimonial', {
		duration: 2000,
		origin: 'bottom',
		viewFactor: 0.2,
		distance: '300px'
	});
	sr.reveal('.info-left', {
		duration: 2000,
		origin: 'bottom',
		distance: '300px'
	});
	sr.reveal('.info-right', {
		duration: 2000,
		origin: 'top',
		distance: '300px'
	});
	sr.reveal('.info-btn', {
		duration: 2000,
		origin: 'bottom',
		delay: 1000
	});
	sr.reveal('#info-two', {
		duration: 2000,
		origin: 'bottom',
		distance: '300px'
	});
	sr.reveal('#contact', {
		duration: 2000,
		origin: 'bottom',
		distance: '100px'
	});
	

	document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});