<script lang="ts">
    import "../app.scss";
    let { children } = $props();
    const favicon: string = " ";
</script>

<svelte:head>
    <link rel="icon" href={favicon} />
    <title>The office | HAJ</title>
</svelte:head>

<nav>
    <div class="nav-sector">
        <svg
            class="nav-icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                d="M14 2h-4v2H8v2H6v2H4v2H2v2h2v10h7v-6h2v6h7V12h2v-2h-2V8h-2V6h-2V4h-2V2zm0 2v2h2v2h2v2h2v2h-2v8h-3v-6H9v6H6v-8H4v-2h2V8h2V6h2V4h4z"
                fill="currentColor"
            />
        </svg>
        <a href="/" target="_top">Back to home</a>
    </div>
    <div class="nav-sector">
        <svg
            class="nav-icons"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path
                fill="currentColor"
                d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
            /></svg
        >
        <a
            href="https://github.com/hactuss/hactuss.github.io/tree/main/pages/office"
            >source code</a
        >
    </div>
</nav>

{@render children?.()}
