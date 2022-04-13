function formcheck(form) {

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", (e) => {
      // done
    });
    xhr.addEventListener("error", (e) => {
      // error
    });

    xhr.open("POST", "cont.php");
    xhr.send();
}
