export default async function decorate(block) {
  block.appendChild(document.createTextNode('hello world'));
}
