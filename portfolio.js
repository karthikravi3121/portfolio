function showAllProjects() {
    var projects = document.querySelectorAll('.projects');
    projects.forEach(function(project) {
      project.style.opacity = '0'; 
      project.style.display = 'block';
      setTimeout(function() {
        project.style.transition = 'opacity 0.5s'; 
        project.style.opacity = '1'; 
      }, 100);
    });
  }
  
  function showCategoryProjects(category) {
    var projects = document.querySelectorAll('.projects');
    projects.forEach(function(project) {
      if (category === 'all' || project.classList.contains(category.toLowerCase())) {
        project.style.opacity = '0'; 
        project.style.display = 'block';
        setTimeout(function() {
          project.style.transition = 'opacity 0.5s'; 
          project.style.opacity = '1'; 
        }, 100);
      } else {
        project.style.transition = 'none';
        project.style.opacity = '0';
        setTimeout(function() {
          project.style.display = 'none';
        }, 500);
      }
    });
  }
  function setupImageSlider(container) {
    const slides = container.querySelectorAll('.slide');
    const dots = container.querySelectorAll('.dot');
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            if (index === slideIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === slideIndex);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            currentSlide = index; 
        });
    });

    showSlide(currentSlide); 

    setInterval(nextSlide, 2000); 
}

const containers = document.querySelectorAll('.image-slider');
containers.forEach(container => {
    setupImageSlider(container);
});
