<script setup>
import { useHead } from '@unhead/vue'

useHead({
  title: 'Chronic Kidney Education - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://savingkidneys.github.io/education/chronic-kidney-education' }
  ],
  meta: [
    { name: 'description', content: 'Learn about chronic kidney disease, what causes it, and how to prevent it. Educational resources to help save your kidneys.' },
    { property: 'og:title', content: 'Chronic Kidney Education - Health & Awareness, Inc' },
    { property: 'og:description', content: 'What you learn can help save your kidneys! Educational resources about CKD.' },
    { property: 'og:url', content: 'https://savingkidneys.github.io/education/chronic-kidney-education' },
    { property: 'og:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Chronic Kidney Education - Health & Awareness, Inc' },
    { name: 'twitter:description', content: 'What you learn can help save your kidneys! Educational resources about CKD.' },
    { name: 'twitter:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' }
  ]
})
</script>

<template>
  <div class="education-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Welcome to Chronic Kidney Education</h1>
        <p class="page-subtitle">
          What you learn can help save your kidneys! Chronic Kidney Edu offers several options to educate you about chronic kidney disease, what causes it, and how to prevent it. Check out our options below.
        </p>
      </div>
    </section>

    <!-- Three Column Image Section -->
    <section class="section options-section">
      <div class="container">
        <div class="options-grid">
          <div class="option-card">
            <div class="option-image">
              <img src="/assets/images/education-option1.png" alt="Education Option 1" />
            </div>
          </div>
          <div class="option-card">
            <div class="option-image">
              <img src="/assets/images/education-option2.png" alt="Education Option 2" />
            </div>
          </div>
          <div class="option-card">
            <div class="option-image">
              <img src="/assets/images/education-option3.png" alt="Education Option 3" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- What is CKD Section -->
    <section class="section">
      <div class="container">
        <div class="content-block">
          <h2>What is Chronic Kidney Disease?</h2>
          <p>
            Chronic kidney disease (CKD) is when lasting damage to your kidneys causes them to lose their ability to filter waste and fluid out of your blood. Waste can build up in your body and harm your health. This damage–and your kidney function–can get worse over time, and when your kidneys stop working completely, this is called kidney failure or end-stage renal disease.
          </p>
        </div>
      </div>
    </section>

    <!-- Causes Section -->
    <section class="section causes-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">What Causes Chronic Kidney Disease?</h2>
        </div>

        <div class="causes-grid">
          <!-- Diabetes -->
          <div class="cause-card cause-card-featured">
            <h3>Diabetes</h3>
            <p>
              When our bodies digest the protein we eat, the process creates waste products. In the kidneys, millions of tiny blood vessels (capillaries) with even tinier holes in them act as filters. As blood flows through the blood vessels, small molecules such as waste products squeeze through the holes. These waste products become part of the urine.
            </p>
            <p>
              Useful substances, such as protein and red blood cells, are too big to pass through the holes in the filter and stay in the blood. Diabetes can damage this system. High levels of blood glucose (blood sugar) make the kidneys filter too much blood. All this extra work is hard on the filters. After many years, they start to leak and useful protein is lost in the urine. Having small amounts of protein in the urine is called microalbuminuria.
            </p>
            <p class="source">Source: <a href="https://diabetes.org/" target="_blank" rel="noopener noreferrer">diabetes.org</a></p>
          </div>

          <!-- Hypertension -->
          <div class="cause-card cause-card-featured">
            <h3>Hypertension (High Blood Pressure)</h3>
            <p>
              Your kidneys and circulatory system depend on each other for good health. The kidneys help filter wastes and extra fluids from blood, using a lot of blood vessels. When the blood vessels become damaged, the nephrons that filter your blood don't receive the oxygen and nutrients they need to function well. This is why high blood pressure is the second leading cause of kidney failure.
            </p>
            <p class="source">Source: <a href="https://www.heart.org/" target="_blank" rel="noopener noreferrer">heart.org</a></p>
          </div>

          <!-- Other causes -->
          <div class="cause-card">
            <h3>Fabry Disease</h3>
            <p>
              Fabry disease is a rare genetic disease that is passed down through your family. It affects organs all around your body, including your heart, brain and kidneys, and can cause them to get less blood than they need. Over time, this can cause chronic kidney disease or kidney failure.
            </p>
          </div>

          <div class="cause-card">
            <h3>Cystinosis</h3>
            <p>
              Cystinosis is a rare disorder that allows a natural chemical called cystine to build up in your body and cause health problems. Kidney damage from cystinosis can cause kidney failure. People with cystinosis must take medicine to lower their cystine levels and may need a kidney transplant. Cystinosis is genetic (runs in families) and is most often diagnosed in young babies.
            </p>
          </div>

          <div class="cause-card">
            <h3>Glomerulonephritis</h3>
            <p>
              Glomerulonephritis is when the tiny filters in your kidneys that clean your blood (glomeruli) are damaged and lose their ability to remove waste and fluid from your blood. Over time, this can cause kidney failure. Many health problems can cause glomerulonephritis and treatment depends on the cause.
            </p>
          </div>

          <div class="cause-card">
            <h3>IgA Nephropathy</h3>
            <p>
              Nephropathy is a disease that causes proteins made by your immune system to build up in your kidneys and damage the tiny filters that clean your blood (glomeruli). This damage can take years to develop, and people with IgA nephropathy often do not know they have it. Over time, IgA nephropathy can lead to chronic kidney disease, kidney failure or death. There is no cure for IgA nephropathy, but medicines can slow the damage to your kidneys.
            </p>
          </div>

          <div class="cause-card">
            <h3>Lupus Nephritis</h3>
            <p>
              Lupus nephritis is an autoimmune disease (a disease that causes your body's immune system to attack its own tissues) that leads to pain, swelling and damage in your whole body, including your kidneys. This can lead to chronic kidney disease or kidney failure. The exact cause of lupus nephritis is unknown, and it cannot be cured, but with treatment many people with lupus can lower their symptoms and prevent serious kidney damage.
            </p>
          </div>

          <div class="cause-card">
            <h3>aHUS (Atypical Hemolytic Uremic Syndrome)</h3>
            <p>
              aHUS is a very rare genetic (runs in families) disease that causes tiny blood clots to form in the small blood vessels of your body. These clots can block the flow of blood to your kidneys and other organs and cause damage. Many people who have aHUS never have symptoms. For people who do have symptoms, they often start after a "triggering event", such as becoming pregnant or having cancer.
            </p>
          </div>

          <div class="cause-card">
            <h3>Polycystic Kidney Disease (PKD)</h3>
            <p>
              Polycystic kidney disease is a genetic (runs in families) disorder that causes cysts (growths filled with fluid) to form on your kidneys and other organs. These cysts can lower your kidney's ability to filter fluid and waste from your blood. Over time, PKD can cause kidney failure. There is no cure for PKD, but treatments can slow the growth of the cysts and prevent PKD symptoms from causing health problems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Complications Section -->
    <section class="section complications-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Complications</h2>
          <p class="section-subtitle">
            Kidney failure can affect all parts of the body. Some of the complications of kidney failure include:
          </p>
        </div>

        <div class="complications-grid">
          <div class="complication-item">
            <div class="complication-icon">💧</div>
            <h4>Fluid Retention</h4>
            <p>Kidney failure leads to fluid retention causing swelling in the arms and feet</p>
          </div>

          <div class="complication-item">
            <div class="complication-icon">❤️</div>
            <h4>Cardiovascular Disease</h4>
            <p>Heart and blood vessels are affected due to kidney failure</p>
          </div>

          <div class="complication-item">
            <div class="complication-icon">⚡</div>
            <h4>Potassium Imbalance</h4>
            <p>Imbalance in potassium levels can be life-threatening</p>
          </div>

          <div class="complication-item">
            <div class="complication-icon">🛡️</div>
            <h4>Decreased Immune Response</h4>
            <p>Your body's ability to fight infections is weakened</p>
          </div>

          <div class="complication-item">
            <div class="complication-icon">🧠</div>
            <h4>Central Nervous System</h4>
            <p>Impairing central nervous system function</p>
          </div>

          <div class="complication-item">
            <div class="complication-icon">🤰</div>
            <h4>Pregnancy Complications</h4>
            <p>Increased risks during pregnancy</p>
          </div>

          <div class="complication-item">
            <div class="complication-icon">⚠️</div>
            <h4>Complete Kidney Failure</h4>
            <p>Complete loss of kidney function in the late stage</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
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
  </div>
</template>

<style scoped>
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
  max-width: 800px;
  margin: 0 auto;
  line-height: var(--line-height-relaxed);
}

/* Options Section */
.options-section {
  background-color: var(--color-gray-50);
}

.options-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-8);
}

.option-card {
  border-radius: var(--radius-xl);
}

.option-image {
  width: 100%;
  overflow: hidden;
}

.option-image img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}


/* Content Block */
.content-block {
  max-width: 900px;
  margin: 0 auto;
}

.content-block h2 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-6);
  text-align: center;
}

.content-block p {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
  font-size: var(--font-size-lg);
}

/* Causes Section */
.causes-section {
  background-color: var(--color-gray-50);
}

.causes-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
}

.cause-card {
  background-color: var(--color-white);
  padding: var(--spacing-6);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-sm);
}

.cause-card-featured {
  border-left: 4px solid var(--color-primary);
}

.cause-card h3 {
  color: var(--color-primary);
  margin-bottom: var(--spacing-4);
}

.cause-card p {
  color: var(--color-gray-600);
  line-height: var(--line-height-relaxed);
}

.cause-card .source {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
  margin-top: var(--spacing-4);
  margin-bottom: 0;
}

.cause-card .source a {
  color: var(--color-primary);
  text-decoration: underline;
}

/* Complications Section */
.complications-section {
  background-color: var(--color-white);
}

.complications-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-6);
}

.complication-item {
  background-color: var(--color-gray-50);
  padding: var(--spacing-6);
  border-radius: var(--radius-xl);
  text-align: center;
}

.complication-icon {
  font-size: 2.5rem;
  margin-bottom: var(--spacing-3);
}

.complication-item h4 {
  color: var(--color-gray-900);
  margin-bottom: var(--spacing-2);
}

.complication-item p {
  color: var(--color-gray-600);
  margin-bottom: 0;
  font-size: var(--font-size-sm);
}

/* Responsive */
@media (min-width: 768px) {
  .options-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .causes-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cause-card-featured {
    grid-column: span 1;
  }

  .complications-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .complications-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .complication-item:last-child {
    grid-column: span 1;
  }
}
</style>
