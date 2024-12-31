const checkSquare = nums =>
	Math.sqrt(nums.reduce((acc, cur, i) => acc + cur, 0)) % 1 == 0

const buildArr = n => Array.from(Array(n)).map((a, i) => i + 1)

function square_sums_row(n) {
	const used = {}
	const squareSums = {}
	const arr = buildArr(n)

	arr.forEach((num, i) => {
		const sums = []
		arr.forEach((innerNum, j) => {
			if (num !== innerNum) {
				sums.push(num + innerNum)
			}
		})

		sums.forEach((sum, j) => {
			if (Math.sqrt(sum) % 1 == 0) {
				if (!squareSums[num]) {
					squareSums[num] = {
						possiblePairs: [sum - num],
					}
				} else {
					squareSums[num].possiblePairs.push(sum - num)
				}
			}
		})
	})

	return [1]
}

square_sums_row(15)
