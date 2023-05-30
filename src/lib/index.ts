export { default as Metadata } from "./Metadata.svelte";
export { default as Splash } from "./Splashscreen.svelte";
export { default as PrepareCredentials } from "./PrepareCredentials.svelte";

export { getScopes } from "./ScopeManager/scopes";

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