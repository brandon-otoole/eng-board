import * as Radial from "./Radial.js";
import { Debug } from "./Debug.js";
import { Menu } from "./Menu.js";
import { Surface } from "./Surface.js";
import { DrawTip } from "./DrawTip.js";
import { PointerInput } from "./PointerInput.js";
import { TouchInput } from "./TouchInput.js";

let surface = new Surface(document.getElementById("bg-board"));
document.debug = new Debug(surface);

console.warn("test warn");
console.log("test log");

function buildSetSurfaceTip(surface) {
    return function (tip) { surface.tip = tip; }
}

let setSurfaceTip = buildSetSurfaceTip(surface);
let penTip = new DrawTip("pen", 5, "#000000", setSurfaceTip);
let pencilTip = new DrawTip("pencil", 5, "#000000", setSurfaceTip);
let eraserTip = new DrawTip("eraser", 25, null, setSurfaceTip);

surface.tip = penTip;

let menu = new Menu(surface);

Radial.init();

let pointerInput = new PointerInput(surface);
let touchInput = new TouchInput(surface);
