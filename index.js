import words from './words.js';
import sample from 'lodash.sample';
export default function (options = {}) {
    if (options.fragment == null) {
        return `${sample(words.start)} ${sample(words.end)}`;
    }
    return sample(words[options.fragment]);
}
