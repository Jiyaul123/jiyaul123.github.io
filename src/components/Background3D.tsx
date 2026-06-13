import { useMemo, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

/* ------------------------------------------------------------------ *
 * Flowing wave grid — a wireframe plane whose vertices ripple through a
 * travelling sine field. Reads as a "signal / data surface": calm,
 * minimal, and quietly hypnotic. Tinted with the brand accents.
 * ------------------------------------------------------------------ */
const SEG = 60 // grid resolution per side

function WaveGrid() {
  const mesh = useRef<THREE.Mesh>(null)
  const geo = useMemo(
    () => new THREE.PlaneGeometry(34, 34, SEG, SEG),
    []
  )
  // cache the flat base positions so we can re-derive Z each frame
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
      // two travelling waves crossing → organic interference ripple
      const z =
        Math.sin(x * 0.35 + t * 0.8) * 0.8 +
        Math.cos(y * 0.3 + t * 0.6) * 0.8 +
        Math.sin((x + y) * 0.2 + t) * 0.4
      pos.setZ(i, z)
    }
    pos.needsUpdate = true
    geo.computeVertexNormals()

    if (mesh.current) {
      // slow drift with the pointer for parallax
      mesh.current.rotation.z = THREE.MathUtils.lerp(
        mesh.current.rotation.z,
        state.pointer.x * 0.1,
        0.03
      )
    }
  })

  return (
    <mesh
      ref={mesh}
      geometry={geo}
      rotation={[-Math.PI / 2.6, 0, 0]}
      position={[0, -2.5, 0]}
    >
      <meshStandardMaterial
        color="#818cf8"
        emissive="#0d9488"
        emissiveIntensity={0.15}
        wireframe
        transparent
        opacity={0.55}
      />
    </mesh>
  )
}

/* A few soft glowing orbs drifting far behind, for depth */
function GlowDots() {
  const ref = useRef<THREE.Points>(null)
  const positions = useMemo(() => {
    const n = 60
    const a = new Float32Array(n * 3)
    for (let i = 0; i < n; i++) {
      a[i * 3] = (Math.random() - 0.5) * 30
      a[i * 3 + 1] = Math.random() * 12 - 1
      a[i * 3 + 2] = -8 - Math.random() * 10
    }
    return a
  }, [])

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.02
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#db2777"
        transparent
        opacity={0.5}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

function Rig() {
  useFrame((state) => {
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      1.5 - state.pointer.y * 0.5,
      0.04
    )
    state.camera.lookAt(0, 0, -2)
  })
  return null
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10">
      {/* Soft static gradient wash for a clean colour base */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(129,140,248,0.14),transparent_55%),radial-gradient(circle_at_20%_90%,rgba(13,148,136,0.12),transparent_55%)]" />

      <Canvas
        camera={{ position: [0, 1.5, 9], fov: 55 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.1} />
        <directionalLight position={[5, 10, 5]} intensity={1} />
        <pointLight position={[-8, 4, 2]} intensity={0.8} color="#db2777" />
        <WaveGrid />
        <GlowDots />
        <Rig />
      </Canvas>

      {/* Fade the far edge of the grid into the page for a clean horizon */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(244,245,248,0.7)_0%,transparent_30%,transparent_70%,rgba(244,245,248,0.85)_100%)]" />
    </div>
  )
}
