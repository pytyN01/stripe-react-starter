const initState = {
  items: [
    {
      name: "dollar",
      sku: "sku_H24URFOLUPbKau",
      price: 100,
      quantity: 0,
      title: "A Precious Dollar",
      text: "Every dollar keeps Musaeum free!",
    },
    {
      name: "coffee",
      sku: "sku_H24Tk3tOEQRqGe",
      price: 500,
      quantity: 0,
      title: "Glorious Cup of Coffee",
      text: "Fact: Coffee = Fuel.",
    },
    {
      name: "meal",
      sku: "sku_H24ZxnShJD0Aoi",
      price: 1000,
      quantity: 0,
      title: "A Cheap Meal",
      text: "Better Fact: Food = Love!",
    },
    {
      name: "domain",
      sku: "sku_H246vepBK0pLsm",
      price: 2000,
      quantity: 0,
      title: "Keep Musaeum Free Forever",
      text: "Extend Musaeum's domain and storage.",
    },
  ],
  token: "pk_test_GvOaE0WLNjwMhq7p2qj6Yksq00mf4IWEKF",
  stripe: "",
  checked: [],
};

function root(state = initState, action) {
  switch (action.type) {
    case "setChecked": {
      const newState = {
        ...state,
        checked: action.payload,
      };
      return newState;
    }
    case "setStripe": {
      const newState = {
        ...state,
        stripe: action.payload,
      };
      return newState;
    }
    case "setDollar": {
      const newState = {
        ...state,
        items: state.items.map((item) => {
          if (item.name !== "dollar") {
            return item;
          }
          return {
            ...item,
            quantity: state.items[0].quantity + action.payload,
          };
        }),
      };
      return newState;
    }
    case "setCoffee": {
      const newState = {
        ...state,
        items: state.items.map((item) => {
          if (item.name !== "coffee") {
            return item;
          }
          return {
            ...item,
            quantity: state.items[1].quantity + action.payload,
          };
        }),
      };
      return newState;
    }
    case "setMeal": {
      const newState = {
        ...state,
        items: state.items.map((item) => {
          if (item.name !== "meal") {
            return item;
          }
          return {
            ...item,
            quantity: state.items[2].quantity + action.payload,
          };
        }),
      };
      return newState;
    }
    case "setDomain": {
      const newState = {
        ...state,
        items: state.items.map((item) => {
          if (item.name !== "domain") {
            return item;
          }
          return {
            ...item,
            quantity: state.items[3].quantity + action.payload,
          };
        }),
      };
      return newState;
    }
    default:
      return state;
  }
}

export default root;
