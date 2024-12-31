export function getStrings(city: String): String {
	const iterator = city[Symbol.iterator]()
	let char = iterator.next()
	const dict = {}

	while (!char.done) {
		const lower = char.value.toLowerCase()

		if (char.value !== ' ') {
			if (dict[lower]) {
				dict[lower] += '*'
			} else {
				dict[lower] = '*'
			}
		}

		char = iterator.next()
	}

	let result = ''

	for (const char in dict) {
		result += `${char}:${dict[char]},`
	}

	return result.slice(0, -1)
}

/* 
TIME
O(2n) -> O(n)

SPACE
O(n)
*/
