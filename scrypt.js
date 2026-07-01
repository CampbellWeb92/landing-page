
  const track = document.getElementById('galleryTrack');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  
  let currentIndex = 0;
  const totalSlides = 10; // Explicitly set to match your 10 pages

  function updateSlidePosition() {
    // Shifts the track left based on the active index percentage
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  nextBtn.addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Loops back to the first page seamlessly
    }
    updateSlidePosition();
  });

  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = totalSlides - 1; // Loops forward to the last page seamlessly
    }
    updateSlidePosition();
  });
