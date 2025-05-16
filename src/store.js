// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

// Load cart and user from localStorage
const savedCart = localStorage.getItem("cart");
const localStorageCart = savedCart ? JSON.parse(savedCart) : [];

const savedUser = localStorage.getItem("user");
const initialUser = savedUser ? JSON.parse(savedUser) : null;

// Products slice (unchanged)
const productsSlice = createSlice({
  name: 'Products',
  initialState: {
    Veg: [ /* Veg items here */ { name: 'tomato', price: '1.5', image: 'tomato.jpg' },
      { name: 'potato', price: '2.5', image: 'potato.jpg' },
      { name: 'carrot', price: '250.5', image: 'carrot.jpg' },
      { name: 'brinjal', price: '300.5', image: 'brinjal.jpg' },
      { name: 'cabbage', price: '100.5', image: 'cabbage.jpg' },
      { name: 'mirchi', price: '50.5', image: 'mirchi.jpg' },
      { name: 'cauliflower', price: '230.5', image: 'cauliflower.jpg' },
      { name: 'onions', price: '90.5', image: 'onions.jpg' },
      { name: 'cucumber', price: '200.5', image: 'cucumber.jpg' },
      { name: 'Greenpea', price: '50.5', image: 'greenpea.jpg' },
      { name: 'Beetroot', price: '250.5', image: 'beetroot.jpg' },
      { name: 'Bitterguord', price: '200.5', image: 'bitter.jpg' },
      { name: 'Broccoli', price: '75.5', image: 'broccoli.jpg' },
      { name: 'Radish', price: '65.5', image: 'radish.jpg' },
      { name: 'Pumpkin', price: '35.5', image: 'pumpkin.jpg' },
      { name: 'Corn', price: '15.5', image: 'corn.jpg' },
      { name: 'Garlic', price: '500.5', image: 'garlic.jpg' },
      { name: 'Coriander', price: '20.5', image: 'cor.jpg' },
      { name: 'DrumStick', price: '50.5', image: 'drum.jpg' },
      { name: 'LadiesFinger', price: '120.5', image: 'ladies.jpg' }
    ],

    NonVeg: [ /* Non-Veg items here */{ name: 'Chicken', price: '250.5', image: 'chicken.jpg' },
      { name: 'mutton', price: '500.5', image: 'mutton.jpg' },
      { name: 'fish', price: '300.5', image: 'fish.jpg' },
      { name: 'prawns', price: '400.5', image: 'prawnss.jpg' },
      { name: 'pork', price: '600.5', image: 'pork.jpg' },
      { name: 'crab', price: '800.5', image: 'crab.jpg' },
      { name: 'Turkey', price: '700.5', image: 'turkey.jpg' },
      { name: 'oyster', price: '1000.5', image: 'oyster.jpg' },
      { name: 'Chickenbreast', price: '2000.5', image: 'chickenbreast.jpg' },
      { name: 'Lamb', price: '2500.5', image: 'lamb.jpg' },
      { name: 'Goose', price: '350.5', image: 'goose,jpg.jpg' },
      { name: 'Scallop', price: '550.5', image: 'scalop.jpg' },
      { name: 'Rabbie', price: '150.5', image: 'rabi.jpg' },
      { name: 'Vension', price: '4500.5', image: 'vension.jpg' },
      { name: 'Lobster', price: '50.5', image: 'lob.jpg' },
      { name: 'Lama', price: '3500.5', image: 'lama.jpg' },
      { name: 'Emu', price: '150.5', image: 'emu.jpg' },
      { name: 'Clam', price: '90.5', image: 'c.jpg' },
      { name: 'GuniFowl', price: '550.5', image: 'guni.jpg' },
      { name: 'Steak', price: '950.5', image: 's.jpg' }
    ],
 
    Milk: [ /* Milk items here */{ name: 'FilteredMilk', price: '39.5', image: 'fil.jpg' },
      { name: 'SkimMilk', price: '150.5', image: 'sk.jpg' },
      { name: 'WholeMilk', price: '450.5', image: 'ful.jpg' },
      { name: 'CoconutMilk', price: '750.5', image: 'co.jpg' },
      { name: 'AlmondMilk', price: '50.5', image: 'a.jpg' },
      { name: 'Milk', price: '150.5', image: 'Milk.jpg' },
      { name: 'Freshmilk', price: '200.5', image: 'milk2.jpg' },
      { name: 'milktypes', price: '800.5', image: 'milk3.jpg' },
      { name: 'Creammilk', price: '300.5', image: 'cream.jpg' },
      { name: 'Buttermilk', price: '100.5', image: 'butter.jpg' },
      { name: 'Cheesemilk', price: '400.5', image: 'cheese.jpg' },
      { name: 'RawMilk', price: '250.5', image: 'r.jpg' },
      { name: 'Yogurt', price: '70.5', image: 'y.jpg' },
      { name: 'ChocoMilk', price: '350.5', image: 'cho.jpg' },
      { name: 'VanillaMilk', price: '950.5', image: 'v.jpg' },
      { name: 'BakedMilk', price: '50.5', image: 'b.jpg' },
      { name: 'BoiledMilk', price: '45.5', image: 'bo.jpg' },
      { name: 'OrganicMilk', price: '950.5', image: 'o.jpg' },
      { name: 'SoyMilk', price: '60.5', image: 'so.jpg' },
      { name: 'PowderedMilk', price: '43.5', image: 'pow.jpg' }
    ],
 
    Chocolate: [ /* Chocolate items here */{ name: 'Ferrorirocher', price: '16000', image: 'ferori.jpg' },
      { name: 'Mars', price: '500.5', image: 'm.jpg' },
      { name: 'Kunafa', price: '600.5', image: 'kuna.jpg' },
      { name: 'allchocolates', price: '400.5', image: 'choco2.jpg' },
      { name: 'CoconutBar', price: '90.5', image: 'cocu.jpg' },
      { name: 'dairymilk', price: '100.5', image: 'choco3.jpg' },
      { name: 'Kitkat', price: '50.5', image: 'kit.jpg' },
      { name: 'Munch', price: '100.5', image: 'munc.jpg' },
      { name: 'chocolates', price: '600.5', image: 'choco.jpg' },
      { name: 'Sneakers', price: '200.5', image: 'snek.jpg' },
      { name: 'MilkyBar', price: '60.5', image: 'milky.jpg' },
      { name: 'FiveStar', price: '55.5', image: '5.jpg' },
      { name: 'Corny', price: '85.5', image: 'corny.jpg' },
      { name: 'Twix', price: '700.5', image: 't.jpg' },
      { name: 'Bounty', price: '80.5', image: 'bou.jpg' },
      { name: 'Spongychocolate', price: '95.5', image: 'sp.jpg' },
      { name: 'RainbowCandy', price: '250.5', image: 'rain.jpg' },
      { name: 'Kinderjoy', price: '55.5', image: 'kind.jpg' },
      { name: 'Giradelli', price: '450.5', image: 'gira.jpg' },
      { name: 'Wonka', price: '550.5', image: 'w.jpg' }
    ]
 
  },
  reducers: {}
});

// Cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: localStorageCart,
  reducers: {
    Addtocart: (state, action) => {
      const item = state.find(i => i.name === action.payload.name);
      if (item) {
        item.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.find(i => i.name === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQuantity: (state, action) => {
      const item = state.find(i => i.name === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        return state.filter(i => i.name !== action.payload);
      }
    },
    removeItem: (state, action) => state.filter(i => i.name !== action.payload),
    clearCart: () => [],
    IncrementQuantity: (state, action) => {
      const item = state.find(item => item.id === action.payload.id);
      if (item) item.quantity += 1;
    },
  }
});

// Order slice
const orderSlice = createSlice({
  name: 'orders',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      state.push(action.payload);
    }
  }
});

// User slice
const userSlice = createSlice({
  name: 'user',
  initialState: initialUser,
  reducers: {
    loginUser: (state, action) => action.payload,
    logoutUser: () => null
  }
});

// Configure store
const store = configureStore({
  reducer: {
    Products: productsSlice.reducer,
    cart: cartSlice.reducer,
    orders: orderSlice.reducer,
    user: userSlice.reducer
  }
});

// Save state to localStorage
store.subscribe(() => {
  const state = store.getState();
  localStorage.setItem("cart", JSON.stringify(state.cart));
  localStorage.setItem("user", JSON.stringify(state.user));
});

// Export actions
export const { Addtocart, incrementQuantity, decrementQuantity, removeItem, clearCart, IncrementQuantity } = cartSlice.actions;
export const { addOrder } = orderSlice.actions;
export const { loginUser, logoutUser } = userSlice.actions;

export default store;
