
function toggleTracks(wrapper) {
    const trackList = wrapper.nextElementSibling;
    if (trackList && trackList.classList.contains('track-list')) {
        trackList.classList.toggle('hidden');
    }
}

const faqItems = document.querySelectorAll('.faq_item');
faqItems.forEach(item => {
  const question = item.querySelector('.faq_question');

  question.addEventListener('click', () => {
    faqItems.forEach(i => i.classList.remove('active')); // Закрыть все ответы
    item.classList.add('active'); // Открыть текущий
  });
});
