document.body.replaceChildren();
document.head.replaceChildren();

AttributesRemover(document.body);
AttributesRemover(document.head);

const stdHeader = new StdHeader();
stdHeader.Init();

console.clear();
