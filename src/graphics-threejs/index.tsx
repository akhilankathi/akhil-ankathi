import * as THREE from 'three';

//  scene , camera and renderer

//  scene is like caonatiner to hold everything

//  camera is like user view and there are few types in camera most used is 

// +++++ creating Object +++++ //

// 1) geometry 
// 2) material ( wrappin paper to geometry) 
//  3) mesh ( which will combaine geometry and material)
//  light is also required for the few objects

import { useEffect, useRef } from "react";



export function MyThree() {
    const refContainer = useRef(null);
    useEffect(() => {
        // === THREE.JS CODE START ===
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        var renderer = new THREE.WebGLRenderer();
        renderer.setPixelRatio(window.devicePixelRatio)
        renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        refContainer.current && refContainer.current.appendChild(renderer.domElement);
        // var geometry = new THREE.MeshBasicMaterial
        // var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // var cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);
        const _geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const _material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
        const cube = new THREE.Mesh(_geometry, _material); scene.add(cube);
        camera.position.z = 5;
        var animate = function () {
            requestAnimationFrame(animate);
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
            renderer.render(scene, camera);
        };
        animate();
    }, []);
    return (
        <div ref={refContainer}></div>

    );
}


