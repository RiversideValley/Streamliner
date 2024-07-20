import { browser } from '$app/environment';
import { writable } from 'svelte/store';
 
const defaultValue = "Username";
const initialValue = browser ? window.localStorage.getItem('helloStage') ?? defaultValue : defaultValue;

const stage = writable<string>(initialValue);
 
stage.subscribe((value) => {
  if (browser) {
    window.localStorage.setItem('helloStage', value);
  }
});
 
export default stage;