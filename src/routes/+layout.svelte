<script lang="ts">
    import "../app.css";
    let { children } = $props();
    const favicon: string = "https://hactuss.github.io/img/longcat.gif";
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>The office</title>
</svelte:head>

<nav>
    <a href="https://hactuss.vercel.app">
        <img
            src="https://media.tenor.com/9TsiJq--SsEAAAAj/doge-dance.gif"
            alt="doggo"
            class="doggo"
        /></a
    >
    <h1>THE OFFICE</h1>
</nav>

{@render children?.()}
