import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const CameraController = () => {
    let { camera, gl } = useThree();
    
    useEffect(
       () => {
          const controls = new OrbitControls(camera, gl.domElement);
          controls.minDistance = 3;
          controls.maxDistance = 26;
          controls.target.set(-10,2,0);
          controls.update();
          return () => {
            controls.dispose();
          };
       },
       [camera, gl]
    );
    return null;
};

const Torus = () => {
    const ref = useRef<any>(null);

    useFrame((state, delta) => {
        const time = Date.now() * 0.001;

        ref.current.rotation.x = Math.sin( time / 4 );
        ref.current.rotation.y = Math.sin( time / 2 );

    });

    useThree(({camera}) => {
        camera.position.setZ(25);
    });
    
    return (
        <mesh
        ref={ref}>
            <torusKnotGeometry args={[9, 2, 130, 10]}/>
            {/* <sphereGeometry args={[10, 20, 10]} /> */}
            <meshBasicMaterial color={'#05396b'} wireframe={true}/>
        </mesh>
    )
}

const Scene = () => (
    <Canvas className="absolute top-0 left-0 w-full h-full z-10">
        <CameraController />
        <Torus />
    </Canvas>
);

export default Scene;