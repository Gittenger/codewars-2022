import { reverse } from './kata'

// let testFunction = (city: String) => getStrings(city)
// testFunction = jest.fn()

// example mock implementation
// test('function returns string', () => {
// 	testFunction('chicago')
// 	expect(testFunction).toHaveBeenCalledWith('chicago')
// })

test('function exists', () => {
	expect(reverse).toBeDefined()
})

test('function returns string', () => {
	expect(typeof reverse('our code')).toBe('string')
})

test('function returns correct vals', () => {
	expect(reverse('codewars')).toBe('srawedoc')
	expect(reverse('your code')).toBe('edoc ruoy')
	expect(reverse('your code rocks')).toBe('skco redo cruoy')
	expect(reverse('i love codewars')).toBe('s rawe docevoli')
})
