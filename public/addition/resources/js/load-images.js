$(function () {
    var $memesContainer = $('.memes-container');
    var memesTemplate = $('#meme-template').html();

    function addPhoto(meme) {
        $memesContainer.append(Mustache.render(memesTemplate, meme));
    }

    function initMasonry() {
        // Initialize Masonry grid for both featured and API memes
        var $grid = $('.grid').masonry({
            itemSelector: '.grid-item',
            percentPosition: true,
            columnWidth: '.grid-sizer'
        });

        $grid.imagesLoaded().progress(function () {
            $grid.masonry('layout');
        });
    }

    // Featured memes URLs
    var featuredUrls = [
        'https://i.ibb.co/ndNP6j4/b37ef0dc-57a9-4128-8a90-45c1ea368362.png',
        'https://i.ibb.co/WvN4HPjQ/b08d2764-5f0c-4567-a713-968b478697c7.png',
        'https://i.ibb.co/N66S1KSD/168902e9-0a26-4f24-9b45-c183bc0f4944.png',
        'https://i.ibb.co/dJXQvJtC/89472ca5-f08a-49cd-a36f-339b8e22ea82.png',
        'https://i.ibb.co/gL2vZ8Vc/110c2f5b-8bdc-40b0-a724-b4e4462f7f59.png'
    ];

    var featuredLoaded = 0;
    var featuredMemes = [];

    // Load featured images and get their actual dimensions
    $.each(featuredUrls, function(i, url) {
        var img = new Image();
        img.onload = function() {
            featuredMemes[i] = {
                url: url,
                height: this.height,
                width: this.width
            };
            featuredLoaded++;
            
            // Once all featured images are loaded, add them first
            if (featuredLoaded === featuredUrls.length) {
                $.each(featuredMemes, function(j, meme) {
                    addPhoto(meme);
                });
                
                // Then fetch API memes
                $.ajax({
                    type: 'GET',
                    url: 'https://api.imgflip.com/get_memes',
                    dataType: 'json',
                    success: function (response) {
                        var top15 = response.data.memes.slice(0, 100);
                        $.each(top15, function (k, meme) {
                            addPhoto(meme);
                        });
                        initMasonry();
                    },
                    error: function () {
                        showAlert("An error occurred while loading images, try again later.");
                        initMasonry();
                    }
                });
            }
        };
        img.onerror = function() {
            // Fallback if image fails to load
            featuredMemes[i] = {
                url: url,
                height: 600,
                width: 800
            };
            featuredLoaded++;
            
            if (featuredLoaded === featuredUrls.length) {
                $.each(featuredMemes, function(j, meme) {
                    addPhoto(meme);
                });
                
                $.ajax({
                    type: 'GET',
                    url: 'https://api.imgflip.com/get_memes',
                    dataType: 'json',
                    success: function (response) {
                        var top15 = response.data.memes.slice(0, 20);
                        $.each(top15, function (k, meme) {
                            addPhoto(meme);
                        });
                        initMasonry();
                    },
                    error: function () {
                        showAlert("An error occurred while loading images, try again later.");
                        initMasonry();
                    }
                });
            }
        };
        img.src = url;
    });
});
