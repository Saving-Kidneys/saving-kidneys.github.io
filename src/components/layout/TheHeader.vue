<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const isEducationOpen = ref(false)
const isMobileEducationOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Mission', path: '/mission' },
  { name: 'Front Desk of the President', path: '/front-desk-of-the-president' },
  { name: 'Programs', path: '/programs' }
]

const educationLinks = [
  { name: 'Chronic Kidney Education', path: '/education/chronic-kidney-education' },
  { name: 'Saving Kidneys', path: '/education/saving-kidneys' }
]

const navLinksAfterEducation = [
  { name: 'Donate', path: '/donate' },
  { name: 'Contact', path: '/contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
  isMobileEducationOpen.value = false
}

const toggleEducation = () => {
  isEducationOpen.value = !isEducationOpen.value
}

const closeEducation = () => {
  isEducationOpen.value = false
}

const toggleMobileEducation = () => {
  isMobileEducationOpen.value = !isMobileEducationOpen.value
}
</script>

<template>
  <header class="header">
    <div class="container header-container">
      <!-- Top Row: Logo and Donate -->
      <div class="header-top">
        <RouterLink to="/" class="logo" @click="closeMenu">
          <img src="/assets/images/health-awareness-logo.png" alt="Health & Awareness, Inc" class="logo-image" />
          <span class="logo-text">Health & Awareness, Inc</span>
        </RouterLink>

        <!-- Donate Button (Desktop) -->
        <RouterLink to="/donate" class="btn btn-primary donate-btn-desktop">
          Donate Now
        </RouterLink>

        <!-- Mobile Menu Button -->
        <button 
          class="menu-toggle"
          :class="{ 'is-active': isMenuOpen }"
          @click="toggleMenu"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
        >
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
          <span class="menu-bar"></span>
        </button>
      </div>

      <!-- Bottom Row: Desktop Navigation -->
      <nav class="nav-desktop">
        <ul class="nav-list">
          <li v-for="link in navLinks" :key="link.path" class="nav-item">
            <RouterLink :to="link.path" class="nav-link">
              {{ link.name }}
            </RouterLink>
          </li>
          <!-- Education Dropdown -->
          <li class="nav-item nav-item-dropdown" @mouseenter="isEducationOpen = true" @mouseleave="isEducationOpen = false">
            <button class="nav-link dropdown-toggle" @click="toggleEducation">
              Education
              <span class="dropdown-arrow" :class="{ 'is-open': isEducationOpen }">▼</span>
            </button>
            <ul class="dropdown-menu" :class="{ 'is-open': isEducationOpen }">
              <li v-for="link in educationLinks" :key="link.path">
                <RouterLink :to="link.path" class="dropdown-link" @click="closeEducation">
                  {{ link.name }}
                </RouterLink>
              </li>
              <li>
                <a href="https://www.amazon.com/dp/1642994316" class="dropdown-link" target="_blank" rel="noopener" @click="closeEducation">
                  Book: Why Not Me?
                </a>
              </li>
            </ul>
          </li>
          <li v-for="link in navLinksAfterEducation" :key="link.path" class="nav-item">
            <RouterLink :to="link.path" class="nav-link">
              {{ link.name }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <!-- Mobile Navigation -->
      <nav class="nav-mobile" :class="{ 'is-open': isMenuOpen }">
        <ul class="nav-list-mobile">
          <li v-for="link in navLinks" :key="link.path" class="nav-item-mobile">
            <RouterLink :to="link.path" class="nav-link-mobile" @click="closeMenu">
              {{ link.name }}
            </RouterLink>
          </li>
          <!-- Mobile Education Dropdown -->
          <li class="nav-item-mobile">
            <button class="nav-link-mobile dropdown-toggle-mobile" @click="toggleMobileEducation">
              Education
              <span class="dropdown-arrow" :class="{ 'is-open': isMobileEducationOpen }">▼</span>
            </button>
            <ul class="dropdown-menu-mobile" :class="{ 'is-open': isMobileEducationOpen }">
              <li v-for="link in educationLinks" :key="link.path">
                <RouterLink :to="link.path" class="dropdown-link-mobile" @click="closeMenu">
                  {{ link.name }}
                </RouterLink>
              </li>
              <li>
                <a href="https://www.amazon.com/dp/1642994316" class="dropdown-link" target="_blank" rel="noopener" @click="closeEducation">
                  Book: Why Not Me?
                </a>
              </li>
            </ul>
          </li>
          <li v-for="link in navLinksAfterEducation" :key="link.path" class="nav-item-mobile">
            <RouterLink :to="link.path" class="nav-link-mobile" @click="closeMenu">
              {{ link.name }}
            </RouterLink>
          </li>
          <li class="nav-item-mobile">
            <RouterLink to="/donate" class="btn btn-primary btn-lg donate-btn-mobile" @click="closeMenu">
              Donate Now
            </RouterLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--color-white);
  box-shadow: var(--shadow-sm);
}

li.nav-item {
  padding: 1rem;
}

.header-container {
  display: flex;
  flex-direction: column;
  padding-top: var(--spacing-4);
  padding-bottom: var(--spacing-4);
}

/* Top Row */
.header-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-2);
  font-weight: var(--font-weight-bold);
  font-size: var(--font-size-xl);
  color: var(--color-primary);
}

.logo-image {
  height: 48px;
  width: auto;
}

.logo-text {
  color: var(--color-gray-900);
}

/* Desktop Navigation */
.nav-desktop {
  display: none;
}

.nav-list {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: var(--spacing-8);
}

.nav-link {
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-600);
  transition: color var(--transition-fast);
  position: relative;
  padding: var(--spacing-3) 0;
}

.nav-link:hover {
  color: var(--color-primary);
}

.nav-link.router-link-active {
  color: var(--color-primary);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--color-primary);
  border-radius: var(--radius-full);
}

/* Dropdown Styles */
.nav-item-dropdown {
  position: relative;
}

.dropdown-toggle {
  display: flex;
  align-items: center;
  gap: var(--spacing-1);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-600);
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-3) 0;
  font-size: inherit;
  font-family: inherit;
  transition: color var(--transition-fast);
}

.dropdown-toggle:hover {
  color: var(--color-primary);
}

.dropdown-arrow {
  font-size: 0.6em;
  transition: transform var(--transition-fast);
}

.dropdown-arrow.is-open {
  transform: rotate(180deg);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--color-white);
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-lg);
  min-width: 220px;
  padding: var(--spacing-2) 0;
  opacity: 0;
  visibility: hidden;
  transition: opacity var(--transition-fast), visibility var(--transition-fast);
  z-index: 200;
}

.dropdown-menu.is-open {
  opacity: 1;
  visibility: visible;
}

.dropdown-link {
  display: block;
  padding: var(--spacing-3) var(--spacing-4);
  color: var(--color-gray-600);
  font-weight: var(--font-weight-medium);
  transition: background-color var(--transition-fast), color var(--transition-fast);
}

.dropdown-link:hover {
  background-color: var(--color-gray-50);
  color: var(--color-primary);
}

.dropdown-link.router-link-active {
  color: var(--color-primary);
  background-color: var(--color-gray-50);
}

.donate-btn-desktop {
  display: none;
}

/* Mobile Menu Toggle */
.menu-toggle {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 32px;
  height: 32px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}

.menu-bar {
  display: block;
  width: 100%;
  height: 2px;
  background-color: var(--color-gray-800);
  border-radius: var(--radius-full);
  transition: transform var(--transition-fast), opacity var(--transition-fast);
}

.menu-toggle.is-active .menu-bar:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.menu-toggle.is-active .menu-bar:nth-child(2) {
  opacity: 0;
}

.menu-toggle.is-active .menu-bar:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile Navigation */
.nav-mobile {
  position: fixed;
  top: 90px;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--color-white);
  padding: var(--spacing-8);
  transform: translateX(100%);
  transition: transform var(--transition-normal);
}

.nav-mobile.is-open {
  transform: translateX(0);
}

.nav-list-mobile {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4);
}

.nav-link-mobile {
  display: block;
  padding: var(--spacing-3) 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  border-bottom: 1px solid var(--color-gray-100);
}

.nav-link-mobile.router-link-active {
  color: var(--color-primary);
}

/* Mobile Dropdown */
.dropdown-toggle-mobile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-3) 0;
  font-size: var(--font-size-lg);
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  background: none;
  border: none;
  border-bottom: 1px solid var(--color-gray-100);
  cursor: pointer;
  font-family: inherit;
}

.dropdown-menu-mobile {
  max-height: 0;
  overflow: hidden;
  transition: max-height var(--transition-normal);
  background-color: var(--color-gray-50);
  margin: 0 calc(-1 * var(--spacing-4));
  padding: 0 var(--spacing-4);
}

.dropdown-menu-mobile.is-open {
  max-height: 200px;
  padding: var(--spacing-2) var(--spacing-4);
}

.dropdown-link-mobile {
  display: block;
  padding: var(--spacing-2) var(--spacing-4);
  color: var(--color-gray-600);
  font-weight: var(--font-weight-medium);
}

.dropdown-link-mobile.router-link-active {
  color: var(--color-primary);
}

.donate-btn-mobile {
  margin-top: var(--spacing-4);
  width: 100%;
}

/* Desktop Styles */
@media (min-width: 768px) {
  .header-container {
    padding-top: var(--spacing-4);
    padding-bottom: 0;
  }

  .nav-desktop {
    display: block;
    border-top: 1px solid var(--color-gray-100);
    margin-top: var(--spacing-4);
    margin-bottom: var(--spacing-2);
    padding-top: var(--spacing-2);
  }

  .donate-btn-desktop {
    display: inline-flex;
  }

  .menu-toggle,
  .nav-mobile {
    display: none;
  }
}
</style>
