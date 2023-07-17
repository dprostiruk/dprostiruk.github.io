<script lang="ts">
    import type { ComicType } from '$lib/types';
    export let comic: ComicType;
</script>

<div class="comic-container">
    <img class="comic-image" src={comic.img} alt={comic.alt} />
    <h1 class="comic-title">{comic.safe_title}</h1>
    <p class="comic-date">{comic.day}, {comic.year}</p>
    <p class="comic-ago" />
</div>

<style>
    .comic-container {
        display: grid;
        grid-template-rows: auto auto auto;
        gap: 10px;
        text-align: center;
    }

    .comic-image {
        max-width: 100%;
        height: auto;
    }
</style>
