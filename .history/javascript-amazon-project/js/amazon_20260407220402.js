const products = [{
    image:'../images/products/athletic-cotton-socks-6-pairs.jpg',
    name:'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating:{ stars: 4.5, count: 87 },
    pricecents: 1090,
},
{
    image:'../images/products/intermediate-composite-basketball.jpg',
    name:'Intermediate Composite Basketball',
    rating:{ stars: 4.0, count: 127 },
    pricecents: 2095,

},
{
    image:'../images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name:'Adults Plain Cotton T-Shirt 2-Pack (Teal, Large)',
    rating:{ stars: 4.5, count: 56 },
    pricecents: 1499,   
}]

products.forEach((product) => {
    const html =`
    <div class="product-container">`;
})