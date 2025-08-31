 // Floating cart emoji animation for Add to Cart buttons
const btn = document.getElementById('shakeBtn');
  btn.addEventListener('click', function(e) {
    btn.classList.add('shake');
    setTimeout(() => btn.classList.remove('shake'), 500);
    
    alert('Thank you for your purchase!');
  });


document.addEventListener('DOMContentLoaded', function() {
  const cartLink = document.querySelector('a[href="page2.html"]');
  const addBtns = document.querySelectorAll('.item button');

  addBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();

      // Toggle button style
      btn.classList.toggle('toggled');

      // Floating cart emoji animation
      const btnRect = btn.getBoundingClientRect();
      const cartRect = cartLink.getBoundingClientRect();

      const emoji = document.createElement('div');
      emoji.className = 'cart-float';
      emoji.textContent = '🛒';
      emoji.style.left = btnRect.left + btnRect.width / 2 + 'px';
      emoji.style.top = btnRect.top + 'px';

      document.body.appendChild(emoji);

      emoji.offsetWidth; // Force reflow
      emoji.style.transform = `translate(${cartRect.left - btnRect.left}px, ${cartRect.top - btnRect.top}px) scale(0.5)`;
      emoji.style.opacity = '0';

      setTimeout(() => emoji.remove(), 800);
    });
  });
});

// Dynamic star rating
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.stars').forEach(starsDiv => {
    const stars = starsDiv.querySelectorAll('.star');
    let rating = parseInt(starsDiv.getAttribute('data-rating')) || 0;

    // Highlight stars based on rating
    function highlight(r) {
      stars.forEach((star, i) => {
        star.innerHTML = i < r ? '&#9733;' : '&#9734;';
      });
    }
    highlight(rating);

    // Add click and hover events
    stars.forEach((star, idx) => {
      star.addEventListener('click', () => {
        rating = idx + 1;
        starsDiv.setAttribute('data-rating', rating);
        highlight(rating);
      });
      star.addEventListener('mouseover', () => highlight(idx + 1));
      star.addEventListener('mouseout', () => highlight(rating));
    });
  });
});