import CounterReducer from "./counter.reducer";

it("render counterReducer at the front", () => {
  const state = CounterReducer(undefined, { type: "INIT" });

  const newState = CounterReducer(state, {
    type: "GET_POSTS_BEGIN"
  });
  expect(newState.coursesLoading).toBe(false);
  expect(newState.coursesError).toBe(null);
  expect(newState.courses).toStrictEqual([]);
});

it("render Posts success", () => {
  const state = CounterReducer(undefined, { type: "INIT" });

  const newState = CounterReducer(state, {
    type: "GET_POSTS_SUCCESS"
  });
  expect(newState.coursesLoading).toBe(false);
  expect(newState.coursesError).toBe(null);
});
