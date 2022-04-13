function submitForm(form) {
  const name = document.getElementById('name-2').value;
  const email = document.getElementById('email-2').value;
  const message = document.getElementById('field-2').value;
  const doneMsg = document.querySelector('.w-form-done');
  const failMsg = document.querySelector('.w-form-fail');

  const xhr = new XMLHttpRequest();
  xhr.open("POST", "cont.php");

  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.addEventListener("load", (e) => {
    form.reset();
    if (xhr.responseText === 'DONE') {
      doneMsg.style.display = 'block';
      failMsg.style.display = 'none';
    } else {
      doneMsg.style.display = 'none';
      failMsg.style.display = 'block';
    }
    console.log(xhr.responseText);
  });

  xhr.addEventListener("error", (e) => {
    doneMsg.style.display = 'none';
    failMsg.style.display = 'block';
  });

  xhr.send('name=' + name + '&email=' + email + '&message=' + message);

  return false;
}
