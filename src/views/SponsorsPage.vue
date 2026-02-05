<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Learn More About Our Sponsors - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://saving-kidneys.github.io/sponsors' }
  ],
  meta: [
    { name: 'description', content: 'Learn about the generous sponsors who support Health & Awareness, Inc in our mission to raise awareness about Chronic Kidney Disease prevention.' },
    { property: 'og:title', content: 'Learn More About Our Sponsors - Health & Awareness, Inc' },
    { property: 'og:description', content: 'Meet the sponsors who help us fight Chronic Kidney Disease.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:url', content: 'https://saving-kidneys.github.io/sponsors' }
  ]
})
</script>

<template>
  <div class="sponsors-page">
    <!-- Hero Section -->
    <section class="page-hero">
      <div class="container">
        <h1 class="page-title">Learn More About Our Sponsors</h1>
        <p class="page-subtitle">
          We are grateful for the generous organizations and individuals who support our mission to raise awareness about Chronic Kidney Disease prevention.
        </p>
      </div>
    </section>

    <!-- Featured Sponsor Section -->
    <section class="section sponsors-featured">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Sponsor</h2>
        </div>
        <div class="sponsor-card sponsor-featured">
          <div class="sponsor-image">
            <img src="/assets/images/modern-woodmen-sponsor.jpg" alt="Modern Woodmen of America" />
          </div>
          <div class="sponsor-info">
            <h3 class="sponsor-name">Modern Woodmen of America</h3>
            <p class="sponsor-contribution">$2,500 Contribution</p>
            <p class="sponsor-description">
              Health & Awareness, Inc extends our heartfelt gratitude to Modern Woodmen of America and representative <a href="https://reps.modernwoodmen.org/jmcduffie/" target="_blank" rel="noopener noreferrer" class="text-link">Joe McDuffie</a> for their generous $2,500 contribution to our organization. Their support helps us continue our vital mission of raising awareness about Chronic Kidney Disease prevention, education, and early detection in our communities.
            </p>
            <p class="sponsor-description">
              Modern Woodmen of America is a fraternal financial services organization that has been helping members protect their families and give back to their communities since 1883. Their commitment to community service aligns perfectly with our mission, and we are honored to have them as a sponsor.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Become a Sponsor Section -->
    <section class="section sponsors-cta">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Become a Sponsor</h2>
          <p class="section-subtitle">
            Your sponsorship helps us continue our mission of educating communities about kidney health and disease prevention. Join our family of sponsors and make a difference in the lives of those at risk for Chronic Kidney Disease.
          </p>
        </div>
        <div class="cta-actions">
          <RouterLink to="/contact" class="btn btn-primary btn-lg">
            Contact Us About Sponsorship
          </RouterLink>
          <RouterLink to="/donate" class="btn btn-outline btn-lg">
            Make a Donation
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.sponsors-page {
  min-height: 100vh;
}

.page-hero {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark, #1a5f2a) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
}

.page-subtitle {
  font-size: 1.125rem;
  max-width: 700px;
  margin: 0 auto;
  opacity: 0.95;
}

.section {
  padding: 4rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.section-subtitle {
  font-size: 1.125rem;
  color: var(--color-text-muted, #666);
  max-width: 700px;
  margin: 0 auto;
}

.sponsors-featured {
  background-color: var(--color-background-alt, #f8f9fa);
}

.sponsor-card {
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.sponsor-featured {
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 0;
  max-width: 1100px;
  margin: 0 auto;
}

.sponsor-image {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  background: #fff;
}

.sponsor-image img {
  max-width: 100%;
  height: auto;
  max-height: 400px;
  object-fit: contain;
}

.sponsor-info {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.sponsor-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: var(--color-primary);
  margin-bottom: 0.5rem;
  text-align: center;
}

.sponsor-contribution {
  font-size: 1.25rem;
  text-align: center;
  font-weight: 600;
  color: var(--color-accent, #e67e22);
  margin-bottom: 1.5rem;
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, #fff9e6 0%, #fff3cd 100%);
  border-radius: 0.5rem;
  display: inline-block;

}

.sponsor-description {
  font-size: 1rem;
  line-height: 1.7;
  color: var(--color-text, #333);
  margin-bottom: 1rem;
}

.sponsor-description:last-child {
  margin-bottom: 0;
}

.text-link {
  color: var(--color-primary);
  text-decoration: underline;
}

.text-link:hover {
  color: var(--color-primary-dark, #1a5f2a);
}

.sponsors-cta {
  text-align: center;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.btn {
  display: inline-block;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-primary {
  background-color: var(--color-primary);
  color: white;
  border-color: var(--color-primary);
}

.btn-primary:hover {
  background-color: var(--color-primary-dark, #1a5f2a);
  border-color: var(--color-primary-dark, #1a5f2a);
}

.btn-outline {
  background-color: transparent;
  color: var(--color-primary);
  border-color: var(--color-primary);
}

.btn-outline:hover {
  background-color: var(--color-primary);
  color: white;
}

.btn-lg {
  padding: 1rem 2.5rem;
  font-size: 1.125rem;
}

@media (max-width: 768px) {
  .page-hero {
    padding: 3rem 0;
  }

  .page-title {
    font-size: 2rem;
  }

  .section {
    padding: 3rem 0;
  }

  .sponsor-featured {
    grid-template-columns: 1fr;
  }

  .sponsor-image {
    padding: 1.5rem;
  }

  .sponsor-info {
    padding: 1.5rem;
  }

  .sponsor-name {
    font-size: 1.5rem;
  }

  .cta-actions {
    flex-direction: column;
    align-items: center;
  }

  .btn-lg {
    width: 100%;
    max-width: 300px;
  }
}
</style>
