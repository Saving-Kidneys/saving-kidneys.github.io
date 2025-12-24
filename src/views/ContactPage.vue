<script setup>
import { ref } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Contact Us - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://savingkidneys.github.io/contact' }
  ],
  meta: [
    { name: 'description', content: 'Get in touch with Health & Awareness, Inc. Contact us for questions about our programs, volunteer opportunities, sponsorships, or partnerships.' },
    { property: 'og:title', content: 'Contact Us - Health & Awareness, Inc' },
    { property: 'og:description', content: 'Reach out to learn more about our kidney disease awareness programs.' },
    { property: 'og:url', content: 'https://savingkidneys.github.io/contact' },
    { property: 'og:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Contact Us - Health & Awareness, Inc' },
    { name: 'twitter:description', content: 'Reach out to learn more about our kidney disease awareness programs.' },
    { name: 'twitter:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' }
  ]
})

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  // Handle form submission
  console.log('Form submitted:', form.value)
}
</script>

<template>
  <div class="contact-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Contact Us</h1>
        <p class="page-subtitle">
          <!-- Add your contact page tagline -->
          We'd love to hear from you. Get in touch with us and learn how to volunteer below.
        </p>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Form -->
          <div class="contact-form-container">
            <h2>Send Us a Message</h2>
            <form class="contact-form" @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name" class="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="form.name"
                  class="form-input" 
                  placeholder="John Doe"
                  required 
                />
              </div>

              <div class="form-group">
                <label for="email" class="form-label">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="form.email"
                  class="form-input" 
                  placeholder="john@example.com"
                  required 
                />
              </div>

              <div class="form-group">
                <label for="subject" class="form-label">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="form.subject"
                  class="form-input" 
                  placeholder="How can we help?"
                  required 
                />
              </div>

              <div class="form-group">
                <label for="message" class="form-label">Message</label>
                <textarea 
                  id="message" 
                  v-model="form.message"
                  class="form-textarea" 
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button type="submit" class="btn btn-primary btn-lg submit-btn">
                Send Message
              </button>
            </form>
          </div>

          <!-- Contact Info -->
          <div class="contact-info">
            <div class="info-section">
              <h3>Contact Information</h3>
              <div class="info-items">
                <div class="info-item">
                  <div class="info-icon">📍</div>
                  <div class="info-content">
                    <h4>Address</h4>
                    <p>
                      <!-- Add your address here -->
                      P.O Box 64713<br>
                      Virginia Beach, VA 23467
                    </p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">📧</div>
                  <div class="info-content">
                    <h4>Email</h4>
                    <p>
                      <a href="mailto:info@charity.org">info@savingkidneys.org</a>
                    </p>
                  </div>
                </div>

                <div class="info-item">
                  <div class="info-icon">📞</div>
                  <div class="info-content">
                    <h4>Phone</h4>
                    <p>
                      <a href="tel:+1234567890">(123) 456-7890</a>
                    </p>
                  </div>
                </div>

              </div>
            </div>

            <div class="info-section">
              <h3>Follow Us</h3>
              <p class="social-intro">Following and engaging with us on our social media pages is a simple and effective way to get involved!</p>
              <div class="social-links">
                <a href="https://www.facebook.com/HealthAwarenessInc" class="social-link" aria-label="Facebook" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://x.com/healthawareinc" class="social-link" aria-label="Twitter" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://www.instagram.com/healthawareinc" class="social-link" aria-label="Instagram" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Involved CTA -->
    <section class="section volunteer-section">
      <div class="container">
        <div class="volunteer-content">
          <h2>Want to Get Involved?</h2>
          <p>
            We're always looking for passionate people to get involved and further our mission of educating and raising awareness about chronic kidney disease. 
            Whether you can spare a few hours or want to make a regular commitment, we have opportunities for you to volunteer, sponsor, or partner with our charity.
          </p>
          <div class="involvement-options">
            <RouterLink to="/donate" class="involvement-card">
              <div class="involvement-icon">💝</div>
              <h3>Donate</h3>
              <p>Support our mission with a financial contribution</p>
            </RouterLink>
            <div class="involvement-card">
              <div class="involvement-icon">🤝</div>
              <h3>Volunteer</h3>
              <p>Give your time to help in our programs</p>
            </div>
            <div class="involvement-card">
              <div class="involvement-icon">⭐</div>
              <h3>Sponsor</h3>
              <p>Sponsor an event or program</p>
            </div>
            <div class="involvement-card">
              <div class="involvement-icon">🏢</div>
              <h3>Partner</h3>
              <p>Partner with us as an organization</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-header {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: var(--spacing-16) 0;
  text-align: center;
}

.page-title {
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
}

.page-subtitle {
  font-size: var(--font-size-lg);
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
}

/* Contact Grid */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-10);
}

/* Contact Form */
.contact-form-container {
  background-color: var(--color-white);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.contact-form-container h2 {
  margin-bottom: var(--spacing-6);
}

.submit-btn {
  width: 100%;
}

/* Contact Info */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
}

.info-section h3 {
  margin-bottom: var(--spacing-4);
  padding-bottom: var(--spacing-3);
  border-bottom: 2px solid var(--color-gray-200);
}

.social-intro {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-4);
}

.info-items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.info-item {
  display: flex;
  gap: var(--spacing-4);
}

.info-icon {
  font-size: var(--font-size-2xl);
  flex-shrink: 0;
}

.info-content h4 {
  font-size: var(--font-size-base);
  margin-bottom: var(--spacing-1);
}

.info-content p {
  color: var(--color-gray-600);
  margin-bottom: 0;
}

.info-content a {
  color: var(--color-primary);
  transition: color var(--transition-fast);
}

.info-content a:hover {
  color: var(--color-primary-dark);
}

/* Social Links */
.social-links {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3);
}

.social-link {
  display: inline-flex;
  padding: var(--spacing-2) var(--spacing-4);
  background-color: var(--color-gray-100);
  color: var(--color-gray-700);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  transition: all var(--transition-fast);
}

.social-link:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

/* Map Section */
.map-section {
  background-color: var(--color-gray-100);
}

.map-placeholder {
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-500);
  font-size: var(--font-size-lg);
}

/* Volunteer Section */
.volunteer-section {
  background-color: var(--color-gray-50);
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
  color: var(--color-gray-600);
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
</style>
