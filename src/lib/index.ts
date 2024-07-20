export { default as Metadata } from "./Metadata.svelte";
export { default as Splash } from "./Splashscreen.svelte";
export { default as Bloom } from "./Splashscreen.svelte";
export { default as Feed } from "./Feed.svelte";
export { default as PrepareCredentials } from "./PrepareCredentials.svelte";

export { getScopes } from "./ScopeManager/scopes";

export { default as helloUsername } from "./stores/hello/username";
export { default as helloPassword } from "./stores/hello/password";
export { default as helloStage } from "./stores/hello/stage";

export const ValidEntryMap = ["https://streamliner.esmerelda.tech/", "http://streamliner.esmerelda.tech", "http://localhost:5173", "http://streamliner.app", "https://streamliner.app"]

/**
 * Make a link external.
 *
 * Usage:
 * ```
 * <a href="https://example.com/" {...external}>Example</a>
 * ```
 */
export const external: Partial<HTMLAnchorElement> = {
	target: "_blank",
	rel: "noreferrer noopener"
};