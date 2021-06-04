export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
      cartItem => cartItem.id === cartItemToAdd.id
    )
  
    if (existingCartItem) {
      return cartItems.map(cartItem =>
        cartItem.id === cartItemToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    }
  
    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
  }

  export const removeItemFromCart = (items, toRemove) => {
    const existingItem = items.find(
      item => item.id === toRemove.id
    )

    if (existingItem.quantity === 1) return items.filter(item => item.id !== toRemove.id)

    return items.map(item => item.id === toRemove.id ? { ...item, quantity: item.quantity - 1} : item)
  }