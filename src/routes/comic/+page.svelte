<script lang="ts">
    import Comic from '$lib/components/Comic.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
    const comic = data.comic;
</script>

<svelte:head>
    <title>Comic</title>
    <meta name="description" content="Funny comic">

    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            font-family: Arial, sans-serif;
        }

        nav {
            height: 100%;
        }
    </style>
</svelte:head>

<nav>
    <button class="button" onclick="location.href='/'">Main Page</button>
</nav>

<div>
    <Comic {comic} />
</div>
