import CounterReducer from "./counter.reducer";

it("render counterReducer at the front", () => {
  const state = CounterReducer(undefined, { type: "INIT" });

  const newState = CounterReducer(state, {
    type: "GET_POSTS_BEGIN"
  });
  expect(newState.isLoading).toBe(true);
  expect(newState.err).toBe(null);
  expect(newState.posts).toStrictEqual([]);
});

it("render Posts success", () => {
  const state = CounterReducer(undefined, { type: "INIT" });

  const newState = CounterReducer(state, {
    type: "GET_POSTS_SUCCESS"
  });
  expect(newState.isLoading).toBe(false);
  expect(newState.err).toBe(null);
});
