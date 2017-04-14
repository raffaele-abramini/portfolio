function ease(t) { return t*(2-t) }

let initialPageScroll, initialTime;

export default function scrollTo(destination, duration, isRecursivelyInvoked){
	const now = window.performance.now();

	if(!isRecursivelyInvoked) {
		initialTime = now;
		initialPageScroll = window.pageYOffset;
	}

	const n = ease((now - initialTime) / duration);
	window.scrollTo(0, initialPageScroll + n * (destination - initialPageScroll));

	if(now > initialTime + duration) return window.scrollTo(0, destination);

	window.requestAnimationFrame(scrollTo.bind(null, destination, duration, true));
}