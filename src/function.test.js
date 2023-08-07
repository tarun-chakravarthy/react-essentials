import { timesTwo } from "./function"

test("Multiplies by two", ()=> {
    expect(timesTwo(2)).toBe(8);
})