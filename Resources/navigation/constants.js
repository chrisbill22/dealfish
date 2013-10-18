var IN_ANIMATION_SPEED = 500;
var OUT_ANIMATION_SPEED = 500;

var startX_left;
var deltaX_left = 0;
var startX_right;
var deltaX_right = 0;

var transitionViewOutAnimation = Ti.UI.createAnimation({
	transform : Ti.UI.create2DMatrix().scale(0.5, 0.5),
	duration : 500,
	opacity : 0,
	duration : OUT_ANIMATION_SPEED
});