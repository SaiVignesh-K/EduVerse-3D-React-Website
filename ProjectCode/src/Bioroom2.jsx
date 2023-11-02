
import { useGLTF } from '@react-three/drei'
import { useSharedState } from './sharedState';
import { PresentationControls } from '@react-three/drei';

export function Bioroom(props) {
  const { setText, setDesc } = useSharedState();

  function clear(){
    setText('');
    setDesc('');
  }

  function intestineClick() {
    setDesc('The small intestine extends from the pyloric sphincter to the ileocecal valve, where it empties into the large intestine. The small intestine finishes the process of digestion, absorbs the nutrients, and passes the residue on to the large intestine. The liver, gallbladder, and pancreas are accessory organs of the digestive system that are closely associated with the small intestine.The small intestine is divided into the duodenum, jejunum, and ileum. The small intestine follows the general structure of the digestive tract in that the wall has a mucosa with simple columnar epithelium, submucosa, smooth muscle with inner circular and outer longitudinal layers, and serosa. The absorptive surface area of the small intestine is increased by plicae circulares, villi, and microvilli.');
  }

  function intestine() {
    setText('intestine');
  }

  function stomach() {
    setText('stomach');
  }

  const { nodes, materials } = useGLTF('/bioroom2.glb')
  return (
    <group {...props} dispose={null} scale={1}>
      <group position={[0, 0.216, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 1.097, -0.042]} scale={[2.903, 0.254, 2.903]}>
            <mesh geometry={nodes.Object_4.geometry} material={materials['Material.005']} />
            <mesh geometry={nodes.Object_5.geometry} material={materials['Material.006']} />
            <mesh geometry={nodes.Object_6.geometry} material={materials['Material.007']} />
            <mesh geometry={nodes.Object_7.geometry} material={materials['Material.008']} />
          </group>
        </group>
      </group>
      <group position={[0, 2.024, 0]} rotation={[-Math.PI / 2, 0, 0.023]} scale={4.364}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[Math.PI, 0, Math.PI]}>
            <mesh geometry={nodes.Object_5001.geometry} material={materials.StingrayPBS1} />
            <mesh geometry={nodes.Object_7001.geometry} material={materials.StingrayPBS5} />
          </group>
          <mesh geometry={nodes.Object_10.geometry} material={materials.StingrayPBS4} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.StingrayPBS2} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.StingrayPBS3} />
        </group>
      </group>
      <group position={[-11.557, 3.03, -10.098]} rotation={[-Math.PI / 2, 0, 2.376]} scale={28.082}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[0, 4.314, 0]} scale={4.685}>
            <mesh geometry={nodes.LAMBUNG_phong1_0.geometry} material={materials.phong1} />
            <mesh geometry={nodes.LAMBUNG_phong1_0001.geometry} material={materials.phong1} />
            <mesh geometry={nodes.LAMBUNG_phong1_0002.geometry} material={materials.phong1} />
          </group>
        </group>
      </group>
      <group position={[8.828, 4.822, -10.669]} rotation={[-Math.PI / 2, 0, -2.427]} scale={0.216}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={6.5}>
            <mesh geometry={nodes.liver001_Material011_0.geometry} material={materials['Material.011']} position={[-0.6, 0.838, 0]} />
          </group>
          <mesh geometry={nodes.gallbladder002_Material013_0.geometry} material={materials['Material.013']} position={[0.239, -2.604, 1.254]} rotation={[-1.99, -0.69, 2.815]} scale={6.5} />
          <mesh geometry={nodes.hepatic_artery001_Material_0.geometry} material={materials['Material.002']} position={[-0.994, -1.083, -0.682]} rotation={[-0.466, 0.813, -0.145]} scale={6.5} />
          <mesh geometry={nodes.inferior_vena_cava001_Material012_0.geometry} material={materials['Material.012']} position={[-3.015, 7.079, 0.119]} rotation={[-1.571, -0.136, 0.001]} scale={6.5} />
          <mesh geometry={nodes.portal_vein001_Material015_0.geometry} material={materials['Material.015']} position={[-1.62, -0.041, -0.349]} rotation={[-1.788, 1.051, -0.026]} scale={6.5} />
        </group>
      </group>
      
      <group position={[11.447, 3.514, 9.392]} rotation={[-Math.PI / 2, 0, -2.173]} scale={0.092}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[15.286, 3.827, -1.997]} scale={0.1}>
            <mesh geometry={nodes.Tjocktarm_Default_Material_0.geometry} material={materials.Default_Material} />
            <mesh geometry={nodes.Tjocktarm_Default_Material_0001.geometry} material={materials.Default_Material} />
          </group>
          <PresentationControls snap={true}>
          <mesh onPointerEnter={(e) => intestine()} 
          onPointerLeave={(e) => clear()}
          onClick={(e) =>  intestineClick()}
          geometry={nodes.Tunntarm_Default_Material_0.geometry} material={materials.Default_Material_0} position={[14.166, 10.696, 1.169]} scale={0.1} />
              </PresentationControls>
        </group>
      </group>


      <group position={[-8.698, -16.513, 5.799]} rotation={[-1.357, -0.102, 2.344]} scale={4.312}>
        <group position={[-0.262, -0.314, 4.671]} onPointerEnter={(e) =>  
          stomach()
          } >
          <mesh geometry={nodes.Object_3.geometry} material={materials.Gums} />
          <mesh geometry={nodes.Object_4001.geometry} material={materials.Gums} />
          <mesh geometry={nodes.Object_5002.geometry} material={materials.Gums} />
          <mesh geometry={nodes.Object_6001.geometry} material={materials.Teeth} />
          <mesh geometry={nodes.Object_7002.geometry} material={materials.Teeth} />
          <mesh geometry={nodes.Object_8.geometry} material={materials.Tongue} />
        </group>
      </group>
      <mesh geometry={nodes.Plane.geometry} material={materials['Material.001']} scale={-16.837} />
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.004']} position={[-16.679, 7.53, 7.011]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Plane001.geometry} material={materials['Material.009']} position={[-16.579, 7.565, 6.994]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-1.731, -1, -2.467]} />
      <mesh geometry={nodes.Cube001.geometry} material={materials['Material.004']} position={[-16.679, 7.53, -5.791]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Plane003.geometry} material={materials['Material.010']} position={[-16.682, 7.503, -5.807]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]} scale={[-1.731, -1, -2.467]} />
      <mesh geometry={nodes.Plane002.geometry} material={materials['Material.014']} position={[16.759, 7.503, -5.727]} rotation={[-Math.PI / 2, 0, Math.PI / 2]} scale={[-1.731, -1, -2.467]} />
      <mesh geometry={nodes.Cube002.geometry} material={materials['Material.016']} position={[16.756, 7.53, -5.744]} rotation={[Math.PI / 2, 0, 1.577]} />
      <mesh geometry={nodes.Plane004.geometry} material={materials['Material.017']} position={[16.759, 7.503, 7.183]} rotation={[-Math.PI / 2, 0, 1.565]} scale={[-2.597, -1, -2.467]} />
      <mesh geometry={nodes.Cube003.geometry} material={materials['Material.018']} position={[16.756, 7.53, 7.167]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
      <mesh geometry={nodes.Text.geometry} material={materials['Material.019']} position={[-8.99, 14.098, -16.641]} rotation={[Math.PI / 2, 0, 0]} scale={2.957} />
      <mesh geometry={nodes.Cube004.geometry} material={nodes.Cube004.material} position={[-0.097, -0.507, 0.086]} rotation={[0, 0, -Math.PI]} />
      <mesh geometry={nodes.Cube005.geometry} material={nodes.Cube005.material} position={[17.331, 3.66, 0.15]} rotation={[Math.PI / 2, 0, -Math.PI / 2]} />
      <mesh geometry={nodes.Cube006.geometry} material={nodes.Cube006.material} position={[0.045, 4.405, -17.462]} rotation={[-Math.PI / 2, -Math.PI / 2, 0]} />
      <mesh geometry={nodes.Cube007.geometry} material={nodes.Cube007.material} position={[-18.203, 3.507, -0.02]} rotation={[Math.PI / 2, 0, Math.PI / 2]} />
    </group>
  )
}

useGLTF.preload('/bioroom2.glb')
