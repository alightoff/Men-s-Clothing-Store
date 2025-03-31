import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCatalogItems = create((set) => ({
  catalogItems: [
    {
      id: 1,
      title: "Обувь X",
      description: "Описание обуви X",
      price: 1000,
      size: "M",
      color: "red",
      sale: "50",
      elementOfClothing: "sneakers",
      img: "assets/clothes/sneakers1.png",
      inStock: true,
      isAddedToCart: false,
    },
    {
      id: 2,
      title: "Обувь Y",
      description: "Описание обуви Y",
      price: 2000,
      size: "L",
      color: "blue",
      sale: "60",
      elementOfClothing: "sneakers",
      img: "assets/clothes/sneakers2.png",
      inStock: false,
      isAddedToCart: false,
    },
    {
      id: 3,
      title: "Обувь Z",
      description: "Описание обуви Z",
      price: 3000,
      size: "S",
      color: "green",
      sale: "40",
      elementOfClothing: "sneakers",
      img: "assets/clothes/sneakers3.png",
      inStock: true,
      isAddedToCart: false,
    },
    {
      id: 5,
      title: "Обувь B",
      description: "Описание обуви B",
      price: 5000,
      size: "L",
      color: "blue",
      sale: "30",
      elementOfClothing: "sneakers",
      img: "assets/clothes/sneakers5.png",
      inStock: false,
      isAddedToCart: false,
    },
    {
      id: 6,
      title: "Обувь C",
      description: "Описание обуви C",
      price: 6000,
      size: "S",
      color: "green",
      sale: "20",
      elementOfClothing: "sneakers",
      img: "assets/clothes/sneakers6.png",
      inStock: true,
      isAddedToCart: false,
    },
    {
      id: 7,
      title: "Обувь D",
      description: "Описание обуви D",
      price: 7000,
      size: "M",
      color: "red",
      sale: "20",
      elementOfClothing: "sneakers",
      img: "assets/clothes/sneakers7.png",
      inStock: true,
      isAddedToCart: false,
    },
    {
      id: 8,
      title: "Обувь E",
      description: "Описание обуви E",
      price: 8000,
      size: "L",
      color: "blue",
      sale: "10",
      elementOfClothing: "sneakers",
      img: "assets/clothes/sneakers8.png",
      inStock: false,
      isAddedToCart: false,
    },
    {
      id: 9,
      title: "Обувь F",
      description: "Описание обуви F",
      price: 9000,
      size: "S",
      color: "green",
      sale: "10",
      elementOfClothing: "sneakers",
      img: "assets/clothes/sneakers9.png",
      inStock: true,
      isAddedToCart: false,
    },
    {
      id: 10,
      title: "Худи H",
      description:
        "Описание худи HОписание худи HОписание худи HОписание худи HОпОписание худи HОписание худи HОписание худи HОписание худи HОпОписание худи HОписание худи HОписание худи HОписание худи HОпОписание худи HОписание худи HОписание худи HОписание худи HОписание худи HОписание худи HОписание худи HОписание худи HОписание худи HОписание худи HОписание худи H",
      price: 11000,
      size: "L",
      color: "blue",
      sale: "1",
      elementOfClothing: "Tops",
      img: "assets/clothes/clothe1.png",
      inStock: false,
      isAddedToCart: false,
    },
  ],
}));

export const useCart = create(
  persist((set, get) => ({
    cart: [],
    addItemToCart: (item) => {
      const { cart } = get();
      const existingItem = cart.find(cartItem => 
        cartItem.id === item.id && cartItem.size === item.size
      );
      
      if (existingItem) {
        set({
          cart: cart.map(cartItem => 
            cartItem.id === item.id && cartItem.size === item.size
              ? { ...cartItem, count: Math.min(cartItem.count + 1, 5) } 
              : cartItem
          )
        });
      } else {
        set({ cart: [...cart, { ...item, count: 1 }] });
      }
    },
    removeItemFromCart: (id, size) =>
      set((state) => ({
        cart: state.cart.filter((cartItem) => 
          !(cartItem.id === id && cartItem.size === size)
        ),
      })),
    updateItemCount: (id, size, newCount) => {
      set((state) => ({
        cart: state.cart.map(item =>
          item.id === id && item.size === size 
            ? { ...item, count: newCount } 
            : item
        )
      }));
    },
    clearCart: () => set({ cart: [] }),
    getTotalPrice: () => {
      const { cart } = get();
      return cart.reduce((sum, item) => {
        const itemPrice = item.sale > 0 
          ? (item.price - (item.price * item.sale) / 100) * item.count 
          : item.price * item.count;
        return sum + itemPrice;
      }, 0);
    }
  }), {
    name: 'cart-storage',
  })
);