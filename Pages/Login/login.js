
export function login(){

    let login = document.createElement("div");
    login.className="div-banner2";


    let span = document.createElement("span");
    span.className="span-banner2";
    span.textContent= "Geeta.";
    login.appendChild(span);




    return login;
}

document.body.appendChild(login());

