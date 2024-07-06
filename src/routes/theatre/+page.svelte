<script lang="ts">
    import { T } from "@threlte/core";
    import { OrbitControls } from "@threlte/extras";
    import { SheetObject } from "@threlte/theatre";

    import { Canvas } from "@threlte/core";
    import { Theatre } from "@threlte/theatre";
</script>

<div class="w-full h-[100vh] border">
    <Canvas>
        <Theatre>
            <SheetObject key="Camera">
                <T.PerspectiveCamera makeDefault position={[5, 10, 3]} />
            </SheetObject>

            <SheetObject key="Cube">
                <T.Mesh position.y={0.5}>
                    <T.BoxGeometry />
                    <T.MeshBasicMaterial color="hotpink" />
                </T.Mesh>
            </SheetObject>

            <T.GridHelper />
        </Theatre>
    </Canvas>
</div>
