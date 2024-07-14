window.addEventListener('scroll', function() {
    var nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    } else {
        nav.style.backgroundColor = '#333';
    }
});

var menuItems = document.querySelectorAll('nav ul li a');

menuItems.forEach(function(item) {
    item.addEventListener('mouseover', function() {
        item.style.fontFamily = 'Georgia, serif'; 
    });
    item.addEventListener('mouseout', function() {
        item.style.fontFamily = ''; 
    });
});