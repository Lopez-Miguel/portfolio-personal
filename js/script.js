  // año dinámico
  document.getElementById('year').textContent = new Date().getFullYear();
  // borde del nav al hacer scroll
  const header = document.querySelector('header');
  const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, {passive:true});
