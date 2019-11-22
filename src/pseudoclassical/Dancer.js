if (typeof window === 'undefined') {
	var jsdom = require('jsdom');
	var { JSDOM } = jsdom;
	var { document } = new JSDOM('').window;
} // you don't have to worry about this code. this is for testing.

// blinkyDancer를 pseudoclassical한 방식으로 리팩토링하세요
// 참고로, constructor는 대문자로 이름을 시작하는 것이 관례입니다
function Dancer(top, left, timeBetweenSteps) {
	// your code here
	this.$node = createDancerElement();
	this.timeBetweenSteps = timeBetweenSteps;
	this.step();
	this.setPostion(top, left);
}

//메소드 생성
Dancer.prototype.step = function() {
	setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

Dancer.prototype.setPostion = function(top, left) {
	Object.assign(this.$node.style, {
		top: `${top}px`,
		left: `${left}px`,
	});
};

const createDancerElement = () => {
	let elDancer = document.createElement('span');
	elDancer.className = 'dancer';
	return elDancer;
};

// you don't have to worry about this code. this is for testing.
if (typeof window === 'undefined') {
	module.exports = Dancer;
}
