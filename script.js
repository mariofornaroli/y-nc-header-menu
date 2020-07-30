window.addEventListener("load", () => {

    const menu = document.getElementById("myMenu");
    const menuElements = document.getElementsByClassName('menu-item');

    menu.addEventListener("click", function (e) {
        // Remove class 'active-item' for all elements
        for (let el of menuElements) {
            el.classList.remove('active-item');
        }

        // Add class 'active-item' to clicked element
        if (e.target && e.target.nodeName == "LI") {
            e.target.classList.add('active-item');
        }
    })

})