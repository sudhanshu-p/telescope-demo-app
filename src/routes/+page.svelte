<script lang="ts">
	import Doc from '$lib/Doc.svelte';
	import User from '$lib/User.svelte';
	import { db as firestore, auth } from '$lib/firebase';
	// import { signInWithPopup, GoogleAuthProvider, type Auth } from 'firebase/auth';
	import FirebaseApp from '$lib/FirebaseApp.svelte';
	import { goto } from '$app/navigation';
	import { signOut } from 'firebase/auth';
	import { Table } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	import { tableMapperValues } from '@skeletonlabs/skeleton';
	import { afterUpdate } from 'svelte';
	// const provider = new GoogleAuthProvider();

	export let data: any;

	const tableData: any[] = [];
	function mapDataForTable(): void {
		for (let i = 0; i < 100; i++) {
			tableData[i] = {};
			tableData[i]['Value'] = data.fact[i].Value;
			tableData[i]['Country'] = data.fact[i].dim.COUNTRY;
		}
	}

	let tableSimple: TableSource;
	let tableDataReady: boolean = false;
	afterUpdate(() => {
		mapDataForTable();
		tableSimple = {
			// A list of heading labels.
			head: ['Value', 'Country'],
			// The data visibly shown in your table body UI.
			body: tableMapperValues(tableData, ['Value', 'Country']),
			// Optional: The Data returned when interactive is enabled and a row is clicked.
			meta: tableMapperValues(tableData, ['Value', 'Country'])
		};
		tableDataReady = true;
	});

	function mySelectionHandler(meta: any): void {
		goto(`/countries/${meta.detail[1].toLowerCase()}`)
	}
</script>

<FirebaseApp {auth} {firestore}>
	<User let:user>
		<div slot="signedOut" class="flex justify-center h-full items-center flex-col gap-4">
			<h1>You are not authorized to view this content.</h1>
			<h1>Kindly Log In to continue</h1>
			<button on:click={() => goto('/login')} class="btn variant-filled">Log In</button>
			<!-- <button on:click={() => signInWithPopup(auth, provider)}>Sign in With Google</button> -->
		</div>
		<div class="flex justify-center h-full items-center flex-col gap-4">
			{#if user}
				{#if tableDataReady}
					<Table source={tableSimple} interactive={true} on:selected={mySelectionHandler} />
				{/if}
			{:else}
				<h1>Sign in unsuccessfull</h1>
			{/if}
		</div>
	</User>
</FirebaseApp>

<!-- <Paginator bind:settings={page} /> -->
