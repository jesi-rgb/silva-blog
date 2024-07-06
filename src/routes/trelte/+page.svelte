<script lang="ts">
    import { Canvas } from '@threlte/core'
    import { onMount } from 'svelte'
    import { T } from '@threlte/core'
    import Scroller from '@sveltejs/svelte-scroller'
    import Container from '$lib/components/Container.svelte'
    import { spring } from 'svelte/motion'

    import Duck from '$lib/yellow_rubber_duck.svelte'
    import Scene from './scenes/Scene.svelte'

    let progress: number
    let count: number
    let index: number
    let offset: number

    let top = 0.0
    let threshold = 0.2
    let bottom = 0.9
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
        <div slot="background" class="h-[100vh] border">
            <div class="w-full h-full">
                <Canvas>
                    <Scene {progress} {count} {offset} {index} />
                </Canvas>
            </div>
        </div>

        <div slot="foreground" class="w-3/4 mx-auto">
            <section class="pt-32 border border-red-400">
                <div class="text-3xl font-bold">section 1: lol</div>

                <div class="flex flex-col gap-8">
                    <p>
                        Aliqua consequat proident et commodo fugiat elit ullamco
                        consectetur qui eu aliquip. Exercitation minim aliquip
                        minim nulla dolore et quis officia amet aliquip pariatur
                        labore esse do. Elit excepteur proident dolor nisi
                        consectetur deserunt dolore aliqua laborum do. Qui et
                        laborum culpa eiusmod quis culpa eu id aute cupidatat
                        aliqua nostrud cillum consequat cillum.
                    </p>
                    <p>
                        Aliqua consequat proident et commodo fugiat elit ullamco
                        consectetur qui eu aliquip. Exercitation minim aliquip
                        minim nulla dolore et quis officia amet aliquip pariatur
                        labore esse do. Elit excepteur proident dolor nisi
                        consectetur deserunt dolore aliqua laborum do. Qui et
                        laborum culpa eiusmod quis culpa eu id aute cupidatat
                        aliqua nostrud cillum consequat cillum.
                    </p>
                    <p>
                        Aliqua consequat proident et commodo fugiat elit ullamco
                        consectetur qui eu aliquip. Exercitation minim aliquip
                        minim nulla dolore et quis officia amet aliquip pariatur
                        labore esse do. Elit excepteur proident dolor nisi
                        consectetur deserunt dolore aliqua laborum do. Qui et
                        laborum culpa eiusmod quis culpa eu id aute cupidatat
                        aliqua nostrud cillum consequat cillum.
                    </p>
                    <p>
                        Aliqua consequat proident et commodo fugiat elit ullamco
                        consectetur qui eu aliquip. Exercitation minim aliquip
                        minim nulla dolore et quis officia amet aliquip pariatur
                        labore esse do. Elit excepteur proident dolor nisi
                        consectetur deserunt dolore aliqua laborum do. Qui et
                        laborum culpa eiusmod quis culpa eu id aute cupidatat
                        aliqua nostrud cillum consequat cillum.
                    </p>
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
        height: 250vh;
    }
</style>
