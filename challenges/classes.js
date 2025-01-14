// 1. Copy and paste your prototype in here and refactor into class syntax.
// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.


class CuboidMaker {
    constructor(length, width, height) {
        [this.length, this.width, this.height] = [length, width, height];
    }

    volume() {
        return this.length * this.width * this.height;
    }

    surfaceArea() {
        return 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
    }
}


let cuboid = new CuboidMaker(4, 5, 5);


console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130



