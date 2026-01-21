function toConsonantCase(str) {
  let result = '';
  const vowels = 'aeiouAEIOU'
  for (const st of str) {
    if (vowels.includes(st)) {
      result+= st.toLowerCase()
    } else if (st === '-') {
      result+= '_'
    } else {
      result+= st.toUpperCase()
    }
  }
  return result;
}

// Turn into examples
console.log(toConsonantCase("helloworld")); // should return "HeLLoWoRLD"
console.log(toConsonantCase("HELLOWORLD")); // should return "HeLLoWoRLD"
console.log(toConsonantCase("_hElLO-WOrlD-")); // should return "_HeLLo_WoRLD_"
console.log(toConsonantCase("_~-generic_~-variable_~-name_~-here-~_")); // should return "_~_GeNeRiC_~_VaRiaBLe_~_NaMe_~_HeRe_~_"
