<script setup>
import { RouterLink } from 'vue-router'

const currentYear = new Date().getFullYear()

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Our Mission', path: '/mission' },
  { name: 'Donate', path: '/donate' },
  { name: 'Contact', path: '/contact' }
]

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/HealthAwarenessInc', icon: 'facebook' },
  { name: 'Twitter', url: 'https://x.com/healthawareinc', icon: 'twitter' },
  { name: 'Instagram', url: 'https://www.instagram.com/healthawareinc', icon: 'instagram' },
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <!-- About Section -->
        <div class="footer-section">
          <h3 class="footer-title">Health & Awareness, Inc</h3>
          <p class="footer-description">
            <!-- Add your charity's brief description here -->
            Making a difference in our community through compassion, dedication, and action.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Quick Links</h4>
          <ul class="footer-links">
            <li v-for="link in quickLinks" :key="link.path">
              <RouterLink :to="link.path" class="footer-link">
                {{ link.name }}
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Contact Us</h4>
          <address class="footer-contact">
            <p>
              <!-- Add your address here -->
                P.O Box 64713<br>
                Virginia Beach, VA 23467
            </p>
            <p>
              <a href="mailto:info@savingkidneys.org" class="footer-link">info@savingkidneys.org</a>
            </p>
            <p>
              <a href="tel:+1234567890" class="footer-link">(123) 456-7890</a>
            </p>
          </address>
        </div>

        <!-- Social & Newsletter -->
        <div class="footer-section">
          <h4 class="footer-subtitle">Stay Connected</h4>
          <div class="social-links">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url"
              class="social-link"
              :aria-label="social.name"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ social.name }}
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <p class="copyright">
          &copy; {{ currentYear }} Health & Awareness, Inc. All rights reserved.
        </p>
        <div class="footer-legal" style="display: none;">
          <a href="#" class="footer-link">Privacy Policy</a>
          <a href="#" class="footer-link">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-gray-900);
  color: var(--color-gray-300);
  padding-top: var(--spacing-16);
  padding-bottom: var(--spacing-8);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-10);
  margin-bottom: var(--spacing-12);
}

.footer-section {
  text-align: center;
}

.footer-title {
  font-size: var(--font-size-xl);
  font-weight: var(--font-weight-bold);
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
}

.footer-subtitle {
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-semibold);
  color: var(--color-white);
  margin-bottom: var(--spacing-4);
}

.footer-description {
  color: var(--color-gray-400);
  line-height: var(--line-height-relaxed);
}

.footer-links {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
}

.footer-link {
  color: var(--color-gray-400);
  transition: color var(--transition-fast);
}

.footer-link:hover {
  color: var(--color-white);
}

.footer-contact {
  font-style: normal;
  color: var(--color-gray-400);
  line-height: var(--line-height-relaxed);
}

.footer-contact p {
  margin-bottom: var(--spacing-2);
}

.social-links {
  display: flex;
  justify-content: center;
  gap: var(--spacing-4);
  flex-wrap: wrap;
}

.social-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2) var(--spacing-3);
  background-color: var(--color-gray-800);
  color: var(--color-gray-300);
  border-radius: var(--radius-md);
  font-size: var(--font-size-sm);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.social-link:hover {
  background-color: var(--color-primary);
  color: var(--color-white);
}

.footer-bottom {
  padding-top: var(--spacing-8);
  border-top: 1px solid var(--color-gray-800);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-4);
  text-align: center;
}

.copyright {
  font-size: var(--font-size-sm);
  color: var(--color-gray-500);
}

.footer-legal {
  display: flex;
  gap: var(--spacing-6);
  font-size: var(--font-size-sm);
}

@media (min-width: 768px) {
  .footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .footer-section {
    text-align: left;
  }

  .social-links {
    justify-content: flex-start;
  }

  .footer-bottom {
    flex-direction: row;
    justify-content: space-between;
  }
}

@media (min-width: 1024px) {
  .footer-grid {
    grid-template-columns: 2fr 1fr 1fr 1fr;
  }
}
</style>
