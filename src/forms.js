import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Form</h1>
<hr>
<form action="/my-handling-form-page" method="post">
<fieldset>
    <legend>Fruit juice size</legend>
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
</form>
<form>
<fieldset>
    <legend>Fruit juice size</legend>
    <div class="form-group">
        <label for="short-text-field">Short text field</label>
        <input id="short-text-field" class="form-control" name="name" type="text" value="">
    </div>
    <div class="form-group">
        <label for="short-text-field">Short text field</label>
        <input id="short-text-field" class="form-control" name="name" type="text" value="">
    </div>
    <div class="form-group">
        <label for="short-text-field">Short text field</label>
        <input id="short-text-field" class="form-control" name="name" type="text" value="">
    </div>
    </fieldset>
</form>
`;
