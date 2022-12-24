function makeProductColumn(product={}){
return`<div class="col-md-4 col-sm-6 pd">
<div class="shadow-lg" style="width: 25rem; overflow: hidden;">
<div class="zoom">
    <a href=""><img class="card-img-top w-100" src="${imageUrl}${product.image}" alt=""></a>
</div>
</div>
</div>`
}
function makeProductGrid(title, products= [], length){
    let gridHtml=` <div class="container mt-5">
    <h2>${title}</h2>
    <div class="row"></div>
</div>`
}
const columns = products.map((item)=>{
   if (length){
    return makeProductRow(item)
   }
})
