import { createRouter, createWebHistory } from 'vue-router';
// Import route components.
import Pricing from '../views/Pricing.vue';
import Range from '../views/Range.vue';
import Request from '../views/Request.vue';
import RequestModify from '../views/RequestModify.vue';


// Create the router instance.
const router = createRouter({
// Provide the history implementation to use.
history: createWebHistory(),
// Define some route records, each route record should map to a component.
routes: [
{ path: '/range', name: 'range', component: Range },
{path: '/pricing', name: 'pricing', component: Pricing},
{path: '/request', name: 'request', component: Request},
{path:'/modify', name: 'modify', component: RequestModify},
,

],
});
export default router;