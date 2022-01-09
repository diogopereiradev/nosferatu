function multipleStars (n: number): string {
  const shadows: Array<string>  = [];

  for (let i = 0; i < n; i++)
    shadows.push(`${Math.random() * window.innerWidth}px ${Math.random() * window.innerHeight}px #fff`);
  return shadows.join(', ');
}
export default multipleStars;