class Products
{
    constructor(title,img,price) {
        this.title=title;
        this.img=img;
        this.price=price;
    }
}
class AddToCart
{
render(){
    const body=document.querySelector('body');
    const section=document.createElement('section');
    section.innerHTML=`
    <div>
    <h1>Added to cart!</h1>
    </div>`
    body.append(section);
}


}
class ProductItem{
    constructor(product) {
        this.product=product;
        console.log(this.product);
    }
//this is for addCart

    render(){
        const li=document.createElement('li');
        li.classList='product-item';
        li.innerHTML=`<div>
        
        <img src="${this.product.img}" alt="${this.product.title}">
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$ ${this.product.price }</h3>
        <button>Add to cart</button>
</div>
</div>`
        const addToCartButn=li.querySelector('button');
        addToCartButn.addEventListener('click',new AddToCart().render);
        return li;
    }
}
class AllProducts {
products=[new Products('Pillow','https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGlsbG93fGVufDB8fDB8fHww&w=1000&q=80',1),
    new Products('A Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg', 89.99)
]
    render() {
        const box = document.getElementById('app');
        const ul = document.createElement('ul');
        ul.classList = 'product-list';
        for (const SingleProd of this.products) {
            const productItem = new ProductItem(SingleProd);
            ul.append(productItem.render());
        }
        box.append(ul);

    }}

new AllProducts().render();

