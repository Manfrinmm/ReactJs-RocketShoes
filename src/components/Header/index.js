import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Container, Cart } from "./styles";

import { MdShoppingBasket } from "react-icons/md";
import logo from "../../assets/images/logo.svg";

function Header({ cartSize }) {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu carrinho</strong>
          <span>{cartSize} itens</span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  );
}

const mapStateToProps = state => ({
  cartSize: state.cart.length
});

export default connect(mapStateToProps)(Header);
