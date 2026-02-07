<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'About WallACE S. Green Sr. - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://saving-kidneys.github.io/about-wallace' }
  ],
  meta: [
    { name: 'description', content: 'Learn about WallACE S. Green Sr., founder of Health & Awareness, Inc.' },
    { property: 'og:title', content: 'About WallACE S. Green Sr. - Health & Awareness, Inc' },
    { property: 'og:description', content: 'Learn about WallACE S. Green Sr., founder of Health & Awareness, Inc.' },
    { property: 'og:url', content: 'https://saving-kidneys.github.io/about-wallace' },
    { property: 'og:image', content: 'https://saving-kidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'About WallACE S. Green Sr. - Health & Awareness, Inc' },
    { name: 'twitter:description', content: 'Learn about WallACE S. Green Sr., founder of Health & Awareness, Inc.' },
    { name: 'twitter:image', content: 'https://saving-kidneys.github.io/assets/images/savingkidneys-og.jpg' }
  ]
})
</script>

<template>
  <div class="about-wallace-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">WallACE S. Green Sr.</h1>
      </div>
    </section>

    <!-- Section 1: Military & Early Career -->
    <section class="section">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <p>
              WallACE holds degrees in sociology, business, and radio/television. He is married to Sandra, and they are the proud parents of four children, seven grandchildren, and one great-grandchild. He is a decorated, retired, disabled Vietnam and Desert Shield Navy veteran. His experiences in a race riot aboard the USS Kitty Hawk were featured at the Hampton Roads Naval Museum and on the Smithsonian Channel's Combat Ships series. His duties included working as a radio personality on Armed Forces Radio Television Service, a Race Relation Facilitator. He earned the title of recruiter of the year, seven of the seven years as a Naval Recruiter and numerous awards and citations. WallACE was the first Black to be hand picked for one of only two assistant director positions for the Atlantic Fleet Career Information Team. After leaving the military, he worked as a claim agent for the Veteran Administration, then transferring to the Virginia Employment Commission.
            </p>
          </div>
          <div class="content-image">
            <img src="/assets/images/wallace1.png" alt="WallACE S. Green Sr." class="section-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 2: Health & Awareness Formation -->
    <section class="section section-alt">
      <div class="container">
        <div class="content-grid content-grid-reverse">
          <div class="content-text">
            <p>
              WallACE spent eight years on dialysis due to kidney failure. He was motivated to form Health & Awareness, a 501c3 nonprofit, faith-based organization, once he learned kidney failure was preventable. He focused on supporting underserved populations and those at risk for kidney disease. Motivated by the preventability of kidney failure, he authored <a href="https://www.amazon.com/dp/1642994316" target="_blank" rel="noopener noreferrer" class="book-link">"Why Not Me"</a> to encourage early prevention. As a certified Kidney Health Coach and advocate with several health organizations, including the American Kidney Fund, Dialysis Patient Citizens, National Kidney Foundation, LifeNet Health and Donate Life Virginia, he advocates and educates those in need.
            </p>
          </div>
          <div class="content-image">
            <img src="/assets/images/wallace2.png" alt="WallACE S. Green Sr." class="section-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 3: Resilience & Recognition -->
    <section class="section">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <p>
              As a result of his Vietnam service he has undergone over 24 life threatening surgeries, including two kidney transplants, an overcomer of prostate, colon, kidney cancer, and most recently pancreatic cancer in 2024. Despite ongoing dialysis and other procedures, he continues to serve his community, earning awards as the Governor's Seniors Volunteerism Award, Still Serving Military Awards, and Hampton Roads Achievement Awards, and the Virginia Beach Mayor's Commission of aging Seniors Show Case Award. His dedication is recognized by a LifeNet Health billboard postage at Norfolk Airport and several other community service honors.
            </p>
            <p>
              WallACE's journey highlights resilience, faith, and community support. His legacy inspires others to prioritize their health and make responsible lifestyle choices.
            </p>
          </div>
          <div class="content-image">
            <img src="/assets/images/wallace3.png" alt="WallACE S. Green Sr." class="section-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Section 4: Community Impact -->
    <section class="section section-highlight">
      <div class="container">
        <div class="highlight-content">
          <p>
            WallACE, originally from Baltimore, MD, presently calls Tidewater home. His efforts to educate on kidney health and organ donation have made a notable difference in the community since 2011. Through work with various organizations, he promotes bridging the gap in relations to the connection of chronic disease, early prevention and collaboration with other organizations targeting the underserved community. Crediting his wife, mother, father and God for his successful journey.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-wallace-page {
  min-height: 60vh;
}

.page-header {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
  padding: var(--spacing-12) 0;
  text-align: center;
}

.page-title {
  color: var(--color-white);
  margin-bottom: 0;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

.section {
  padding: var(--spacing-12) 0;
}

.section-alt {
  background-color: var(--color-gray-50);
}

/* Content Grid */
.content-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
  align-items: center;
}

.content-text p {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
  font-size: var(--font-size-base);
}

.content-text p:last-child {
  margin-bottom: 0;
}

.section-image {
  width: 100%;
  max-width: 400px;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
  margin: 0 auto;
  display: block;
}

/* Highlight Section */
.section-highlight {
  background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
  color: var(--color-white);
}

.highlight-content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

.highlight-content p {
  color: var(--color-white);
  font-size: var(--font-size-lg);
  line-height: var(--line-height-relaxed);
  margin-bottom: 0;
}

.book-link {
  color: var(--color-primary);
  text-decoration: underline;
  font-weight: 600;
  transition: color var(--transition-fast);
}

.book-link:hover {
  color: var(--color-primary-dark);
}

/* Responsive */
@media (min-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr 1fr;
  }

  .content-grid-reverse {
    direction: rtl;
  }

  .content-grid-reverse > * {
    direction: ltr;
  }

  .section-image {
    max-width: 100%;
  }
}
</style>
