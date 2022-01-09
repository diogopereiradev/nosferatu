function start (ref: HTMLDivElement, amount: number): void {
  const dropamount: number = window.innerWidth / 100 * amount / 20;
  let i = 0;

  while (i < dropamount) {
    const drop: HTMLElement = document.createElement('i');

    const size: number = Math.random() * 2;
    const posX: number = Math.floor(Math.random() * window.innerWidth);
    const delay: number = Math.random() * -20;
    const duration: number = Math.random() * 5;

    drop.style.width = `${0.2 + size}px`;
    drop.style.left = `${posX}px`;
    drop.style.animationDelay = `${delay}s`;
    drop.style.animationDuration = `${1 + duration}s`;
    ref.appendChild(drop);
    i++;
  }
}
export default start;