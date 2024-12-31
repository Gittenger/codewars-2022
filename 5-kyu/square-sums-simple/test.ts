import { square_sums_row } from './kata'

// let testFunction = (city: String) => getStrings(city)
// testFunction = jest.fn()

// example mock implementation
// test('function returns string', () => {
// 	testFunction('chicago')
// 	expect(testFunction).toHaveBeenCalledWith('chicago')
// })

test('function exists', () => {
	expect(square_sums_row).toBeDefined()
})

test('function returns arr', () => {
	expect(typeof square_sums_row(4)).toBe('object')
})

// test('function returns correct values', () => {
// 	expect(square_sums_row('Chicago')).toBe('c:**,h:*,i:*,a:*,g:*,o:*')
// 	expect(square_sums_row('Bangkok')).toBe('b:*,a:*,n:*,g:*,k:**,o:*')
// 	expect(square_sums_row('Las Vegas')).toBe('l:*,a:**,s:**,v:*,e:*,g:*')
// })
