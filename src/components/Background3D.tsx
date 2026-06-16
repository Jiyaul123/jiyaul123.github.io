import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ------------------------------------------------------------------ *
 * Minimal editorial backdrop — a single, very faint ink wireframe wave.
 * Deliberately understated so the typography stays the hero.
 * ------------------------------------------------------------------ */
const SEG = 48

function Wave() {
  const mesh = useRef<THREE.Mesh>(null)
  const geo = useMemo(() => new THREE.PlaneGeometry(40, 40, SEG, SEG), [])
  const base = useMemo(
    () => Float32Array.from(geo.attributes.position.array),
    [geo]
  )

  useFrame((state) => {
    const t = state.clock.elapsedTime
    const pos = geo.attributes.position
    for (let i = 0; i < pos.count; i++) {
      const x = base[i * 3]
      const y = base[i * 3 + 1]
      const z =
        Math.sin(x * 0.3 + t * 0.5) * 0.7 + Math.cos(y * 0.28 + t * 0.4) * 0.7
      pos.setZ(i, z)
    }
    pos.needsUpdate = true
    if (mesh.current) {
      mesh.current.rotation.z = THREE.MathUtils.lerp(
        mesh.current.rotation.z,
        state.pointer.x * 0.06,
        0.03
      )
    }
  })

  return (
    <mesh
      ref={mesh}
      geometry={geo}
      rotation={[-Math.PI / 2.4, 0, 0]}
      position={[0, -3, 0]}
    >
      <meshBasicMaterial
        color="#14130f"
        wireframe
        transparent
        opacity={0.06}
      />
    </mesh>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 1.5, 9], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Wave />
      </Canvas>
    </div>
  )
}
