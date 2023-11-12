import React from "react";

type DetailProductProps = { params: { slug: string } };
export default function DetailProduct(props: DetailProductProps) {
  const { params } = props;
  return (
    <div>
      <h1>DetailProduct</h1>
      <h1>{params.slug}</h1>
    </div>
  );
}

// DINAMIC ROUTING
