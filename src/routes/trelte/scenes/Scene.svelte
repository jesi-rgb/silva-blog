<script lang="ts">
    import { T } from '@threlte/core'
    import { OrbitControls } from '@threlte/extras'
    import { spring } from 'svelte/motion'
    import { RoundedBoxGeometry } from '@threlte/extras'
    import Duck from '$lib/yellow_rubber_duck.svelte'

    export let count
    export let offset
    export let index
    export let progress

    function interpolate(a, b, t) {
        const x = a[0] + (b[0] - a[0]) * t
        const y = a[1] + (b[1] - a[1]) * t
        const z = a[2] + (b[2] - a[2]) * t
        return [x, y, z]
    }

    const position = spring([0, 0, 0])
    const rotation = spring([0, 0, 0])

    const path = [
        { position: [0, 0, 0], rotation: { x: 0, y: 0, z: 0 }, offset: 0.3 },
        { position: [0, 1, 3], rotation: { x: 0, y: Math.PI / 4, z: 0 } },
        { position: [0, 1, -3], rotation: { x: 0, y: Math.PI / 4, z: 0 } }
    ]

    $: if (index < path.length - 1) {
        position.set(
            interpolate(path[index].position, path[index + 1].position, offset)
        )
    }
</script>

<T.PerspectiveCamera
    makeDefault
    position={[5, 5, 5]}
    on:create={({ ref }) => {
        ref.lookAt(0, 0, 0)
    }}
>
    <OrbitControls />
</T.PerspectiveCamera>

<T.Mesh
    position={$position}
    scale={[2, 2, 2]}
    on:create={({ ref }) => {
        ref.lookAt(0, 0, 0)
    }}
>
    <Duck />
</T.Mesh>
