<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Health & Awareness, Inc - Bringing Awareness to Your Health',
  link: [
    { rel: 'canonical', href: 'https://savingkidneys.github.io/' }
  ],
  meta: [
    { name: 'description', content: 'Health & Awareness, Inc is a 501(c)(3) organization dedicated to raising awareness about preventive behaviors, early detection, and a healthy lifestyle to stop the progression of Chronic Kidney Disease.' },
    { property: 'og:title', content: 'Health & Awareness, Inc - Bringing Awareness to Your Health' },
    { property: 'og:description', content: 'Raising awareness about Chronic Kidney Disease prevention and healthy living.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://savingkidneys.github.io/' },
    { property: 'og:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Health & Awareness, Inc - Bringing Awareness to Your Health' },
    { name: 'twitter:description', content: 'Raising awareness about Chronic Kidney Disease prevention and healthy living.' },
    { name: 'twitter:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' }
  ]
})

// Kingdom Life Magazine Carousel
const klImages = [
  '/assets/images/kl-1.jpg',
  '/assets/images/kl-2.jpg',
  '/assets/images/kl-3.jpg',
  '/assets/images/kl-4.jpg',
  '/assets/images/kl-5.jpg'
]
const currentKlIndex = ref(0)
let klInterval = null

const nextKlImage = () => {
  currentKlIndex.value = (currentKlIndex.value + 1) % klImages.length
}

const prevKlImage = () => {
  currentKlIndex.value = (currentKlIndex.value - 1 + klImages.length) % klImages.length
}

const goToKlImage = (index) => {
  currentKlIndex.value = index
}

// Save Kidneys Event Carousel
const skImages = [
  '/assets/images/save-kidney-event1.jpg',
  '/assets/images/save-kidney-event2.jpg',
  '/assets/images/save-kidney-event3.jpg',
  '/assets/images/save-kidney-event4.jpg',
  '/assets/images/save-kidney-event5.jpg',
  '/assets/images/save-kidney-event6.jpg',
  '/assets/images/save-kidney-event7.jpg',
  '/assets/images/save-kidney-event8.jpg',
  '/assets/images/save-kidney-event9.jpg',
  '/assets/images/save-kidney-event10.jpg'
]
const currentSkIndex = ref(0)
let skInterval = null

const nextSkImage = () => {
  currentSkIndex.value = (currentSkIndex.value + 1) % skImages.length
}

const prevSkImage = () => {
  currentSkIndex.value = (currentSkIndex.value - 1 + skImages.length) % skImages.length
}

const goToSkImage = (index) => {
  currentSkIndex.value = index
}

onMounted(() => {
  klInterval = setInterval(nextKlImage, 4000)
  skInterval = setInterval(nextSkImage, 4000)
})

onUnmounted(() => {
  if (klInterval) clearInterval(klInterval)
  if (skInterval) clearInterval(skInterval)
})
</script>

<template>
  <div class="home-page">
    <!-- Hero Section -->
    <section class="hero">
      <div class="container hero-container">
        <div class="hero-content">
          <h1 class="hero-title">
            <!-- Add your main headline here -->
            Bringing awareness to your health!
          </h1>
          <p class="hero-subtitle">
            <!-- Add your tagline or brief description here -->
           Founded by Wallace S. Green Sr., Health & Awareness, Inc is a 501 (c)(3) organization dedicated to raising awareness about preventive behaviors, early detection, and a healthy lifestyle to stop the progression of Chronic Kidney Disease
          </p>
          <div class="hero-actions">
            <RouterLink to="/donate" class="btn btn-primary btn-lg">
              Donate Now
            </RouterLink>
            <RouterLink to="/about" class="btn btn-outline btn-lg">
              Learn More
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stats Section -->
    <section class="section stats-section">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-number">0</span>
            <span class="stat-label">Lives Impacted</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">0</span>
            <span class="stat-label">Years of Service</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">0</span>
            <span class="stat-label">Volunteers</span>
          </div>
          <div class="stat-item">
            <span class="stat-number">$0</span>
            <span class="stat-label">Funds Raised</span>
          </div>
        </div>
      </div>
    </section>


    <!-- Programs/Services Section -->
    <section class="section programs-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What We Do</h2>
          <p class="section-subtitle">
            <!-- Add description of your programs -->
            We educate people about diabetes and high blood pressure which are the two leading risk factors for Chronic Kidney Disease (CKD). Health & Awareness aims advocates for systematic screening of all patients with diabetes and hypertension for CKD. We encourage preventative behaviors and healthcare compliance to guide people in the right direction for managing their health.
          </p>
        </div>
        <div class="mission-content">
          <RouterLink to="/programs" class="btn btn-secondary">
            Learn About Our Programs
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Do You Know Section -->
    <section class="section info-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Did You Know?</h2>
          <p class="section-subtitle">
            10,000 Americans are diagnosed with kidney failure every month; Since 2000, there has been an 86% increase in the number of Americans with kidney failure. Kidney disease cannot be cured but if the cause is detected early and medical care providers offer prevention treatment. Over 75 million are at risk for Kidney Disease. Learn how to avoid the need for dialysis or a kidney transplant. Live A Healthy Life!
          </p>
        </div>
        <div class="info-images-grid">
          <img src="/assets/images/dyk1.png" alt="Did You Know?" />
          <img src="/assets/images/dyk2.png" alt="Did You Know?" />
          <img src="/assets/images/dyk3.png" alt="Did You Know?" />
        </div>
      </div>
    </section>

    <!-- Are You At Risk Section -->
    <section class="section info-section info-section-alt">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Are You At Risk?</h2>
          <p class="section-subtitle">
            You are at higher risk of Kidney Disease if you: have diabetes, hypertension, dehydration, medication abuse, gout, urinary infection, have family member with kidney disease, heart disease, if you are over the age of 60+, if you are an African-American, Hispanic, Native American or Asian Pacific Islander.
          </p>
        </div>
        <div class="info-images-grid">
          <img src="/assets/images/risk1.png" alt="At Risk Information" />
          <img src="/assets/images/risk2.png" alt="At Risk Information" />
          <img src="/assets/images/risk3.png" alt="At Risk Information" />
        </div>
      </div>
    </section>

    <!-- Additional Info Section -->
    <section class="section info-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Know the Facts</h2>
        </div>
        <div class="info-images-grid">
          <img src="/assets/images/facts1.png" alt="Facts about kidney disease" />
          <img src="/assets/images/facts2.png" alt="Facts about kidney disease" />
          <img src="/assets/images/facts3.png" alt="Facts about kidney disease" />
        </div>
      </div>
    </section>


    <!-- Events Section -->
    <section class="section events-section">
      <div class="container">
        <div class="events-card">
          <div class="events-icon">📅</div>
          <h3>Check Out Our Events</h3>
          <p>We host health workshops, community outreach events, and educational seminars throughout the year. Visit our Eventbrite page to see what's coming up and register!</p>
          <a href="https://www.eventbrite.com/cc/saving-kidneys-2016669" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-lg">
            View Events on Eventbrite
          </a>
        </div>
      </div>
    </section>

    <!-- Get Involved CTA -->
    <section class="section volunteer-section">
      <div class="container">
        <div class="volunteer-content">
          <h2 class="cta-title">Want to Get Involved?</h2>
          <p class="cta-text">
            We're always looking for passionate people to get involved and further our mission of educating and raising awareness about chronic kidney disease. 
            Whether you can spare a few hours or want to make a regular commitment, we have opportunities for you to volunteer, sponsor, or partner with our charity.
          </p>
          <div class="involvement-options">
            <RouterLink to="/donate" class="involvement-card">
              <div class="involvement-icon">💝</div>
              <h3>Donate</h3>
              <p>Support our mission with a financial contribution</p>
            </RouterLink>
            <RouterLink to="/contact" class="involvement-card">
              <div class="involvement-icon">🤝</div>
              <h3>Volunteer</h3>
              <p>Give your time to help in our programs</p>
            </RouterLink>
            <RouterLink to="/contact" class="involvement-card">
              <div class="involvement-icon">⭐</div>
              <h3>Sponsor</h3>
              <p>Sponsor an event or program</p>
            </RouterLink>
            <RouterLink to="/contact" class="involvement-card">
              <div class="involvement-icon">🏢</div>
              <h3>Partner</h3>
              <p>Partner with us as an organization</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 13th Annual Caregiver Awards Recap -->
    <section class="section feature-section">
      <div class="container">
        <div class="feature-content">
          <div class="feature-text">
            <h2 class="section-title">13th Annual Caregiver Awards Recap</h2>
            <p>On November 15th, 2024, Health & Awareness, Inc honored family caregivers at their 13th Annual Caregiver Awards. It was pleasure to continue to honor those who continue to take care of others. We would like to thank all our speakers, emcees, and vendors, and special guest speakers for participating in our 13th Annual Caregiver Awards Event. We appreciate everyone's presence and the encouragement they provided to the caregiver honorees and the guest who attended.</p>
          </div>
          <div class="feature-image">
            <img src="/assets/images/14th-caregiver.jpg" alt="13th Annual Caregiver Awards" />
          </div>
        </div>
      </div>
    </section>

    <!-- Kingdom Life Today Magazine -->
    <section class="section feature-section feature-alt">
      <div class="container">
        <div class="feature-content">
          <div class="feature-text">
            <h2 class="section-title">Thank you Kingdom Life Today Magazine!</h2>
            <p>Health & Awareness would like to thank Kingdom Life Today Magazine for featuring the organization in their magazine. We appreciate your support.</p>
          </div>
          <div class="feature-image">
            <div class="carousel">
              <button class="carousel-btn carousel-prev" @click="prevKlImage" aria-label="Previous image">
                ‹
              </button>
              <div class="carousel-container">
                <img 
                  v-for="(img, index) in klImages" 
                  :key="index"
                  :src="img" 
                  :alt="`Kingdom Life Today Magazine ${index + 1}`"
                  :class="['carousel-image', { active: index === currentKlIndex }]"
                />
              </div>
              <button class="carousel-btn carousel-next" @click="nextKlImage" aria-label="Next image">
                ›
              </button>
              <div class="carousel-dots">
                <button 
                  v-for="(img, index) in klImages" 
                  :key="index"
                  :class="['carousel-dot', { active: index === currentKlIndex }]"
                  @click="goToKlImage(index)"
                  :aria-label="`Go to image ${index + 1}`"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hampton Roads VEIN Magazine -->
    <section class="section feature-section">
      <div class="container">
        <div class="feature-content">
          <div class="feature-text">
            <h2 class="section-title">Thank you Hampton Roads VEIN Magazine!</h2>
            <p>Health & Awareness would like to thank Hampton Roads VEIN Magazine for advertising us in their March issue. We appreciate their support. <a href="https://heyzine.com/flip-book/6c556d88bb.html" target="_blank" rel="noopener noreferrer" class="text-link">READ NOW</a> to check out last month's issue.</p>
          </div>
          <div class="feature-image">
            <img src="/assets/images/vein.jpg" alt="Hampton Roads VEIN Magazine" />
          </div>
        </div>
      </div>
    </section>

    <!-- Collaborating to Save Kidneys Event -->
    <section class="section feature-section feature-alt">
      <div class="container">
        <div class="feature-content">
          <div class="feature-text">
            <h2 class="section-title">Collaborating to Save Kidneys Event</h2>
            <p>On March 16th 2024, Health & Awareness INC, and We Support Caregivers, INC. hosted a Collaborating to Save Kidneys Event. This event was to commemorate World Kidney Day 2024 which is to bring awareness to kidney health and the prevention of chronic kidney disease. We are thankful for our sponsors, vendors, and panelists for their contributions and participation in this event.</p>
          </div>
          <div class="feature-image">
            <div class="carousel">
              <button class="carousel-btn carousel-prev" @click="prevSkImage" aria-label="Previous image">
                ‹
              </button>
              <div class="carousel-container">
                <img 
                  v-for="(img, index) in skImages" 
                  :key="index"
                  :src="img" 
                  :alt="`Collaborating to Save Kidneys Event ${index + 1}`"
                  :class="['carousel-image', { active: index === currentSkIndex }]"
                />
              </div>
              <button class="carousel-btn carousel-next" @click="nextSkImage" aria-label="Next image">
                ›
              </button>
              <div class="carousel-dots">
                <button 
                  v-for="(img, index) in skImages" 
                  :key="index"
                  :class="['carousel-dot', { active: index === currentSkIndex }]"
                  @click="goToSkImage(index)"
                  :aria-label="`Go to image ${index + 1}`"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Not Me Book -->
    <section class="section feature-section">
      <div class="container">
        <div class="feature-content">
          <div class="feature-text">
            <h2 class="section-title">Why Not Me</h2>
            <p>Why Not Me? A book by Wallace S. Green the founder of Health & Awareness, that shares his personal experience during his journey with Chronic Kidney Failure. Learn about what questions to ask doctors, understanding your labs results, and more. <a href="https://www.amazon.com/dp/1642994316" target="_blank" rel="noopener noreferrer" class="text-link">Get it here</a>.</p>
          </div>
          <div class="feature-image">
            <img src="/assets/images/why-not-me.png" alt="Wallace S. Green - Why Not Me Book" />
          </div>
        </div>
      </div>
    </section>

    <!-- Give the Gift of Life -->
    <section class="section gift-of-life-section">
      <div class="container">
        <div class="gift-of-life-content">
          <h2 class="section-title">Give the Gift of Life</h2>
          <p>Wallace S. Green is still here because of several individuals who want to give the gift of life after theirs have ended. You can do the same by becoming an organ donor. <a href="https://www.lifenethealth.org/" target="_blank" rel="noopener noreferrer" class="text-link">Click here</a> to learn more information on becoming an organ, eye, or tissue donor.</p>
          <div class="wallace-banner">
            <img src="/assets/images/wallace-banner.jpg" alt="Wallace S. Green - Give the Gift of Life" />
          </div>
        </div>
      </div>
    </section>

    <!-- Supporters Section -->
    <section class="section supporters-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Supporters</h2>

        </div>
        <div class="supporters-grid">
          <a href="https://www.donatelifevirginia.org/" target="_blank" rel="noopener noreferrer" class="supporter-link">
            <img src="/assets/images/Donate-Life-Virginia-Logo-Horizontal.webp" alt="Donate Life Virginia" class="supporter-logo" />
          </a>
          <a href="https://www.lifenethealth.org/" target="_blank" rel="noopener noreferrer" class="supporter-link">
            <img src="/assets/images/lifenet.png" alt="LifeNet Health" class="supporter-logo" />
          </a>
          <a href="https://www.integritymedicareva.com/" target="_blank" rel="noopener noreferrer" class="supporter-link">
            <img src="/assets/images/IIS LOGO 2.avif" alt="Integrity Insurance Services" class="supporter-logo" />
          </a>
          <a href="https://reps.modernwoodmen.org/jmcduffie/" target="_blank" rel="noopener noreferrer" class="supporter-link supporter-link-dark">
            <img src="/assets/images/modernwoodmen.svg" alt="Modern Woodmen" class="supporter-logo" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  /* Volunteer Section */
.volunteer-section {
  color: var(--color-white);
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
}

.volunteer-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.volunteer-content > h2 {
  margin-bottom: var(--spacing-4);
}

.volunteer-content > p {

  margin-bottom: var(--spacing-8);
}

.involvement-options {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-6);
}

.involvement-card {
  background-color: var(--color-white);
  padding: var(--spacing-6);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
  transition: all var(--transition-fast);
  cursor: pointer;
  text-decoration: none;
  color: inherit;
}

.involvement-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.involvement-icon {
  font-size: var(--font-size-3xl);
  margin-bottom: var(--spacing-3);
}

.involvement-card h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-2);
  color: var(--color-gray-900);
}

.involvement-card p {
  font-size: var(--font-size-sm);
  color: var(--color-gray-600);
  margin-bottom: 0;
}

/* Responsive */
@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .involvement-options {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .involvement-options {
    grid-template-columns: 1fr;
  }
}
/* Hero Section */
.hero {
  background: linear-gradient(135deg, rgba(62, 98, 223, 0.3) 0%, rgba(62, 98, 223, 0.9) 100%), url('/assets/images/kidney-bg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: var(--color-white);
  padding: var(--spacing-20) 0;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  margin: 0 auto;
}

.hero-title {
  font-size: var(--font-size-5xl);
  color: var(--color-white);
  margin-bottom: var(--spacing-6);
}

.hero-subtitle {
  font-size: var(--font-size-xl);
  opacity: 0.9;
  margin-bottom: var(--spacing-8);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

.hero .btn-outline {
  border-color: var(--color-white);
  color: var(--color-white);
}

.hero .btn-outline:hover {
  background-color: var(--color-white);
  color: var(--color-primary);
}

/* Stats Section */
.stats-section {
  display: none;
  background-color: var(--color-gray-50);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-8);
  text-align: center;
}

.stat-item {
  padding: var(--spacing-6);
}

.stat-number {
  display: block;
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
}

.stat-label {
  font-size: var(--font-size-base);
  color: var(--color-gray-600);
}

/* Mission Preview */
.mission-content {
  text-align: center;
}

/* Programs Section */
.programs-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: var(--spacing-6);
}

.programs-grid .card {
  flex: 0 1 350px;
  max-width: 400px;
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
  color: var(--color-white);
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.cta-title {
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
}

.cta-text {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  margin-bottom: var(--spacing-8);
}

.cta-actions {
  display: flex;
  gap: var(--spacing-4);
  justify-content: center;
  flex-wrap: wrap;
}

.cta-section .btn-primary {
  background-color: var(--color-white);
  color: var(--color-secondary-dark);
}

 .btn-primary {
  border: 2px solid var(--color-white);
}

.cta-section .btn-primary:hover {
  background-color: var(--color-gray-100);
}

.cta-section .btn-outline {
  border-color: var(--color-white);
  color: var(--color-white);
}

.cta-section .btn-outline:hover {
  background-color: var(--color-white);
  color: var(--color-secondary-dark);
}

/* Supporters Section */
.supporters-section {
  background-color: var(--color-gray-50);
}

.supporters-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-8);
  align-items: center;
  justify-items: center;
}

.supporter-link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-6);
  background-color: var(--color-white);
  border-radius: var(--radius-xl);
  transition: transform var(--transition-normal), box-shadow var(--transition-normal);
}

.supporter-link:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow-lg);
}

.supporter-link-dark {
  background-color: var(--color-gray-800);
}

.supporter-logo {
  width: 180px;
  height: 80px;
  object-fit: contain;
}

/* Events Section */
.events-section {
  background-color: var(--color-gray-50);
}
.section-subtitle {
  max-width: 900px;
}

.events-card {
  max-width: 600px;
  margin: 0 auto;
  text-align: center;
  background-color: var(--color-white);
  padding: var(--spacing-10);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.events-icon {
  font-size: 4rem;
  margin-bottom: var(--spacing-4);
}

.events-card h3 {
  margin-bottom: var(--spacing-4);
  color: var(--color-gray-900);
}

.events-card p {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-6);
}

/* Responsive */
@media (min-width: 768px) {
  .hero {
    padding: var(--spacing-24) 0;
  }

  .stats-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .programs-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .supporters-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .supporter-logo {
    width: 200px;
    height: 100px;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: var(--font-size-3xl);
  }

  .programs-grid .card {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

/* Info Sections */
.info-section {
  background-color: var(--color-white);
}

.info-section.info-section-alt {
  background-color: var(--color-gray-50);
}

.info-images-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-6);
  margin-top: var(--spacing-8);
}

.placeholder-image-card {
  aspect-ratio: 4/3;
  background-color: var(--color-gray-100);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed var(--color-gray-300);
}

.placeholder-image-card span {
  font-size: 3rem;
  margin-bottom: var(--spacing-2);
}

.placeholder-image-card p {
  color: var(--color-gray-500);
  font-size: var(--font-size-sm);
  margin: 0;
}

.info-images-grid img {
  width: 100%;
  object-fit: contain;
  border-radius: var(--radius-xl);
}

@media (max-width: 768px) {
  .info-images-grid {
    grid-template-columns: 1fr;
  }
}

/* Feature Sections */
.feature-section {
  background-color: var(--color-white);
}

.feature-section.feature-alt {
  background-color: var(--color-gray-50);
}

.feature-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-12);
  align-items: center;
}

.feature-text h2 {
  margin-bottom: var(--spacing-4);
  color: var(--color-gray-900);
}

.feature-text p {
  color: var(--color-gray-600);
  font-size: var(--font-size-lg);
  line-height: 1.7;
}

.feature-text .text-link {
  color: var(--color-primary);
  font-weight: var(--font-weight-semibold);
  text-decoration: underline;
  transition: color var(--transition-fast);
}

.feature-text .text-link:hover {
  color: var(--color-primary-dark);
}

.feature-image {
  display: flex;
  justify-content: center;
  align-items: center;
}

.feature-image img {
  max-width: 100%;
  max-height: 300px;
  object-fit: contain;
  border-radius: var(--radius-xl);
}

.placeholder-image {
  width: 100%;
  max-width: 400px;
  height: 280px;
  background-color: var(--color-gray-100);
  border-radius: var(--radius-xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px dashed var(--color-gray-300);
}

.placeholder-image span {
  font-size: 4rem;
  margin-bottom: var(--spacing-2);
}

.placeholder-image p {
  color: var(--color-gray-500);
  font-size: var(--font-size-sm);
}

/* Carousel Styles */
.carousel {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.carousel-container {
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  border-radius: var(--radius-xl);
}

.carousel-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.carousel-image.active {
  opacity: 1;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.9);
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-md);
}

.carousel-btn:hover {
  background-color: var(--color-white);
  box-shadow: var(--shadow-lg);
}

.carousel-prev {
  left: -20px;
}

.carousel-next {
  right: -20px;
}

.carousel-dots {
  display: flex;
  justify-content: center;
  gap: var(--spacing-2);
  margin-top: var(--spacing-4);
}

.carousel-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: none;
  background-color: var(--color-gray-300);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.carousel-dot.active {
  background-color: var(--color-primary);
  transform: scale(1.2);
}

.carousel-dot:hover {
  background-color: var(--color-primary-light);
}

/* Gift of Life Section */
.gift-of-life-section {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
}

.gift-of-life-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.gift-of-life-content h2 {
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
}

.gift-of-life-content p {
  font-size: var(--font-size-lg);
  opacity: 0.95;
  margin-bottom: var(--spacing-8);
}

.gift-of-life-content .text-link {
  color: var(--color-white);
  font-weight: var(--font-weight-bold);
  text-decoration: underline;
}

.gift-of-life-content .text-link:hover {
  opacity: 0.8;
}

.wallace-banner {
  margin-top: var(--spacing-8);
}

.wallace-banner img {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

@media (max-width: 768px) {
  .feature-content {
    grid-template-columns: 1fr;
    gap: var(--spacing-8);
  }

  .feature-image {
    order: -1;
  }

  .placeholder-image {
    height: 200px;
  }
}
</style>
