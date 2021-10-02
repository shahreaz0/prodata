const fs = require("fs-extra");
const { parseJsonString, parseJsonFile } = require("./app");
const parseEngine = require("./utils/engine");

test("parseJsonString cannot be undefined or null", () => {
    expect(parseJsonString({})).not.toBeUndefined();
    expect(parseJsonString({})).not.toBeNull();
});

test("parseJsonFile cannot be undefined or null", async () => {
    const data = await parseJsonFile("./files/demo.json");

    expect(data).not.toBeUndefined();
    expect(data).not.toBeNull();
});

test("parseEngine cannot be undefined or null", async () => {
    const data = await fs.readJson("./files/demo.json");

    expect(parseEngine(data)).not.toBeUndefined();
    expect(parseEngine(data)).not.toBeNull();
});
