<script lang="ts">
    import { Metadata, external, helloUsername as username, helloPassword as password, helloStage as currentSetupStage } from "$lib";
    import { TextBox, TextBoxButton, InfoBar, Flyout, Button } from "fluent-svelte";

	let infoBarClosable = false;

	function GetUsernameAvailability() {
		if ($username === "" || $username.startsWith("_") || $username.includes(".") || $username.includes("%") || $username.includes("#") || $username.includes("$") || $username.includes("&") || $username.includes("*") || $username.includes("+") || $username.includes("/") || $username.includes("=") || $username.includes("?") || $username.includes("^") || $username.includes("`") || $username.includes("{") || $username.includes("|") || $username.includes("}") || $username.includes("~") || $username.includes(" ") || $username.includes(":") || $username.includes(";") || $username.includes("<") || $username.includes(">") || $username.includes("@") || $username.includes("!")) { // Special characters
				return false;
			} else if ($username.includes("esme") || $username.includes("maloote") || $username.includes("riverside") || $username.includes("admin")) // Reserved words
				return false;
			else if ($username.length < 3 || $username.length > 20) // Length
				return false;
			else if ($username == "cloud" || $username == "components" || $username == "www" || $username == "active" || $username == "gateway" || $username == "go" || $username == "flare" || $username == "insider" || $username == "secure") {// Esmerelda Cloud Services Legacy
				return false;
		} else
			return true;
	}

	let checkInvisible = !GetUsernameAvailability();
	

	export function GetPasswordAvailability() {
		if ($password == "" || $password.length < 8 || $password.length > 64 || $password.includes(" ") || $password.includes($username)) {
			return false;
		} else
			return true;
	}

	export function NextStepsUsername() {
		if (GetUsernameAvailability()) {
            console.log("🪪 Username is available")
			$currentSetupStage = "Password";
		} else {
			$username = "";
			window.location.href = "/hello/start";
		}
	}

	export function NextStepsPassword() {
		if (GetPasswordAvailability()) {
            console.log("🔐 Password is valid")
			$currentSetupStage = "";
		} else {
			$password = "";
			window.location.href = "/hello/start";
		}
	}
</script>
{#if GetUsernameAvailability()}
	<Metadata title="Welcome, @{$username}!"/>
{:else}
	<Metadata title="Create your Riverside account"/>
{/if}
<div id="app-root">
	<div>
		<div class="c0112" style="background-color: rgb(255, 255, 255)">
			<div class="c012">
				<div class="c0127">
					<div class="c0129">Hello there!</div>
				</div>
				{#if $currentSetupStage == "Username"}
					<div class="c0125">Choose a username</div>
					<br/>
					<TextBox bind:value={$username} placeholder="May not contain dots '.', percents '%' and some other characters">
						{#if !GetUsernameAvailability()}
							<a href="https://go.esmerelda.tech/anonymous/gcOIcd" {...external}>
								<TextBoxButton slot="buttons" >
									<!-- https://github.com/microsoft/fluentui-system-icons -->
									<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 2a6 6 0 1 1 0 12A6 6 0 0 1 8 2Zm0 8.5A.75.75 0 1 0 8 12a.75.75 0 0 0 0-1.5Zm0-6a2 2 0 0 0-2 2 .5.5 0 0 0 1 0 1 1 0 0 1 2 0c0 .37-.08.58-.37.9l-.11.12-.27.27c-.54.57-.75.98-.75 1.71a.5.5 0 0 0 1 0c0-.37.08-.58.37-.9l.11-.12.27-.27c.54-.57.75-.98.75-1.71a2 2 0 0 0-2-2Z"/></svg>
								</TextBoxButton>
							</a>
						{/if}
						{#if GetUsernameAvailability()}
							<TextBoxButton slot="buttons" on:click={() => NextStepsUsername()}>
								<!-- https://github.com/microsoft/fluentui-system-icons -->
								<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 0 1 4.9 12L2.22 9.28a.75.75 0 1 1 1.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 0 1 1.06.04Z"/></svg>
							</TextBoxButton>
						{/if}
					</TextBox>
					{#if !GetUsernameAvailability() && $username != ""}
						<InfoBar title="Username is not available" message="Try choosing a different username." severity="critical" bind:closable={infoBarClosable} >
							<Flyout slot="action">
								<div slot="flyout">
									There are many reasons why a username may appear unavailable. It may be taken by another user, it may be reserved by the system, be too short or long, or may include special characters. Please try choosing a different username.
								</div>
								<Button variant="hyperlink">Learn More</Button>
							</Flyout>
						</InfoBar>
					{/if}
				{:else if $currentSetupStage == "Password"}
					<div class="c0125">Choose a password</div>
					<br/>
					<TextBox bind:value={$password} type="password" placeholder="Password">
						{#if GetPasswordAvailability()}
							<TextBoxButton slot="buttons" on:click={() => NextStepsPassword()}>
								<!-- https://github.com/microsoft/fluentui-system-icons -->
								<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M14.05 3.49c.28.3.27.77-.04 1.06l-7.93 7.47A.85.85 0 0 1 4.9 12L2.22 9.28a.75.75 0 1 1 1.06-1.06l2.24 2.27 7.47-7.04a.75.75 0 0 1 1.06.04Z"/></svg>
							</TextBoxButton>
						{/if}
					</TextBox>
					{#if !GetPasswordAvailability() && $password !== ""}
						<InfoBar title="Password is not valid" message="Try choosing a different password." severity="critical" closable={infoBarClosable} >
							<Flyout slot="action">
								<div slot="flyout">
									There are many reasons why a password could be invalid. It could fall under a list of insecure passwords, contain your username or be too short or long. Please choose a different password.
								</div>
								<Button variant="hyperlink">Learn More</Button>
							</Flyout>
						</InfoBar>
					{/if}
				{/if}
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@use '../../../styles/welcome.scss';
    @use '../../../styles/fluent.scss';
</style>
