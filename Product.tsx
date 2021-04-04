import React from "react";
import Mobile from "./Mobile";

interface ProductState {
  id: number;
  category: string;
}
interface ProductProps {}

class Product extends React.Component<ProductProps, ProductState> {
  constructor(props: ProductProps) {
    super(props);
    this.state = {
      id: 100,
      category: "electronics"
    };
  }

  updateCategory = () => {
    console.log("inside updateCategory");
    this.setState({
      category: "Mobiles"
    });
  };

  // updateCategory() {
  //   console.log("inside updateCategory");
  //   this.setState({
  //     category: "Mobiles"
  //   });
  // }
  render() {
    return (
      <React.Fragment>
        <h1>
          Lets understand passing data from Product to Mobile component and
          vice-versa
        </h1>
        <h4>Product is passing data to Mobile</h4>
        <Mobile
          id={this.state.id}
          category={this.state.category}
          updateCategory={this.updateCategory}
        />
      </React.Fragment>
    );
  }
}

export default Product;
