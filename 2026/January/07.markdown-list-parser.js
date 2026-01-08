function parseUnorderedList(markdown) {
  const splitted = markdown.split('\n');
  const newList = splitted.map((item, index) => {
    const newItem = item
      .replace('- ', '')
      .trimStart();
    if (index === 0) {
      return `<ul><li>${newItem}</li>`;
    }

    if (index === splitted.length - 1) {
      return `<li>${newItem}</li></ul>`;
    }

    return `<li>${newItem}</li>`;
  }).join("");
  return newList;
}

parseUnorderedList('- Item A\n- Item B'); // should return "<ul><li>Item A</li><li>Item B</li></ul>".
parseUnorderedList('-  JavaScript\n-  Python'); // should return "<ul><li>JavaScript</li><li>Python</li></ul>".
parseUnorderedList(
  '- 2 C Flour\n- 1/2 C Sugar\n- 1 Tsp Vanilla'
); // should return "<ul><li>2 C Flour</li><li>1/2 C Sugar</li><li>1 Tsp Vanilla</li></ul>".
parseUnorderedList('- A-1\n- A-2\n- B-1'); // should return "<ul><li>A-1</li><li>A-2</li><li>B-1</li></ul>".
