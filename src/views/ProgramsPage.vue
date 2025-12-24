<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Our Programs - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://savingkidneys.github.io/programs' }
  ],
  meta: [
    { name: 'description', content: 'Explore our programs including food distribution, health workshops, community outreach, and educational seminars about Chronic Kidney Disease.' },
    { property: 'og:title', content: 'Our Programs - Health & Awareness, Inc' },
    { property: 'og:description', content: 'Making a difference through education, outreach, and community support.' },
    { property: 'og:url', content: 'https://savingkidneys.github.io/programs' },
    { property: 'og:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Our Programs - Health & Awareness, Inc' },
    { name: 'twitter:description', content: 'Making a difference through education, outreach, and community support.' },
    { name: 'twitter:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' }
  ]
})

const foodDistributionStartYear = 2021
const yearsSinceFoodDistribution = new Date().getFullYear() - foodDistributionStartYear
</script>

<template>
  <div class="programs-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Our Programs</h1>
        <p class="page-subtitle">
          Making a difference through education, outreach, and community support.
        </p>
      </div>
    </section>

    <!-- Food Distribution Program -->
    <section class="section">
      <div class="container">
        <div class="program-intro">
          <h2>Food Distribution</h2>
          <p>
            Health & Awareness, Inc has been serving the community through our food distribution program for over {{ yearsSinceFoodDistribution }} years. Each month, we distribute food to families in our communities that live in the following cities:
          </p>
          <div class="cities-badges">
            <span class="city-badge">Virginia Beach</span>
            <span class="city-badge">Norfolk</span>
            <span class="city-badge">Chesapeake</span>
            <span class="city-badge">Suffolk</span>
            <span class="city-badge">Portsmouth</span>
          </div>
        </div>
        <div class="food-gallery">
          <img src="/assets/images/food-distribution1 (1).png" alt="Food distribution volunteers serving the community" class="food-gallery-image" />
          <img src="/assets/images/food-distribution2 (1).png" alt="Community members receiving food assistance" class="food-gallery-image" />
          <img src="/assets/images/food-distribution3 (1).png" alt="Food distribution event" class="food-gallery-image" />
        </div>
        <!-- Food Distribution Team -->
        <div class="team-section">
          <h3>Meet the Food Distribution Team</h3>
          <p>We appreciate our team! Our food distributing team faithfully delivers food to families in the community every month. Here's the team:</p>
          <div class="team-grid">
            <div class="team-member">
              <img src="/assets/images/michael (1).png" alt="Michael G." class="team-image" />
              <h4 class="team-name">Michael, G.</h4>
              <p class="team-role">Food Distribution Coordinator</p>
            </div>
            <div class="team-member">
              <img src="/assets/images/betty (1).png" alt="Betty M." class="team-image" />
              <h4 class="team-name">Betty, M.</h4>
              <p class="team-role">Food Distributor</p>
            </div>
            <div class="team-member">
              <img src="/assets/images/alonzo (1).png" alt="Alonzo H." class="team-image" />
              <h4 class="team-name">Alonzo, H.</h4>
              <p class="team-role">Food Distributor</p>
            </div>
          </div>
        </div>

        <!-- Additional Food Distribution Images -->
        <div class="food-gallery">
          <img src="/assets/images/food-distribution4 (1).png" alt="Food distribution event" class="food-gallery-image" />
          <img src="/assets/images/food-distribution5 (1).png" alt="Food distribution event" class="food-gallery-image" />
          <img src="/assets/images/food-distribution6 (1).png" alt="Food distribution event" class="food-gallery-image" />
        </div>
      </div>
    </section>

    <!-- Health Workshops -->
    <section class="section">
      <div class="container">
        <div class="program-card">
          <div class="program-content">
            <h2>Health Education Workshops</h2>
            <p>
              For over 11 years, Health & Awareness, Inc has facilitated health workshops throughout 
              Hampton Roads, Virginia. Our workshops focus on practical, actionable health education.
            </p>
            <p>
              Topics include understanding lab results, reading nutritional labels, managing diabetes 
              and high blood pressure, and our signature "Common Sense Rules" approach to better kidney care.
            </p>
          </div>
          <div class="program-image">
            <div class="image-placeholder">
              <span>Program Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Involved CTA -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Get Involved</h2>
          <p>
            Interested in participating in our programs or volunteering? We'd love to hear from you.
          </p>
          <div class="cta-actions">
            <RouterLink to="/contact" class="btn btn-primary btn-lg">
              Contact Us
            </RouterLink>
            <RouterLink to="/donate" class="btn btn-outline btn-lg">
              Support Our Programs
            </RouterLink>
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

/* Program Cards */
.program-intro {
  margin-bottom: var(--spacing-8);
}

.program-intro h2 {
  margin-bottom: var(--spacing-6);
  color: var(--color-gray-900);
}

.program-intro p {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
}

.program-card {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-10);
  align-items: center;
}

.program-content h2 {
  margin-bottom: var(--spacing-6);
  color: var(--color-gray-900);
}

.program-content p {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
}

.cities-badges {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3);
  margin-top: var(--spacing-4);
  margin-bottom: var(--spacing-4);
}

.city-badge {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-2) var(--spacing-4);
  border-radius: var(--radius-full);
  font-size: var(--font-size-sm);
  font-weight: 500;
}

.program-images {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.program-image-main {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.program-images-secondary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4);
}

.program-image-item {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.program-image .image-placeholder {
  background-color: var(--color-gray-200);
  border-radius: var(--radius-xl);
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-500);
  font-size: var(--font-size-lg);
}

.program-alt {
  background-color: var(--color-gray-50);
}

.text-link {
  color: var(--color-primary);
  text-decoration: underline;
}

.text-link:hover {
  color: var(--color-primary-dark);
}

/* Food Gallery */
.food-gallery {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-10);
}

.food-gallery-image {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

/* Team Section */
.team-section {
  margin-top: var(--spacing-12);
  padding-top: var(--spacing-12);
  border-top: 1px solid var(--color-gray-200);
}

.team-section h3 {
  margin-bottom: var(--spacing-4);
  color: var(--color-gray-900);
}

.team-section > p {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-8);
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-8);
}

.team-member {
  text-align: center;
}

.team-image {
  width: 100%;
  max-width: 200px;
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: var(--radius-full);
  box-shadow: var(--shadow-md);
  margin-bottom: var(--spacing-4);
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.team-name {
  font-size: var(--font-size-lg);
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-1);
}

.team-role {
  color: var(--color-primary);
  font-size: var(--font-size-sm);
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

.cta-content h2 {
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
}

.cta-content p {
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

/* Responsive */
@media (min-width: 768px) {
  .program-card {
    grid-template-columns: 1fr 1fr;
  }

  .program-card-reverse {
    direction: rtl;
  }

  .program-card-reverse > * {
    direction: ltr;
  }
}

@media (max-width: 640px) {
  .program-images-secondary {
    grid-template-columns: 1fr;
  }

  .food-gallery {
    grid-template-columns: 1fr;
  }

  .team-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
}
</style>
