export const drawCanvas = (canvas: HTMLCanvasElement): void => {
  const ctx = canvas.getContext('2d');

  if (!canvas || !ctx) {
    return;
  }

  canvas.height = window.innerHeight;
  canvas.width = window.innerWidth;

  const values = ['1', '0'];
  const fontSize = 10;

  let columns = canvas.width / fontSize;
  let drops: number[] = [];
  for (let x = 0; x < columns; x += 1) {
    drops[x] = 1;
  }

  window.addEventListener('resize', () => {
    if (
      canvas.height !== window.innerHeight ||
      canvas.width !== window.innerWidth
    ) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

      columns = canvas.width / fontSize;
      drops = [];
      for (let x = 0; x < columns; x += 1) {
        drops[x] = 1;
      }
    }
  });

  const draw = (): void => {
    ctx.fillStyle = 'rgba(17, 24, 39, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#10b981';
    ctx.font = `${fontSize}px arial`;

    for (let i = 0; i < drops.length; i += 1) {
      const text = values[Math.floor(Math.random() * values.length)];
      ctx.fillText(text, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > canvas.height && Math.random() > 0.975)
        drops[i] = 0;

      drops[i] += 1;
    }
  };

  setInterval(draw, 50);
};
