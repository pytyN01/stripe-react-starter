const initState = {
  items: [
    {
      name: "dollar",
      sku: process.env.REACT_APP_DOLLAR,
      price: 100,
      quantity: 0,
      title: "A Precious Dollar",
      text: "Every dollar keeps Musaeum free!",
    },
    {
      name: "coffee",
      sku: process.env.REACT_APP_COFFEE,
      price: 500,
      quantity: 0,
      title: "Glorious Cup of Coffee",
      text: "Fact: Coffee = Fuel.",
    },
    {
      name: "meal",
      sku: process.env.REACT_APP_MEAL,
      price: 1000,
      quantity: 0,
      title: "A Cheap Meal",
      text: "Better Fact: Food = Love!",
    },
    {
      name: "domain",
      sku: process.env.REACT_APP_EXTEND_DOMAIN,
      price: 2000,
      quantity: 0,
      title: "Keep Musaeum Free Forever",
      text: "Extend Musaeum's domain and storage.",
    },
  ],
  token: process.env.REACT_APP_TOKEN,
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
