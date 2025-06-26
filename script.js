// WELCOMEアニメーション
window.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('welcome-title');
  if (!title) return;
  const text = title.textContent;
  title.textContent = '';
  for (let i = 0; i < text.length; i++) {
    const span = document.createElement('span');
    span.textContent = text[i];
    span.className = 'welcome-char';
    span.style.opacity = 0;
    span.style.display = 'inline-block';
    span.style.transform = 'translateY(30px)';
    title.appendChild(span);
  }
  const chars = title.querySelectorAll('.welcome-char');
  chars.forEach((span, i) => {
    setTimeout(() => {
      span.animate([
        { opacity: 0, transform: 'translateY(30px)' },
        { opacity: 1, transform: 'translateY(0)' }
      ], {
        duration: 500,
        fill: 'forwards',
        easing: 'ease-out',
        delay: 0
      });
      span.style.opacity = 1;
      span.style.transform = 'translateY(0)';
    }, i * 120);
  });
});
  