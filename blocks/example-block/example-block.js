export default async function decorate(block) {
  window.addEventListener('load', () => {
    console.log('huh?', block);
  });
  block.innerHTML = 'hello world';
}
