import React from "react";
import './ProductBlock.css';







 const ProductBlock = (props) => {

    console.log('Value of prps is ', props)

        return (
            <div className="MuiBox-root jss2305">
                <div className="MuiGrid-root MuiGrid-container MuiGrid-spacing-xs-2" id="product-block-custom">
                    <SingleProductBlock imgSrc={props.imgs[0]} categoryTtile={'Salwar Kurtis'}/>
                    <SingleProductBlock imgSrc={props.imgs[1]} categoryTtile={'Anouk Kurtis'}/>
                    <SingleProductBlock imgSrc={props.imgs[2]} categoryTtile={'Salwar Kurtis'}/>
                    <SingleProductBlock imgSrc={props.imgs[3]} categoryTtile={'Salwar Kurtis'}/>
                    <SingleProductBlock imgSrc={props.imgs[4]} categoryTtile={'Salwar Kurtis'}/>
            </div>
            </div>
          );
  
};


export default ProductBlock;


const SingleProductBlock = (props) => {
    return(
<div
        class="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-sm-2"
        id="category_block_wrapper_0"
      >
        <a
          href="/productDetails"
          class="jss1758"
          id="category_block_link_0"
        >
          <img
           
            src={props.imgSrc}
            alt="Girls Top"
            class="jss1755 imageTopBlock"
            id="category_block_image_0"
          />
          <div
            class="MuiBox-root jss1763 jss1756"
            id="category_block_lead_0"
          ></div>
          <div class="MuiBox-root jss1764 jss1757" id="category_title_0">
          
          </div>
        </a>
      </div>
    )
}