// Smooth scrolling effect for navigation
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Highlight active link while scrolling
window.addEventListener('scroll', () => {
  let fromTop = window.scrollY + 80;
  document.querySelectorAll('nav a').forEach(link => {
    let section = document.querySelector(link.getAttribute('href'));
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.style.color = "#ffd700"; // gold for active
    } else {
      link.style.color = "white"; // default
    }
  });
});

// Example: Simple popup when user reaches contact section
const contactSection = document.getElementById("contact");
window.addEventListener("scroll", () => {
     if (window.scrollY + window.innerHeight >= contactSection.offsetTop + 50) {
    console.log("User reached Contact Section!");
  }
});

var cart=[];
var total=0;

function addToCart(dish,price) {
    cart.push({dish: dish, price: price});
    total +=price;
    displayCart();
}

function displayCart() {
      var cartDiv = document.getElementById('cart');
      cartDiv.innerHTML = '';

      if (cart.length === 0) {
        cartDiv.innerHTML = '<p>No items in the cart</p>';
        document.getElementById('total').textContent = '0';
        return;
      }

      var ul = document.createElement('ul');
      for (var i = 0; i < cart.length; i++) {
        var li = document.createElement('li');
        li.textContent = cart[i].dish + ' - ₹' + cart[i].price;
        ul.appendChild(li);
      }
      cartDiv.appendChild(ul);
      document.getElementById('total').textContent = total;
    }

    document.addEventListener('DOMContentLoaded', displayCart);
  