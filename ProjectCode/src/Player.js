import * as THREE from "three"
import * as RAPIER from "@dimforge/rapier3d-compat"
import { useRef } from "react"
import { useThree, useFrame } from "@react-three/fiber"
import { useKeyboardControls  } from "@react-three/drei"
import { CapsuleCollider , RigidBody, useRapier } from "@react-three/rapier"



const loggedin = localStorage.getItem("loggedin") | 0
const SPEED = 10

const direction = new THREE.Vector3()
const frontVector = new THREE.Vector3()
const sideVector = new THREE.Vector3()
const upVector = new THREE.Vector3()
var step = new Audio('step.mp3');
let pos = [0,0,0];
console.log(loggedin)
console.log(localStorage.getItem("loggedin"))
// if(loggedin == 1 || window.location.pathname != "/") {
//   console.log(window.location.pathname)
//    pos = [0,0,0]
// }
// else{
  
//    pos = [0,0,25]
// }

export function Player(props) {
  const pos = [props.x , props.y , props.z]
  const flycontrol = props.flycontrol
  const ref = useRef()
  const rapier = useRapier()
  const { camera } = useThree()
  const [, get] = useKeyboardControls()
  useFrame((state) => {
    
    const { forward, backward, left, right, jump } = get()
    const velocity = ref.current.linvel()


   
    // update camera
    camera.position.set(...ref.current.translation())
    
    // movement
    frontVector.set(0, 0, backward - forward)
    sideVector.set(left - right, 0, 0)
    direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation)
    
    if(flycontrol) ref.current.setLinvel({ x: direction.x, y: direction.y, z: direction.z })
    else ref.current.setLinvel({ x: direction.x, y: velocity.y, z: direction.z })

    // jumping
    const world = rapier.world.raw()
    const ray = world.castRay(new RAPIER.Ray(ref.current.translation(), { x: 0, y: -1, z: 0 }))
    const grounded = ray && ray.collider && Math.abs(ray.toi) <= 1.75

    // if (jump && grounded) ref.current.setLinvel({ x: 0, y: 7.5, z: 0 })    


    //Edited
    if (jump) ref.current.setLinvel({ x: 0, y: 2, z: 0 })

    //audio
    if(Math.abs(backward - forward) & grounded) step.play()
    else step.pause()
  })
  return (
    <>
      <RigidBody  ref={ref} colliders={false}  mass={1} type="dynamic" position={pos} enabledRotations={[false, false, false]}>
        <CapsuleCollider args={[7, 0.5]} /> 
      </RigidBody>

  
    </>
  )
}
