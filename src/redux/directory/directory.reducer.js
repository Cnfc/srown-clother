const INITIAL_STATE = {
  sections: [
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "hats"
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 3,
      linkUrl: "jackets"
    },
    {
      title: "sheakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 2,
      linkUrl: "sheakers"
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "womens"
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "mens"
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    // case HomeActionTypes.SHOW_ITEM:
    //  return {
    //  ...state,
    //  }

    default:
      return state;
  }
};

export default directoryReducer;
