import { createContext, useEffect, useMemo, useState } from "react";

export const UserData = createContext();

const CART_STORAGE_KEY = "cart-items";

const getStoredData = (key, fallback) => {
  try {
    const rawValue = localStorage.getItem(key);
    return rawValue ? JSON.parse(rawValue) : fallback;
  } catch (error) {
    console.log(`Error while reading ${key} from storage`, error);
    return fallback;
  }
};

export const UserContextData = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(
    () => getStoredData("current-user", null),
  );
  const [registeredUser, setRegisteredUser] = useState(() =>
    getStoredData("added-users", []),
  );
  const [cartItems, setCartItems] = useState(() =>
    getStoredData(CART_STORAGE_KEY, []),
  );

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product, quantity = 1) => {
    setCartItems((previousItems) => {
      const existingItem = previousItems.find((item) => item.id === product.id);

      if (existingItem) {
        return previousItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }

      return [
        ...previousItems,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          category: product.category,
          brand: product.brand || "",
          thumbnail: product.thumbnail || product.images?.[0] || "",
          quantity,
        },
      ];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((previousItems) =>
      previousItems.filter((item) => item.id !== productId),
    );
  };

  const updateCartQuantity = (productId, nextQuantity) => {
    setCartItems((previousItems) =>
      previousItems
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: Math.max(1, nextQuantity) }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartItemsCount = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );

  const cartSubtotal = useMemo(
    () =>
      Number(
        cartItems
          .reduce((total, item) => total + item.price * item.quantity, 0)
          .toFixed(2),
      ),
    [cartItems],
  );

  return (
    <UserData.Provider
      value={{
        registeredUser,
        setRegisteredUser,
        loggedUser,
        setLoggedUser,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        cartItemsCount,
        cartSubtotal,
      }}
    >
      {children}
    </UserData.Provider>
  );
};
