function past(h, m, s) {
  let hour = 3600000 * h;
  let minute = 60000 * m;
  let seconde = 1000 * s;

  return hour + minute + seconde;
}

//   autre solution

function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
}
