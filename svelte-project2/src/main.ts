import { mount } from 'svelte';
import Router from 'svelte-spa-router';
import routes from './routes.js';
import './app.css';

const app = mount(Router, {
  target: document.getElementById('app')!,
  props: { routes }
});

export default app;
