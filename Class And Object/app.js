class Products
{
    constructor(title,img,price) {
        this.title=title;
        this.img=img;
        this.price=price;
    }
}
let counter=0;

class AddToCart{
item=[];
sum=0;
    addProd(prod) {
        this.item.push(prod);
        const {name,img,price}=prod;
        this.sum+=price;
        console.log(this.sum);
        this.total.innerHTML=`<h2>Total \$${this.sum}</h2>`;

    }

render(){
    const section=document.createElement('section');
    section.innerHTML=`
   
    <h2>Total \$ ${0}</h2>
    <button>Order Now</button>
    `;
    section.className='cart';
    this.total=section.querySelector('h2');
    return section;
    const cartEl = document.createElement('section');
    cartEl.innerHTML = `
      <h2>Total: \$${0}</h2>
      <button>Order Now!</button>
    `;
    cartEl.className = 'cart';
    this.totalOutput = cartEl.querySelector('h2');
    const orderButn=cartEl.document.querySelector('button');
   // orderButn.addEventListener('click',this.addProd(prod));
    return cartEl;

}
}
class ProductItem{

    constructor(product) {
      this.product=product;
    }

//this is for addCart
    insertItem()
    {
        App.addCart(this.product);
    }

    render(){
        const li=document.createElement('li');
        li.className='product-item';
        li.innerHTML=`<div>
        <img src="${this.product.img}" alt="${this.product.title}">
        <div class="product-item__content">
        <h2>${this.product.title}</h2>
        <h3>\$ ${this.product.price }</h3>
        <button>Add to cart</button>
</div>
</div>`
        const addToCartButn=li.querySelector('button');
        addToCartButn.addEventListener('click',this.insertItem.bind(this));
        return li;
    }
}
class AllProducts {
products=[new Products('Pillow','https://images.unsplash.com/photo-1592789705501-f9ae4278a9c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGlsbG93fGVufDB8fDB8fHww&w=1000&q=80',1),
    new Products('A Carpet', 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg', 89.99)
]
    render() {
        const ul = document.createElement('ul');
        ul.className = 'product-list';
        let app=new App();
        for (const SingleProd of this.products) {
            const productItem = new ProductItem(SingleProd,app);
            // console.log(productItem);
            ul.append(productItem.render());
        }
        return ul;

    }}
class Shop
{
    box = document.getElementById('app');
     render()
    {

        this.addedCartList=new AddToCart();
        this.box.append(this.addedCartList.render());
        const productList=new AllProducts();
        this.box.append(productList.render());

    }
}

class App{
     static init()
    {
        const shop=new Shop();
        shop.render();
        this.addCartList=shop.addedCartList;
    } static addCart(product)
    {
        this.addCartList.addProd(product);
    }
}

App.init();



