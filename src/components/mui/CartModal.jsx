import React, { useContext } from "react";
import { Modal, Box, Typography, Button, IconButton } from "@mui/material";
import { IoMdClose, IoMdTrash } from "react-icons/io";
import "../css/cartmodal.css";
import { CartContext } from "../Context/CartContext";

const style = {
  position: "fixed",
  top: 0,
  right: 0,
  height: "100vh",
  width: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  overflowY: "auto",
  maxHeight: "100vh",
};

const CartModal = ({ open, handleClose }) => {
  const {
    cartItems,
    cartCount,
    addToCart,
    decreaseFromCart,
    removeFromCart,
    calculateTotalPrice,
  } = useContext(CartContext);

  const totalPrice = calculateTotalPrice();

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className="card-modal">
        <Box className="flex justify-between">
          <Typography className="modal-title" variant="h6" component="h1">
            My Cart ({cartCount} items)
          </Typography>
          <IoMdClose
            className="close-icon"
            onClick={handleClose}
            style={{ cursor: "pointer" }}
          />
        </Box>
        <hr />
        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <Box
                key={index}
                className="cart-item flex justify-between my-2 items-center"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-16 h-16"
                  style={{ borderRadius: "5px" }}
                />
                <Typography
                  style={{ fontSize: "0.7rem" }}
                  className="product-title w-50"
                >
                  {item.name}
                </Typography>
                <Typography>{item.price} </Typography>
                <Box className="flex items-center">
                  <Button onClick={() => decreaseFromCart(item)}>-</Button>
                  <Typography>{item.count}</Typography>
                  <Button onClick={() => addToCart(item)}>+</Button>
                  <IconButton onClick={() => removeFromCart(item)}>
                    <IoMdTrash />
                  </IconButton>
                </Box>
              </Box>
            ))}
            <Box className="flex justify-end my-4">
              <Typography variant="h6">Total: {totalPrice}</Typography>
            </Box>
          </>
        ) : (
          <Typography className="modal-paragraph" sx={{ mt: 2 }}>
            Your cart is empty. Start shopping!
          </Typography>
        )}
      </Box>
    </Modal>
  );
};

export default CartModal;
