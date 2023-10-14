import { browser } from '$app/environment';
import { writable } from 'svelte/store';
 
const defaultValue = "";
const initialValue = browser ? window.localStorage.getItem('helloPassword') ?? defaultValue : defaultValue;

const password = writable<string>(initialValue);
 
password.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('helloPassword', value);
  }
});
 
export default password;