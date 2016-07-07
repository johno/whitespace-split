import test from 'ava'
import whitespaceSplit from './'

test('whitespace-split splits a string into words', t => {
  t.deepEqual(
    whitespaceSplit("\t\n this is\na\t\tgroup of words\n\t\n"),
    ['this', 'is', 'a', 'group', 'of', 'words']
  )
})

test('whitespace-split handles blank strings', t => {
  t.deepEqual(whitespaceSplit('    '), [])
})

test('whitespace-split handles empty strings', t => {
  t.deepEqual(whitespaceSplit(''), [])
})
