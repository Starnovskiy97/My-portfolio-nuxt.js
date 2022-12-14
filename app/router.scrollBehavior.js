export default function (to) {
	if (to.hash) {
		return {
			selector: to.hash,
			behavior: 'smooth',
		}
	}
}





