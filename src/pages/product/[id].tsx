import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from "@/styles/pages/product";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>
      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi
          voluptate voluptatum nobis doloribus dolor, distinctio repudiandae
          totam? Quia, reiciendis, repellendus a corrupti vel ipsum sed dolorem
          natus quis voluptates rerum!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
