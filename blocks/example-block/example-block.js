export default async function decorate(block) {
  console.log(block);
  block.innerHTML = 'hello world';
}
