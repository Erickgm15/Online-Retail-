export function banner3() {
    let login = document.createElement("div");
    login.className = "div-banner3";

    let span = document.createElement("span");
    span.className = "span-banner3";
    span.textContent = "Welcome Back !";
    login.appendChild(span);

    let p = document.createElement("p");
    p.className = "p-banner3";
    p.textContent = "Yay! You're back! Thanks for shopping with us. We have exciting deals and promotions going on, grab your pick now!";
    login.appendChild(p);

    let p1 = document.createElement("p");
    p1.className = "p1-banner3";
    p1.textContent = "LOG IN  ";
    login.appendChild(p1);

    return login; 
}
