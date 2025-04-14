// Like Button Click Event
const likeButtons = document.querySelectorAll('.like-btn');
likeButtons.forEach(button => {
  button.addEventListener('click', () => {
    const icon = button.querySelector('i');
    if (icon.classList.contains('fas')) {
      icon.classList.remove('fas');
      icon.classList.add('far');
    } else {
      icon.classList.remove('far');
      icon.classList.add('fas');
    }
  });
});

// Watch Button Click Event
const watchButtons = document.querySelectorAll('.watch-btn');
watchButtons.forEach(button => {
  button.addEventListener('click', () => {
    const anime = button.getAttribute('data-anime');
    alert(`Now playing ${anime}! Redirecting to streaming page...`);
    window.location.href = `https://example.com/watch/${anime}`; // Replace with actual streaming link
  });
});
