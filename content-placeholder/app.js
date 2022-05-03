const itemsContent = [
  '<img src="https://i.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA" alt="">',
  'Lorem ipsum dolor sit amet',
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis ',
  '<img src="https://i.picsum.photos/id/723/200/200.jpg?hmac=_sO25hgEAx99R1W5nOFsCmrSDTpHGmXIEXDywKpjfXE" alt="">',
  'John Doe',
  'Oct 08, 2020',
];
const itemsContentEl = document.querySelectorAll('.item-content');
const animatedBg = document.querySelectorAll('.animated-bg');
const bgText = document.querySelectorAll('.bg-text');
function renderContent() {
  for (let i = 0; i < animatedBg.length; i++) {
    animatedBg[i].classList.remove('animated-bg');
  }
  for (let i = 0; i < bgText.length; i++) {
    bgText[i].classList.remove('bg-text');
  }
  for (let i = 0; i < itemsContentEl.length; i++) {
    itemsContentEl[i].innerHTML = itemsContent[i];
  }
}
setTimeout(renderContent, 2000);
