import { browser } from '$app/environment';
import { writable } from 'svelte/store';
 
const defaultValue = "";
const initialValue = browser ? window.localStorage.getItem('helloUsername') ?? defaultValue : defaultValue;

const username = writable<string>(initialValue);
 
username.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('helloUsername', value);
  }
});
 
export default username;