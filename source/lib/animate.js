import throttle from 'lodash.throttle';

class Animate {
	constructor(){
		this.elements = document.querySelectorAll(Animate.selector);
		this.elements = [...Array.from(document.querySelectorAll(Animate.selector))];

		window.addEventListener('scroll', throttle(this.handleScroll.bind(this), 100))
	}

	handleScroll(){
		if(!this.elements.length) return;

		this.elements.forEach(element =>this.animateIfInView(element));
	}

	animateIfInView(element){
		if(!this.isInView(element)) return;

		element.classList.add('is-in-view');
		this.elements.splice(this.elements.indexOf(element), 1);
	}

	isInView(element){
		return window.pageYOffset > element.offsetTop - window.innerHeight/2;
	}

	static selector = '[data-js-animate-on-view]';
}


export default Animate;