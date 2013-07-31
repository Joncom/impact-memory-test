ig.module('game.main')
.requires(
    'impact.game',
    'impact.font'
)
.defines(function(){

    MyGame = ig.Game.extend({

        // Load a font
        font: new ig.Font( 'media/04b03.font.png' ),

        init: function() {
            this.load_images_into_memory();
        },

        update: function() {
            // Update all entities and backgroundMaps
            this.parent();

            // Add your own, additional update code here
        },

        load_images_into_memory: function() {
            this.images = [
                new ig.Image('media/spider.jpg#01'),
                new ig.Image('media/spider.jpg#02'),
                new ig.Image('media/spider.jpg#03'),
                new ig.Image('media/spider.jpg#04'),
                new ig.Image('media/spider.jpg#05')
            ];
        },

        free_images_from_memory: function() {
            for(var path in ig.Image.cache) {
                delete ig.Image.cache[path];
            }
        },

        draw: function() {
            // Draw all entities and backgroundMaps
            this.parent();


            // Add your own drawing code here
            var x = ig.system.width/2,
                y = ig.system.height/2;

            this.font.draw( 'It Works!', x, y, ig.Font.ALIGN.CENTER );
        }

    });

    // Start the Game with 60fps, a resolution of 320x240, scaled
    // up by a factor of 2
    ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
