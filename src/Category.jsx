import React from 'react'
import './Category.css';

const dataJson = [
  {
    "id": 1,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/frockCategory.jpg",
    "categoryText": "Frocks"
  },
  {
    "id": 2,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/sareeCategory.jpg",
    "categoryText": "Saree"
  },
  {
    "id": 3,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/kurtiCategory.jpg",
    "categoryText": "Kurti"
  },
  {
    "id": 4,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/leggingsCategory.jpg",
    "categoryText": "Leggings"
  },
  {
    "id": 5,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/jeweleryCategory.webp",
    "categoryText": "Jewelery"
  },
  {
    "id": 6,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/TopCategory.jpg",
    "categoryText": "Top"
  },
  {
    "id": 7,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/shirtSquareCat.jpg",
    "categoryText": "Shirts"
  },
  {
    "id": 8,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/salwarSuitCategory.webp",
    "categoryText": "Salwar"
  },
  {
    "id": 9,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/innerwearCategory.jpeg",
    "categoryText": "InnerWear"
  },
  {
    "id": 10,
    "imageUrl": "https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/shortsCategory.webp",
    "categoryText": "Shorts"
  }
];

const displayLogo = () => {
    dataJson.map(item => {
        console.log(item.id);
    });
}

function Category() {
    return (
        <div>
            <div className="category-row-container">
                
                <CategoryLogo 
                id={1} 
                imageUrl={"https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/kurtiCategory.jpg"}
                categoryText = {"Kurti"}
                />
                <CategoryLogo 
                id={1} 
                imageUrl={"https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/shortsCategory.webp"}
                categoryText = {"Shorts"}
                />
                <CategoryLogo 
                id={1} 
                imageUrl={"https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/jeweleryCategory.webp"}
                categoryText = {"Jewelery"}
                />
                <CategoryLogo 
                id={1} 
                imageUrl={"https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/TopCategory.jpg"}
                categoryText = {"Top"}
                />
                <CategoryLogo 
                id={1} 
                imageUrl={"https://abhinav-mishra-bucket.s3.ap-south-1.amazonaws.com/shirtSquareCat.jpg"}
                categoryText = {"Shirt"}
                
                />
            </div>
        </div>
    )
}

const CategoryLogo = props => {

    return(
<div className="category-logo">
    <img className="category-image" src={props.imageUrl} alt={'props.categoryText'}/>
    <div className="category-name">{props.categoryText}</div>
</div>
    );
}


export default Category
