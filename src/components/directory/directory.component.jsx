import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import { DirectoryContainer } from "./directory.styles.jsx";

const categories = [
  {
    id: 1,
    title: "shirts",
    imageUrl: "https://i.ibb.co/2SByRMM/cat-t.jpg",
    route: "shop/shirts",
  },
  {
    id: 2,
    title: "caps",
    imageUrl: "https://i.ibb.co/6vjnDpb/cat-cap.jpg",
    route: "shop/caps",
  },
  {
    id: 3,
    title: "sweaters",
    imageUrl: "https://i.ibb.co/wJ9SYVm/cat-hood.jpg",
    route: "shop/sweaters",
  },
];

function Directory() {
  return (
    <DirectoryContainer>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </DirectoryContainer>
  );
}

export default Directory;
