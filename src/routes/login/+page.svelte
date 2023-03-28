<script lang="ts">
	import { signInWithPopup, GoogleAuthProvider, type Auth } from 'firebase/auth';
	import { goto } from '$app/navigation';
	import { db as firestore, auth } from '$lib/firebase';
	const provider = new GoogleAuthProvider();
	import FirebaseApp from '$lib/FirebaseApp.svelte';
	import User from '$lib/User.svelte';
</script>

<FirebaseApp {auth} {firestore}>
	<User let:user>
		<div slot="signedOut" class="flex justify-center h-full items-center flex-col gap-4">
			<button
				type="button"
				class="btn variant-filled"
				on:click={() => signInWithPopup(auth, provider)}
			>
				<span><img src="/google.png" alt="" width="40" /></span>
				<span>Login with Google</span>
			</button>
		</div>
		<div class="flex justify-center h-full items-center flex-col gap-4">
			<h1>Signed in successfully</h1>
			<button on:click={() => goto('/')}> Continue to Dashboard </button>
		</div>
	</User>
</FirebaseApp>
