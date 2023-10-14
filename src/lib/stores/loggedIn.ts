import { browser } from '$app/environment';
import { writable } from 'svelte/store';
 
const defaultValue = "false";
const initialValue = browser ? window.localStorage.getItem('loggedIn') ?? defaultValue : defaultValue;

const loggedIn = writable<string>(initialValue);

loggedIn.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('loggedIn', value);
  }
});
 
export default loggedIn;