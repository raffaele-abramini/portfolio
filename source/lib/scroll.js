function ease(t) { return t*(2-t) }

let initialPageScroll, initialTime;

export default function scrollTo(destination, duration, callback, isRecursivelyInvoked){
	const now = global.performance.now();

	if(!isRecursivelyInvoked) {
		initialTime = now;
		initialPageScroll = global.pageYOffset;
	}

	const n = ease((now - initialTime) / duration);
	global.scrollTo(0, initialPageScroll + n * (destination - initialPageScroll));

	if(now > initialTime + duration) return global.scrollTo(0, destination) && callback();

	global.requestAnimationFrame(scrollTo.bind(null, destination, duration, callback, true));
}