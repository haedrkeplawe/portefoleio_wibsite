// main
let main_button = document.querySelector("header nav .head i")
let main_ul = document.querySelector("header nav ul")
main_button.onclick = () => {
    if (main_ul.className === "active") {
        main_ul.className = ""
    } else {
        main_ul.className = "active"
    }

}
// imager
let imager_containers = document.querySelectorAll(".imager .container")
let imager_image = document.querySelectorAll(".imager .container .image")
let i = 0
let stop = true

function doun() {
    i++
    imager_image.forEach((image) => {
        if (image.className === "image active") {
            console.log(i);
            stop = false
            image.className = "image hidden"
            image.style.left = "100%"
        } else if (image.className !== "image active" && stop === false) {
            image.className = "image active"
            image.style.left = "0"
            stop = true
        } else if (i === 3) {
            i = 0
            image.className = "image active"
            image.style.left = "0"
        }
    });
}

function up() {
    i++
    imager_image.forEach((image) => {
        if (image.className === "image active") {
            stop = false
            image.className = "image hidden"
            image.style.left = "-100%"
        } else if (image.className !== "image active" && stop === false) {
            image.className = "image active"
            image.style.left = "0"
            stop = true
        } else if (i === 3) {
            i = 0
            image.className = "image active"
            image.style.left = "0"
        }
    });
}

// product-page
let product_top = document.querySelector(".product-page .eclipse .top>div")
let product_doun = document.querySelectorAll(".product-page .eclipse .doun span")
let product_position = 0
let product_position_1 = 0
let product_to = "right"
function left() {
    if (+product_position < 0) {
        product_position += 100
        product_position_1--
        position(product_position)
    }
}
function right() {
    if (-500 < +product_position) {
        product_position -= 100
        product_position_1++
        position(product_position)
    }
}
function position(product_position) {
    product_doun.forEach(ele => {
        ele.className = ""
    })
    product_doun[product_position_1].className = "active"
    product_top.style.left = `${product_position}%`
}
function goto(nump) {
    clearInterval(product_interval)
    product_position = -nump * 100
    product_position_1 = nump
    position(product_position)
}
// position(product_position)
// const product_interval = setInterval(() => {
//     if (product_position_1 < 5 && product_to === "right") {
//         right()
//     }
//     else if (+product_position_1 > 0) {
//         left()
//         product_to = "left"
//     }
//     else {
//         right()
//         product_to = "right"
//     }
//     position(product_position)
// }, 3000)

//

let product_size = document.querySelectorAll(".product-page .info .size .input ul li")
let product_input = document.querySelector(".product-page .info .size .input p")
let product_quantity = document.querySelector(".product-page .info .quantity .input")
let product_quant_i = 0

product_size.forEach(product => {
    product.addEventListener("click", () => {
        product_input.innerHTML = product.innerHTML
    })
});
function add(params) {
    product_quantity.innerHTML = product_quant_i += 1
}
function remove(params) {
    if (product_quant_i > 0) {
        product_quantity.innerHTML = product_quant_i -= 1
    }
}
// shop_sidebar
let input_sidebar = document.querySelectorAll(".shop_sidebar .sidebar .input")
let P_sidebar = document.querySelectorAll(".shop_sidebar .sidebar .input>div p")
let ULP_sidebar = document.querySelectorAll(".shop_sidebar .sidebar .input ul p")

let open_sidebar = "close"
input_sidebar.forEach(input => {
    input.addEventListener("click", () => {
        if (open_sidebar != "open") {
            input.className = "input active"
            open_sidebar = "open"
            console.log(input.children[0].children[1].innerHTML = `<i class="fa-solid fa-angle-up"></i>`);
        } else {
            input.className = "input"
            open_sidebar = "close"
            console.log(input.children[0].children[1].innerHTML = `<i class="fa-solid fa-angle-down"></i>`);
        }

    })
});
ULP_sidebar.forEach((ULP) => {
    ULP.addEventListener("click", () => {
        P_sidebar.forEach((P) => {
            if (P.dataset.id === ULP.dataset.id) {
                P.innerHTML = ULP.innerHTML
            }
        })
    })
})
// dashboard
let dashboard_buttons = document.querySelectorAll(".dashboard .buttons button")
let dashboard_boxs = document.querySelectorAll(".dashboard > div:not(:first-child) ")

dashboard_buttons.forEach(button => {
    button.addEventListener("click", () => {
        dashboard_buttons.forEach(button => {
            button.classList = ""
        });
        button.classList = "active"
        dashboard_boxs.forEach((box) => {
            if (box.dataset.id === button.dataset.id) {
                box.style.display = "flex"
            } else {
                box.style.display = "none"
            }

        })
    })
});