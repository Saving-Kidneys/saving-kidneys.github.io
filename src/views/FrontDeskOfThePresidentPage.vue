<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Front Desk of the President - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://saving-kidneys.github.io/front-desk-of-the-president' }
  ],
  meta: [
    { name: 'description', content: 'A message from the President of Health & Awareness, Inc - a faith-based 501(c)(3) organization educating communities about Chronic Kidney Disease prevention and healthy living.' },
    { property: 'og:title', content: 'Front Desk of the President - Health & Awareness, Inc' },
    { property: 'og:description', content: 'A message from the President of Health & Awareness, Inc.' },
    { property: 'og:url', content: 'https://saving-kidneys.github.io/front-desk-of-the-president' },
    { property: 'og:image', content: 'https://saving-kidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Front Desk of the President - Health & Awareness, Inc' },
    { name: 'twitter:description', content: 'A message from the President of Health & Awareness, Inc.' },
    { name: 'twitter:image', content: 'https://saving-kidneys.github.io/assets/images/savingkidneys-og.jpg' }
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
            <p class="italic"> A warm welcome from The Founder/CEO and Volunteer Team</p>
            <h3>Roshawn Footé-Scott - President</h3>
            <blockquote>
              <p>It's a pleasure to step into this leading role. I'm genuinely excited to be chosen as president of Health & Awareness and to partner with you all.  I've heard great things about this team's dedication and talent, and I'm eager to build on that success. Your expertise is what will drive us forward. </p>
                <p>My immediate focus is to learn from you and identify opportunities for us to grow and innovate. In the coming weeks, I'll be meeting with each of you to understand your perspectives. I believe in empowering teams, and I'm committed to creating an environment where your voices are heard, and your ideas can flourish. You can expect transparency and timely decisions from me, and I hope for your best effort and ideas. Let's redefine what's possible together!</p>
              <p>I’m looking forward to a fantastic journey! </p>
            </blockquote>
            <h3>The Founder/CEO and Volunteer Team.</h3>
            <blockquote>
              On behalf of everyone, I warmly welcome you to our team. Your dedication and experience inspire confidence that we can achieve great things together. We are confident you will be an exemplary role model for our team, and we look forward to collaborating with you. As we embark on this journey together, let's strive to achieve new heights and make a significant impact. Your presence is a source of inspiration, and we are excited about the prospects of working alongside you. Welcome aboard!
            </blockquote>
          </div>
          <div class="content-image">
            <img src="/assets/images/wallace4.png" alt="WallACE S. Green Sr." class="story-image" />
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

}

.content-text h3 {
  margin-bottom: var(--spacing-6);
}

.content-text p {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
}

.content-text .italic {
  font-style: italic;
  font-size: var(--text-lg);
  color: var(--color-primary-600);
  font-weight: 500;
}

.content-text blockquote {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
  border-left: 4px solid var(--color-primary-500);
  padding-left: var(--spacing-4);
  font-style: italic;
}

.content-image {
  max-width: 80%;
  margin: 0 auto;
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