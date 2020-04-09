const initState = {
  items: [
    {
      name: "dollar",
      sku: "sku_H24URFOLUPbKau",
      price: 100,
      quantity: 1,
      title: "A Precious Dollar",
      text: "Every dollar keeps Musaeum free!",
    },
    {
      name: "coffee",
      sku: "sku_H24Tk3tOEQRqGe",
      price: 500,
      quantity: 1,
      title: "Glorious Cup of Coffee",
      text: "Fact: Coffee = Fuel.",
    },
    {
      name: "meal",
      sku: "sku_H24ZxnShJD0Aoi",
      price: 1000,
      quantity: 1,
      title: "A Cheap Meal",
      text: "Better Fact: Food = Love!",
    },
    {
      name: "domain",
      sku: "sku_H246vepBK0pLsm",
      price: 2000,
      quantity: 1,
      title: "Keep Musaeum Free Forever",
      text: "Extend Musaeum's domain and storage.",
    },
  ],
  // token: process.env.REACT_APP_TOKEN,
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
        dollar: state.dollar + action.payload,
      };
      return newState;
    }
    case "setCoffee": {
      const newState = {
        ...state,
        coffee: state.coffee + action.payload,
      };
      return newState;
    }
    case "setMeal": {
      const newState = {
        ...state,
        meal: state.meal + action.payload,
      };
      return newState;
    }
    case "setDomain": {
      const newState = {
        ...state,
        domain: state.domain + action.payload,
      };
      return newState;
    }
    default:
      return state;
  }
}

export default root;
