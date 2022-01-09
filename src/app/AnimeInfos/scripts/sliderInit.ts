function sliderInit (ref: HTMLDivElement): void {
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  ref.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - ref.offsetLeft;
    scrollLeft = ref.scrollLeft;
  });
  ref.addEventListener('mouseleave', () => isDown = false);
  ref.addEventListener('mouseup', () => isDown = false);
  ref.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - ref.offsetLeft;
    const walk = (x - startX) * 3;
    ref.scrollLeft = scrollLeft - walk;
  });
}
export default sliderInit;