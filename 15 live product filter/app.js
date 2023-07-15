var products = document.querySelector('.products');
products.innerHTML = ''
fetch('https://fakestoreapi.com/products')
    .then(res => {return res.json()})
        .then(function(post){
          console.log(post)
            post.forEach(item => {

                var newProduct = document.createElement('div');
                newProduct.classList.add('product');
                newProduct.innerHTML = 
                `
                    <img src="${item.image}">
                    <div class='info'>
                        <div class="name">${item.title}</div>
                        <div class="price">$${item.price}</div>
                    </div>
                `
                products.appendChild(newProduct)
            })
         });
var searchInput = document.querySelector('input')
console.log(searchInput)
searchInput.addEventListener('input', function(e){
    let txtSearch = searchInput.value.trim().toLowerCase();
    let listproductDom = document.querySelectorAll('.product');
    listproductDom.forEach(item =>{
        if(item.innerText.includes(txtSearch)){
            item.classList.remove('hide');
        }else{
            item.classList.add("hide");
        }
    })
})