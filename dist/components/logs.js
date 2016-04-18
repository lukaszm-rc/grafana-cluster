'use strict';

System.register(['app/core/config', './clippy.css!', './clippy'], function (_export, _context) {
  var config, LogsPageCtrl;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_appCoreConfig) {
      config = _appCoreConfig.default;
    }, function (_clippyCss) {}, function (_clippy) {}],
    execute: function () {
      _export('LogsPageCtrl', LogsPageCtrl = function LogsPageCtrl() {
        _classCallCheck(this, LogsPageCtrl);

        this.name = config.bootData.user.name;
        window.clippy.load('Clippy', function (agent) {

          agent.show();
          agent.moveTo(300, 300);
          agent.play('GetAttention');
          agent.speak("It looks like you're writing a plugin \n\n Would you like help?");
          agent.speak("Feel free to pass by our irc channel #grafana @ freenode");
          agent.animate();

          setInterval(function () {
            agent.animate();
          }, 30000);
        });
      });

      _export('LogsPageCtrl', LogsPageCtrl);

      LogsPageCtrl.templateUrl = 'components/logs.html';
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvbG9ncy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQU87Ozs4QkFJTSxlQUVYLFNBRlcsWUFFWCxHQUFjOzhCQUZILGNBRUc7O0FBQ1osYUFBSyxJQUFMLEdBQVksT0FBTyxRQUFQLENBQWdCLElBQWhCLENBQXFCLElBQXJCLENBREE7QUFFVixlQUFPLE1BQVAsQ0FBYyxJQUFkLENBQW1CLFFBQW5CLEVBQTZCLFVBQUMsS0FBRCxFQUFXOztBQUV0QyxnQkFBTSxJQUFOLEdBRnNDO0FBR3RDLGdCQUFNLE1BQU4sQ0FBYSxHQUFiLEVBQWtCLEdBQWxCLEVBSHNDO0FBSXRDLGdCQUFNLElBQU4sQ0FBVyxjQUFYLEVBSnNDO0FBS3RDLGdCQUFNLEtBQU4sQ0FBWSxpRUFBWixFQUxzQztBQU10QyxnQkFBTSxLQUFOLENBQVksMERBQVosRUFOc0M7QUFPdEMsZ0JBQU0sT0FBTixHQVBzQzs7QUFTdEMsc0JBQVksWUFBTTtBQUNoQixrQkFBTSxPQUFOLEdBRGdCO1dBQU4sRUFFVCxLQUZILEVBVHNDO1NBQVgsQ0FBN0IsQ0FGVTtPQUFkOzs7O0FBa0JGLG1CQUFhLFdBQWIsR0FBMkIsc0JBQTNCIiwiZmlsZSI6ImNvbXBvbmVudHMvbG9ncy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb25maWcgZnJvbSAnYXBwL2NvcmUvY29uZmlnJztcbmltcG9ydCAnLi9jbGlwcHkuY3NzISc7XG5pbXBvcnQgJy4vY2xpcHB5JztcblxuZXhwb3J0IGNsYXNzIExvZ3NQYWdlQ3RybCB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5uYW1lID0gY29uZmlnLmJvb3REYXRhLnVzZXIubmFtZTtcbiAgICAgIHdpbmRvdy5jbGlwcHkubG9hZCgnQ2xpcHB5JywgKGFnZW50KSA9PiB7XG5cbiAgICAgICAgYWdlbnQuc2hvdygpO1xuICAgICAgICBhZ2VudC5tb3ZlVG8oMzAwLCAzMDApO1xuICAgICAgICBhZ2VudC5wbGF5KCdHZXRBdHRlbnRpb24nKTtcbiAgICAgICAgYWdlbnQuc3BlYWsoXCJJdCBsb29rcyBsaWtlIHlvdSdyZSB3cml0aW5nIGEgcGx1Z2luIFxcblxcbiBXb3VsZCB5b3UgbGlrZSBoZWxwP1wiKTtcbiAgICAgICAgYWdlbnQuc3BlYWsoXCJGZWVsIGZyZWUgdG8gcGFzcyBieSBvdXIgaXJjIGNoYW5uZWwgI2dyYWZhbmEgQCBmcmVlbm9kZVwiKTtcbiAgICAgICAgYWdlbnQuYW5pbWF0ZSgpO1xuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICBhZ2VudC5hbmltYXRlKCk7XG4gICAgICAgIH0sIDMwMDAwKTtcbiAgICB9KTtcbiAgfVxuXG59XG5Mb2dzUGFnZUN0cmwudGVtcGxhdGVVcmwgPSAnY29tcG9uZW50cy9sb2dzLmh0bWwnO1xuXG5cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
