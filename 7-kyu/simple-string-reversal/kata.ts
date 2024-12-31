export function reverse(str: String): String {
	let result = ''

	for (let i = str.length - 1; i >= 0; i--) {
		if (str.charAt(i) !== ' ') result += str.charAt(i)
	}

	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === ' ')
			result = String.prototype.concat(
				result.slice(0, i),
				' ',
				result.slice(i, str.length - 1)
			)
	}

	return result
}

/* 
TIME
O(2n) -> O(n)

SPACE
O(n)
*/
