var productNameInput = document.getElementById("productNameInput")
var productPriceInput = document.getElementById("productPriceInput")
var productCategoryInput = document.getElementById("productCategoryInput")
var productDescriptionInput = document.getElementById("productDescriptionInput")
var addBtn = document.getElementById(`addBtn`);
var updateBtn = document.getElementById(`updateBtn`);
var searchLeaters = document.getElementById(`searchLeaters`);
var productArray = []

var td1 = document.getElementById(`td1`)

//add product
function addProduct(){
    if(validateProductName()== true){
        var product = {
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCategoryInput.value,
            des:productDescriptionInput.value,
        }
        productArray.push(product);
        displayProduct();
        localStorage.setItem(`products`,JSON.stringify(productArray))
        
        clearProduct();
    }
    else{
        document.getElementById("messageValidation").innerHTML=`Invalid Product Name.....`;
        clearProduct();
    }
}

//condition of local storage
if(localStorage.getItem("products")!=null){
    productArray = JSON.parse(localStorage.getItem("products"))
    displayProduct();
    
}

//display in array
function displayProduct(){
    var tableContainer=''
    for(var i=0;i<productArray.length;i++){
        
        tableContainer+=`<tr>
        <td>${productArray[i].name}</td>
        <td>${productArray[i].price}</td>
        <td>${productArray[i].category}</td>
        <td>${productArray[i].des}</td>
        <td>
            <button  onclick='updateProduct(${i})'  class="btn-outline-success rounded" id="update">Update</button>
            <button onclick='deleteProduct(${i})' class="btn-outline-danger rounded" id="addBtn">Delet</button>
        </td>
        </tr>`
        
    }
    
  document.getElementById("tElements").innerHTML=tableContainer;
  
  document.getElementById("messageValidation").innerHTML="";
  
}




//clear
function clearProduct(){
    productNameInput.value="";
    productPriceInput.value="";
    productCategoryInput.value="";
    productDescriptionInput.value="";
}

// validate product name
function validateProductName(){
    var regular = /^[A-Z][a-z]{3,9}$/;
    if(regular.test(productNameInput.value) == true){
        return true;
    }
    else{
        return false;
    }
}
function validateProductName2(){
    var regular = /^[A-Z][a-z]{3,9}$/;
    if(regular.test(document.getElementById(`inpName`).value) == true){
        return true;
    }
    else{
        return false;
    }
}

//function delete
function deleteProduct(indexP){
    productArray.splice(indexP,1);
    localStorage.setItem("products",JSON.stringify(productArray))
    displayProduct();
}

//Funaction Update
var indexUpdate = 0;

function updateProduct(id){
    indexUpdate = id ;
    
    document.getElementById(`productNameInput`).value = productArray[id].name;
    document.getElementById(`productPriceInput`).value = productArray[id].price;
    document.getElementById(`productCategoryInput`).value = productArray[id].category;
    document.getElementById(`productDescriptionInput`).value = productArray[id].des;
    
    addBtn.classList.add(`d-none`)
    updateBtn.classList.replace(`d-none`,`d-block`)
    saveProduct();
    
    
}
var tableContainerr=''
//save function
function saveProduct(){
    
    
    for(var i=0;i<productArray.length;i++){
        
        if(i==indexUpdate){
            tableContainerr+=`<span id="invalid" class="text-danger"></span>`
            tableContainerr+=`<tr>
            
        <td><input class="text-center" id="inpName" type="text" style="width:4rem" value="${productArray[indexUpdate].name}"></td>
        <td><input class="text-center" id="inPrice" type="text" style="width:4rem" value="${productArray[indexUpdate].price}"></td>
        <td><input class="text-center" id="inCategory" type="text" style="width:4rem" value="${productArray[indexUpdate].category}"></td>
        <td><input class="text-center" id="inDes" type="text" style="width:4rem" value="${productArray[indexUpdate].des}"></td>
        <td>
            <button  onclick='updat00Button()'  class="btn-outline-dark rounded">Save Update</button>
            
        </td>
        </tr>`
        
        }
           else{ tableContainerr+=`<tr>
        <td>${productArray[i].name}</td>
        <td>${productArray[i].price}</td>
        <td>${productArray[i].category}</td>
        <td>${productArray[i].des}</td>
        <td>
            <button  onclick='updateProduct(${i})'  class="btn-outline-success rounded" id="update">Update</button>
            <button onclick='deleteProduct(${i})' class="btn-outline-danger rounded" id="addBtn">Delet</button>
        </td>
        </tr>`
    }
        
        
    }
    

  document.getElementById("tElements").innerHTML=tableContainerr;
  
  document.getElementById("messageValidation").innerHTML="";
      
    
}

//........................................................................
function updat00Button(){
    if(validateProductName2() == true){
        productArray[indexUpdate].name= document.getElementById(`inpName`).value ;
        productArray[indexUpdate].price =document.getElementById(`inPrice`).value;
        productArray[indexUpdate].category =document.getElementById(`inCategory`).value;
        productArray[indexUpdate].des=document.getElementById(`inDes`).value;
         localStorage.setItem('products', JSON.stringify(productArray))
        tableContainerr=[]
        displayProduct();
        clearProduct();
        updateBtn.classList.add(`d-none`);
        addBtn.classList.replace(`d-none` , `d-block`);
        
    }
    else{
        document.getElementById('invalid').innerHTML=`Invalid Product Name.....`;
    }
}
//.........................................................................

// another function for update
function updateButton(){
    if(validateProductName() == true){
        productArray[indexUpdate].name =document.getElementById('productNameInput').value;
        productArray[indexUpdate].price =document.getElementById('productPriceInput').value;
        productArray[indexUpdate].category =document.getElementById('productCategoryInput').value;
        productArray[indexUpdate].des =document.getElementById('productDescriptionInput').value;
        localStorage.setItem('products', JSON.stringify(productArray))
        displayProduct();
        clearProduct();
        updateBtn.classList.add(`d-none`);
        addBtn.classList.replace(`d-none` , `d-block`);
        
    }
    else{
        document.getElementById('messageValidation').innerHTML=`Invalid Product Name.....`;
    }
}

//Function Search
function search(leater){
    
    var tableContainer=''
    for(var i=0;i<productArray.length;i++){
        if(productArray[i].name.toUpperCase().includes(leater.toUpperCase())==true){
            
        tableContainer+=`<tr>
        <td>${productArray[i].name}</td>
        <td>${productArray[i].price}</td>
        <td>${productArray[i].category}</td>
        <td>${productArray[i].des}</td>
        <td><button onclick=' updateProduct(${i})'  class="btn-outline-success rounded" id="addBtn">Update</button>
        
        <button onclick='deleteProduct(${i})' class="btn-outline-danger rounded" id="addBtn">Delet</button></td>
        
        </tr>`
        
        
        }
        
        
    }
  document.getElementById("tElements").innerHTML=tableContainer;
}























