'use strict';

System.register([], function (_export, _context) {
    var $export, _isFinite;

    return {
        setters: [],
        execute: function () {
            $export = require('./$.export');
            _isFinite = require('./$.global').isFinite;

            $export($export.S, 'Number', { isFinite: function isFinite(it) {
                    return typeof it == 'number' && _isFinite(it);
                } });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDSSxzQkFBVSxRQUFRLFlBQVI7QUFDVix3QkFBWSxRQUFRLFlBQVIsRUFBc0IsUUFBdEI7O0FBQ2hCLG9CQUFRLFFBQVEsQ0FBUixFQUFXLFFBQW5CLEVBQTZCLEVBQUMsVUFBVSxTQUFTLFFBQVQsQ0FBa0IsRUFBbEIsRUFBc0I7QUFDMUQsMkJBQU8sT0FBTyxFQUFQLElBQWEsUUFBYixJQUF5QixVQUFVLEVBQVYsQ0FBekIsQ0FEbUQ7aUJBQXRCLEVBQXhDIiwiZmlsZSI6Im5wbS9jb3JlLWpzQDEuMi42L21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAqLyBcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpLFxuICAgIF9pc0Zpbml0ZSA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5pc0Zpbml0ZTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge2lzRmluaXRlOiBmdW5jdGlvbiBpc0Zpbml0ZShpdCkge1xuICAgIHJldHVybiB0eXBlb2YgaXQgPT0gJ251bWJlcicgJiYgX2lzRmluaXRlKGl0KTtcbiAgfX0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
