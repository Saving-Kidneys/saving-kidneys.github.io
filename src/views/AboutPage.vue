<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'About Us - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://savingkidneys.github.io/about' }
  ],
  meta: [
    { name: 'description', content: 'Learn about Health & Awareness, Inc - a faith-based 501(c)(3) organization educating communities about Chronic Kidney Disease prevention and healthy living.' },
    { property: 'og:title', content: 'About Us - Health & Awareness, Inc' },
    { property: 'og:description', content: 'Learn about our mission to raise awareness about Chronic Kidney Disease.' },
    { property: 'og:url', content: 'https://savingkidneys.github.io/about' },
    { property: 'og:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'About Us - Health & Awareness, Inc' },
    { name: 'twitter:description', content: 'Learn about our mission to raise awareness about Chronic Kidney Disease.' },
    { name: 'twitter:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' }
  ]
})
</script>

<template>
  <div class="about-page">
    <!-- Page Header -->

    <!-- Story Section -->
    <section class="section">
      <div class="container">
        <div class="content-grid">
          <div class="content-text">
            <h2>About Us</h2>
            <p>
              <!-- Add your organization's story here -->
              Health & Awareness, Inc is a faith-based 501 (c)(3) organization that educates individuals in the community by raising awareness about preventive behaviors, early detection, and a healthy lifestyle to stop the progression of Chronic Kidney Disease. 
            </p>
            <p>
              Disclaimer: Health & Awareness is not a healthcare provider. Any health-related information or advice shared is for awareness and informational purposes only and should not be considered a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition or diagnosis.
            </p>
          </div>
          <div class="content-image">
            <!-- Add an image here -->
            <img src="/assets/images/wallace4.png" alt="Wallace S. Green Sr." class="story-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Team</h2>
          <p class="section-subtitle">
            Meet the dedicated people behind our mission.
          </p>
        </div>
        <div class="team-grid">
          <div class="team-member">
            <div class="member-photo">
              <img src="/assets/images/wallace4.png" alt="Wallace S. Green Sr." class="photo-placeholder" />
            </div>
            <h3 class="member-name">Wallace S. Green Sr.</h3>
            <p class="member-role">Founder</p>
          </div>
          <div class="team-member">
            <div class="member-photo">
              <img src="/assets/images/wallace4.png" alt="Wallace S. Green Sr." class="photo-placeholder" />
            </div>
            <h3 class="member-name">Roshawn Foote-Scott</h3>
            <p class="member-role">President</p>
          </div>
          <div class="team-member">
            <div class="member-photo">
              <div class="photo-placeholder"></div>
            </div>
            <h3 class="member-name">Team Member Name</h3>
            <p class="member-role">Role / Title</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founder Section -->
    <section class="section founder-section">
      <div class="container">
        <div class="founder-intro">
          <div class="founder-images">
            <img src="/assets/images/wallace1.png" alt="Wallace S. Green Sr." class="founder-image founder-image-main" />
            <div class="founder-images-secondary">
              <img src="/assets/images/wallace2.png" alt="Wallace S. Green Sr." class="founder-image" />
              <img src="/assets/images/wallace3.png" alt="Wallace S. Green Sr." class="founder-image" />
            </div>
          </div>
          <div class="founder-text">
            <h2>The Mastermind Behind The Mission</h2>
            <p>
              Wallace S. Green Sr., is the founder of Health & Awareness, Inc. The organization was created from his personal experience with chronic kidney failure. Wallace's kidneys failed at the age of 50. However, he later discovered from his own research that he had chronic kidney disease at age 17.
            </p>
            <p>
              Wallace served our country and during that time he was exposed to "Agent Orange". His exposure to the agent contributed to him experiencing side effects directly related to the agent. Mr. Green's experience with chronic kidney disease was a long journey for him. He had to receive dialysis for 5 years while waiting for a kidney transplant.
            </p>
            <p>
              Once he received a kidney, unfortunately, the kidney Wallace received ended up failing due to other health issues. However, Wallace was blessed! The failed kidney resulted in him having to receive dialysis for 3 more years. During the 3rd year is when Wallace received the good news regarding another kidney. He then went through the process of having a kidney transplant, which ended his need for dialysis. The new kidney that Mr. Green received is functioning well.
            </p>
          </div>
        </div>

        <div class="founder-advocacy">
          <h3>Advocacy & Recognition</h3>
          <p>
            Wallace's transplant experience led to him advocating for organ donations. He became one of the faces of LifeNet Health, the world's most trusted provider of transplant solutions. Wallace has a featured story on LifeNet's website and even a huge mural in the Norfolk Airport promoting organ donation.
          </p>
          <p>
            Mr. Green's journey further led to him writing a book entitled <a href="https://www.amazon.com/dp/1642994316" target="_blank" rel="noopener noreferrer" class="book-link"><strong>"Why Not Me?"</strong></a> which centers around his emotional journey of facing chronic kidney failure and what it entails.
          </p>
          <p>
            This Kidney Health Coach has facilitated health workshops for over 11 years in Hampton Roads, Virginia. He has been recognized by the Governor, the Mayor, and a host of community leaders for his personable approach to health education.
          </p>
        </div>

        <div class="founder-banner">
          <img src="/assets/images/wallace-banner.jpg" alt="Wallace S. Green Sr. - LifeNet Health" class="banner-image" />
        </div>

        <div class="founder-video">
          <div class="video-container">
            <iframe 
              src="https://www.youtube.com/embed/w1ehOGXv79c" 
              title="Wallace S. Green Sr. - Health & Awareness"
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="section values-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Our Values</h2>
          <p class="section-subtitle">
            The principles that guide everything we do.
          </p>
        </div>
        <div class="values-grid">
          <div class="value-item">
            <h3>Education & Awareness</h3>
            <p>We believe that knowledge is power. By educating communities about diabetes, high blood pressure, and their link to Chronic Kidney Disease, we empower people to take control of their health.</p>
          </div>
          <div class="value-item">
            <h3>Prevention First</h3>
            <p>Early detection saves lives. We advocate for systematic screening and preventative behaviors to stop the progression of kidney disease before it's too late.</p>
          </div>
          <div class="value-item">
            <h3>Faith & Compassion</h3>
            <p>As a faith-based organization, we approach every interaction with compassion, understanding, and the belief that everyone deserves access to health education.</p>
          </div>
          <div class="value-item">
            <h3>Personal Experience</h3>
            <p>Founded from lived experience with chronic kidney failure, we understand the journey firsthand and bring authentic, personable guidance to those we serve.</p>
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

.story-image {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

/* Founder Section */
.founder-section {
  background-color: var(--color-gray-50);
}

.founder-intro {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-10);
  align-items: start;
  margin-bottom: var(--spacing-12);
}

.founder-images {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.founder-image {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.founder-image-main {
  max-width: 100%;
}

.founder-images-secondary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-4);
}

.founder-text h2 {
  margin-bottom: var(--spacing-6);
  color: var(--color-gray-900);
}

.founder-text p {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
}

.founder-advocacy {
  background-color: var(--color-white);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-md);
}

.founder-advocacy h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-6);
  font-size: var(--font-size-2xl);
}

.founder-advocacy p {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
}

.founder-advocacy p:last-child {
  margin-bottom: 0;
}

.book-link {
  color: var(--color-primary);
  text-decoration: underline;
  transition: color var(--transition-fast);
}

.book-link:hover {
  color: var(--color-primary-dark);
}

.founder-banner {
  margin-top: var(--spacing-10);
}

.banner-image {
  width: 100%;
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.founder-video {
  margin-top: var(--spacing-10);
}

.video-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  border-radius: var(--radius-xl);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.video-container iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

/* Values Section */
.values-section {
  background-color: var(--color-gray-50);
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
}

.value-item {
  background-color: var(--color-white);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.value-item h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-3);
}

.value-item p {
  color: var(--color-gray-600);
  margin-bottom: 0;
}

/* Team Section */
.team-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
}

.team-member {
  text-align: center;
}

.photo-placeholder {
  width: 150px;
  height: 150px;
  background-color: var(--color-gray-200);
  border-radius: var(--radius-full);
  margin: 0 auto var(--spacing-4);
}

.member-name {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-1);
}

.member-role {
  color: var(--color-gray-500);
  margin-bottom: 0;
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

  .founder-intro {
    grid-template-columns: 1fr 1fr;
  }

  .values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .team-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
