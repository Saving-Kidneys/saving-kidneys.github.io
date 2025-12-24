<script setup>
import { ref, computed } from 'vue'
import { useHead } from '@unhead/vue'

useHead({
  title: 'Donate - Health & Awareness, Inc',
  link: [
    { rel: 'canonical', href: 'https://savingkidneys.github.io/donate' }
  ],
  meta: [
    { name: 'description', content: 'Support Health & Awareness, Inc with a donation. Your contribution helps us continue our mission of raising awareness about Chronic Kidney Disease.' },
    { property: 'og:title', content: 'Donate - Health & Awareness, Inc' },
    { property: 'og:description', content: 'Support our mission to raise awareness about Chronic Kidney Disease prevention.' },
    { property: 'og:url', content: 'https://savingkidneys.github.io/donate' },
    { property: 'og:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Donate - Health & Awareness, Inc' },
    { name: 'twitter:description', content: 'Support our mission to raise awareness about Chronic Kidney Disease prevention.' },
    { name: 'twitter:image', content: 'https://savingkidneys.github.io/assets/images/savingkidneys-og.jpg' }
  ]
})

// TODO: Replace with your PayPal.me username
const PAYPAL_USERNAME = 'hakdp'
const CASHAPP_USERNAME = 'HealthyKidney'

const selectedAmount = ref(null)
const customAmount = ref('')

const donationAmounts = [25, 50, 100, 250, 500]

// Compute the final donation amount
const donationAmount = computed(() => {
  if (selectedAmount.value) return selectedAmount.value
  if (customAmount.value) return parseFloat(customAmount.value)
  return null
})

// Generate PayPal URL with pre-filled amount
const paypalUrl = computed(() => {
  const amount = donationAmount.value
  if (amount && amount > 0) {
    return `https://paypal.me/${PAYPAL_USERNAME}/${amount}`
  }
  return `https://paypal.me/${PAYPAL_USERNAME}`
})

// Generate CashApp URL with pre-filled amount
const cashappUrl = computed(() => {
  const amount = donationAmount.value
  if (amount && amount > 0) {
    return `https://cash.app/$${CASHAPP_USERNAME}/${amount}`
  }
  return `https://cash.app/$${CASHAPP_USERNAME}`
})

const selectAmount = (amount) => {
  selectedAmount.value = amount
  customAmount.value = ''
}

const handleCustomAmount = () => {
  selectedAmount.value = null
}

const handleDonate = () => {
  if (!donationAmount.value || donationAmount.value <= 0) {
    alert('Please select or enter a donation amount')
    return
  }
  // Open PayPal in a new tab
  window.open(paypalUrl.value, '_blank')
}

const handleDonateCashApp = () => {
  if (!donationAmount.value || donationAmount.value <= 0) {
    alert('Please select or enter a donation amount')
    return
  }
  // Open CashApp in a new tab
  window.open(cashappUrl.value, '_blank')
}
</script>

<template>
  <div class="donate-page">
    <!-- Page Header -->
    <section class="page-header">
      <div class="container">
        <h1 class="page-title">Donate</h1>
        <p class="page-subtitle">
          <!-- Add your donate page tagline -->
          Your continued support make it possible for Health & Awareness to serve the community.
        </p>
      </div>
    </section>

    <!-- Donation Form Section -->
    <section class="section">
      <div class="container">
        <div class="donate-grid">
          <!-- Donation Form -->
          <div class="donate-form-container">
            <h2>Make a Donation</h2>
            <p class="form-intro">
              Choose an amount to give, or enter a custom amount.
            </p>

            <!-- Amount Selection -->
            <div class="amount-selection">
              <button 
                v-for="amount in donationAmounts"
                :key="amount"
                class="amount-btn"
                :class="{ 'is-selected': selectedAmount === amount }"
                @click="selectAmount(amount)"
              >
                ${{ amount }}
              </button>
            </div>

            <!-- Custom Amount -->
            <div class="custom-amount">
              <label for="custom-amount" class="form-label">Custom Amount</label>
              <div class="custom-amount-input">
                <span class="currency-symbol">$</span>
                <input 
                  type="number"
                  id="custom-amount"
                  v-model="customAmount"
                  class="form-input"
                  placeholder="Enter amount"
                  @focus="handleCustomAmount"
                />
              </div>
            </div>

            <!-- Donate Buttons -->
            <div class="donate-buttons">
              <button 
                type="button" 
                class="btn btn-primary btn-lg donate-submit"
                @click="handleDonate"
              >
                <img src="/assets/images/PayPal_Logo_Icon_2014.svg" alt="PayPal" class="btn-icon" />
                Donate via PayPal {{ donationAmount ? `$${donationAmount}` : '' }}
              </button>
              <button 
                type="button" 
                class="btn btn-secondary btn-lg donate-submit"
                @click="handleDonateCashApp"
              >
                <img src="/assets/images/cashapp.svg" alt="CashApp" class="btn-icon" />
                Donate via CashApp {{ donationAmount ? `$${donationAmount}` : '' }}
              </button>
            </div>

            <p class="secure-note">
              🔒 Your donation is secure and encrypted.
            </p>
          </div>

          <!-- Impact Info -->
          <div class="impact-info">
            <h3>Your Impact</h3>
            <p class="impact-intro">
              See how your donation helps our cause.
            </p>

            <div class="impact-levels">
              <div class="impact-level">
                <span class="impact-amount">$25</span>
                <p>Description of what $25 can provide.</p>
              </div>
              <div class="impact-level">
                <span class="impact-amount">$50</span>
                <p>Description of what $50 can provide.</p>
              </div>
              <div class="impact-level">
                <span class="impact-amount">$100</span>
                <p>Description of what $100 can provide.</p>
              </div>
              <div class="impact-level">
                <span class="impact-amount">$250</span>
                <p>Description of what $250 can provide.</p>
              </div>
            </div>

            <div class="other-ways">
              <h4>Other Ways to Give</h4>
              <ul>
                <li>Monthly giving program</li>
                <li>Corporate matching</li>
                <li>Planned giving</li>
                <li>In-kind donations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section faq-section">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Frequently Asked Questions</h2>
        </div>
        <div class="faq-list">
          <div class="faq-item">
            <h3>Is my donation tax-deductible?</h3>
            <p>Add your answer here about tax deductibility.</p>
          </div>
          <div class="faq-item">
            <h3>How is my donation used?</h3>
            <p>Add your answer here about how donations are used.</p>
          </div>
          <div class="faq-item">
            <h3>Can I donate anonymously?</h3>
            <p>Add your answer here about anonymous donations.</p>
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

/* Donate Grid */
.donate-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-10);
}

/* Donate Form */
.donate-form-container {
  background-color: var(--color-white);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.donate-form-container h2 {
  margin-bottom: var(--spacing-4);
}

.form-intro {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-6);
}

/* Amount Selection */
.amount-selection {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-3);
  margin-bottom: var(--spacing-6);
}

.amount-btn {
  padding: var(--spacing-4);
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-semibold);
  background-color: var(--color-gray-100);
  border: 2px solid transparent;
  border-radius: var(--radius-lg);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.amount-btn:hover {
  background-color: var(--color-gray-200);
}

.amount-btn.is-selected {
  background-color: var(--color-primary);
  color: var(--color-white);
  border-color: var(--color-primary-dark);
}

/* Custom Amount */
.custom-amount {
  margin-bottom: var(--spacing-6);
}

.custom-amount-input {
  position: relative;
}

.currency-symbol {
  position: absolute;
  left: var(--spacing-4);
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-gray-500);
  font-size: var(--font-size-lg);
}

.custom-amount .form-input {
  padding-left: var(--spacing-8);
}

/* Form */
.form-row {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-4);
}

.donate-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3);
  margin-top: var(--spacing-4);
}

.donate-submit {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2);
}

.btn-icon {
  width: 24px;
  height: 24px;
  object-fit: contain;
  background-color: var(--color-white);
  border-radius: var(--radius-full);
  padding: 4px;
}

.btn-secondary {
  background-color: #00D632;
  color: var(--color-white);
}

.btn-secondary:hover {
  background-color: #00B82B;
}

.secure-note {
  text-align: center;
  color: var(--color-gray-500);
  font-size: var(--font-size-sm);
  margin-top: var(--spacing-4);
  margin-bottom: 0;
}

/* Impact Info */
.impact-info {
  background-color: var(--color-gray-50);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
}

.impact-info h3 {
  margin-bottom: var(--spacing-3);
}

.impact-intro {
  color: var(--color-gray-600);
  margin-bottom: var(--spacing-6);
}

.impact-levels {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
  margin-bottom: var(--spacing-8);
}

.impact-level {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4);
  padding: var(--spacing-4);
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
}

.impact-amount {
  font-weight: var(--font-weight-bold);
  color: var(--color-primary);
  min-width: 60px;
}

.impact-level p {
  color: var(--color-gray-600);
  margin-bottom: 0;
  font-size: var(--font-size-sm);
}

.other-ways h4 {
  margin-bottom: var(--spacing-3);
}

.other-ways ul {
  color: var(--color-gray-600);
}

.other-ways li {
  padding: var(--spacing-2) 0;
  padding-left: var(--spacing-4);
  position: relative;
}

.other-ways li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: var(--color-primary);
}

/* FAQ Section */
.faq-section {
  background-color: var(--color-gray-50);
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  background-color: var(--color-white);
  padding: var(--spacing-6);
  border-radius: var(--radius-lg);
  margin-bottom: var(--spacing-4);
}

.faq-item h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-3);
}

.faq-item p {
  color: var(--color-gray-600);
  margin-bottom: 0;
}

/* Responsive */
@media (min-width: 768px) {
  .donate-grid {
    grid-template-columns: 1fr 1fr;
  }

  .form-row {
    grid-template-columns: 1fr 1fr;
  }

  .amount-selection {
    grid-template-columns: repeat(5, 1fr);
  }
}
</style>
