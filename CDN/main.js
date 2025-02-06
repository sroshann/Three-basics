import * as Three from 'three'

// 1. Create a scene
// 2. Add a camara
// 3. Create and add 3D objects
// 4. Add lights
// 5. Set up renderer
// 6. Animate the scene

// SCENE
const scene = new Three.Scene() // Creating new scene 
scene.background = new Three.Color('#F0F0F0') // Setting background colour for scene    

// // CAMERA
const camera = new Three.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000)
// // Param 1 - Field of view
// // Param 2 - Aspect ratio
// // Param 3 - Near
// // Param 4 - Far
camera.position.z = 5 // Adjusting camera position
scene.add( camera );

// OBJECT
const geometry = new Three.TorusKnotGeometry()
const material = new Three.MeshStandardMaterial({ color : '#468585', emissive : '#468585' }) // The emmsive is provided to react with light
const object = new Three.Mesh( geometry, material )
scene.add( object )


// LIGHTS
const light = new Three.DirectionalLight( 0x9CDBA6, 10 )
// Param 1 - Light colour
// Param2 - Light intensity
light.position.set( 1,1,1 ) // Position the light
scene.add( light )
// RENDERER
const renderer = new Three.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight ) // Set up the size in which you should want to render
document.body.appendChild( renderer.domElement )

// ANIMATE
const animate = () => {
    
    requestAnimationFrame( animate )
    
    object.rotation.x += 0.01
    object.rotation.y += 0.01

    renderer.render( scene, camera )

}

animate()