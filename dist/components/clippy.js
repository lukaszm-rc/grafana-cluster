'use strict';

System.register([], function (_export, _context) {
    return {
        setters: [],
        execute: function () {
            // thank you Smore for this wonderful script!
            // https://www.smore.com/clippy-js

            ;(function () {

                window.clippy = {};
                /******
                 *
                 *
                 * @constructor
                 */
                clippy.Agent = function (path, data, sounds) {
                    this.path = path;

                    this._queue = new clippy.Queue($.proxy(this._onQueueEmpty, this));

                    this._el = $('<div class="clippy"></div>').hide();

                    $(document.body).append(this._el);

                    this._animator = new clippy.Animator(this._el, path, data, sounds);

                    this._balloon = new clippy.Balloon(this._el);

                    this._setupEvents();
                };

                clippy.Agent.prototype = {

                    /**************************** API ************************************/

                    /***
                     *
                     * @param {Number} x
                     * @param {Number} y
                     */
                    gestureAt: function gestureAt(x, y) {
                        var d = this._getDirection(x, y);
                        var gAnim = 'Gesture' + d;
                        var lookAnim = 'Look' + d;

                        var animation = this.hasAnimation(gAnim) ? gAnim : lookAnim;
                        return this.play(animation);
                    },

                    /***
                     *
                     * @param {Boolean=} fast
                     *
                     */
                    hide: function hide(fast, callback) {
                        this._hidden = true;
                        var el = this._el;
                        this.stop();
                        if (fast) {
                            this._el.hide();
                            this.stop();
                            this.pause();
                            if (callback) callback();
                            return;
                        }

                        return this._playInternal('Hide', function () {
                            el.hide();
                            this.pause();
                            if (callback) callback();
                        });
                    },

                    moveTo: function moveTo(x, y, duration) {
                        var dir = this._getDirection(x, y);
                        var anim = 'Move' + dir;
                        if (duration === undefined) duration = 1000;

                        this._addToQueue(function (complete) {
                            // the simple case
                            if (duration === 0) {
                                this._el.css({ top: y, left: x });
                                this.reposition();
                                complete();
                                return;
                            }

                            // no animations
                            if (!this.hasAnimation(anim)) {
                                this._el.animate({ top: y, left: x }, duration, complete);
                                return;
                            }

                            var callback = $.proxy(function (name, state) {
                                // when exited, complete
                                if (state === clippy.Animator.States.EXITED) {
                                    complete();
                                }
                                // if waiting,
                                if (state === clippy.Animator.States.WAITING) {
                                    this._el.animate({ top: y, left: x }, duration, $.proxy(function () {
                                        // after we're done with the movement, do the exit animation
                                        this._animator.exitAnimation();
                                    }, this));
                                }
                            }, this);

                            this._playInternal(anim, callback);
                        }, this);
                    },

                    _playInternal: function _playInternal(animation, callback) {

                        // if we're inside an idle animation,
                        if (this._isIdleAnimation() && this._idleDfd && this._idleDfd.state() === 'pending') {
                            this._idleDfd.done($.proxy(function () {
                                this._playInternal(animation, callback);
                            }, this));
                        }

                        this._animator.showAnimation(animation, callback);
                    },

                    play: function play(animation, timeout, cb) {
                        if (!this.hasAnimation(animation)) return false;

                        if (timeout === undefined) timeout = 5000;

                        this._addToQueue(function (complete) {
                            var completed = false;
                            // handle callback
                            var callback = function callback(name, state) {
                                if (state === clippy.Animator.States.EXITED) {
                                    completed = true;
                                    if (cb) cb();
                                    complete();
                                }
                            };

                            // if has timeout, register a timeout function
                            if (timeout) {
                                window.setTimeout($.proxy(function () {
                                    if (completed) return;
                                    // exit after timeout
                                    this._animator.exitAnimation();
                                }, this), timeout);
                            }

                            this._playInternal(animation, callback);
                        }, this);

                        return true;
                    },

                    /***
                     *
                     * @param {Boolean=} fast
                     */
                    show: function show(fast) {

                        this._hidden = false;
                        if (fast) {
                            this._el.show();
                            this.resume();
                            this._onQueueEmpty();
                            return;
                        }

                        if (this._el.css('top') === 'auto' || !this._el.css('left') === 'auto') {
                            var left = $(window).width() * 0.8;
                            var top = ($(window).height() + $(document).scrollTop()) * 0.8;
                            this._el.css({ top: top, left: left });
                        }

                        this.resume();
                        return this.play('Show');
                    },

                    /***
                     *
                     * @param {String} text
                     */
                    speak: function speak(text, hold) {
                        this._addToQueue(function (complete) {
                            this._balloon.speak(complete, text, hold);
                        }, this);
                    },

                    /***
                     * Close the current balloon
                     */
                    closeBalloon: function closeBalloon() {
                        this._balloon.hide();
                    },

                    delay: function delay(time) {
                        time = time || 250;

                        this._addToQueue(function (complete) {
                            this._onQueueEmpty();
                            window.setTimeout(complete, time);
                        });
                    },

                    /***
                     * Skips the current animation
                     */
                    stopCurrent: function stopCurrent() {
                        this._animator.exitAnimation();
                        this._balloon.close();
                    },

                    stop: function stop() {
                        // clear the queue
                        this._queue.clear();
                        this._animator.exitAnimation();
                        this._balloon.hide();
                    },

                    /***
                     *
                     * @param {String} name
                     * @returns {Boolean}
                     */
                    hasAnimation: function hasAnimation(name) {
                        return this._animator.hasAnimation(name);
                    },

                    /***
                     * Gets a list of animation names
                     *
                     * @return {Array.<string>}
                     */
                    animations: function animations() {
                        return this._animator.animations();
                    },

                    /***
                     * Play a random animation
                     * @return {jQuery.Deferred}
                     */
                    animate: function animate() {
                        var animations = this.animations();
                        var anim = animations[Math.floor(Math.random() * animations.length)];
                        // skip idle animations
                        if (anim.indexOf('Idle') === 0) {
                            return this.animate();
                        }
                        return this.play(anim);
                    },

                    /**************************** Utils ************************************/

                    /***
                     *
                     * @param {Number} x
                     * @param {Number} y
                     * @return {String}
                     * @private
                     */
                    _getDirection: function _getDirection(x, y) {
                        var offset = this._el.offset();
                        var h = this._el.height();
                        var w = this._el.width();

                        var centerX = offset.left + w / 2;
                        var centerY = offset.top + h / 2;

                        var a = centerY - y;
                        var b = centerX - x;

                        var r = Math.round(180 * Math.atan2(a, b) / Math.PI);

                        // Left and Right are for the character, not the screen :-/
                        if (-45 <= r && r < 45) return 'Right';
                        if (45 <= r && r < 135) return 'Up';
                        if (135 <= r && r <= 180 || -180 <= r && r < -135) return 'Left';
                        if (-135 <= r && r < -45) return 'Down';

                        // sanity check
                        return 'Top';
                    },

                    /**************************** Queue and Idle handling ************************************/

                    /***
                     * Handle empty queue.
                     * We need to transition the animation to an idle state
                     * @private
                     */
                    _onQueueEmpty: function _onQueueEmpty() {
                        if (this._hidden || this._isIdleAnimation()) return;
                        var idleAnim = this._getIdleAnimation();
                        this._idleDfd = $.Deferred();

                        this._animator.showAnimation(idleAnim, $.proxy(this._onIdleComplete, this));
                    },

                    _onIdleComplete: function _onIdleComplete(name, state) {
                        if (state === clippy.Animator.States.EXITED) {
                            this._idleDfd.resolve();
                        }
                    },

                    /***
                     * Is the current animation is Idle?
                     * @return {Boolean}
                     * @private
                     */
                    _isIdleAnimation: function _isIdleAnimation() {
                        var c = this._animator.currentAnimationName;
                        return c && c.indexOf('Idle') === 0;
                    },

                    /**
                     * Gets a random Idle animation
                     * @return {String}
                     * @private
                     */
                    _getIdleAnimation: function _getIdleAnimation() {
                        var animations = this.animations();
                        var r = [];
                        for (var i = 0; i < animations.length; i++) {
                            var a = animations[i];
                            if (a.indexOf('Idle') === 0) {
                                r.push(a);
                            }
                        }

                        // pick one
                        var idx = Math.floor(Math.random() * r.length);
                        return r[idx];
                    },

                    /**************************** Events ************************************/

                    _setupEvents: function _setupEvents() {
                        $(window).on('resize', $.proxy(this.reposition, this));

                        this._el.on('mousedown', $.proxy(this._onMouseDown, this));

                        this._el.on('dblclick', $.proxy(this._onDoubleClick, this));
                    },

                    _onDoubleClick: function _onDoubleClick() {
                        if (!this.play('ClickedOn')) {
                            this.animate();
                        }
                    },

                    reposition: function reposition() {
                        if (!this._el.is(':visible')) return;
                        var o = this._el.offset();
                        var bH = this._el.outerHeight();
                        var bW = this._el.outerWidth();

                        var wW = $(window).width();
                        var wH = $(window).height();
                        var sT = $(window).scrollTop();
                        var sL = $(window).scrollLeft();

                        var top = o.top - sT;
                        var left = o.left - sL;
                        var m = 5;
                        if (top - m < 0) {
                            top = m;
                        } else if (top + bH + m > wH) {
                            top = wH - bH - m;
                        }

                        if (left - m < 0) {
                            left = m;
                        } else if (left + bW + m > wW) {
                            left = wW - bW - m;
                        }

                        this._el.css({ left: left, top: top });
                        // reposition balloon
                        this._balloon.reposition();
                    },

                    _onMouseDown: function _onMouseDown(e) {
                        e.preventDefault();
                        this._startDrag(e);
                    },

                    /**************************** Drag ************************************/

                    _startDrag: function _startDrag(e) {
                        // pause animations
                        this.pause();
                        this._balloon.hide(true);
                        this._offset = this._calculateClickOffset(e);

                        this._moveHandle = $.proxy(this._dragMove, this);
                        this._upHandle = $.proxy(this._finishDrag, this);

                        $(window).on('mousemove', this._moveHandle);
                        $(window).on('mouseup', this._upHandle);

                        this._dragUpdateLoop = window.setTimeout($.proxy(this._updateLocation, this), 10);
                    },

                    _calculateClickOffset: function _calculateClickOffset(e) {
                        var mouseX = e.pageX;
                        var mouseY = e.pageY;
                        var o = this._el.offset();
                        return {
                            top: mouseY - o.top,
                            left: mouseX - o.left
                        };
                    },

                    _updateLocation: function _updateLocation() {
                        this._el.css({ top: this._targetY, left: this._taregtX });
                        this._dragUpdateLoop = window.setTimeout($.proxy(this._updateLocation, this), 10);
                    },

                    _dragMove: function _dragMove(e) {
                        e.preventDefault();
                        var x = e.clientX - this._offset.left;
                        var y = e.clientY - this._offset.top;
                        this._taregtX = x;
                        this._targetY = y;
                    },

                    _finishDrag: function _finishDrag() {
                        window.clearTimeout(this._dragUpdateLoop);
                        // remove handles
                        $(window).off('mousemove', this._moveHandle);
                        $(window).off('mouseup', this._upHandle);
                        // resume animations
                        this._balloon.show();
                        this.reposition();
                        this.resume();
                    },

                    _addToQueue: function _addToQueue(func, scope) {
                        if (scope) func = $.proxy(func, scope);
                        this._queue.queue(func);
                    },

                    /**************************** Pause and Resume ************************************/

                    pause: function pause() {
                        this._animator.pause();
                        this._balloon.pause();
                    },

                    resume: function resume() {
                        this._animator.resume();
                        this._balloon.resume();
                    }

                };

                /******
                 *
                 *
                 * @constructor
                 */
                clippy.Animator = function (el, path, data, sounds) {
                    this._el = el;
                    this._data = data;
                    this._path = path;
                    this._currentFrameIndex = 0;
                    this._currentFrame = undefined;
                    this._exiting = false;
                    this._currentAnimation = undefined;
                    this._endCallback = undefined;
                    this._started = false;
                    this._sounds = {};
                    this.currentAnimationName = undefined;
                    this.preloadSounds(sounds);
                    this._overlays = [this._el];
                    var curr = this._el;

                    this._setupElement(this._el);
                    for (var i = 1; i < this._data.overlayCount; i++) {
                        var inner = this._setupElement($('<div></div>'));

                        curr.append(inner);
                        this._overlays.push(inner);
                        curr = inner;
                    }
                };

                clippy.Animator.prototype = {
                    _setupElement: function _setupElement(el) {
                        var frameSize = this._data.framesize;
                        el.css('display', "none");
                        el.css({ width: frameSize[0], height: frameSize[1] });
                        el.css('background', "url('" + this._path + "/map.png') no-repeat");

                        return el;
                    },

                    animations: function animations() {
                        var r = [];
                        var d = this._data.animations;
                        for (var n in d) {
                            r.push(n);
                        }
                        return r;
                    },

                    preloadSounds: function preloadSounds(sounds) {

                        for (var i = 0; i < this._data.sounds.length; i++) {
                            var snd = this._data.sounds[i];
                            var uri = sounds[snd];
                            if (!uri) continue;
                            this._sounds[snd] = new Audio(uri);
                        }
                    },
                    hasAnimation: function hasAnimation(name) {
                        return !!this._data.animations[name];
                    },

                    exitAnimation: function exitAnimation() {
                        this._exiting = true;
                    },

                    showAnimation: function showAnimation(animationName, stateChangeCallback) {
                        this._exiting = false;

                        if (!this.hasAnimation(animationName)) {
                            return false;
                        }

                        this._currentAnimation = this._data.animations[animationName];
                        this.currentAnimationName = animationName;

                        if (!this._started) {
                            this._step();
                            this._started = true;
                        }

                        this._currentFrameIndex = 0;
                        this._currentFrame = undefined;
                        this._endCallback = stateChangeCallback;

                        return true;
                    },

                    _draw: function _draw() {
                        var images = [];
                        if (this._currentFrame) images = this._currentFrame.images || [];

                        for (var i = 0; i < this._overlays.length; i++) {
                            if (i < images.length) {
                                var xy = images[i];
                                var bg = -xy[0] + 'px ' + -xy[1] + 'px';
                                this._overlays[i].css({ 'background-position': bg, 'display': 'block' });
                            } else {
                                this._overlays[i].css('display', 'none');
                            }
                        }
                    },

                    _getNextAnimationFrame: function _getNextAnimationFrame() {
                        if (!this._currentAnimation) return undefined;
                        // No current frame. start animation.
                        if (!this._currentFrame) return 0;
                        var currentFrame = this._currentFrame;
                        var branching = this._currentFrame.branching;

                        if (this._exiting && currentFrame.exitBranch !== undefined) {
                            return currentFrame.exitBranch;
                        } else if (branching) {
                            var rnd = Math.random() * 100;
                            for (var i = 0; i < branching.branches.length; i++) {
                                var branch = branching.branches[i];
                                if (rnd <= branch.weight) {
                                    return branch.frameIndex;
                                }

                                rnd -= branch.weight;
                            }
                        }

                        return this._currentFrameIndex + 1;
                    },

                    _playSound: function _playSound() {
                        var s = this._currentFrame.sound;
                        if (!s) return;
                        var audio = this._sounds[s];
                        if (audio) audio.play();
                    },

                    _atLastFrame: function _atLastFrame() {
                        return this._currentFrameIndex >= this._currentAnimation.frames.length - 1;
                    },

                    _step: function _step() {
                        if (!this._currentAnimation) return;
                        var newFrameIndex = Math.min(this._getNextAnimationFrame(), this._currentAnimation.frames.length - 1);
                        var frameChanged = !this._currentFrame || this._currentFrameIndex !== newFrameIndex;
                        this._currentFrameIndex = newFrameIndex;

                        // always switch frame data, unless we're at the last frame of an animation with a useExitBranching flag.
                        if (!(this._atLastFrame() && this._currentAnimation.useExitBranching)) {
                            this._currentFrame = this._currentAnimation.frames[this._currentFrameIndex];
                        }

                        this._draw();
                        this._playSound();

                        this._loop = window.setTimeout($.proxy(this._step, this), this._currentFrame.duration);

                        // fire events if the frames changed and we reached an end
                        if (this._endCallback && frameChanged && this._atLastFrame()) {
                            if (this._currentAnimation.useExitBranching && !this._exiting) {
                                this._endCallback(this.currentAnimationName, clippy.Animator.States.WAITING);
                            } else {
                                this._endCallback(this.currentAnimationName, clippy.Animator.States.EXITED);
                            }
                        }
                    },

                    /***
                     * Pause animation execution
                     */
                    pause: function pause() {
                        window.clearTimeout(this._loop);
                    },

                    /***
                     * Resume animation
                     */
                    resume: function resume() {
                        this._step();
                    }
                };

                clippy.Animator.States = { WAITING: 1, EXITED: 0 };

                /******
                 *
                 *
                 * @constructor
                 */
                clippy.Balloon = function (targetEl) {
                    this._targetEl = targetEl;

                    this._hidden = true;
                    this._setup();
                };

                clippy.Balloon.prototype = {

                    WORD_SPEAK_TIME: 320,
                    CLOSE_BALLOON_DELAY: 2000,

                    _setup: function _setup() {

                        this._balloon = $('<div class="clippy-balloon"><div class="clippy-tip"></div><div class="clippy-content"></div></div> ').hide();
                        this._content = this._balloon.find('.clippy-content');

                        $(document.body).append(this._balloon);
                    },

                    reposition: function reposition() {
                        var sides = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

                        for (var i = 0; i < sides.length; i++) {
                            var s = sides[i];
                            this._position(s);
                            if (!this._isOut()) break;
                        }
                    },

                    _BALLOON_MARGIN: 15,

                    /***
                     *
                     * @param side
                     * @private
                     */
                    _position: function _position(side) {
                        var o = this._targetEl.offset();
                        var h = this._targetEl.height();
                        var w = this._targetEl.width();

                        var bH = this._balloon.outerHeight();
                        var bW = this._balloon.outerWidth();

                        this._balloon.removeClass('clippy-top-left');
                        this._balloon.removeClass('clippy-top-right');
                        this._balloon.removeClass('clippy-bottom-right');
                        this._balloon.removeClass('clippy-bottom-left');

                        var left, top;
                        switch (side) {
                            case 'top-left':
                                // right side of the balloon next to the right side of the agent
                                left = o.left + w - bW;
                                top = o.top - bH - this._BALLOON_MARGIN;
                                break;
                            case 'top-right':
                                // left side of the balloon next to the left side of the agent
                                left = o.left;
                                top = o.top - bH - this._BALLOON_MARGIN;
                                break;
                            case 'bottom-right':
                                // right side of the balloon next to the right side of the agent
                                left = o.left;
                                top = o.top + h + this._BALLOON_MARGIN;
                                break;
                            case 'bottom-left':
                                // left side of the balloon next to the left side of the agent
                                left = o.left + w - bW;
                                top = o.top + h + this._BALLOON_MARGIN;
                                break;
                        }

                        this._balloon.css({ top: top, left: left });
                        this._balloon.addClass('clippy-' + side);
                    },

                    _isOut: function _isOut() {
                        var o = this._balloon.offset();
                        var bH = this._balloon.outerHeight();
                        var bW = this._balloon.outerWidth();

                        var wW = $(window).width();
                        var wH = $(window).height();
                        var sT = $(document).scrollTop();
                        var sL = $(document).scrollLeft();

                        var top = o.top - sT;
                        var left = o.left - sL;
                        var m = 5;
                        if (top - m < 0 || left - m < 0) return true;
                        if (top + bH + m > wH || left + bW + m > wW) return true;

                        return false;
                    },

                    speak: function speak(complete, text, hold) {
                        this._hidden = false;
                        this.show();
                        var c = this._content;
                        // set height to auto
                        c.height('auto');
                        c.width('auto');
                        // add the text
                        c.text(text);
                        // set height
                        c.height(c.height());
                        c.width(c.width());
                        c.text('');
                        this.reposition();

                        this._complete = complete;
                        this._sayWords(text, hold, complete);
                    },

                    show: function show() {
                        if (this._hidden) return;
                        this._balloon.show();
                    },

                    hide: function hide(fast) {
                        if (fast) {
                            this._balloon.hide();
                            return;
                        }

                        this._hiding = window.setTimeout($.proxy(this._finishHideBalloon, this), this.CLOSE_BALLOON_DELAY);
                    },

                    _finishHideBalloon: function _finishHideBalloon() {
                        if (this._active) return;
                        this._balloon.hide();
                        this._hidden = true;
                        this._hiding = null;
                    },

                    _sayWords: function _sayWords(text, hold, complete) {
                        this._active = true;
                        this._hold = hold;
                        var words = text.split(/[^\S-]/);
                        var time = this.WORD_SPEAK_TIME;
                        var el = this._content;
                        var idx = 1;

                        this._addWord = $.proxy(function () {
                            if (!this._active) return;
                            if (idx > words.length) {
                                this._active = false;
                                if (!this._hold) {
                                    complete();
                                    this.hide();
                                }
                            } else {
                                el.text(words.slice(0, idx).join(' '));
                                idx++;
                                this._loop = window.setTimeout($.proxy(this._addWord, this), time);
                            }
                        }, this);

                        this._addWord();
                    },

                    close: function close() {
                        if (this._active) {
                            this._hold = false;
                        } else if (this._hold) {
                            this._complete();
                        }
                    },

                    pause: function pause() {
                        window.clearTimeout(this._loop);
                        if (this._hiding) {
                            window.clearTimeout(this._hiding);
                            this._hiding = null;
                        }
                    },

                    resume: function resume() {
                        if (this._addWord) this._addWord();
                        this._hiding = window.setTimeout($.proxy(this._finishHideBalloon, this), this.CLOSE_BALLOON_DELAY);
                    }

                };

                clippy.BASE_PATH = '//s3.amazonaws.com/clippy.js/Agents/';

                clippy.load = function (name, successCb, failCb) {
                    var path = clippy.BASE_PATH + name;

                    var mapDfd = clippy.load._loadMap(path);
                    var agentDfd = clippy.load._loadAgent(name, path);
                    var soundsDfd = clippy.load._loadSounds(name, path);

                    var data;
                    agentDfd.done(function (d) {
                        data = d;
                    });

                    var sounds;

                    soundsDfd.done(function (d) {
                        sounds = d;
                    });

                    // wrapper to the success callback
                    var cb = function cb() {
                        var a = new clippy.Agent(path, data, sounds);
                        successCb(a);
                    };

                    $.when(mapDfd, agentDfd, soundsDfd).done(cb).fail(failCb);
                };

                clippy.load._maps = {};
                clippy.load._loadMap = function (path) {
                    var dfd = clippy.load._maps[path];
                    if (dfd) return dfd;

                    // set dfd if not defined
                    dfd = clippy.load._maps[path] = $.Deferred();

                    var src = path + '/map.png';
                    var img = new Image();

                    img.onload = dfd.resolve;
                    img.onerror = dfd.reject;

                    // start loading the map;
                    img.setAttribute('src', src);

                    return dfd.promise();
                };

                clippy.load._sounds = {};

                clippy.load._loadSounds = function (name, path) {
                    var dfd = clippy.load._sounds[name];
                    if (dfd) return dfd;

                    // set dfd if not defined
                    dfd = clippy.load._sounds[name] = $.Deferred();

                    var audio = document.createElement('audio');
                    var canPlayMp3 = !!audio.canPlayType && "" != audio.canPlayType('audio/mpeg');
                    var canPlayOgg = !!audio.canPlayType && "" != audio.canPlayType('audio/ogg; codecs="vorbis"');

                    if (!canPlayMp3 && !canPlayOgg) {
                        dfd.resolve({});
                    } else {
                        var src = path + (canPlayMp3 ? '/sounds-mp3.js' : '/sounds-ogg.js');
                        // load
                        clippy.load._loadScript(src);
                    }

                    return dfd.promise();
                };

                clippy.load._data = {};
                clippy.load._loadAgent = function (name, path) {
                    var dfd = clippy.load._data[name];
                    if (dfd) return dfd;

                    dfd = clippy.load._getAgentDfd(name);

                    var src = path + '/agent.js';

                    clippy.load._loadScript(src);

                    return dfd.promise();
                };

                clippy.load._loadScript = function (src) {
                    var script = document.createElement('script');
                    script.setAttribute('src', src);
                    script.setAttribute('async', 'async');
                    script.setAttribute('type', 'text/javascript');

                    document.head.appendChild(script);
                };

                clippy.load._getAgentDfd = function (name) {
                    var dfd = clippy.load._data[name];
                    if (!dfd) {
                        dfd = clippy.load._data[name] = $.Deferred();
                    }
                    return dfd;
                };

                clippy.ready = function (name, data) {
                    var dfd = clippy.load._getAgentDfd(name);
                    dfd.resolve(data);
                };

                clippy.soundsReady = function (name, data) {
                    var dfd = clippy.load._sounds[name];
                    if (!dfd) {
                        dfd = clippy.load._sounds[name] = $.Deferred();
                    }

                    dfd.resolve(data);
                };

                /******
                 * Tiny Queue
                 *
                 * @constructor
                 */
                clippy.Queue = function (onEmptyCallback) {
                    this._queue = [];
                    this._onEmptyCallback = onEmptyCallback;
                };

                clippy.Queue.prototype = {
                    /***
                     *
                     * @param {function(Function)} func
                     * @returns {jQuery.Deferred}
                     */
                    queue: function queue(func) {
                        this._queue.push(func);

                        if (this._queue.length === 1 && !this._active) {
                            this._progressQueue();
                        }
                    },

                    _progressQueue: function _progressQueue() {

                        // stop if nothing left in queue
                        if (!this._queue.length) {
                            this._onEmptyCallback();
                            return;
                        }

                        var f = this._queue.shift();
                        this._active = true;

                        // execute function
                        var completeFunction = $.proxy(this.next, this);
                        f(completeFunction);
                    },

                    clear: function clear() {
                        this._queue = [];
                    },

                    next: function next() {
                        this._active = false;
                        this._progressQueue();
                    }
                };
            }).call(undefined);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,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QTI4QlQsQ0FBTyxLQUFQLEdBQWUsVUFBVSxlQUFWLEVBQTJCO0FBQ3RDLHlCQUFLLE1BQUwsR0FBYyxFQUFkLENBRHNDO0FBRXRDLHlCQUFLLGdCQUFMLEdBQXdCLGVBQXhCLENBRnNDO2lCQUEzQixDQTM4Qk47O0FBZzlCVCx1QkFBTyxLQUFQLENBQWEsU0FBYixHQUF5Qjs7Ozs7O0FBTXJCLDJCQUFNLGVBQVUsSUFBVixFQUFnQjtBQUNsQiw2QkFBSyxNQUFMLENBQVksSUFBWixDQUFpQixJQUFqQixFQURrQjs7QUFHbEIsNEJBQUksS0FBSyxNQUFMLENBQVksTUFBWixLQUF1QixDQUF2QixJQUE0QixDQUFDLEtBQUssT0FBTCxFQUFjO0FBQzNDLGlDQUFLLGNBQUwsR0FEMkM7eUJBQS9DO3FCQUhFOztBQVFOLG9DQUFlLDBCQUFZOzs7QUFHdkIsNEJBQUksQ0FBQyxLQUFLLE1BQUwsQ0FBWSxNQUFaLEVBQW9CO0FBQ3JCLGlDQUFLLGdCQUFMLEdBRHFCO0FBRXJCLG1DQUZxQjt5QkFBekI7O0FBS0EsNEJBQUksSUFBSSxLQUFLLE1BQUwsQ0FBWSxLQUFaLEVBQUosQ0FSbUI7QUFTdkIsNkJBQUssT0FBTCxHQUFlLElBQWY7OztBQVR1Qiw0QkFZbkIsbUJBQW1CLEVBQUUsS0FBRixDQUFRLEtBQUssSUFBTCxFQUFXLElBQW5CLENBQW5CLENBWm1CO0FBYXZCLDBCQUFFLGdCQUFGLEVBYnVCO3FCQUFaOztBQWdCZiwyQkFBTSxpQkFBWTtBQUNkLDZCQUFLLE1BQUwsR0FBYyxFQUFkLENBRGM7cUJBQVo7O0FBSU4sMEJBQUssZ0JBQVk7QUFDYiw2QkFBSyxPQUFMLEdBQWUsS0FBZixDQURhO0FBRWIsNkJBQUssY0FBTCxHQUZhO3FCQUFaO2lCQWxDVCxDQWg5QlM7YUFBWCxFQXcvQkEsSUF4L0JBLFdBQUQiLCJmaWxlIjoiY29tcG9uZW50cy9jbGlwcHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0aGFuayB5b3UgU21vcmUgZm9yIHRoaXMgd29uZGVyZnVsIHNjcmlwdCFcbi8vIGh0dHBzOi8vd3d3LnNtb3JlLmNvbS9jbGlwcHktanNcblxuOyhmdW5jdGlvbigpIHtcblxuICAgIHdpbmRvdy5jbGlwcHkgPSB7fTtcbiAgICAvKioqKioqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNsaXBweS5BZ2VudCA9IGZ1bmN0aW9uIChwYXRoLCBkYXRhLCBzb3VuZHMpIHtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcblxuICAgICAgICB0aGlzLl9xdWV1ZSA9IG5ldyBjbGlwcHkuUXVldWUoJC5wcm94eSh0aGlzLl9vblF1ZXVlRW1wdHksIHRoaXMpKTtcblxuICAgICAgICB0aGlzLl9lbCA9ICQoJzxkaXYgY2xhc3M9XCJjbGlwcHlcIj48L2Rpdj4nKS5oaWRlKCk7XG5cbiAgICAgICAgJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5fZWwpO1xuXG4gICAgICAgIHRoaXMuX2FuaW1hdG9yID0gbmV3IGNsaXBweS5BbmltYXRvcih0aGlzLl9lbCwgcGF0aCwgZGF0YSwgc291bmRzKTtcblxuICAgICAgICB0aGlzLl9iYWxsb29uID0gbmV3IGNsaXBweS5CYWxsb29uKHRoaXMuX2VsKTtcblxuICAgICAgICB0aGlzLl9zZXR1cEV2ZW50cygpO1xuICAgIH07XG5cbiAgICBjbGlwcHkuQWdlbnQucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIEFQSSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgLyoqKlxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0geFxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0geVxuICAgICAgICAgKi9cbiAgICAgICAgZ2VzdHVyZUF0OmZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2dldERpcmVjdGlvbih4LCB5KTtcbiAgICAgICAgICAgIHZhciBnQW5pbSA9ICdHZXN0dXJlJyArIGQ7XG4gICAgICAgICAgICB2YXIgbG9va0FuaW0gPSAnTG9vaycgKyBkO1xuXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gdGhpcy5oYXNBbmltYXRpb24oZ0FuaW0pID8gZ0FuaW0gOiBsb29rQW5pbTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBsYXkoYW5pbWF0aW9uKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKioqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbj19IGZhc3RcbiAgICAgICAgICpcbiAgICAgICAgICovXG4gICAgICAgIGhpZGU6ZnVuY3Rpb24gKGZhc3QsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5fZWw7XG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgICAgICAgIGlmIChmYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWwuaGlkZSgpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcGxheUludGVybmFsKCdIaWRlJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGVsLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSxcblxuXG4gICAgICAgIG1vdmVUbzpmdW5jdGlvbiAoeCwgeSwgZHVyYXRpb24pIHtcbiAgICAgICAgICAgIHZhciBkaXIgPSB0aGlzLl9nZXREaXJlY3Rpb24oeCwgeSk7XG4gICAgICAgICAgICB2YXIgYW5pbSA9ICdNb3ZlJyArIGRpcjtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA9PT0gdW5kZWZpbmVkKSBkdXJhdGlvbiA9IDEwMDA7XG5cbiAgICAgICAgICAgIHRoaXMuX2FkZFRvUXVldWUoZnVuY3Rpb24gKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIHNpbXBsZSBjYXNlXG4gICAgICAgICAgICAgICAgaWYgKGR1cmF0aW9uID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsLmNzcyh7dG9wOnksIGxlZnQ6eH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG5vIGFuaW1hdGlvbnNcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzQW5pbWF0aW9uKGFuaW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsLmFuaW1hdGUoe3RvcDp5LCBsZWZ0Onh9LCBkdXJhdGlvbiwgY29tcGxldGUpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gJC5wcm94eShmdW5jdGlvbiAobmFtZSwgc3RhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gd2hlbiBleGl0ZWQsIGNvbXBsZXRlXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gY2xpcHB5LkFuaW1hdG9yLlN0YXRlcy5FWElURUQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBsZXRlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgd2FpdGluZyxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSBjbGlwcHkuQW5pbWF0b3IuU3RhdGVzLldBSVRJTkcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsLmFuaW1hdGUoe3RvcDp5LCBsZWZ0Onh9LCBkdXJhdGlvbiwgJC5wcm94eShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYWZ0ZXIgd2UncmUgZG9uZSB3aXRoIHRoZSBtb3ZlbWVudCwgZG8gdGhlIGV4aXQgYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fYW5pbWF0b3IuZXhpdEFuaW1hdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3BsYXlJbnRlcm5hbChhbmltLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfcGxheUludGVybmFsOmZ1bmN0aW9uIChhbmltYXRpb24sIGNhbGxiYWNrKSB7XG5cbiAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGluc2lkZSBhbiBpZGxlIGFuaW1hdGlvbixcbiAgICAgICAgICAgIGlmICh0aGlzLl9pc0lkbGVBbmltYXRpb24oKSAmJiB0aGlzLl9pZGxlRGZkICYmIHRoaXMuX2lkbGVEZmQuc3RhdGUoKSA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5faWRsZURmZC5kb25lKCQucHJveHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9wbGF5SW50ZXJuYWwoYW5pbWF0aW9uLCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfSwgdGhpcykpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdG9yLnNob3dBbmltYXRpb24oYW5pbWF0aW9uLCBjYWxsYmFjayk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgcGxheTpmdW5jdGlvbiAoYW5pbWF0aW9uLCB0aW1lb3V0LCBjYikge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0FuaW1hdGlvbihhbmltYXRpb24pKSByZXR1cm4gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmICh0aW1lb3V0ID09PSB1bmRlZmluZWQpIHRpbWVvdXQgPSA1MDAwO1xuXG5cbiAgICAgICAgICAgIHRoaXMuX2FkZFRvUXVldWUoZnVuY3Rpb24gKGNvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbXBsZXRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBjYWxsYmFja1xuICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uIChuYW1lLCBzdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IGNsaXBweS5BbmltYXRvci5TdGF0ZXMuRVhJVEVEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNiKSBjYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBpZiBoYXMgdGltZW91dCwgcmVnaXN0ZXIgYSB0aW1lb3V0IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVkKSByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBleGl0IGFmdGVyIHRpbWVvdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2FuaW1hdG9yLmV4aXRBbmltYXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyksIHRpbWVvdXQpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5fcGxheUludGVybmFsKGFuaW1hdGlvbiwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtCb29sZWFuPX0gZmFzdFxuICAgICAgICAgKi9cbiAgICAgICAgc2hvdzpmdW5jdGlvbiAoZmFzdCkge1xuXG4gICAgICAgICAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChmYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZWwuc2hvdygpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVzdW1lKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fb25RdWV1ZUVtcHR5KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5fZWwuY3NzKCd0b3AnKSA9PT0gJ2F1dG8nIHx8ICF0aGlzLl9lbC5jc3MoJ2xlZnQnKSA9PT0gJ2F1dG8nKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlZnQgPSAkKHdpbmRvdykud2lkdGgoKSAqIDAuODtcbiAgICAgICAgICAgICAgICB2YXIgdG9wID0gKCQod2luZG93KS5oZWlnaHQoKSArICQoZG9jdW1lbnQpLnNjcm9sbFRvcCgpKSAqIDAuODtcbiAgICAgICAgICAgICAgICB0aGlzLl9lbC5jc3Moe3RvcDp0b3AsIGxlZnQ6bGVmdH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlc3VtZSgpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGxheSgnU2hvdycpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAgICAgICAgICovXG4gICAgICAgIHNwZWFrOmZ1bmN0aW9uICh0ZXh0LCBob2xkKSB7XG4gICAgICAgICAgICB0aGlzLl9hZGRUb1F1ZXVlKGZ1bmN0aW9uIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JhbGxvb24uc3BlYWsoY29tcGxldGUsIHRleHQsIGhvbGQpO1xuICAgICAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIH0sXG5cblxuICAgICAgICAvKioqXG4gICAgICAgICAqIENsb3NlIHRoZSBjdXJyZW50IGJhbGxvb25cbiAgICAgICAgICovXG4gICAgICAgIGNsb3NlQmFsbG9vbjpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9iYWxsb29uLmhpZGUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxheTpmdW5jdGlvbiAodGltZSkge1xuICAgICAgICAgICAgdGltZSA9IHRpbWUgfHwgMjUwO1xuXG4gICAgICAgICAgICB0aGlzLl9hZGRUb1F1ZXVlKGZ1bmN0aW9uIChjb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX29uUXVldWVFbXB0eSgpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGNvbXBsZXRlLCB0aW1lKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKipcbiAgICAgICAgICogU2tpcHMgdGhlIGN1cnJlbnQgYW5pbWF0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBzdG9wQ3VycmVudDpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRvci5leGl0QW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9iYWxsb29uLmNsb3NlKCk7XG4gICAgICAgIH0sXG5cblxuICAgICAgICBzdG9wOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBxdWV1ZVxuICAgICAgICAgICAgdGhpcy5fcXVldWUuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2FuaW1hdG9yLmV4aXRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuX2JhbGxvb24uaGlkZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAgICAgICAgICogQHJldHVybnMge0Jvb2xlYW59XG4gICAgICAgICAqL1xuICAgICAgICBoYXNBbmltYXRpb246ZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRvci5oYXNBbmltYXRpb24obmFtZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqKlxuICAgICAgICAgKiBHZXRzIGEgbGlzdCBvZiBhbmltYXRpb24gbmFtZXNcbiAgICAgICAgICpcbiAgICAgICAgICogQHJldHVybiB7QXJyYXkuPHN0cmluZz59XG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRpb25zOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmltYXRvci5hbmltYXRpb25zKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqKlxuICAgICAgICAgKiBQbGF5IGEgcmFuZG9tIGFuaW1hdGlvblxuICAgICAgICAgKiBAcmV0dXJuIHtqUXVlcnkuRGVmZXJyZWR9XG4gICAgICAgICAqL1xuICAgICAgICBhbmltYXRlOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhbmltYXRpb25zID0gdGhpcy5hbmltYXRpb25zKCk7XG4gICAgICAgICAgICB2YXIgYW5pbSA9IGFuaW1hdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYW5pbWF0aW9ucy5sZW5ndGgpXTtcbiAgICAgICAgICAgIC8vIHNraXAgaWRsZSBhbmltYXRpb25zXG4gICAgICAgICAgICBpZiAoYW5pbS5pbmRleE9mKCdJZGxlJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hbmltYXRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wbGF5KGFuaW0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFV0aWxzICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICAvKioqXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB4XG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSB5XG4gICAgICAgICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9nZXREaXJlY3Rpb246ZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLl9lbC5vZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5fZWwuaGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgdyA9IHRoaXMuX2VsLndpZHRoKCk7XG5cbiAgICAgICAgICAgIHZhciBjZW50ZXJYID0gKG9mZnNldC5sZWZ0ICsgdyAvIDIpO1xuICAgICAgICAgICAgdmFyIGNlbnRlclkgPSAob2Zmc2V0LnRvcCArIGggLyAyKTtcblxuXG4gICAgICAgICAgICB2YXIgYSA9IGNlbnRlclkgLSB5O1xuICAgICAgICAgICAgdmFyIGIgPSBjZW50ZXJYIC0geDtcblxuICAgICAgICAgICAgdmFyIHIgPSBNYXRoLnJvdW5kKCgxODAgKiBNYXRoLmF0YW4yKGEsIGIpKSAvIE1hdGguUEkpO1xuXG4gICAgICAgICAgICAvLyBMZWZ0IGFuZCBSaWdodCBhcmUgZm9yIHRoZSBjaGFyYWN0ZXIsIG5vdCB0aGUgc2NyZWVuIDotL1xuICAgICAgICAgICAgaWYgKC00NSA8PSByICYmIHIgPCA0NSkgcmV0dXJuICdSaWdodCc7XG4gICAgICAgICAgICBpZiAoNDUgPD0gciAmJiByIDwgMTM1KSByZXR1cm4gJ1VwJztcbiAgICAgICAgICAgIGlmICgxMzUgPD0gciAmJiByIDw9IDE4MCB8fCAtMTgwIDw9IHIgJiYgciA8IC0xMzUpIHJldHVybiAnTGVmdCc7XG4gICAgICAgICAgICBpZiAoLTEzNSA8PSByICYmIHIgPCAtNDUpIHJldHVybiAnRG93bic7XG5cbiAgICAgICAgICAgIC8vIHNhbml0eSBjaGVja1xuICAgICAgICAgICAgcmV0dXJuICdUb3AnO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqIFF1ZXVlIGFuZCBJZGxlIGhhbmRsaW5nICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICAvKioqXG4gICAgICAgICAqIEhhbmRsZSBlbXB0eSBxdWV1ZS5cbiAgICAgICAgICogV2UgbmVlZCB0byB0cmFuc2l0aW9uIHRoZSBhbmltYXRpb24gdG8gYW4gaWRsZSBzdGF0ZVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX29uUXVldWVFbXB0eTpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5faGlkZGVuIHx8IHRoaXMuX2lzSWRsZUFuaW1hdGlvbigpKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgaWRsZUFuaW0gPSB0aGlzLl9nZXRJZGxlQW5pbWF0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLl9pZGxlRGZkID0gJC5EZWZlcnJlZCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9hbmltYXRvci5zaG93QW5pbWF0aW9uKGlkbGVBbmltLCAkLnByb3h5KHRoaXMuX29uSWRsZUNvbXBsZXRlLCB0aGlzKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX29uSWRsZUNvbXBsZXRlOmZ1bmN0aW9uIChuYW1lLCBzdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHN0YXRlID09PSBjbGlwcHkuQW5pbWF0b3IuU3RhdGVzLkVYSVRFRCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkbGVEZmQucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG5cbiAgICAgICAgLyoqKlxuICAgICAgICAgKiBJcyB0aGUgY3VycmVudCBhbmltYXRpb24gaXMgSWRsZT9cbiAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn1cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9pc0lkbGVBbmltYXRpb246ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLl9hbmltYXRvci5jdXJyZW50QW5pbWF0aW9uTmFtZTtcbiAgICAgICAgICAgIHJldHVybiBjICYmIGMuaW5kZXhPZignSWRsZScpID09PSAwO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldHMgYSByYW5kb20gSWRsZSBhbmltYXRpb25cbiAgICAgICAgICogQHJldHVybiB7U3RyaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2dldElkbGVBbmltYXRpb246ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGFuaW1hdGlvbnMgPSB0aGlzLmFuaW1hdGlvbnMoKTtcbiAgICAgICAgICAgIHZhciByID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFuaW1hdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYSA9IGFuaW1hdGlvbnNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGEuaW5kZXhPZignSWRsZScpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHIucHVzaChhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHBpY2sgb25lXG4gICAgICAgICAgICB2YXIgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogci5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuIHJbaWR4XTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBFdmVudHMgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAgIF9zZXR1cEV2ZW50czpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZScsICQucHJveHkodGhpcy5yZXBvc2l0aW9uLCB0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2VsLm9uKCdtb3VzZWRvd24nLCAkLnByb3h5KHRoaXMuX29uTW91c2VEb3duLCB0aGlzKSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2VsLm9uKCdkYmxjbGljaycsICQucHJveHkodGhpcy5fb25Eb3VibGVDbGljaywgdGhpcykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9vbkRvdWJsZUNsaWNrOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wbGF5KCdDbGlja2VkT24nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJlcG9zaXRpb246ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9lbC5pcygnOnZpc2libGUnKSkgcmV0dXJuO1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLl9lbC5vZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBiSCA9IHRoaXMuX2VsLm91dGVySGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgYlcgPSB0aGlzLl9lbC5vdXRlcldpZHRoKCk7XG5cbiAgICAgICAgICAgIHZhciB3VyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgdmFyIHdIID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHNUID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgdmFyIHNMID0gJCh3aW5kb3cpLnNjcm9sbExlZnQoKTtcblxuICAgICAgICAgICAgdmFyIHRvcCA9IG8udG9wIC0gc1Q7XG4gICAgICAgICAgICB2YXIgbGVmdCA9IG8ubGVmdCAtIHNMO1xuICAgICAgICAgICAgdmFyIG0gPSA1O1xuICAgICAgICAgICAgaWYgKHRvcCAtIG0gPCAwKSB7XG4gICAgICAgICAgICAgICAgdG9wID0gbTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKHRvcCArIGJIICsgbSkgPiB3SCkge1xuICAgICAgICAgICAgICAgIHRvcCA9IHdIIC0gYkggLSBtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobGVmdCAtIG0gPCAwKSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IG07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGxlZnQgKyBiVyArIG0gPiB3Vykge1xuICAgICAgICAgICAgICAgIGxlZnQgPSB3VyAtIGJXIC0gbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZWwuY3NzKHtsZWZ0OmxlZnQsIHRvcDp0b3B9KTtcbiAgICAgICAgICAgIC8vIHJlcG9zaXRpb24gYmFsbG9vblxuICAgICAgICAgICAgdGhpcy5fYmFsbG9vbi5yZXBvc2l0aW9uKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX29uTW91c2VEb3duOmZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLl9zdGFydERyYWcoZSk7XG4gICAgICAgIH0sXG5cblxuICAgICAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKiBEcmFnICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgICBfc3RhcnREcmFnOmZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAvLyBwYXVzZSBhbmltYXRpb25zXG4gICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICB0aGlzLl9iYWxsb29uLmhpZGUodHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLl9vZmZzZXQgPSB0aGlzLl9jYWxjdWxhdGVDbGlja09mZnNldChlKTtcblxuICAgICAgICAgICAgdGhpcy5fbW92ZUhhbmRsZSA9ICQucHJveHkodGhpcy5fZHJhZ01vdmUsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5fdXBIYW5kbGUgPSAkLnByb3h5KHRoaXMuX2ZpbmlzaERyYWcsIHRoaXMpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ21vdXNlbW92ZScsIHRoaXMuX21vdmVIYW5kbGUpO1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdtb3VzZXVwJywgdGhpcy5fdXBIYW5kbGUpO1xuXG4gICAgICAgICAgICB0aGlzLl9kcmFnVXBkYXRlTG9vcCA9IHdpbmRvdy5zZXRUaW1lb3V0KCQucHJveHkodGhpcy5fdXBkYXRlTG9jYXRpb24sIHRoaXMpLCAxMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2NhbGN1bGF0ZUNsaWNrT2Zmc2V0OmZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICB2YXIgbW91c2VYID0gZS5wYWdlWDtcbiAgICAgICAgICAgIHZhciBtb3VzZVkgPSBlLnBhZ2VZO1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLl9lbC5vZmZzZXQoKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdG9wOm1vdXNlWSAtIG8udG9wLFxuICAgICAgICAgICAgICAgIGxlZnQ6bW91c2VYIC0gby5sZWZ0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBfdXBkYXRlTG9jYXRpb246ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fZWwuY3NzKHt0b3A6dGhpcy5fdGFyZ2V0WSwgbGVmdDp0aGlzLl90YXJlZ3RYfSk7XG4gICAgICAgICAgICB0aGlzLl9kcmFnVXBkYXRlTG9vcCA9IHdpbmRvdy5zZXRUaW1lb3V0KCQucHJveHkodGhpcy5fdXBkYXRlTG9jYXRpb24sIHRoaXMpLCAxMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2RyYWdNb3ZlOmZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgeCA9IGUuY2xpZW50WCAtIHRoaXMuX29mZnNldC5sZWZ0O1xuICAgICAgICAgICAgdmFyIHkgPSBlLmNsaWVudFkgLSB0aGlzLl9vZmZzZXQudG9wO1xuICAgICAgICAgICAgdGhpcy5fdGFyZWd0WCA9IHg7XG4gICAgICAgICAgICB0aGlzLl90YXJnZXRZID0geTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZmluaXNoRHJhZzpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2RyYWdVcGRhdGVMb29wKTtcbiAgICAgICAgICAgIC8vIHJlbW92ZSBoYW5kbGVzXG4gICAgICAgICAgICAkKHdpbmRvdykub2ZmKCdtb3VzZW1vdmUnLCB0aGlzLl9tb3ZlSGFuZGxlKTtcbiAgICAgICAgICAgICQod2luZG93KS5vZmYoJ21vdXNldXAnLCB0aGlzLl91cEhhbmRsZSk7XG4gICAgICAgICAgICAvLyByZXN1bWUgYW5pbWF0aW9uc1xuICAgICAgICAgICAgdGhpcy5fYmFsbG9vbi5zaG93KCk7XG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMucmVzdW1lKCk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBfYWRkVG9RdWV1ZTpmdW5jdGlvbiAoZnVuYywgc2NvcGUpIHtcbiAgICAgICAgICAgIGlmIChzY29wZSkgZnVuYyA9ICQucHJveHkoZnVuYywgc2NvcGUpO1xuICAgICAgICAgICAgdGhpcy5fcXVldWUucXVldWUoZnVuYyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKiogUGF1c2UgYW5kIFJlc3VtZSAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgICAgcGF1c2U6ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fYW5pbWF0b3IucGF1c2UoKTtcbiAgICAgICAgICAgIHRoaXMuX2JhbGxvb24ucGF1c2UoKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIHJlc3VtZTpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmltYXRvci5yZXN1bWUoKTtcbiAgICAgICAgICAgIHRoaXMuX2JhbGxvb24ucmVzdW1lKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAvKioqKioqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNsaXBweS5BbmltYXRvciA9IGZ1bmN0aW9uIChlbCwgcGF0aCwgZGF0YSwgc291bmRzKSB7XG4gICAgICAgIHRoaXMuX2VsID0gZWw7XG4gICAgICAgIHRoaXMuX2RhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLl9wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5fY3VycmVudEZyYW1lSW5kZXggPSAwO1xuICAgICAgICB0aGlzLl9jdXJyZW50RnJhbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX2V4aXRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY3VycmVudEFuaW1hdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5fZW5kQ2FsbGJhY2sgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuX3N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc291bmRzID0ge307XG4gICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbk5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMucHJlbG9hZFNvdW5kcyhzb3VuZHMpO1xuICAgICAgICB0aGlzLl9vdmVybGF5cyA9IFt0aGlzLl9lbF07XG4gICAgICAgIHZhciBjdXJyID0gdGhpcy5fZWw7XG5cbiAgICAgICAgdGhpcy5fc2V0dXBFbGVtZW50KHRoaXMuX2VsKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCB0aGlzLl9kYXRhLm92ZXJsYXlDb3VudDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaW5uZXIgPSB0aGlzLl9zZXR1cEVsZW1lbnQoJCgnPGRpdj48L2Rpdj4nKSk7XG5cbiAgICAgICAgICAgIGN1cnIuYXBwZW5kKGlubmVyKTtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlzLnB1c2goaW5uZXIpO1xuICAgICAgICAgICAgY3VyciA9IGlubmVyO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNsaXBweS5BbmltYXRvci5wcm90b3R5cGUgPSB7XG4gICAgICAgIF9zZXR1cEVsZW1lbnQ6ZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWVTaXplID0gdGhpcy5fZGF0YS5mcmFtZXNpemU7XG4gICAgICAgICAgICBlbC5jc3MoJ2Rpc3BsYXknLCBcIm5vbmVcIik7XG4gICAgICAgICAgICBlbC5jc3Moe3dpZHRoOmZyYW1lU2l6ZVswXSwgaGVpZ2h0OmZyYW1lU2l6ZVsxXX0pO1xuICAgICAgICAgICAgZWwuY3NzKCdiYWNrZ3JvdW5kJywgXCJ1cmwoJ1wiICsgdGhpcy5fcGF0aCArIFwiL21hcC5wbmcnKSBuby1yZXBlYXRcIik7XG5cbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfSxcblxuICAgICAgICBhbmltYXRpb25zOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByID0gW107XG4gICAgICAgICAgICB2YXIgZCA9IHRoaXMuX2RhdGEuYW5pbWF0aW9ucztcbiAgICAgICAgICAgIGZvciAodmFyIG4gaW4gZCkge1xuICAgICAgICAgICAgICAgIHIucHVzaChuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByO1xuICAgICAgICB9LFxuXG4gICAgICAgIHByZWxvYWRTb3VuZHM6ZnVuY3Rpb24gKHNvdW5kcykge1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuX2RhdGEuc291bmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNuZCA9IHRoaXMuX2RhdGEuc291bmRzW2ldO1xuICAgICAgICAgICAgICAgIHZhciB1cmkgPSBzb3VuZHNbc25kXTtcbiAgICAgICAgICAgICAgICBpZiAoIXVyaSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fc291bmRzW3NuZF0gPSBuZXcgQXVkaW8odXJpKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoYXNBbmltYXRpb246ZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiAhIXRoaXMuX2RhdGEuYW5pbWF0aW9uc1tuYW1lXTtcbiAgICAgICAgfSxcblxuICAgICAgICBleGl0QW5pbWF0aW9uOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX2V4aXRpbmcgPSB0cnVlO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgc2hvd0FuaW1hdGlvbjpmdW5jdGlvbiAoYW5pbWF0aW9uTmFtZSwgc3RhdGVDaGFuZ2VDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5fZXhpdGluZyA9IGZhbHNlO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzQW5pbWF0aW9uKGFuaW1hdGlvbk5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5fZGF0YS5hbmltYXRpb25zW2FuaW1hdGlvbk5hbWVdO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uTmFtZSA9IGFuaW1hdGlvbk5hbWU7XG5cblxuICAgICAgICAgICAgaWYgKCF0aGlzLl9zdGFydGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RlcCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RnJhbWVJbmRleCA9IDA7XG4gICAgICAgICAgICB0aGlzLl9jdXJyZW50RnJhbWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB0aGlzLl9lbmRDYWxsYmFjayA9IHN0YXRlQ2hhbmdlQ2FsbGJhY2s7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuXG5cbiAgICAgICAgX2RyYXc6ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGltYWdlcyA9IFtdO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2N1cnJlbnRGcmFtZSkgaW1hZ2VzID0gdGhpcy5fY3VycmVudEZyYW1lLmltYWdlcyB8fCBbXTtcblxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9vdmVybGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgeHkgPSBpbWFnZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIHZhciBiZyA9IC14eVswXSArICdweCAnICsgLXh5WzFdICsgJ3B4JztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fb3ZlcmxheXNbaV0uY3NzKHsnYmFja2dyb3VuZC1wb3NpdGlvbic6YmcsICdkaXNwbGF5JzonYmxvY2snfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9vdmVybGF5c1tpXS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9nZXROZXh0QW5pbWF0aW9uRnJhbWU6ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXJyZW50QW5pbWF0aW9uKSByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy8gTm8gY3VycmVudCBmcmFtZS4gc3RhcnQgYW5pbWF0aW9uLlxuICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXJyZW50RnJhbWUpIHJldHVybiAwO1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRGcmFtZSA9IHRoaXMuX2N1cnJlbnRGcmFtZTtcbiAgICAgICAgICAgIHZhciBicmFuY2hpbmcgPSB0aGlzLl9jdXJyZW50RnJhbWUuYnJhbmNoaW5nO1xuXG5cbiAgICAgICAgICAgIGlmICh0aGlzLl9leGl0aW5nICYmIGN1cnJlbnRGcmFtZS5leGl0QnJhbmNoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudEZyYW1lLmV4aXRCcmFuY2g7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChicmFuY2hpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcm5kID0gTWF0aC5yYW5kb20oKSAqIDEwMDtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJyYW5jaGluZy5icmFuY2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYnJhbmNoID0gYnJhbmNoaW5nLmJyYW5jaGVzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAocm5kIDw9IGJyYW5jaC53ZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBicmFuY2guZnJhbWVJbmRleDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJuZCAtPSBicmFuY2gud2VpZ2h0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRGcmFtZUluZGV4ICsgMTtcbiAgICAgICAgfSxcblxuICAgICAgICBfcGxheVNvdW5kOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBzID0gdGhpcy5fY3VycmVudEZyYW1lLnNvdW5kO1xuICAgICAgICAgICAgaWYgKCFzKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgYXVkaW8gPSB0aGlzLl9zb3VuZHNbc107XG4gICAgICAgICAgICBpZiAoYXVkaW8pIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfYXRMYXN0RnJhbWU6ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2N1cnJlbnRGcmFtZUluZGV4ID49IHRoaXMuX2N1cnJlbnRBbmltYXRpb24uZnJhbWVzLmxlbmd0aCAtIDE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3N0ZXA6ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXJyZW50QW5pbWF0aW9uKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgbmV3RnJhbWVJbmRleCA9IE1hdGgubWluKHRoaXMuX2dldE5leHRBbmltYXRpb25GcmFtZSgpLCB0aGlzLl9jdXJyZW50QW5pbWF0aW9uLmZyYW1lcy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgIHZhciBmcmFtZUNoYW5nZWQgPSAhdGhpcy5fY3VycmVudEZyYW1lIHx8IHRoaXMuX2N1cnJlbnRGcmFtZUluZGV4ICE9PSBuZXdGcmFtZUluZGV4O1xuICAgICAgICAgICAgdGhpcy5fY3VycmVudEZyYW1lSW5kZXggPSBuZXdGcmFtZUluZGV4O1xuXG4gICAgICAgICAgICAvLyBhbHdheXMgc3dpdGNoIGZyYW1lIGRhdGEsIHVubGVzcyB3ZSdyZSBhdCB0aGUgbGFzdCBmcmFtZSBvZiBhbiBhbmltYXRpb24gd2l0aCBhIHVzZUV4aXRCcmFuY2hpbmcgZmxhZy5cbiAgICAgICAgICAgIGlmICghKHRoaXMuX2F0TGFzdEZyYW1lKCkgJiYgdGhpcy5fY3VycmVudEFuaW1hdGlvbi51c2VFeGl0QnJhbmNoaW5nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJlbnRGcmFtZSA9IHRoaXMuX2N1cnJlbnRBbmltYXRpb24uZnJhbWVzW3RoaXMuX2N1cnJlbnRGcmFtZUluZGV4XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZHJhdygpO1xuICAgICAgICAgICAgdGhpcy5fcGxheVNvdW5kKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2xvb3AgPSB3aW5kb3cuc2V0VGltZW91dCgkLnByb3h5KHRoaXMuX3N0ZXAsIHRoaXMpLCB0aGlzLl9jdXJyZW50RnJhbWUuZHVyYXRpb24pO1xuXG5cbiAgICAgICAgICAgIC8vIGZpcmUgZXZlbnRzIGlmIHRoZSBmcmFtZXMgY2hhbmdlZCBhbmQgd2UgcmVhY2hlZCBhbiBlbmRcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbmRDYWxsYmFjayAmJiBmcmFtZUNoYW5nZWQgJiYgdGhpcy5fYXRMYXN0RnJhbWUoKSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jdXJyZW50QW5pbWF0aW9uLnVzZUV4aXRCcmFuY2hpbmcgJiYgIXRoaXMuX2V4aXRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZW5kQ2FsbGJhY2sodGhpcy5jdXJyZW50QW5pbWF0aW9uTmFtZSwgY2xpcHB5LkFuaW1hdG9yLlN0YXRlcy5XQUlUSU5HKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VuZENhbGxiYWNrKHRoaXMuY3VycmVudEFuaW1hdGlvbk5hbWUsIGNsaXBweS5BbmltYXRvci5TdGF0ZXMuRVhJVEVEKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqKlxuICAgICAgICAgKiBQYXVzZSBhbmltYXRpb24gZXhlY3V0aW9uXG4gICAgICAgICAqL1xuICAgICAgICBwYXVzZTpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2xvb3ApO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKipcbiAgICAgICAgICogUmVzdW1lIGFuaW1hdGlvblxuICAgICAgICAgKi9cbiAgICAgICAgcmVzdW1lOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXAoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBjbGlwcHkuQW5pbWF0b3IuU3RhdGVzID0geyBXQUlUSU5HOjEsIEVYSVRFRDowIH07XG5cbiAgICAvKioqKioqXG4gICAgICpcbiAgICAgKlxuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGNsaXBweS5CYWxsb29uID0gZnVuY3Rpb24gKHRhcmdldEVsKSB7XG4gICAgICAgIHRoaXMuX3RhcmdldEVsID0gdGFyZ2V0RWw7XG5cbiAgICAgICAgdGhpcy5faGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2V0dXAoKTtcbiAgICB9O1xuXG4gICAgY2xpcHB5LkJhbGxvb24ucHJvdG90eXBlID0ge1xuXG4gICAgICAgIFdPUkRfU1BFQUtfVElNRTozMjAsXG4gICAgICAgIENMT1NFX0JBTExPT05fREVMQVk6MjAwMCxcblxuICAgICAgICBfc2V0dXA6ZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB0aGlzLl9iYWxsb29uID0gJCgnPGRpdiBjbGFzcz1cImNsaXBweS1iYWxsb29uXCI+PGRpdiBjbGFzcz1cImNsaXBweS10aXBcIj48L2Rpdj48ZGl2IGNsYXNzPVwiY2xpcHB5LWNvbnRlbnRcIj48L2Rpdj48L2Rpdj4gJykuaGlkZSgpO1xuICAgICAgICAgICAgdGhpcy5fY29udGVudCA9IHRoaXMuX2JhbGxvb24uZmluZCgnLmNsaXBweS1jb250ZW50Jyk7XG5cbiAgICAgICAgICAgICQoZG9jdW1lbnQuYm9keSkuYXBwZW5kKHRoaXMuX2JhbGxvb24pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHJlcG9zaXRpb246ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHNpZGVzID0gWyd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0J107XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lkZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcyA9IHNpZGVzW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uKHMpO1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faXNPdXQoKSkgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX0JBTExPT05fTUFSR0lOOjE1LFxuXG4gICAgICAgIC8qKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHNpZGVcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9wb3NpdGlvbjpmdW5jdGlvbiAoc2lkZSkge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLl90YXJnZXRFbC5vZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5fdGFyZ2V0RWwuaGVpZ2h0KCk7XG4gICAgICAgICAgICB2YXIgdyA9IHRoaXMuX3RhcmdldEVsLndpZHRoKCk7XG5cbiAgICAgICAgICAgIHZhciBiSCA9IHRoaXMuX2JhbGxvb24ub3V0ZXJIZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciBiVyA9IHRoaXMuX2JhbGxvb24ub3V0ZXJXaWR0aCgpO1xuXG4gICAgICAgICAgICB0aGlzLl9iYWxsb29uLnJlbW92ZUNsYXNzKCdjbGlwcHktdG9wLWxlZnQnKTtcbiAgICAgICAgICAgIHRoaXMuX2JhbGxvb24ucmVtb3ZlQ2xhc3MoJ2NsaXBweS10b3AtcmlnaHQnKTtcbiAgICAgICAgICAgIHRoaXMuX2JhbGxvb24ucmVtb3ZlQ2xhc3MoJ2NsaXBweS1ib3R0b20tcmlnaHQnKTtcbiAgICAgICAgICAgIHRoaXMuX2JhbGxvb24ucmVtb3ZlQ2xhc3MoJ2NsaXBweS1ib3R0b20tbGVmdCcpO1xuXG4gICAgICAgICAgICB2YXIgbGVmdCwgdG9wO1xuICAgICAgICAgICAgc3dpdGNoIChzaWRlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndG9wLWxlZnQnOlxuICAgICAgICAgICAgICAgICAgICAvLyByaWdodCBzaWRlIG9mIHRoZSBiYWxsb29uIG5leHQgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGFnZW50XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBvLmxlZnQgKyB3IC0gYlc7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG8udG9wIC0gYkggLSB0aGlzLl9CQUxMT09OX01BUkdJTjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndG9wLXJpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdCBzaWRlIG9mIHRoZSBiYWxsb29uIG5leHQgdG8gdGhlIGxlZnQgc2lkZSBvZiB0aGUgYWdlbnRcbiAgICAgICAgICAgICAgICAgICAgbGVmdCA9IG8ubGVmdDtcbiAgICAgICAgICAgICAgICAgICAgdG9wID0gby50b3AgLSBiSCAtIHRoaXMuX0JBTExPT05fTUFSR0lOO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b20tcmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAvLyByaWdodCBzaWRlIG9mIHRoZSBiYWxsb29uIG5leHQgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIGFnZW50XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBvLmxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG8udG9wICsgaCArIHRoaXMuX0JBTExPT05fTUFSR0lOO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdib3R0b20tbGVmdCc6XG4gICAgICAgICAgICAgICAgICAgIC8vIGxlZnQgc2lkZSBvZiB0aGUgYmFsbG9vbiBuZXh0IHRvIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIGFnZW50XG4gICAgICAgICAgICAgICAgICAgIGxlZnQgPSBvLmxlZnQgKyB3IC0gYlc7XG4gICAgICAgICAgICAgICAgICAgIHRvcCA9IG8udG9wICsgaCArIHRoaXMuX0JBTExPT05fTUFSR0lOO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fYmFsbG9vbi5jc3Moe3RvcDp0b3AsIGxlZnQ6bGVmdH0pO1xuICAgICAgICAgICAgdGhpcy5fYmFsbG9vbi5hZGRDbGFzcygnY2xpcHB5LScgKyBzaWRlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfaXNPdXQ6ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG8gPSB0aGlzLl9iYWxsb29uLm9mZnNldCgpO1xuICAgICAgICAgICAgdmFyIGJIID0gdGhpcy5fYmFsbG9vbi5vdXRlckhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIGJXID0gdGhpcy5fYmFsbG9vbi5vdXRlcldpZHRoKCk7XG5cbiAgICAgICAgICAgIHZhciB3VyA9ICQod2luZG93KS53aWR0aCgpO1xuICAgICAgICAgICAgdmFyIHdIID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuICAgICAgICAgICAgdmFyIHNUID0gJChkb2N1bWVudCkuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICB2YXIgc0wgPSAkKGRvY3VtZW50KS5zY3JvbGxMZWZ0KCk7XG5cbiAgICAgICAgICAgIHZhciB0b3AgPSBvLnRvcCAtIHNUO1xuICAgICAgICAgICAgdmFyIGxlZnQgPSBvLmxlZnQgLSBzTDtcbiAgICAgICAgICAgIHZhciBtID0gNTtcbiAgICAgICAgICAgIGlmICh0b3AgLSBtIDwgMCB8fCBsZWZ0IC0gbSA8IDApIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgaWYgKCh0b3AgKyBiSCArIG0pID4gd0ggfHwgKGxlZnQgKyBiVyArIG0pID4gd1cpIHJldHVybiB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3BlYWs6ZnVuY3Rpb24gKGNvbXBsZXRlLCB0ZXh0LCBob2xkKSB7XG4gICAgICAgICAgICB0aGlzLl9oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgICAgdmFyIGMgPSB0aGlzLl9jb250ZW50O1xuICAgICAgICAgICAgLy8gc2V0IGhlaWdodCB0byBhdXRvXG4gICAgICAgICAgICBjLmhlaWdodCgnYXV0bycpO1xuICAgICAgICAgICAgYy53aWR0aCgnYXV0bycpO1xuICAgICAgICAgICAgLy8gYWRkIHRoZSB0ZXh0XG4gICAgICAgICAgICBjLnRleHQodGV4dCk7XG4gICAgICAgICAgICAvLyBzZXQgaGVpZ2h0XG4gICAgICAgICAgICBjLmhlaWdodChjLmhlaWdodCgpKTtcbiAgICAgICAgICAgIGMud2lkdGgoYy53aWR0aCgpKTtcbiAgICAgICAgICAgIGMudGV4dCgnJyk7XG4gICAgICAgICAgICB0aGlzLnJlcG9zaXRpb24oKTtcblxuICAgICAgICAgICAgdGhpcy5fY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgICAgICAgICAgIHRoaXMuX3NheVdvcmRzKHRleHQsIGhvbGQsIGNvbXBsZXRlKTtcbiAgICAgICAgfSxcblxuICAgICAgICBzaG93OmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9oaWRkZW4pIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX2JhbGxvb24uc2hvdygpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGU6ZnVuY3Rpb24gKGZhc3QpIHtcbiAgICAgICAgICAgIGlmIChmYXN0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmFsbG9vbi5oaWRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9oaWRpbmcgPSB3aW5kb3cuc2V0VGltZW91dCgkLnByb3h5KHRoaXMuX2ZpbmlzaEhpZGVCYWxsb29uLCB0aGlzKSwgdGhpcy5DTE9TRV9CQUxMT09OX0RFTEFZKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZmluaXNoSGlkZUJhbGxvb246ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fYmFsbG9vbi5oaWRlKCk7XG4gICAgICAgICAgICB0aGlzLl9oaWRkZW4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5faGlkaW5nID0gbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICBfc2F5V29yZHM6ZnVuY3Rpb24gKHRleHQsIGhvbGQsIGNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLl9hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5faG9sZCA9IGhvbGQ7XG4gICAgICAgICAgICB2YXIgd29yZHMgPSB0ZXh0LnNwbGl0KC9bXlxcUy1dLyk7XG4gICAgICAgICAgICB2YXIgdGltZSA9IHRoaXMuV09SRF9TUEVBS19USU1FO1xuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5fY29udGVudDtcbiAgICAgICAgICAgIHZhciBpZHggPSAxO1xuXG5cbiAgICAgICAgICAgIHRoaXMuX2FkZFdvcmQgPSAkLnByb3h5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2FjdGl2ZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGlmIChpZHggPiB3b3Jkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5faG9sZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZWwudGV4dCh3b3Jkcy5zbGljZSgwLCBpZHgpLmpvaW4oJyAnKSk7XG4gICAgICAgICAgICAgICAgICAgIGlkeCsrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9sb29wID0gd2luZG93LnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLl9hZGRXb3JkLCB0aGlzKSwgdGltZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgICAgIHRoaXMuX2FkZFdvcmQoKTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGNsb3NlOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9ob2xkID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2hvbGQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBhdXNlOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fbG9vcCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faGlkaW5nKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLl9oaWRpbmcpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2hpZGluZyA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzdW1lOmZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9hZGRXb3JkKSAgdGhpcy5fYWRkV29yZCgpO1xuICAgICAgICAgICAgdGhpcy5faGlkaW5nID0gd2luZG93LnNldFRpbWVvdXQoJC5wcm94eSh0aGlzLl9maW5pc2hIaWRlQmFsbG9vbiwgdGhpcyksIHRoaXMuQ0xPU0VfQkFMTE9PTl9ERUxBWSk7XG4gICAgICAgIH1cblxuXG4gICAgfTtcblxuICAgIGNsaXBweS5CQVNFX1BBVEggPSAnLy9zMy5hbWF6b25hd3MuY29tL2NsaXBweS5qcy9BZ2VudHMvJztcblxuICAgIGNsaXBweS5sb2FkID0gZnVuY3Rpb24gKG5hbWUsIHN1Y2Nlc3NDYiwgZmFpbENiKSB7XG4gICAgICAgIHZhciBwYXRoID0gY2xpcHB5LkJBU0VfUEFUSCArIG5hbWU7XG5cbiAgICAgICAgdmFyIG1hcERmZCA9IGNsaXBweS5sb2FkLl9sb2FkTWFwKHBhdGgpO1xuICAgICAgICB2YXIgYWdlbnREZmQgPSBjbGlwcHkubG9hZC5fbG9hZEFnZW50KG5hbWUsIHBhdGgpO1xuICAgICAgICB2YXIgc291bmRzRGZkID0gY2xpcHB5LmxvYWQuX2xvYWRTb3VuZHMobmFtZSwgcGF0aCk7XG5cbiAgICAgICAgdmFyIGRhdGE7XG4gICAgICAgIGFnZW50RGZkLmRvbmUoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGRhdGEgPSBkO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgc291bmRzO1xuXG4gICAgICAgIHNvdW5kc0RmZC5kb25lKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICBzb3VuZHMgPSBkO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyB3cmFwcGVyIHRvIHRoZSBzdWNjZXNzIGNhbGxiYWNrXG4gICAgICAgIHZhciBjYiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhID0gbmV3IGNsaXBweS5BZ2VudChwYXRoLCBkYXRhLHNvdW5kcyk7XG4gICAgICAgICAgICBzdWNjZXNzQ2IoYSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgJC53aGVuKG1hcERmZCwgYWdlbnREZmQsIHNvdW5kc0RmZCkuZG9uZShjYikuZmFpbChmYWlsQ2IpO1xuICAgIH07XG5cbiAgICBjbGlwcHkubG9hZC5fbWFwcyA9IHt9O1xuICAgIGNsaXBweS5sb2FkLl9sb2FkTWFwID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgdmFyIGRmZCA9IGNsaXBweS5sb2FkLl9tYXBzW3BhdGhdO1xuICAgICAgICBpZiAoZGZkKSByZXR1cm4gZGZkO1xuXG4gICAgICAgIC8vIHNldCBkZmQgaWYgbm90IGRlZmluZWRcbiAgICAgICAgZGZkID0gY2xpcHB5LmxvYWQuX21hcHNbcGF0aF0gPSAkLkRlZmVycmVkKCk7XG5cbiAgICAgICAgdmFyIHNyYyA9IHBhdGggKyAnL21hcC5wbmcnO1xuICAgICAgICB2YXIgaW1nID0gbmV3IEltYWdlKCk7XG5cbiAgICAgICAgaW1nLm9ubG9hZCA9IGRmZC5yZXNvbHZlO1xuICAgICAgICBpbWcub25lcnJvciA9IGRmZC5yZWplY3Q7XG5cbiAgICAgICAgLy8gc3RhcnQgbG9hZGluZyB0aGUgbWFwO1xuICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuXG4gICAgICAgIHJldHVybiBkZmQucHJvbWlzZSgpO1xuICAgIH07XG5cbiAgICBjbGlwcHkubG9hZC5fc291bmRzID0ge307XG5cbiAgICBjbGlwcHkubG9hZC5fbG9hZFNvdW5kcyA9IGZ1bmN0aW9uIChuYW1lLCBwYXRoKSB7XG4gICAgICAgIHZhciBkZmQgPSBjbGlwcHkubG9hZC5fc291bmRzW25hbWVdO1xuICAgICAgICBpZiAoZGZkKSByZXR1cm4gZGZkO1xuXG4gICAgICAgIC8vIHNldCBkZmQgaWYgbm90IGRlZmluZWRcbiAgICAgICAgZGZkID0gY2xpcHB5LmxvYWQuX3NvdW5kc1tuYW1lXSA9ICQuRGVmZXJyZWQoKTtcblxuICAgICAgICB2YXIgYXVkaW8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhdWRpbycpO1xuICAgICAgICB2YXIgY2FuUGxheU1wMyA9ICEhYXVkaW8uY2FuUGxheVR5cGUgJiYgXCJcIiAhPSBhdWRpby5jYW5QbGF5VHlwZSgnYXVkaW8vbXBlZycpO1xuICAgICAgICB2YXIgY2FuUGxheU9nZyA9ICEhYXVkaW8uY2FuUGxheVR5cGUgJiYgXCJcIiAhPSBhdWRpby5jYW5QbGF5VHlwZSgnYXVkaW8vb2dnOyBjb2RlY3M9XCJ2b3JiaXNcIicpO1xuXG4gICAgICAgIGlmICghY2FuUGxheU1wMyAmJiAhY2FuUGxheU9nZykge1xuICAgICAgICAgICAgZGZkLnJlc29sdmUoe30pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHNyYyA9IHBhdGggKyAoY2FuUGxheU1wMyA/ICcvc291bmRzLW1wMy5qcycgOiAnL3NvdW5kcy1vZ2cuanMnKTtcbiAgICAgICAgICAgIC8vIGxvYWRcbiAgICAgICAgICAgIGNsaXBweS5sb2FkLl9sb2FkU2NyaXB0KHNyYyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGZkLnByb21pc2UoKVxuICAgIH07XG5cblxuICAgIGNsaXBweS5sb2FkLl9kYXRhID0ge307XG4gICAgY2xpcHB5LmxvYWQuX2xvYWRBZ2VudCA9IGZ1bmN0aW9uIChuYW1lLCBwYXRoKSB7XG4gICAgICAgIHZhciBkZmQgPSBjbGlwcHkubG9hZC5fZGF0YVtuYW1lXTtcbiAgICAgICAgaWYgKGRmZCkgcmV0dXJuIGRmZDtcblxuICAgICAgICBkZmQgPSBjbGlwcHkubG9hZC5fZ2V0QWdlbnREZmQobmFtZSk7XG5cbiAgICAgICAgdmFyIHNyYyA9IHBhdGggKyAnL2FnZW50LmpzJztcblxuICAgICAgICBjbGlwcHkubG9hZC5fbG9hZFNjcmlwdChzcmMpO1xuXG4gICAgICAgIHJldHVybiBkZmQucHJvbWlzZSgpO1xuICAgIH07XG5cbiAgICBjbGlwcHkubG9hZC5fbG9hZFNjcmlwdCA9IGZ1bmN0aW9uIChzcmMpIHtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdzcmMnLCBzcmMpO1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCdhc3luYycsICdhc3luYycpO1xuICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvamF2YXNjcmlwdCcpO1xuXG4gICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICB9O1xuXG4gICAgY2xpcHB5LmxvYWQuX2dldEFnZW50RGZkID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgdmFyIGRmZCA9IGNsaXBweS5sb2FkLl9kYXRhW25hbWVdO1xuICAgICAgICBpZiAoIWRmZCkge1xuICAgICAgICAgICAgZGZkID0gY2xpcHB5LmxvYWQuX2RhdGFbbmFtZV0gPSAkLkRlZmVycmVkKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRmZDtcbiAgICB9O1xuXG4gICAgY2xpcHB5LnJlYWR5ID0gZnVuY3Rpb24gKG5hbWUsIGRhdGEpIHtcbiAgICAgICAgdmFyIGRmZCA9IGNsaXBweS5sb2FkLl9nZXRBZ2VudERmZChuYW1lKTtcbiAgICAgICAgZGZkLnJlc29sdmUoZGF0YSk7XG4gICAgfTtcblxuICAgIGNsaXBweS5zb3VuZHNSZWFkeSA9IGZ1bmN0aW9uIChuYW1lLCBkYXRhKSB7XG4gICAgICAgIHZhciBkZmQgPSBjbGlwcHkubG9hZC5fc291bmRzW25hbWVdO1xuICAgICAgICBpZiAoIWRmZCkge1xuICAgICAgICAgICAgZGZkID0gY2xpcHB5LmxvYWQuX3NvdW5kc1tuYW1lXSA9ICQuRGVmZXJyZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRmZC5yZXNvbHZlKGRhdGEpO1xuICAgIH07XG5cbiAgICAvKioqKioqXG4gICAgICogVGlueSBRdWV1ZVxuICAgICAqXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICovXG4gICAgY2xpcHB5LlF1ZXVlID0gZnVuY3Rpb24gKG9uRW1wdHlDYWxsYmFjaykge1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgICAgICB0aGlzLl9vbkVtcHR5Q2FsbGJhY2sgPSBvbkVtcHR5Q2FsbGJhY2s7XG4gICAgfTtcblxuICAgIGNsaXBweS5RdWV1ZS5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8qKipcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtmdW5jdGlvbihGdW5jdGlvbil9IGZ1bmNcbiAgICAgICAgICogQHJldHVybnMge2pRdWVyeS5EZWZlcnJlZH1cbiAgICAgICAgICovXG4gICAgICAgIHF1ZXVlOmZ1bmN0aW9uIChmdW5jKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKGZ1bmMpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5fcXVldWUubGVuZ3RoID09PSAxICYmICF0aGlzLl9hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9wcm9ncmVzc1F1ZXVlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3Byb2dyZXNzUXVldWU6ZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAvLyBzdG9wIGlmIG5vdGhpbmcgbGVmdCBpbiBxdWV1ZVxuICAgICAgICAgICAgaWYgKCF0aGlzLl9xdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vbkVtcHR5Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBmID0gdGhpcy5fcXVldWUuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMuX2FjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIC8vIGV4ZWN1dGUgZnVuY3Rpb25cbiAgICAgICAgICAgIHZhciBjb21wbGV0ZUZ1bmN0aW9uID0gJC5wcm94eSh0aGlzLm5leHQsIHRoaXMpO1xuICAgICAgICAgICAgZihjb21wbGV0ZUZ1bmN0aW9uKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjbGVhcjpmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZSA9IFtdO1xuICAgICAgICB9LFxuXG4gICAgICAgIG5leHQ6ZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5fYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLl9wcm9ncmVzc1F1ZXVlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59LmNhbGwodGhpcykpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
