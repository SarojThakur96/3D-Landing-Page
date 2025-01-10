import { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { Color } from "three";

export function Model() {
  const [hovered, setHovered] = useState(false);
  const { nodes, materials } = useGLTF("./models/shoe-draco.glb");

  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto";
  }, [hovered]);

  useControls(
    "Shoe",
    () => {
      console.log("creating color pickers", materials);
      console.log("Available materials:", Object.keys(materials));

      const pickers = {};
      Object.keys(materials).forEach((m: any) => {
        //@ts-ignore
        pickers[m] = {
          value:
            "#" +
            ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
          onChange: (v: any) => {
            //@ts-ignore
            materials[m].color = new Color(v);
          },
        };
      });
      return pickers;

      // using forEach
      // const colorPickers = {};
      // Object.keys(materials).forEach((m) => {
      //   //@ts-ignore
      //   colorPickers[m] = {
      //     value:
      //       "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
      //     onChange: (v: any) => {
      //       //@ts-ignore
      //       materials[m].color = new Color(v);
      //     },
      //   };
      // });
      // return colorPickers;

      // using reduce
      // return Object.keys(materials).reduce(
      //   (acc, m) =>
      //     Object.assign(acc, {
      //       [m]: {
      //         value:
      //           "#" +
      //           ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0"),
      //         onChange: (v: any) => {
      //           //@ts-ignore
      //           materials[m].color = new Color(v);
      //         },
      //       },
      //     }),
      //   {}
      // );
    },
    [materials]
  );

  // JSX of glTF created using the command
  // npx gltfjsx .\public\models\shoe-draco.glb

  return (
    <group
      dispose={null}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={(e) => {
        e.stopPropagation();
        //@ts-ignore
        document.getElementById("Shoe." + e.object.material.name).focus();
      }}
    >
      <mesh
        geometry={
          //@ts-ignore
          nodes.shoe.geometry
        }
        material={materials.laces}
      />
      <mesh
        geometry={
          //@ts-ignore
          nodes.shoe_1.geometry
        }
        material={materials.mesh}
      />
      <mesh
        geometry={
          //@ts-ignore
          nodes.shoe_2.geometry
        }
        material={materials.caps}
      />
      <mesh
        geometry={
          //@ts-ignore
          nodes.shoe_3.geometry
        }
        material={materials.inner}
      />
      <mesh
        geometry={
          //@ts-ignore
          nodes.shoe_4.geometry
        }
        material={materials.sole}
      />
      <mesh
        geometry={
          //@ts-ignore
          nodes.shoe_5.geometry
        }
        material={materials.stripes}
      />
      <mesh
        geometry={
          //@ts-ignore
          nodes.shoe_6.geometry
        }
        material={materials.band}
      />
      <mesh
        geometry={
          //@ts-ignore
          nodes.shoe_7.geometry
        }
        material={materials.patch}
      />
    </group>
  );
}

useGLTF.preload("./models/shoe-draco.glb");
