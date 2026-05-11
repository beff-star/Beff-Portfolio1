// Beff Star Portfolio - Interactive SPA with GSAP Animations
(function(){
  'use strict'

  // Wait for GSAP to load
  if (typeof gsap === 'undefined') {
    console.warn('GSAP not loaded yet, retrying...')
    setTimeout(arguments.callee, 100)
    return
  }

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger)

  // Configuration
  const routes = ['home', 'about', 'skills', 'projects', 'testimonials', 'blog', 'contact']
  const sections = {}
  
  // Initialize section references
  routes.forEach(id => {
    sections[id] = document.getElementById(id)
  })

  // ===== ROUTING & NAVIGATION =====
  function showRoute(route) {
    if (!routes.includes(route)) route = 'home'
    
    // Keep all sections visible - no hiding
    Object.values(sections).forEach(sec => {
      if (sec) {
        sec.style.display = 'block'
        sec.style.opacity = '1'
        sec.style.pointerEvents = 'auto'
        sec.classList.add('active')
      }
    })
    
    // Smooth scroll to top
    if (sections[route]) {
      history.replaceState(null, '', `#${route}`)
    }
  }

  // Initialize routing on load
  function initRouting() {
    const hash = location.hash.replace('#', '')
    const startRoute = routes.includes(hash) ? hash : 'home'
    
    // Keep all sections visible
    Object.values(sections).forEach(sec => {
      if (sec) {
        sec.style.display = 'block'
        sec.style.opacity = '1'
      }
    })
    
    // Delegate nav link clicks
    document.body.addEventListener('click', function(e) {
      const a = e.target.closest('a[data-route]')
      if (!a) return
      
      const route = a.dataset.route
      if (route && routes.includes(route)) {
        e.preventDefault()
        
        // Smooth scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    })

    // Handle hash changes
    window.addEventListener('hashchange', () => {
      const newRoute = location.hash.replace('#', '')
      if (routes.includes(newRoute)) {
        showRoute(newRoute)
      }
    })
  }

  // ===== GSAP SCROLL ANIMATIONS =====
  function initScrollAnimations() {
    if (typeof ScrollTrigger === 'undefined') {
      console.warn('ScrollTrigger not loaded')
      return
    }

    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('[id*="section"], section, .stat-card, .glass')
    
    fadeElements.forEach((el, i) => {
      gsap.set(el, { opacity: 0, y: 30 })
      
      ScrollTrigger.create({
        trigger: el,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            delay: i * 0.05
          })
        }
      })
    })

    // Stagger animations for project cards
    const projectCards = document.querySelectorAll('.glass')
    gsap.set(projectCards, { opacity: 0, scale: 0.9 })

    ScrollTrigger.batch(projectCards, {
      interval: 0.1,
      batchSize: 3,
      onEnter: batch => gsap.to(batch, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: { amount: 0.15 }
      }),
      start: 'top 80%'
    })
  }

  // ===== INTERACTIVE ELEMENTS =====
  function initInteractiveElements() {
    // Project card hover effect
    const cards = document.querySelectorAll('.glass')
    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -10,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
      
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        })
      })
    })

    // Button ripple effect
    const buttons = document.querySelectorAll('button, a.px-8')
    buttons.forEach(btn => {
      btn.addEventListener('click', function(e) {
        if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') {
          const ripple = document.createElement('span')
          ripple.style.position = 'absolute'
          ripple.style.width = '20px'
          ripple.style.height = '20px'
          ripple.style.background = 'rgba(255,255,255,0.5)'
          ripple.style.borderRadius = '50%'
          ripple.style.pointerEvents = 'none'
          
          const rect = this.getBoundingClientRect()
          ripple.style.left = (e.clientX - rect.left) + 'px'
          ripple.style.top = (e.clientY - rect.top) + 'px'
          
          this.style.position = 'relative'
          this.appendChild(ripple)
          
          gsap.to(ripple, {
            scale: 2,
            opacity: 0,
            duration: 0.6,
            onComplete: () => ripple.remove()
          })
        }
      })
    })
  }

  // ===== CONTACT FORM =====
  function initContactForm() {
    const form = document.getElementById('contactForm')
    const status = document.getElementById('formStatus')
    const resetBtn = document.getElementById('resetForm')

    form.addEventListener('submit', async (e) => {
      e.preventDefault()
      
      const name = document.getElementById('name').value.trim()
      const email = document.getElementById('email').value.trim()
      const subject = document.getElementById('subject').value.trim()
      const message = document.getElementById('message').value.trim()

      if (!name || !email || !subject || !message) {
        status.textContent = '❌ Please fill all fields.'
        gsap.to(status, { opacity: 1, duration: 0.3 })
        return
      }

      status.textContent = '🚀 Sending...'
      gsap.to(status, { opacity: 1, duration: 0.3 })

      // Simulate network delay
      await new Promise(r => setTimeout(r, 1200))

      gsap.to(status, {
        opacity: 1,
        duration: 0.3,
        onComplete: () => {
          status.textContent = '✅ Message sent! I\'ll get back to you soon.'
          status.style.color = '#10b981'
        }
      })

      form.reset()
      
      setTimeout(() => {
        gsap.to(status, { opacity: 0, duration: 0.3 })
      }, 3000)
    })

    resetBtn.addEventListener('click', () => {
      form.reset()
      status.textContent = ''
    })
  }

  // ===== MOBILE NAV TOGGLE =====
  function initNavToggle() {
    const btn = document.querySelector('.nav-toggle')
    const nav = document.querySelector('nav[aria-label="Primary"]')

    if (btn && nav) {
      btn.addEventListener('click', () => {
        const isOpen = btn.getAttribute('aria-expanded') === 'true'
        btn.setAttribute('aria-expanded', String(!isOpen))

        gsap.to(nav, {
          opacity: isOpen ? 0 : 1,
          height: isOpen ? 0 : 'auto',
          duration: 0.3,
          ease: 'power2.inOut',
          pointerEvents: isOpen ? 'none' : 'auto'
        })
      })
    }
  }

  // ===== RESUME DOWNLOAD =====
  function initResumeDownload() {
    const btn = document.getElementById('downloadResume')
    
    if (btn) {
      btn.addEventListener('click', () => {
        const url = 'resume.pdf'
        
        fetch(url, { method: 'HEAD' })
          .then(r => {
            if (r.ok) {
              window.open(url, '_blank')
            } else {
              alert('Resume not found. Add resume.pdf to the project root.')
            }
          })
          .catch(() => {
            alert('Resume file not found. Add resume.pdf to the project root.')
          })
      })
    }
  }

  // ===== HEADER SCROLL EFFECT =====
  function initHeaderScroll() {
    const header = document.querySelector('header')
    
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        gsap.to(header, {
          backgroundColor: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(10px)',
          duration: 0.3
        })
      } else {
        gsap.to(header, {
          backgroundColor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          duration: 0.3
        })
      }
    })
  }

  // ===== MARQUEE ANIMATION LOOP =====
  function initMarquee() {
    const marqueeContent = document.querySelectorAll('.marquee-content')
    
    marqueeContent.forEach((content, idx) => {
      if (!content || !content.offsetWidth) return
      
      gsap.to(content, {
        x: -content.offsetWidth / 2,
        duration: 40,
        repeat: -1,
        ease: 'none'
      })
    })
  }

  // ===== PARALLAX EFFECT =====
  function initParallax() {
    if (typeof ScrollTrigger === 'undefined') return
    
    const hero = document.querySelector('.section-hero')
    
    if (hero) {
      gsap.to(hero, {
        y: window.innerHeight * 0.2,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom center',
          scrub: 1,
          markers: false
        }
      })
    }
  }

  // ===== COUNTER ANIMATION =====
  function initCounters() {
    if (typeof ScrollTrigger === 'undefined') return
    
    const counters = document.querySelectorAll('.stat-card')
    
    counters.forEach(counter => {
      const valueEl = counter.querySelector('div:first-child')
      if (!valueEl) return
      
      ScrollTrigger.create({
        trigger: counter,
        start: 'top 80%',
        onEnter: () => {
          const text = valueEl.textContent
          const num = parseInt(text)
          
          if (!isNaN(num)) {
            gsap.to({ value: 0 }, {
              value: num,
              duration: 2,
              ease: 'power2.out',
              onUpdate: function() {
                valueEl.textContent = Math.floor(this.targets()[0].value) + text.replace(/\d+/g, '')
              }
            })
          }
        }
      })
    })
  }

  // ===== YEAR IN FOOTER =====
  function setYear() {
    const yearEl = document.getElementById('year')
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear()
    }
  }

  // ===== ICONS SETUP =====
  function initIcons() {
    if (typeof lucide !== 'undefined' && lucide.createIcons) {
      lucide.createIcons()
    }
  }

  // ===== INITIALIZATION =====
  document.addEventListener('DOMContentLoaded', () => {
    try {
      initRouting()
      initScrollAnimations()
      initInteractiveElements()
      initContactForm()
      initNavToggle()
      initResumeDownload()
      initHeaderScroll()
      initMarquee()
      initParallax()
      initCounters()
      setYear()
      initIcons()

      // Preload images
      const images = document.querySelectorAll('img')
      images.forEach(img => {
        const clone = new Image()
        clone.src = img.src
      })

      // Log completion
      console.log('✅ Portfolio loaded successfully with GSAP animations')
    } catch (error) {
      console.error('❌ Error initializing portfolio:', error)
    }
  })

})()
