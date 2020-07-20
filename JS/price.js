let form = document.querySelector('form');
let total = 0;

//adding event listener to listen to a change for any checkbox
form.addEventListener('change', function(i) {
    let input = i.target;
    let price = parseInt( i.target.getAttribute('data-price')); 
    //adding price to total in case a checkbox is checked
    if(input.checked) {
        total += price;
    //subtracting price from totla in case a checkbox is unchecked
    } else {
        total -= price;
    }
    document.getElementById("total").innerHTML= "$" + total.toFixed(2);
    }); 