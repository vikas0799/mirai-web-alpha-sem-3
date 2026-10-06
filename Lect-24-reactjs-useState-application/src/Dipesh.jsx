import React from 'react'

function Dipesh({Foods,age,addtocart,removetocart}) {
    // let Foods=props.Foods;
    // let age=props.age;
    // let addtocart=props.addtocart;
    console.log(Foods);
    console.log(age);
    console.log(addtocart);
    const college="mirai";
    

    return (
        <div>
            {
                Foods.map((element) => {
                    return (
                        <div style={{ backgroundColor: 'aqua' }} key={element.id}>
                            <p>{element.id}</p>
                            <p>{element.name}</p>
                            <p>{element.category}</p>
                            <p>{element.price}</p>
                            <p>{element.available}</p>
                            <p>{element.emoji}</p>
                            <img src={element.image} alt="" style={{ height: '100px' }} />
                            <button disabled={!element.available} onClick={addtocart}>addtocart</button>
                           <button disabled={!element.available} onClick={removetocart}>removetocart</button>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default Dipesh



              {/* <button disabled={!element.available} onClick={(event) => {
                console.log(event);

                console.log("hii");
                console.log("bye");
                setcartCount(cartCount + 1);
              }}>addtocart</button> */}