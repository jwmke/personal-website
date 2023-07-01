import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import useWindowDimensions from '../hooks/useWindowDimensions';

const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
}

const geometries = [
    <torusKnotGeometry args={[9, 2, 130, 10]} key={"0"}/>,
    <sphereGeometry args={[12, 20, 12]} key={"1"}/>,
    // <dodecahedronBufferGeometry args={[12, 1]} key={"2"}/>,
    // <icosahedronGeometry args={[12, 5]} key={"3"}/>
];

const CameraController = () => {
    let { camera, gl } = useThree();
    
    const { height, width } = useWindowDimensions();
    
    useEffect(
       () => {
          const controls = new OrbitControls(camera, gl.domElement);
          controls.enabled = width&&width>700 ? true : false;
          controls.enableZoom = false;
          controls.maxDistance = 32;
          controls.target.set(-14,1,0);
          controls.update();
          return () => {
            controls.dispose();
          };
       },
       [camera, gl, width]
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
        camera.position.setZ(29);
    });
    
    return (
        <mesh
        ref={ref}>
            {geometries[getRandomInt(geometries.length)]}
            {/* {geometries[0]} */}
            <meshBasicMaterial color={'#05396b'} wireframe={true}/>
        </mesh>
    )
}

const Scene = () => {
    return <Canvas className="absolute top-0 left-0 h-full w-full z-10">
            <CameraController />
            <Torus />
        </Canvas>
};

export default Scene;