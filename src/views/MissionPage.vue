<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Our Mission - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://savingkidneys.github.io/mission' }
  ],
  meta: [
    { name: 'description', content: 'Our mission is to educate communities about preventive behaviors, early detection, and healthy lifestyles to stop the progression of Chronic Kidney Disease.' },
    { property: 'og:title', content: 'Our Mission - Health & Awareness, Inc' },
    { property: 'og:description', content: 'Bringing awareness to kidney health through education and community outreach.' },
    { property: 'og:url', content: 'https://savingkidneys.github.io/mission' },
    { property: 'og:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Our Mission - Health & Awareness, Inc' },
    { name: 'twitter:description', content: 'Bringing awareness to kidney health through education and community outreach.' },
    { name: 'twitter:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' }
  ]
})
</script>

<template>
  <div class="mission-page">
    <!-- Page Header -->
    <section class="page-header" style="display: none;">
      <div class="container">
        <h1 class="page-title">Our Mission</h1>
        <p class="page-subtitle">
          <!-- Add your mission page tagline -->
          Bring awareness to kidney health! Health & Awareness, Inc is a 501 (c)(3) organization that educates individuals in the community by raising awareness about preventive behaviors, early detection, and a healthy lifestyle to stop the progression of Chronic Kidney Disease
        </p>
      </div>
    </section>

    <!-- Mission Statement -->
    <section class="section" style="display: none;">
      <div class="container">
        <div class="mission-statement">
          <h2>Mission Statement</h2>
          <blockquote class="statement-quote">
            <!-- Add your mission statement here -->
           Bring awareness to kidney health! Health & Awareness, Inc is a 501 (c)(3) organization that educates individuals in the community by raising awareness about preventive behaviors, early detection, and a healthy lifestyle to stop the progression of Chronic Kidney Disease
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="section vision-section">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <h2>Our Mission</h2>
            <p>
              <!-- Add your vision description here -->
              Our Mision is to decrease the rising numbers of chronic kidney failure by bridging the knowledge gap for better kidney care. We have adopted easy to understand rules that we call "Common Sense Rules".  The Common Sense Rules  focuses on understanding lab test results, forget dieting and change eating habits instead, read and follow the nutritional fact label, know the facts about organ donation and remembering there is no such thing as a one size fits all treatment plan.
            </p>
          </div>
          <div class="content-image">
            <div class="image-placeholder">
              <span>Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Focus Section -->
    <section class="section focus-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Focus</h2>
          <p class="section-subtitle">
            Addressing the leading causes of Chronic Kidney Disease.
          </p>
        </div>
        <div class="focus-content">
          <p>
            We educate people about diabetes and high blood pressure which are the two leading risk factors for Chronic Kidney Disease (CKD). Health & Awareness, Inc advocates for systematic screening of all patients with diabetes and hypertension for CKD. We encourage preventative behaviors and healthcare compliance to guide people in the right direction for managing their health.
          </p>
        </div>
      </div>
    </section>

    <!-- Goals Section -->
    <section class="section goals-section" style="display: none;">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Goals</h2>
          <p class="section-subtitle">
            The objectives we're working towards.
          </p>
        </div>
        <div class="goals-grid">
          <div class="goal-item">
            <div class="goal-number">1</div>
            <h3>Goal One</h3>
            <p>Description of this goal and what it means for your charity's work.</p>
          </div>
          <div class="goal-item">
            <div class="goal-number">2</div>
            <h3>Goal Two</h3>
            <p>Description of this goal and what it means for your charity's work.</p>
          </div>
          <div class="goal-item">
            <div class="goal-number">3</div>
            <h3>Goal Three</h3>
            <p>Description of this goal and what it means for your charity's work.</p>
          </div>
          <div class="goal-item">
            <div class="goal-number">4</div>
            <h3>Goal Four</h3>
            <p>Description of this goal and what it means for your charity's work.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="section" style="display: none;">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Impact</h2>
          <p class="section-subtitle">
            The difference we're making in our community.
          </p>
        </div>
        <div class="impact-grid">
          <div class="impact-item">
            <span class="impact-number">0</span>
            <span class="impact-label">Impact Metric 1</span>
          </div>
          <div class="impact-item">
            <span class="impact-number">0</span>
            <span class="impact-label">Impact Metric 2</span>
          </div>
          <div class="impact-item">
            <span class="impact-number">0</span>
            <span class="impact-label">Impact Metric 3</span>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Join Our Mission</h2>
          <p>Help us make our vision a reality.</p>
          <div class="cta-actions">
            <RouterLink to="/donate" class="btn btn-primary btn-lg">
              Donate Now
            </RouterLink>
            <RouterLink to="/contact" class="btn btn-outline btn-lg">
              Volunteer
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

/* Mission Statement */
.mission-statement {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.mission-statement h2 {
  margin-bottom: var(--spacing-8);
}

.statement-quote {
  font-size: var(--font-size-2xl);
  font-style: italic;
  color: var(--color-gray-700);
  line-height: var(--line-height-relaxed);
  padding: var(--spacing-8);
  background-color: var(--color-gray-50);
  border-left: 4px solid var(--color-primary);
  border-radius: var(--radius-lg);
}

/* Vision Section */
.vision-section {
  background-color: var(--color-gray-50);
}

.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-10);
  align-items: center;
}

.content-text h2 {
  margin-bottom: var(--spacing-6);
}

.content-text p {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
}

.image-placeholder {
  background-color: var(--color-gray-200);
  border-radius: var(--radius-xl);
  aspect-ratio: 4/3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-gray-500);
  font-size: var(--font-size-lg);
}

/* Focus Section */
.focus-section {
  background-color: var(--color-white);
}

.focus-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.focus-content p {
  font-size: var(--font-size-lg);
  color: var(--color-gray-700);
  line-height: var(--line-height-relaxed);
}

/* Goals Section */
.goals-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
}

.goal-item {
  background-color: var(--color-white);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  text-align: center;
}

.goal-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background-color: var(--color-primary);
  color: var(--color-white);
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  border-radius: var(--radius-full);
  margin-bottom: var(--spacing-4);
}

.goal-item h3 {
  margin-bottom: var(--spacing-3);
}

.goal-item p {
  color: var(--color-gray-600);
  margin-bottom: 0;
}

/* Impact Section */
.impact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
  text-align: center;
}

.impact-item {
  padding: var(--spacing-8);
  background-color: var(--color-gray-50);
  border-radius: var(--radius-xl);
}

.impact-number {
  display: block;
  font-size: var(--font-size-4xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  margin-bottom: var(--spacing-2);
}

.impact-label {
  font-size: var(--font-size-base);
  color: var(--color-gray-600);
}

/* CTA Section */
.cta-section {
  background: linear-gradient(135deg, var(--color-secondary) 0%, var(--color-secondary-dark) 100%);
  color: var(--color-white);
  text-align: center;
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
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }

  .goals-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .impact-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
