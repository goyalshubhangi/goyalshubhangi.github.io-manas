function submitForm(form) {
  const name = document.getElementById('name-2');
  const email = document.getElementById('email-2');
  const message = document.getElementById('field-2');
  const doneMsg = document.querySelector('.w-form-done');
  const failMsg = document.querySelector('.w-form-fail');

  const xhr = new XMLHttpRequest();

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

  xhr.open("POST", "cont.php");
  xhr.send({ name, email, message });

  return false;
}
