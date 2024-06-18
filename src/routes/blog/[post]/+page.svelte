<script lang="ts">
  import { formatDate } from "$lib/utils";
  import Toc from "svelte-toc";
  import type { Post } from "$lib/types";

  import { page } from "$app/stores";
  import { onMount } from "svelte";

  export let data;

  const { title, date, categories, description } = data.metadata;

  let url = new URL("https://jesirgb.com/blog/thumbnails");
  url.searchParams.append("title", title);

  url.searchParams.append("desc", description);

  let asideToc: HTMLElement;
  let markdownContent: HTMLElement;

  let mounted: false;
  onMount(() => {
    mounted = true;
  });
</script>

<article class="mx-auto my-24 @container max-w-[93%] md:max-w-xl xl:max-w-6xl">
  <hrgoup
    class="flex flex-col space-y-3 border-b border-primary-content my-20 pb-5"
  >
    <a href="/blog" class="btn btn-outline btn-primary self-start">Back</a>
    <div class="text-primary">{formatDate(date)}</div>
    <div class="font-bold text-3xl">
      {title}
    </div>
    <div>
      {description}
    </div>
    <div>{categories}</div>
  </hrgoup>

  <div class="flex flex-row justify-between">
    <main bind:this={markdownContent} class="prose lg:prose-lg w-full xl:w-3/4">
      <svelte:component this={data.content} />
    </main>
    <div class="w-0 xl:w-1/4">
      {#if mounted}
        <Toc pageBody={markdownContent} autoHide={false} aside={asideToc}>
          <span slot="title" class="font-bold text-lg">Map</span>
        </Toc>
      {/if}
    </div>
  </div>
</article>

<style>
  aside {
    color: red;
  }
</style>
