// Hero Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const indicatorNumber = document.getElementById('indicatorNumber');
const progressFill = document.querySelector('.progress-fill');
const totalSlides = slides.length;
const slideInterval = 5000; // 5 seconds per slide
let slideTimer;
let progressTimer;

function updateSlide() {
  if (slides.length === 0) return;

  // Remove active class from all slides
  slides.forEach(slide => slide.classList.remove('active'));

  // Activate current slide
  slides[currentSlide].classList.add('active');

  // Update number indicator (01, 02, 03)
  if (indicatorNumber) {
    indicatorNumber.textContent = (currentSlide + 1).toString().padStart(2, '0');
  }

  // Reset and start progress bar
  if (progressFill) {
    progressFill.style.width = '0%';
    clearInterval(progressTimer);

    let progress = 0;
    const step = 100 / (slideInterval / 100); // 2% every 100ms = 5s

    progressTimer = setInterval(() => {
      progress += step;
      if (progress > 100) progress = 100;
      progressFill.style.width = progress + '%';
    }, 100);
  }
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlide();
}

function resetTimer() {
  clearInterval(slideTimer);
  slideTimer = setInterval(nextSlide, slideInterval);
}

// Initialize slider
function initSlider() {
  if (slides.length > 0) {
    updateSlide();
    slideTimer = setInterval(nextSlide, slideInterval);
  }
}

// Start slider when page loads
document.addEventListener('DOMContentLoaded', initSlider);




// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Welcome Card Swiper
  const welcomeSwiper = new Swiper('.welcome-swiper', {
    direction: 'horizontal',
    loop: false,
    autoplay: false,
    allowTouchMove: true,
    effect: 'slide',
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: {
      nextEl: '.welcome-nav-next',
      prevEl: '.welcome-nav-prev',
    },
    pagination: false,
    on: {
      slideChange: function () {
        // Update custom dot styles
        updateWelcomeDots(this.activeIndex);
      },
      init: function () {
        // Initialize dots on load
        updateWelcomeDots(this.activeIndex);
      },
      touchStart: function () {
        // Update dots on touch start
        updateWelcomeDots(this.activeIndex);
      },
      touchEnd: function () {
        // Update dots on touch end
        updateWelcomeDots(this.activeIndex);
      }
    }
  });

  // Function to update welcome dots
  function updateWelcomeDots(activeIndex) {
    const dots = document.querySelectorAll('.welcome-card .dot');
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('dot-large', 'swiper-pagination-bullet-active');
      } else {
        dot.classList.remove('dot-large', 'swiper-pagination-bullet-active');
      }
    });
  }

  // Welcome card pagination - integrate with Swiper
  const welcomeDots = document.querySelectorAll('.welcome-card .dot');
  welcomeDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      welcomeSwiper.slideTo(index);
    });
  });

  // Add event listener for any slide changes (including swipe)
  welcomeSwiper.on('slideChange', function () {
    updateWelcomeDots(this.activeIndex);
  });

  // Panel contents
  const panelContents = {
    "active-directory": `
      <div class="search-container">
       <img src="assets/media/Search.svg" alt="Search" class="search-ico">
        <input type="text" class="search-input" placeholder="Search Users">
      </div>
  
      <div class="user-card" data-user="jad">
        <div class="user-header">
          <div class="user-info">
            <img src="assets/media/1.png" alt="Jad El-Khoury" class="user-avatar">
            <div class="user-details">
              <h3>Jad El-Khoury</h3>
              <p>Chief Operations Officer (COO)</p>
            </div>
          </div>
          <button class="expand-btn">
            <svg viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
        </div>
        <div class="user-contact">
          <div class="contact-info">
            <div class="contact-row">
              <span class="contact-label">Mobile:</span>
              <span class="contact-value">+961 01 234 567</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">Email:</span>
              <a href="mailto:JadKhoury@gmail.com" class="contact-value">JadKhoury@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="user-card" data-user="maya">
        <div class="user-header">
          <div class="user-info">
            <img src="assets/media/2.png" alt="Maya Saad" class="user-avatar">
            <div class="user-details">
              <h3>Maya Saad</h3>
              <p>Head of Marketing</p>
            </div>
          </div>
          <button class="expand-btn">
            <svg viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
        </div>
        <div class="user-contact">
          <div class="contact-info">
            <div class="contact-row">
              <span class="contact-label">Mobile:</span>
              <span class="contact-value">+961 01 345 678</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">Email:</span>
              <a href="mailto:maya.saad@company.com" class="contact-value">maya.saad@company.com</a>
            </div>
          </div>
        </div>
      </div>
  
      <div class="user-card" data-user="ziad">
        <div class="user-header">
          <div class="user-info">
            <img src="assets/media/3.png" alt="Ziad Haddad" class="user-avatar">
            <div class="user-details">
              <h3>Ziad Haddad</h3>
              <p>Senior Project Manager</p>
            </div>
          </div>
          <button class="expand-btn">
            <svg viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
            </svg>
          </button>
        </div>
        <div class="user-contact">
          <div class="contact-info">
            <div class="contact-row">
              <span class="contact-label">Mobile:</span>
              <span class="contact-value">+961 01 456 789</span>
            </div>
            <div class="contact-row">
              <span class="contact-label">Email:</span>
              <a href="mailto:ziad.haddad@company.com" class="contact-value">ziad.haddad@company.com</a>
            </div>
          </div>
        </div>
      </div>
    `,
    "calendar": `
   
    <div class="calendar-container">
    
    <div class="date-section">
        <div class="date-header">June 11, 2024</div>
        <div class="events-list">
            <div class="event-item">
                <div class="event-indicator event"></div>
                <div class="event-content">
                    <div class="event-title">Annual Innovation Summit</div>
                    <div class="event-type">Event</div>
                </div>
                <div class="event-time">
                    <div class="time-start">09:30</div>
                    <div class="time-end">10:30</div>
                </div>
            </div>

            <div class="event-item">
                <div class="event-indicator event"></div>
                <div class="event-content">
                    <div class="event-title">Wellness and Health Fair</div>
                    <div class="event-type">Event</div>
                </div>
                <div class="event-time">
                    <div class="time-start">14:10</div>
                    <div class="time-end">16:20</div>
                </div>
            </div>

            <div class="event-item">
                <div class="event-indicator event"></div>
                <div class="event-content">
                    <div class="event-title">Monthly Lunch</div>
                    <div class="event-type">Event</div>
                </div>
                <div class="event-time">
                    <div class="time-start">18:00</div>
                    <div class="time-end">19:00</div>
                </div>
            </div>
        </div>
    </div>

    <!-- June 6, 2024 -->
    <div class="date-section">
        <div class="date-header">June 6, 2024</div>
        <div class="events-list">
            <div class="event-item">
                <div class="event-indicator holiday"></div>
                <div class="event-content">
                    <div class="event-title">The Prophet's Birthday</div>
                    <div class="event-type">Holiday</div>
                </div>
                <div class="event-time">
                    <div class="all-day">All day</div>
                </div>
            </div>
        </div>
    </div>
</div>
    `,
    "network": `
     <div>
      <div class="poll-question">How important is the company's focus on renewable energy and sustainability to you?</div>
      
      <div class="poll-options">
          <div class="poll-option" data-value="extremely">
              <div class="progress-bar"></div>
              <div class="option-content">
                  <span class="option-text">Extremely Important</span>
                  <span class="option-percentage">30%</span>
              </div>
          </div>
          
          <div class="poll-option" data-value="very">
              <div class="progress-bar"></div>
              <div class="option-content">
                  <span class="option-text">Very Important</span>
                  <span class="option-percentage">52%</span>
              </div>
          </div>
          
          <div class="poll-option" data-value="moderately">
              <div class="progress-bar"></div>
              <div class="option-content">
                  <span class="option-text">Moderately Important</span>
                  <span class="option-percentage">10%</span>
              </div>
          </div>
          
          <div class="poll-option" data-value="not">
              <div class="progress-bar"></div>
              <div class="option-content">
                  <span class="option-text">Not Important</span>
                  <span class="option-percentage">18%</span>
              </div>
          </div>
      </div>
  </div>
  `
  };

  // Panel elements
  const panel = document.getElementById('slidingPanel');
  const overlay = document.getElementById('appOverlay');
  const panelCloseBtn = document.getElementById('panelCloseBtn');
  const sideNavLinks = document.querySelectorAll('.side-nav a');

  console.log('Panel elements found:', { panel, overlay, panelCloseBtn, sideNavLinks: sideNavLinks.length });

  function openPanel(titleText, contentHtml) {
    console.log('openPanel called with:', titleText, contentHtml);
    const panelTitle = document.getElementById('panelTitle');
    const panelContent = document.getElementById('panelContent');
    console.log('Panel elements found:', { panelTitle, panelContent, panel, overlay });

    if (panelTitle) panelTitle.textContent = titleText || 'Panel';
    if (panelContent) panelContent.innerHTML = contentHtml || '';
    if (panel) {
      panel.classList.add('open');
      console.log('Panel opened, classes:', panel.className);
    }
    if (overlay) {
      overlay.classList.add('open');
      console.log('Overlay opened, classes:', overlay.className);
    }
    document.body.style.overflow = 'hidden';
  }

  function closePanel() {
    if (panel) panel.classList.remove('open');
    if (overlay) overlay.classList.remove('open');
    document.body.style.overflow = '';
    // Clear active state on links and their parent <li> elements
    sideNavLinks.forEach(l => l.classList.remove('active'));
    document.querySelectorAll('.side-nav li').forEach(li => li.classList.remove('active'));
    // Cleanup detached search container
    const prevDetachedSearch = document.querySelector('#slidingPanel > .search-container');
    if (prevDetachedSearch) prevDetachedSearch.remove();
  }

  // Open panel on side nav click
  sideNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      console.log('Sidebar link clicked:', link);

      sideNavLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
      // Also toggle active class on the parent <li> for CSS targeting
      document.querySelectorAll('.side-nav li').forEach(li => li.classList.remove('active'));
      const parentLi = link.closest('li');
      if (parentLi) parentLi.classList.add('active');

      const panelType = link.getAttribute('data-panel'); // use data-panel
      console.log('Panel type:', panelType);

      const titleMap = {
        "active-directory": "Group Directory Search",
        "calendar": "Upcoming Events",
        "share": "NULL",
        "network": "Polls"
      };
      const title = titleMap[panelType] || 'Panel';
      const content = panelContents[panelType] || '<div>No content</div>';

      console.log('Opening panel with title:', title);
      openPanel(title, content);

      // Move search container outside panel content to below header when needed
      const headerEl = document.querySelector('#slidingPanel .panel-header');
      const panelContentEl = document.getElementById('panelContent');
      const prevDetachedSearch = document.querySelector('#slidingPanel > .search-container');
      if (prevDetachedSearch) prevDetachedSearch.remove();

      // Initialize expand buttons and search for directory
      if (panelType === 'active-directory') {
        if (headerEl && panelContentEl) {
          const searchEl = panelContentEl.querySelector('.search-container');
          if (searchEl) {
            headerEl.insertAdjacentElement('afterend', searchEl);
          }
        }
        initUserCardsAndSearch();
      } else if (panelType === 'network') {
        // Initialize poll interactions after content is injected
        initPoll();
      }
    });
  });

  /*poolsss*/
  function initPoll() {
    const pollData = {
      "extremely": 30,
      "very": 52,
      "moderately": 10,
      "not": 18
    };

    let selectedOption = null;
    let showingResults = false;

    const pollOptions = document.querySelectorAll('.poll-option');

    pollOptions.forEach(option => {
      option.addEventListener('click', () => {
        if (showingResults) return;

        pollOptions.forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');
        selectedOption = option.dataset.value;

        showResults();
      });
    });

    function showResults() {
      showingResults = true;
      pollOptions.forEach(option => {
        option.classList.add('results-mode');
        const value = option.dataset.value;
        const percentage = pollData[value];

        const percentageEl = option.querySelector('.option-percentage');
        percentageEl.classList.add('visible');

        const progressBar = option.querySelector('.progress-bar');
        setTimeout(() => {
          progressBar.style.width = percentage + '%';
        }, 100);
      });
    }

    function hideResults() {
      showingResults = false;
      pollOptions.forEach(option => {
        option.classList.remove('results-mode', 'selected');
        option.querySelector('.option-percentage').classList.remove('visible');
        option.querySelector('.progress-bar').style.width = '0%';
      });
      selectedOption = null;
    }

    // Start with results hidden
    hideResults();
  }
  // Initialize poll on demand when the network panel is opened


  // Close panel
  if (panelCloseBtn) panelCloseBtn.addEventListener('click', closePanel);
  if (overlay) overlay.addEventListener('click', closePanel);

  // Expand buttons + search input for user cards
  function initUserCardsAndSearch() {
    const userCards = document.querySelectorAll('.user-card');

    userCards.forEach(card => {
      const expandBtn = card.querySelector('.expand-btn');
      if (expandBtn) {
        expandBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          card.classList.toggle('expanded');
        });
      }
    });

    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        userCards.forEach(card => {
          const name = card.querySelector('.user-details h3').textContent.toLowerCase();
          const title = card.querySelector('.user-details p').textContent.toLowerCase();
          card.style.display = (name.includes(searchTerm) || title.includes(searchTerm)) ? 'block' : 'none';
        });
      });
    }
  }

});
//const userWelcome = document.querySelector('.user-welcome');
//const dropdownMenu = document.querySelector('.dropdown-menu');
//const dropdownArrow = document.querySelector('.dropdown-arrow');

//dropdownArrow.addEventListener('click', (e) => {
//  e.stopPropagation();            // prevent click from closing immediately
//dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
//});

// Close dropdown if clicking outside
//document.addEventListener('click', () => {
//  dropdownMenu.style.display = 'none';
//});


// Media grid (Masonry) init
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid');
  if (!grid) return; // run only on pages with the grid
  if (typeof Masonry === 'undefined') return; // ensure Masonry is loaded

  const images = grid.querySelectorAll('.grid-item img');
  // Keep varied heights but unify widths to 300px to align columns
  const sizes = [
    { width: 340, height: 160 },
    { width: 340, height: 310 },
    { width: 340, height: 200 },
    { width: 340, height: 260 },
    { width: 340, height: 220 },
    { width: 340, height: 200 },
    { width: 340, height: 160 },
    { width: 340, height: 290 },
    { width: 340, height: 240 },
  ];

  images.forEach((img, index) => {
    if (sizes[index]) {
      img.width = sizes[index].width;
      img.height = sizes[index].height;
    }
  });

  const msnry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: 340,
    gutter: 20,
    fitWidth: true,
  });

  images.forEach((img) => {
    if (img.complete) {
      msnry.layout();
    } else {
      img.addEventListener('load', () => msnry.layout());
      img.addEventListener('error', () => msnry.layout());
    }
  });
});

//gsap
document.addEventListener("DOMContentLoaded", () => {
  // Check if elements exist before initializing
  const animateElement = document.querySelector('.animate');
  const animate2Element = document.querySelector('.animate2');

  if (animateElement) {
    let typeSplit = new SplitType('.animate', {
        types: 'lines, words, chars',
        tagName: 'span'
    });

    gsap.from('.animate .word', {
        scrollTrigger: {
            trigger: '.animate',
            start: 'top 80%',
            toggleActions: 'play none none restart',
        },
        y: '100%',
        opacity: 1,
        duration: 1,
        ease: 'sine.in',
        stagger: 0.1,
    });
  }

  if (animate2Element) {
    let typeSplit2 = new SplitType('.animate2', {
        types: 'lines, words, chars',
        tagName: 'span'
    });

    gsap.from('.animate2 .word', {
        scrollTrigger: {
            trigger: '.animate2',
            start: 'top 80%',
            toggleActions: 'play none none restart',
        },
        y: '110%',
        opacity: 1,
        rotationZ: '10',
        duration: 0.5,
        ease: 'sine.in',
        stagger: 0.1,
    });
  }

});

//hover gsap
document.addEventListener("DOMContentLoaded", () => {
  const $card = document.querySelector(".credit-card");
  
  // Exit if card not found
  if (!$card) return;

  let bounds;
  let lastShadowOffsetX = 0;
  let lastShadowOffsetY = 0;
  let lastShadowBlur = 0;

  function moveToMouse(e) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;
      const center = {
          x: leftX - bounds.width / 2,
          y: topY - bounds.height / 2
      };

      const distance = Math.sqrt(center.x ** 2 + center.y ** 2);
      const rotationX = center.y / 50;
      const rotationY = -center.x / 50;

      const shadowOffsetX = -rotationY * 5;
      const shadowOffsetY = rotationX * 5;
      const shadowBlur = 20 + distance / 120;

      lastShadowOffsetX = shadowOffsetX;
      lastShadowOffsetY = shadowOffsetY;
      lastShadowBlur = shadowBlur;

      gsap.to($card, {
          scale: 1.03,
          rotationX: rotationX,
          rotationY: rotationY,
          transformPerspective: 500,
          ease: "power2.out",
          boxShadow: `${shadowOffsetX}px ${shadowOffsetY}px ${shadowBlur}px 6px rgba(72, 65, 56, .4)`
      });

      const glareElement = $card.querySelector(".glare");
      if (glareElement) {
          gsap.to(glareElement, {
              autoAlpha: 1,
              backgroundImage: `
                  radial-gradient(
                      circle at ${center.x * 2 + bounds.width / 2}px ${center.y * 2 + bounds.height / 2}px,
                      rgba(255, 255, 255, 0.33),
                      rgba(0, 0, 0, 0.06)
                  )
              `
          });
      }
  }

  $card.addEventListener("mouseenter", () => {
      bounds = $card.getBoundingClientRect();
      document.addEventListener("mousemove", moveToMouse);
      gsap.to($card, {
          scale: 1.03,
          rotationX: 0,
          rotationY: 0,
          duration: 0.6
      });
  });

  $card.addEventListener("mouseleave", () => {
      document.removeEventListener("mousemove", moveToMouse);

      gsap.to($card, {
          scale: 1,
          rotationX: 0,
          rotationY: 0,
          duration: 0.6,
          ease: "power2.out"
      });

      gsap.to($card, {
          boxShadow: `${lastShadowOffsetX}px ${lastShadowOffsetY}px ${lastShadowBlur}px 0 rgba(72, 65, 56, .4)`,
          duration: 0.3,
          ease: "power3.out",
          onComplete: () => {
              gsap.to($card, {
                  boxShadow: `0px 0px ${lastShadowBlur}px 0 rgba(0, 0, 0, 0)`,
                  duration: 1.2
              });
          }
      });

      const glareElement = $card.querySelector(".glare");
      if (glareElement) {
          gsap.to(glareElement, {
              autoAlpha: 0,
              duration: 0.6
          });
      }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  // Select all news items
  document.querySelectorAll(".news-item").forEach(item => {
      gsap.from(item, {
          scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reset",
          },
          x: -150,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out"
      });
  });
});
