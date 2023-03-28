<script>
	// @ts-nocheck
	import User from '$lib/User.svelte';
	import { db as firestore, auth } from '$lib/firebase';
	import FirebaseApp from '$lib/FirebaseApp.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';
	import { goto } from '$app/navigation';
</script>

<FirebaseApp {auth} {firestore}>
	<User let:user>
		<div class="flex items-center justify-center h-half flex-col gap-4 block card card-hover p-4">
			<Avatar
				border="border-4 border-surface-300-600-token hover:!border-primary-500"
				cursor="cursor-pointer"
				src={user.photoURL}
				width="w-32"
			/>
			<h1>Username: {user.displayName}</h1>
			<h1>Email: {user.email}</h1>
		</div>

		<div slot="signedOut" class="flex justify-center h-full items-center flex-col gap-4">
			<h1>You are not authorized to view this content.</h1>
			<h1>Kindly Log In to continue</h1>
			<button on:click={() => goto('/login')} class="btn variant-filled">Log In</button>
		</div>
	</User>
</FirebaseApp>

