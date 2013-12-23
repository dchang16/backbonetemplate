var HomeView = Backbone.View.extend({
	render: function() {
		$.get('templates/home.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#top').html(template).trigger('create');
		})
		return this;
	}
});

var MenuView = Backbone.View.extend({

	render: function() {
		$.get('templates/menu.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#sidebar-wrapper').html(template).trigger('create');
		})
		return this;
	}
});

var CarouselView = Backbone.View.extend({
	render: function() {

		var template =    
		"<div class='item'><a href='#'><img src='img/img1.jpg' alt='img'></a></div>"+
		"<div class='item'><a href='#'><img src='img/img2.jpg' alt='img'></a></div>"+ 
		"<div class='item'><a href='#'><img src='img/img3.jpg' alt='img'></a></div>"+
		"<div class='item'><a href='#'><img src='img/img4.jpg' alt='img'></a></div>";

		$('#carousel').html(template).trigger('create');
		$('#carousel').owlCarousel({
			autoPlay: 3000,
			items: 4,
			loop: true
		});

	}
});

var ServicesView = Backbone.View.extend({
	render: function() {
		$.get('templates/services.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#services').html(template).trigger('create');
		})
		return this;
	}
});

var GalleryView = Backbone.View.extend({
	render: function() {
		$.get('templates/gallery.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#gallery').html(template).trigger('create');
		})
		return this;
	}
});

var ContactView = Backbone.View.extend({
	render: function() {
		$.get('templates/contact.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#contact').html(template).trigger('create');
		})
	}
});

var FooterView = Backbone.View.extend({
	render: function() {
		$.get('templates/footer.html', function(incomingTemplate){
			var template = Handlebars.compile(incomingTemplate);
			$('#footer').html(template).trigger('create');
		})
	}
})


