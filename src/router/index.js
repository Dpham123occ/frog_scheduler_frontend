import { createRouter, createWebHistory } from 'vue-router';
// Import route components.
import Home from '../views/Home.vue';
import About from '../views/About.vue';
// Create the router instance.
const router = createRouter({
// Provide the history implementation to use.
history: createWebHistory(),
// Define some route records, each route record should map to a component.
routes: [
{ path: '/', name: 'home', component: Home },
{ path: '/about', name: 'about', component: About },
],
});
export default router;