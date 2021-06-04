import { Canvas } from "terminal-canvas";
import { Code } from "..";

const CODE = `
badWrittenCode     = 5 + ()=>{console.log('test')}
`;

const canvas = new Canvas().reset();
const shape = new Code({ text: CODE });

shape.render(canvas);
canvas.flush();
