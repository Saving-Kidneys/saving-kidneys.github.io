import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import MissionPage from '../views/MissionPage.vue'
import FrontDeskOfThePresidentPage from '../views/FrontDeskOfThePresidentPage.vue'
import ProgramsPage from '../views/ProgramsPage.vue'
import DonatePage from '../views/DonatePage.vue'
import ContactPage from '../views/ContactPage.vue'
import ChronicKidneyEducation from '../views/education/ChronicKidneyEducation.vue'
import SavingKidneysEducation from '../views/education/SavingKidneysEducation.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/programs',
    name: 'Programs',
    component: ProgramsPage
  },
  {
    path: '/mission',
    name: 'Mission',
    component: MissionPage
  },
  {
    path: '/front-desk-of-the-president',
    name: 'FrontDeskOfThePresident',
    component: FrontDeskOfThePresidentPage
  },
  {
    path: '/education/chronic-kidney-education',
    name: 'ChronicKidneyEducation',
    component: ChronicKidneyEducation
  },
  {
    path: '/education/saving-kidneys',
    name: 'SavingKidneysEducation',
    component: SavingKidneysEducation
  },
  {
    path: '/donate',
    name: 'Donate',
    component: DonatePage
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
