import { getStrings } from './kata'

// let testFunction = (city: String) => getStrings(city)
// testFunction = jest.fn()

// example mock implementation
// test('function returns string', () => {
// 	testFunction('chicago')
// 	expect(testFunction).toHaveBeenCalledWith('chicago')
// })

test('function exists', () => {
	expect(getStrings).toBeDefined()
})

test('function returns string', () => {
	expect(typeof getStrings('Chicago')).toBe('string')
})

test('function returns correct values', () => {
	expect(getStrings('Chicago')).toBe('c:**,h:*,i:*,a:*,g:*,o:*')
	expect(getStrings('Bangkok')).toBe('b:*,a:*,n:*,g:*,k:**,o:*')
	expect(getStrings('Las Vegas')).toBe('l:*,a:**,s:**,v:*,e:*,g:*')
})
