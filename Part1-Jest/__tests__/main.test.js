const formatVolumeIconPath = require("../assets/scripts/main");

describe("Testing formatVolumeIconPath", () => {
    test("Volume > 66", () => {
        expect(formatVolumeIconPath(70)).toMatch("./assets/media/icons/volume-level-3.svg")
    });

    test("33 < Volume <= 66", () => {
        expect(formatVolumeIconPath(50)).toMatch("./assets/media/icons/volume-level-2.svg")
    });

    test("0 < Volume <= 33", () => {
        expect(formatVolumeIconPath(20)).toMatch("./assets/media/icons/volume-level-1.svg")
    });

    test("Invalid volume <= 0", () => {
        expect(formatVolumeIconPath(-1)).toMatch("./assets/media/icons/volume-level-0.svg")
    });
});