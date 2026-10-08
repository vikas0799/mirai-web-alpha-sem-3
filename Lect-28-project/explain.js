// const fruits = ['apple', 'Banana', 'Orange'];

// // let a=fruits.toLowerCase(); // This line has a typo and will throw an error. It should be fruits.toLowerCase() but arrays do not have a toLowerCase method.
//  fruits.forEach((fruit, index) => {
//   fruits[index] = fruit.toLowerCase();
// });
// console.log(fruits);
// console.log(fruits.includes('banana')); // true
// console.log(fruits.includes('grape'));  // false

// // let text = "Hello World!";
// // let result = text.toLowerCase();




let products=[
  {
    "id": 1,
    "title": "Essence Mascara Lash Princess",
    "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
    "category": "beauty",
    "price": 9.99,
    "discountPercentage": 10.48,
    "rating": 2.56,
    "stock": 99,
    "tags": ["beauty", "mascara"]
  },
  {
    "id": 2,
    "title": "Eyeshadow Palette with Mirror",
    "description": "The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
    "category": "beauty",
    "price": 19.99,
    "discountPercentage": 18.19,
    "rating": 2.86,
    "stock": 34,
    "tags": ["beauty", "eyeshadow"]
  },
  {
    "id": 3,
    "title": "Powder Canister",
    "description": "The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
    "category": "beauty",
    "price": 14.99,
    "discountPercentage": 9.84,
    "rating": 4.64,
    "stock": 89,
    "tags": ["beauty", "face powder"]
  },
  {
    "id": 4,
    "title": "Red Lipstick",
    "description": "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    "category": "beauty",
    "price": 12.99,
    "discountPercentage": 12.16,
    "rating": 4.36,
    "stock": 91,
    "tags": ["beauty", "lipstick"]
  },
  {
    "id": 5,
    "title": "Red Nail Polish",
    "description": "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    "category": "beauty",
    "price": 8.99,
    "discountPercentage": 11.44,
    "rating": 4.32,
    "stock": 79,
    "tags": ["beauty", "nail polish"]
  },
  {
    "id": 6,
    "title": "Calvin Klein CK One",
    "description": "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    "category": "fragrances",
    "price": 49.99,
    "discountPercentage": 1.89,
    "rating": 4.37,
    "stock": 29,
    "tags": ["fragrances", "perfumes"]
  },
  {
    "id": 7,
    "title": "Chanel Coco Noir Eau De",
    "description": "Coco Noir by Chanel is an elegant and mysterious fragrance, featuring notes of grapefruit, rose, and sandalwood. Perfect for evening occasions.",
    "category": "fragrances",
    "price": 129.99,
    "discountPercentage": 16.51,
    "rating": 4.26,
    "stock": 58,
    "tags": ["fragrances", "perfumes"]
  },
  {
    "id": 8,
    "title": "Dior J'adore",
    "description": "J'adore by Dior is a luxurious and floral fragrance, known for its blend of ylang-ylang, rose, and jasmine. It embodies femininity and sophistication.",
    "category": "fragrances",
    "price": 89.99,
    "discountPercentage": 14.72,
    "rating": 3.8,
    "stock": 98,
    "tags": ["fragrances", "perfumes"]
  },
  {
    "id": 9,
    "title": "Dolce Shine Eau de",
    "description": "Dolce Shine by Dolce & Gabbana is a vibrant and fruity fragrance, featuring notes of mango, jasmine, and blonde woods. It's a joyful and youthful scent.",
    "category": "fragrances",
    "price": 69.99,
    "discountPercentage": 0.62,
    "rating": 3.96,
    "stock": 4,
    "tags": ["fragrances", "perfumes"]
  },
  {
    "id": 10,
    "title": "Gucci Bloom Eau de",
    "description": "Gucci Bloom by Gucci is a floral and captivating fragrance, with notes of tuberose, jasmine, and Rangoon creeper. It's a modern and romantic scent.",
    "category": "fragrances",
    "price": 79.99,
    "discountPercentage": 14.39,
    "rating": 2.74,
    "stock": 91,
    "tags": ["fragrances", "perfumes"]
  }
]
let category = "all";
let search = "red";

//   let result = products.filter((product) => {
//     return (
//       (category === "all" || product.category === category)
//     );
//   });

    let result = products.filter((product) => {
    return (
      product.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  });

//   let result = products.filter((product) => {
//     return (
//       product.title
//         .toLowerCase()
//         .includes(search.toLowerCase())
//          &&
//       (category === "all" || product.category === category)
//     );
//   });

  console.log(result.length);




  let dataarray=[];

  dataarray.filter().sort().map();
  dataarray.filter.map();
  dataarray.sort.map();