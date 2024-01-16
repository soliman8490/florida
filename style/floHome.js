const toggleBtn = document.querySelector('.toggle_btn');
const toggleBtnIcon = document.querySelector('.toggle_btn i');
const dropDounMenu = document.querySelector('.dropdown_menu');

toggleBtn.onclick = function () {
    dropDounMenu.classList.toggle('open');
}




// appoint ment time

// var appoint_time = `<p style="text-align:center;">you can come in 8:30 pm </p>`;

function Confirm_Appointment() {
    document.querySelector(".smile").innerHTML = "you can come in 8:30 pm"
}


    // cart_dropDown
const appoint = document.querySelector('#appoint');
const cart_dropDown = document.querySelector('.cart_dropDown');


appoint.onclick = function () {
    cart_dropDown.classList.toggle('open');
    document.querySelector(".fa-angle-down").style.rotate="180deg"
}

function buy() {
    document.getElementById("appoint").innerHTML = "8:30 pm"
}


// the caaaaaaaaaaaart
let cart = [];
        let totalPrice = 0;

        function addToCart(productName, productPrice) {
            cart.push({ name: productName, price: productPrice });
            updateCart();
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cartItems');
            const totalElement = document.getElementById('totalPrice');
            let cartHtml = '';

            totalPrice = 0;
            cart.forEach((item, index) => {
                cartHtml += `<li class='productContainer'><span>${item.name}  $${item.price} </span> <button class="btn btn-danger" style=" margin-top: 5px; margin-left:-30px;"    onclick="removeFromCart(${index})">Remove</button></li>`;
                totalPrice += item.price;
            });

            cartItems.innerHTML = cartHtml;
            totalElement.textContent = totalPrice.toFixed(2);
        }





// message 
const message = document.querySelector('#buy');
const message_dropDown = document.querySelector('.message_dropDown');

message.onclick = function () {
    message_dropDown.classList.toggle('open');
}


// message cancel
const cancel = document.querySelector('#cancel');
const cancel_dropDown = document.querySelector('.message_dropDown');

cancel.onclick = function () {
    cancel_dropDown.classList.toggle('open');
}
// checked

var checked = document.querySelector("#reblay_0");
    var check = `<div class="print_check"> <img style="margin-left:0%; margin-top:-80px;  height: 50px; width: 50px; margin-left:46%; " src="img/check.png" alt=""> <h5  style="text-align: center; "> successfully registered </h5></div>
    
    <table  border="1" style="height:80px; width:80%; text-align:center; margin-left:10%;">
        <thead>
            <th> time to arrive.</th>
            <th>arrive place.</th>
            <th>order</th>
            <th>price</th>
        </thead>
        
        <tbody>
            <td>20:00 minute</td>
            <td>place</td>
            <td>1-2-3-4-5-6</td>
            <td>250 $</td>
        </tbody>    
    </table>    
    <br>
    <input style="margin-left:43%; width:15%;" onclick="close_check()"  class="btn btn-primary" id="print" value="back">`;

    function go_check(){
        checked.innerHTML = ( check )
    }

// print

function close_check(){
    message_dropDown.classList.toggle('open');
}




