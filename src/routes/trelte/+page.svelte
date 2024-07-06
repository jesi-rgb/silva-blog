<script lang="ts">
    import { Canvas } from "@threlte/core";
    import { onMount } from "svelte";
    import { T } from "@threlte/core";
    import Scroller from "@sveltejs/svelte-scroller";
    import Container from "$lib/components/Container.svelte";
    import { spring } from "svelte/motion";

    import { OrbitControls } from "@threlte/extras";
    import Duck from "$lib/yellow_rubber_duck.svelte";

    let progress: number;
    let count: number;
    let index: number;
    let offset: number;

    let top = 0.0;
    let threshold = 0.2;
    let bottom = 0.9;

    function interpolate(a, b, t) {
        return {
            x: a.x + (b.x - a.x) * t,
            y: a.y + (b.y - a.y) * t,
            z: a.z + (b.z - a.z) * t,
        };
    }

    const position = spring({ x: 10, y: 5, z: 10 });
    const rotation = spring({ x: 0, y: 0, z: 0 });

    const path = [
        { x: 0, y: 0, z: 0, rotation: { x: 0, y: 0, z: 0 } },
        { x: 2, y: 1, z: -1, rotation: { x: 0, y: Math.PI / 4, z: 0 } },
        {
            x: -1,
            y: 2,
            z: 1,
            rotation: { x: Math.PI / 4, y: 0, z: Math.PI / 4 },
        },
        { x: 0, y: 0, z: 0, rotation: { x: 0, y: Math.PI * 2, z: 0 } },
    ];

    $: duckPosition = [progress * 10, progress * 5, 10];

    $: if (index < path.length - 1) {
        rotation.set(
            interpolate(path[index].rotation, path[index + 1].rotation, offset),
        );
        position.set(interpolate(path[index], path[index + 1], offset));
    }
</script>

<Container>
    <Scroller
        bind:index
        bind:count
        bind:offset
        bind:progress
        {top}
        {threshold}
        {bottom}
    >
        <div slot="background" class="h-[100vh]">
            <div class="w-full mx-auto h-full">
                <Canvas>
                    <T.PerspectiveCamera
                        makeDefault
                        position={[10, 10, 10]}
                        on:create={({ ref }) => {
                            ref.lookAt($position);
                        }}
                    >
                        <OrbitControls />
                    </T.PerspectiveCamera>
                    <T.Group
                        position={$position}
                        rotation={$rotation}
                        scale={[2, 2, 2]}
                    >
                        <Duck />
                    </T.Group>
                </Canvas>
            </div>
        </div>

        <div slot="foreground" class="w-3/4 mx-auto">
            <section class="pt-32 h-fit">
                <div class="font-bold text-3xl">pato</div>
                <div>
                    asdfklasñldf jaslñkdjf añlsdkjf sldkfj saldfñajsl dfkjs
                    ldfkjsldkf jsldfkj
                </div>
            </section>

            <section class="pt-32">
                <div class="font-bold text-3xl">pato</div>
                <div>
                    asdfklasñldf jaslñkdjf añlsdkjf sldkfj saldfñajsl dfkjs
                    ldfkjsldkf jsldfkj
                </div>
            </section>
            <section class="pt-32">
                <div class="font-bold text-3xl">pato</div>
                <div>
                    asdfklasñldf jaslñkdjf añlsdkjf sldkfj saldfñajsl dfkjs
                    ldfkjsldkf jsldfkj
                </div>
            </section>
            <section class="pt-32">
                <div class="font-bold text-3xl">pato</div>
                <div>
                    asdfklasñldf jaslñkdjf añlsdkjf sldkfj saldfñajsl dfkjs
                    ldfkjsldkf jsldfkj
                </div>
            </section>
        </div>
    </Scroller>

    <div class="mt-32 text-xl flex flex-col gap-4">
        <p>
            Officia sit nulla exercitation tempor dolore proident reprehenderit
            proident. Veniam sint veniam incididunt minim excepteur ut velit
            quis eiusmod culpa consequat quis est elit. Ut est qui elit amet
            eiusmod culpa esse. Dolor commodo culpa do veniam cillum amet in
            anim. Tempor non nostrud excepteur cupidatat nisi. Culpa occaecat
            exercitation eiusmod. Id sunt deserunt fugiat irure dolore fugiat
            elit ullamco Lorem est exercitation dolore ad ex.
        </p>

        <p>
            Officia sit nulla exercitation tempor dolore proident reprehenderit
            proident. Veniam sint veniam incididunt minim excepteur ut velit
            quis eiusmod culpa consequat quis est elit. Ut est qui elit amet
            eiusmod culpa esse. Dolor commodo culpa do veniam cillum amet in
            anim. Tempor non nostrud excepteur cupidatat nisi. Culpa occaecat
            exercitation eiusmod. Id sunt deserunt fugiat irure dolore fugiat
            elit ullamco Lorem est exercitation dolore ad ex.
        </p>

        <p>
            Officia sit nulla exercitation tempor dolore proident reprehenderit
            proident. Veniam sint veniam incididunt minim excepteur ut velit
            quis eiusmod culpa consequat quis est elit. Ut est qui elit amet
            eiusmod culpa esse. Dolor commodo culpa do veniam cillum amet in
            anim. Tempor non nostrud excepteur cupidatat nisi. Culpa occaecat
            exercitation eiusmod. Id sunt deserunt fugiat irure dolore fugiat
            elit ullamco Lorem est exercitation dolore ad ex.
        </p>

        <p>
            Officia sit nulla exercitation tempor dolore proident reprehenderit
            proident. Veniam sint veniam incididunt minim excepteur ut velit
            quis eiusmod culpa consequat quis est elit. Ut est qui elit amet
            eiusmod culpa esse. Dolor commodo culpa do veniam cillum amet in
            anim. Tempor non nostrud excepteur cupidatat nisi. Culpa occaecat
            exercitation eiusmod. Id sunt deserunt fugiat irure dolore fugiat
            elit ullamco Lorem est exercitation dolore ad ex.
        </p>
    </div>
</Container>

<style>
    section {
        height: 100vh;
    }
</style>
