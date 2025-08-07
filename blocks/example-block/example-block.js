export default async function decorate(block) {
  console.log('huh?', block);
  block.innerHTML = 'hello world';
}
