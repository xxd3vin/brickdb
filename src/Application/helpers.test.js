import { getSetByKeyword, queryProductItemBySetNum } from "./helpers.js";

const mockDb = [{ set_num: "10717-1" }, { set_num: "60197-1" }];
const mockPersonalItemsInfoDb = [
  { product_id: "10717" },
  { product_id: "60197" },
];

test("getSetByKeyword should return proper value", () => {
  const testCases = [
    { input: "10", expect: { set_num: "10717-1" } },
    { input: "197", expect: { set_num: "60197-1" } },
    { input: "11", expect: null },
  ];

  testCases.forEach((c) => {
    expect(getSetByKeyword(mockDb, c.input)).toEqual(c.expect);
  });
});

test("queryProductItemBySetNum should return proper value", () => {
  const testCases = [
    { input: "10717-1", expect: { product_id: "10717" } },
    { input: "60197-1", expect: { product_id: "60197" } },
    { input: "11223344", expect: null },
  ];

  testCases.forEach((c) => {
    expect(queryProductItemBySetNum(mockPersonalItemsInfoDb, c.input)).toEqual(
      c.expect
    );
  });
});
