import * as React from "react";

import Cube from "react-3d-cube";

import cube1 from "@/images/cube_3d/cube1.png";
import cube2 from "@/images/cube_3d/cube2.png";
import cube3 from "@/images/cube_3d/cube3.png";
import cube4 from "@/images/cube_3d/cube4.png";
import cube5 from "@/images/cube_3d/cube5.png";
import cube6 from "@/images/cube_3d/cube6.png";

export default function LogoCube() {
  return (
    <div>
      <center>
        <h1>react-3d-cube</h1>
        <h2>no children</h2>
        <div
          style={{
            width: 300,
            height: 300,
          }}
        >
          <Cube size={300} index="front" />
        </div>
        <h2>set children</h2>
        <div
          style={{
            width: 300,
            height: 300,
          }}
        >
          <Cube size={300} index="front">
            <div>
              <img
                style={{ width: "280px", height: "300px" }}
                src={cube1.src}
              ></img>
            </div>
            <div>
              <img
                style={{ width: "280px", height: "300px" }}
                src={cube2.src}
              ></img>
            </div>
            <div>
              <img
                style={{ width: "280px", height: "300px" }}
                src={cube3.src}
              ></img>
            </div>
            <div>
              <img
                style={{ width: "280px", height: "300px" }}
                src={cube4.src}
              ></img>
            </div>
            <div>
              <img
                style={{ width: "280px", height: "300px" }}
                src={cube5.src}
              ></img>
            </div>
            <div>
              <img
                style={{ width: "280px", height: "300px" }}
                src={cube6.src}
              ></img>
            </div>
            <div>
              <img
                style={{ width: "280px", height: "300px" }}
                src={cube1.src}
              ></img>
            </div>
          </Cube>
        </div>
      </center>
    </div>
  );
}
