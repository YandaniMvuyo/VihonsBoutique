const product =  [
    {
        id: 0,
        image: 'Bag.png',
        title: 'Shopping cart',
        price: 223,
    },
    {
        id: 1,
        image: 'Images/Models',
        title: 'Shopping cart',
        price: 223,
    },
    {
        id: 2,
        image: 'Bag.png',
        title: 'Shopping cart',
        price: 223,
    },
    {
        id: 3,
        image: 'Bag.png',
        title: 'Shopping cart',
        price: 223,
    },
];
const catergories = [...new setInterval(product.map((item)=>
    {return item}))]
    let i=0;
    document.getElementById('root').innerHTML = catergories.map((item)=>
    {
        var {image, title, price} = item;
        return(
            `<div class='box'>
            <div class='img-box'>
            <img class='images' src=${images}></img>
            </div>
            <div class ='bottom'
            <p>${title}</p>
            <h2>${price}.00</h2>`+
            "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
            `</div>
            </div>`
        )
    }).join('')
