<script lang="ts">
    import { Canvas } from "@threlte/core";
    import { T } from "@threlte/core";

    import { interactivity, OrbitControls } from "@threlte/extras";
    import Duck from "$lib/yellow_rubber_duck.svelte";
</script>

<div class="border w-full h-[800px] mx-auto my-20">
    <Canvas>
        <T.PerspectiveCamera
            makeDefault
            position={[10, 10, 10]}
            on:create={({ ref }) => {
                ref.lookAt(0, 1, 0);
            }}
        >
            <OrbitControls />
        </T.PerspectiveCamera>
        <Duck />
    </Canvas>
</div>
