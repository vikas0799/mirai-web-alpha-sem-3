// async function banking(){
//    // await login.   
//    //balance print
//    //transfer
//    //
//    //
//    //transfer
//    //

// }



// Render function
function render(data) {
  // 1. Container ko DOM se select karein
  const container = document.getElementById('product-container');

  // 2. Map function ka use karke array ko HTML me convert karein
  const productsHTML = data.map((item) => {
    return `
      <div class="product-card">
        <img src="${item.image}" alt="${item.title}" style="width:100px; height:100px; object-fit:contain;" />
        <h3>${item.title.substring(0, 30)}...</h3>
        <p class="category">${item.category}</p>
        <p class="price">$${item.price}</p>
        <p class="desc">${item.description.substring(0, 60)}...</p>
        <div class="rating">
           ${item.rating.rate} (${item.rating.count} reviews)
        </div>
      </div>
    `;
  }).join(''); // Array ko single string me convert karne ke liye .join('') jaruri hai

  // 3. Container ke andar ye HTML daal dein
  container.innerHTML = productsHTML;
}

// Example ke liye function call (Maan lijiye API se data aa gaya hai)
// render(apiDataArray);



async function dataFetching() {
  try {
    console.log("welcome");
        let url="https://fakestoreapi.com/products";
        let responce= await fetch(url,{})
            let data=await responce.json();
            console.log(data);
        //   data=  data.filter((Element)=>{
        //         if(Element.category==="electronics")
        //             return true;
        //         else
        //             return false;
        //     })
            render(data);
        
     } catch (error) {
        console.log(error);
        console.log("thik karo kuch problem h try me");
        
        
     }
    // console.log("transfer");
    
}


dataFetching();