'use strict';

function get_letter_interval_2(number_a, number_b) {
  let result = [], rtmp = [''], ctmp = [];
  for (let i = 97; i < 123; i++) {
    rtmp.push(String.fromCharCode(i));
    ctmp.push(String.fromCharCode(i));
  }

  if (number_a >= number_b) {
    for (let i = number_a - 1; i >= number_b - 1; i--) {
      let a = parseInt(i / 26);
      let b = i % 26;
      result.push(rtmp[a] + ctmp[b])
    }
  } else {
    for (let i = number_a - 1; i < number_b; i++) {
      let a = parseInt(i / 26);
      let b = i % 26;
      result.push(rtmp[a] + ctmp[b])
    }
  }

  return result;
}
module.exports = get_letter_interval_2;
