import React from "react";
import { useNavigate } from "react-router-dom";
import { Arrow, NavHeadContainer, PageTitle } from "./nav-head.styles";

function NavHead({ val, back, next }) {
  const navigate = useNavigate();

  return (
    <NavHeadContainer>
      <Arrow onClick={() => navigate(back)}>&#10094;</Arrow>
      <PageTitle>{val}</PageTitle>
      <Arrow onClick={() => navigate(next)}>&#10095;</Arrow>
    </NavHeadContainer>
  );
}

export default NavHead;
