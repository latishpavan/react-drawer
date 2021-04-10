import "./styles.css";
import React from "react";
import { Drawer } from "./Drawer";

export default function App() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)}>Click me</button>
      <Drawer isOpen={open} setOpen={setOpen}>
        <p>Sample children</p>
      </Drawer>
    </div>
  );
}
