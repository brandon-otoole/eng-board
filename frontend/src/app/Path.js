import { StrokePoint } from "drawing-strokes";

function PathFactory(data) {
    let path = new Path(data._id, data.width, data.pressureThreashold,
        data.resolution, data.color);

    if (data._points) {
        path._points = data._points.map(p => new StrokePoint(p._x, p._y,
            p._pressure, p._tiltx, p._tilty));
    } else {
        path._points = [];
    }

    return path;
}

class Path {
    constructor(id, width, pressureThreashold, resolution, color) {
        //this.index = null;
        this._id = id;
        this.width = width || 5;
        //this.pressureThreashold = pressureThreashold || 0.25;
        this.pressureThreashold = pressureThreashold || 0.0;
        this.resolution = resolution || 1;
        this.color = color || "#000000";

        this._points = [];
        //this.hasUpdates = false;
    }

    get id() { return this._id; }
    set id(value) {
        console.log("ID setting is not allowed");
    }

    get type() {
        if (this.id == 1) {
            return "mouse";
        } else {
            return this._type || "pen";
        }
    }

    set type(value) {
        this._type = value;
    }

    get points() {
        return this._points;
    }

    set points(value) {
        console.log("try to .push() on the object");
    }

    push(value) {
        if (value) {
            this._points.push(value);
        }
    }
}

export {
    PathFactory,
    Path,
}
