ig.module('game.main')
.requires('impact.game', 'impact.font')
.defines(function(){

    MyGame = ig.Game.extend({
        font: new ig.Font( 'media/04b03.font.png' ),
        init: function() {
            this.load_images_into_memory();
        },
        load_images_into_memory: function() {
            var images = [
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
        }
    });

    ig.main( '#canvas', MyGame, 60, 320, 240, 2 );

});
