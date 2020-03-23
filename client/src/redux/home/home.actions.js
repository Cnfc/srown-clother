import homeItems from "./home.types";

export const addHomeItem = () => ({
  type: homeItems.ADD_ITEM
});

export const showHomeItem = () => ({
  type: homeItems.SHOW_ITEM
});

export const minusHomeItem = () => ({
  type: homeItems.MINUS_ITEM
});
