import * as Three from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import './style.css'

const canvas = document.getElementById('canvas')

const scene = new Three.Scene()
scene.background = new Three.Color('#F0F0F0')

const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 5
scene.add(camera)

const docGeometry = new Three.DodecahedronGeometry()
const docMaterial = new Three.MeshLambertMaterial({ color: '#468585', emissive: '#468585' })
const docMesh = new Three.Mesh(docGeometry, docMaterial)
scene.add(docMesh)

const boxGeometry = new Three.BoxGeometry(2, 0.1, 2)
const boxMaterial = new Three.MeshLambertMaterial({ color: '#B4B4B3', emissive: '#B4B4B3' })
const boxMesh = new Three.Mesh(boxGeometry, boxMaterial)
boxMesh.position.y = -1.5
scene.add(boxMesh)

const light = new Three.SpotLight(0x006769, 100)
light.position.set(1, 1, 1)
scene.add(light)

const renderer = new Three.WebGLRenderer({ canvas })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio( window.devicePixelRatio )

// Controlls
const controlls = new OrbitControls( camera, renderer.domElement )
controlls.enableDamping = true // Make controlls smoother
controlls.dampingFactor = 0.05
controlls.enableZoom = true // Zoom in and out
controlls.enablePan = true 

const animate = () => {
    
    requestAnimationFrame( animate )

    docMesh.rotation.x += 0.01
    docMesh.rotation.y += 0.01
    docMesh.rotation.z += 0.01
    boxMesh.rotation.y += 0.01

    controlls.update() // To make the dmapaning happen
    renderer.render(scene, camera)

}

// Making the controlls smooth on responsive
window.addEventListener( 'resize', () => {
    
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize( window.innerWidth, window.innerHeight )
    
} )

animate()