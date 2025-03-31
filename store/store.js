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
      const existingItem = cart.find(cartItem => cartItem.id === item.id);
      
      if (existingItem) {
        // Если товар уже есть в корзине, увеличиваем количество
        set({
          cart: cart.map(cartItem => 
            cartItem.id === item.id 
              ? { ...cartItem, count: cartItem.count + 1 } 
              : cartItem
          )
        });
      } else {
        // Если товара нет в корзине, добавляем с count = 1
        set({ cart: [...cart, { ...item, count: 1 }] });
      }
    },
    removeItemFromCart: (id) =>
      set((state) => ({
        cart: state.cart.filter((cartItem) => cartItem.id !== id),
      })),
    updateItemCount: (id, newCount) => {
      set((state) => ({
        cart: state.cart.map(item =>
          item.id === id ? { ...item, count: newCount } : item
        )
      }));
    },
  }), {
    name: 'cart-storage', // уникальное имя для localStorage
  })
);
