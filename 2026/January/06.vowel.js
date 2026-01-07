function vowelCase(str) {
  return str.split("").map(st => {
    if (st.match(/[aeiouAEIOU]/)) {
      return st.toUpperCase()
    }
    return st.toLowerCase()
  }).join('');
}