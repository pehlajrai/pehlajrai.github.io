;(function () {
	'use strict';

	var boxes = document.querySelectorAll('.animate-box');
	if (!boxes.length) return;

	if (!('IntersectionObserver' in window)) {
		boxes.forEach(function (el) { el.classList.add('in-view'); });
		return;
	}

	var observer = new IntersectionObserver(function (entries) {
		entries.forEach(function (entry) {
			if (entry.isIntersecting) {
				entry.target.classList.add('in-view');
			} else {
				entry.target.classList.remove('in-view');
			}
		});
	}, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });

	boxes.forEach(function (el) { observer.observe(el); });
}());
