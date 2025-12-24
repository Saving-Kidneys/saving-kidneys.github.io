<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Front Desk of the President - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://savingkidneys.github.io/front-desk-of-the-president' }
  ],
  meta: [
    { name: 'description', content: 'A message from the President of Health & Awareness, Inc - a faith-based 501(c)(3) organization educating communities about Chronic Kidney Disease prevention and healthy living.' },
    { property: 'og:title', content: 'Front Desk of the President - Health & Awareness, Inc' },
    { property: 'og:description', content: 'A message from the President of Health & Awareness, Inc.' },
    { property: 'og:url', content: 'https://savingkidneys.github.io/front-desk-of-the-president' },
    { property: 'og:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Front Desk of the President - Health & Awareness, Inc' },
    { name: 'twitter:description', content: 'A message from the President of Health & Awareness, Inc.' },
    { name: 'twitter:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' }
  ]
})
</script>

<template>
  <div class="front-desk-page">
    <!-- Story Section -->
    <section class="section">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <h2>Front Desk of the President</h2>
            <p>
              Health & Awareness, Inc is a faith-based 501 (c)(3) organization that educates individuals in the community by raising awareness about preventive behaviors, early detection, and a healthy lifestyle to stop the progression of Chronic Kidney Disease. 
            </p>
            <p>
              Disclaimer: Health & Awareness is not a healthcare provider. Any health-related information or advice shared is for awareness and informational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or diagnosis.
            </p>
          </div>
          <div class="content-image">
            <img src="/assets/images/wallace4.png" alt="Wallace S. Green Sr." class="story-image" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Content Grid */
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

.story-image {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

/* Responsive */
@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }
}
</style>