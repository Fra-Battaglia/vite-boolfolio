import { createRouter, createWebHistory } from 'vue-router';

import AppHomepage from './components/pages/AppHomepage.vue';
import AppPortfolio from './components/pages/AppPortfolio.vue';
import AppProject from './components/pages/AppProject.vue';
import AppContacts from './components/pages/AppContacts.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: AppHomepage
        },
        {
            path: '/portfolio',
            name: 'portfolio',
            component: AppPortfolio
        },
        {
            path: '/portfolio/:slug',
            name: 'project',
            component: AppProject
        },
        {
            path: '/contacts',
            name: 'contacts',
            component: AppContacts
        },
    ]
});

export { router };
