import { useState, useEffect } from 'react';

const useIntersectionObserver = (
	elementRef:any,
	{ threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false }
) => {
	const [entry, setEntry]: any= useState();

	const frozen = entry?.isIntersecting && freezeOnceVisible;

	const updateEntry = ([entry]:any) => {
		setEntry(entry);
	};

	useEffect(() => {
		const node = elementRef?.current;
		const hasIOSupport = !!window.IntersectionObserver;

		if (!hasIOSupport || frozen || !node) return;

		const observerParams = { threshold, root, rootMargin };
		const observer = new IntersectionObserver(updateEntry, observerParams);

		observer.observe(node);

		return () => observer.disconnect();
	}, [elementRef, threshold, root, rootMargin, frozen]);

	return entry;
}

export default useIntersectionObserver;