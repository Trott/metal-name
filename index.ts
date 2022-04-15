import words from './words.js'
import sample from 'lodash.sample'

interface Options {
  fragment?: 'start' | 'end'
}

export default function (options: Options = {}): string {
  if (options.fragment == null) {
    return `${sample(words.start) as string} ${sample(words.end) as string}`
  }
  return sample(words[options.fragment]) as string
}
