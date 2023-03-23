var productname = document.getElementById("productName")
var productprice = document.getElementById("productPrice")
var productcatogry = document.getElementById("productCatogry")
var productmessage = document.getElementById("productText")
var Productsearch = document.getElementById("productsearch")
var alertWrong = document.getElementById("alertWrong")
var currentIndex = 0;
var productlist = [];
if (localStorage.getItem('productlist') != null) {
    productlist = JSON.parse(localStorage.getItem('productlist'))
    display()
}
function add() {
   if(validName() == true && validPrice() == true && validmessage() == true && validCatogery() == true){
    var product = {
        name: productname.value,
        price: productprice.value,
        catogry: productcatogry.value,
        message: productmessage.value,
    }
    productlist.push(product)
    localStorage.setItem('productlist', JSON.stringify(productlist))
    display()
    alertWrong.classList.add("d-none")
    clearform()
   }
   else{alertWrong.classList.remove("d-none")}
}
function display() {
    var temp = ''
    for (var i = 0; i < productlist.length; i++) {
        temp += `<tr>
        <td>`+ i + `</td>
        <td>`+ productlist[i].name + `</td>
        <td>`+ productlist[i].price + `</td>
        <td>`+ productlist[i].catogry + `</td>
        <td>`+ productlist[i].message + `</td>
        <td>
        <i class="fa-solid fa-pen-to-square text-warning me-3 fs-5" onclick="update(`+ i + `)"></i>
        <i class="fa-solid fa-trash-can text-danger fs-5" onclick="del(`+ i + `)"></i>
        </td>
        
      </tr>`
    }
    document.getElementById('tableBody').innerHTML = temp
}
function update(x) {
    productname.value = productlist[x].name
    productprice.value = productlist[x].price
    productcatogry.value = productlist[x].catogry
    productmessage.value = productlist[x].message
    document.getElementById("addproduct").style.display = "none"
    document.getElementById("editproduct").style.display = "inline-block"
    currentIndex = x
}
function edit() {
    productlist[currentIndex].name = productname.value
    productlist[currentIndex].price = productprice.value
    productlist[currentIndex].catogry = productcatogry.value
    productlist[currentIndex].message = productmessage.value
    localStorage.setItem('productlist', JSON.stringify(productlist))
    document.getElementById("addproduct").style.display = "inline-block"
    document.getElementById("editproduct").style.display = "none"
    display()
    clearform()
}
function del(index) {
    productlist.splice(index, 1)
    display()
    localStorage.setItem('productlist', JSON.stringify(productlist))
}
function clearform() {
    productname.value = ""
    productprice.value = ""
    productcatogry.value = ""
    productmessage.value = ""
    Productsearch.value = ""
    productname.classList.remove("is-valid")
    productprice.classList.remove("is-valid")
    productmessage.classList.remove("is-valid")
    productcatogry.classList.remove("is-valid")
}
function search() {
    var searchValue = Productsearch.value.toLowerCase()
    var temp = ''
    for (var i = 0; i < productlist.length; i++) {
        if (productlist[i].catogry.toLowerCase().includes(searchValue) == true
            || productlist[i].name.toLowerCase().includes(searchValue) == true) {
            temp += `<tr>
        <td>`+ i + `</td>
        <td>`+ productlist[i].name.toLowerCase().replace(searchValue, '<span class="text-danger fw-bold">' + searchValue + '</span>') + `</td>
        <td>`+ productlist[i].price + `</td>
        <td>`+ productlist[i].catogry.toLowerCase().replace(searchValue, '<span class="text-danger fw-bold">' + searchValue + '</span>') + `</td>
        <td>`+ productlist[i].message + `</td>
        <td>
        <i class="fa-solid fa-pen-to-square text-warning me-3 fs-5" onclick="update(`+ i + `)"></i>
        <i class="fa-solid fa-trash-can text-danger fs-5" onclick="del(`+ i + `)"></i>
        </td>
      </tr>`
        }
    }
    document.getElementById('tableBody').innerHTML = temp
}
productname.addEventListener("blur" , validName )
function validName(){
    var reg =/^[a-zA-Z]{1,10}[0-9]?$/ 
    if(reg.test(productname.value) == true){
        productname.classList.add("is-valid")
        productname.classList.remove("is-invalid")
        return true
    }
    else{
        productname.classList.add("is-invalid")
        productname.classList.remove("is-valid")
        return false
    }
}
productprice.addEventListener("blur" , validPrice )
function validPrice(){
    var reg =/^[1-9][0-9]{1,4}$/ 
    if(reg.test(productprice.value) == true){
        productprice.classList.add("is-valid")
        productprice.classList.remove("is-invalid")
        return true
    }
    else{
        productprice.classList.add("is-invalid")
        productprice.classList.remove("is-valid")
        return false
    }
}
productmessage.addEventListener("blur" , validmessage )
function validmessage(){
    var reg =/^[a-zA-Z]{1,10}[0-9]?$/ 
    if(reg.test(productmessage.value) == true){
        productmessage.classList.add("is-valid")
        productmessage.classList.remove("is-invalid")
        return true
    }
    else{
        productmessage.classList.add("is-invalid")
        productmessage.classList.remove("is-valid")
        return false
    }
}
productcatogry.addEventListener("blur" , validCatogery )
function validCatogery(){
    var reg =/^[a-zA-Z]{1,10}[0-9]?$/ 
    if(reg.test(productcatogry.value) == true){
        productcatogry.classList.add("is-valid")
        productcatogry.classList.remove("is-invalid")
        return true
    }
    else{
        productcatogry.classList.add("is-invalid")
        productcatogry.classList.remove("is-valid")
        return false
    }
}