import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Form</h1>
<hr>
<form action="/my-handling-form-page" method="post">
<fieldset>
    <legend>Form section heading</legend>
  <div>
    <label for="name">Name</label>
    <input type="text" id="name" name="user_name">
  </div>
  <div>
    <label for="mail">E-mail<abbr title="required">*</abbr></label>
    <input type="email" id="mail" name="user_mail" required>
  </div>
  <div>
    <label for="msg">Message</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>  
</fieldset>
<fieldset>
  <legend>Choose your interests</legend>
  <div>
    <input type="checkbox" id="coding" name="interest" value="coding" checked>
    <label for="coding">Coding</label>
  </div>
  <div>
    <input type="checkbox" id="music" name="interest" value="music">
    <label for="music">Music</label>
  </div>
</fieldset>
</form>
`;
