<script>
	import { drawerStore } from '@skeletonlabs/skeleton';

	function drawerClose() {
		drawerStore.close();
	}
</script>

<nav class="list-nav p-4">
	<ul>
		<li><a href="/" on:click={drawerClose}>Dashboard</a></li>
		<li><a href="/profile" on:click={drawerClose}>Profile</a></li>
	</ul>
</nav>
