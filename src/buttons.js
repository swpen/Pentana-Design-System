import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Buttons</h1>
<hr>
<button>Button</button>
<br><br>
<button class="primary">Button</button>
<button class="primary" disabled>Button</button>
<button class="primary">Loading...</button>
<button class="primary">&#128465</button>
<button class="primary">&#128465;Delete</button>
<br><br>
<button class="secondary">Button</button>
<button class="secondary" disabled>Button</button>
<button class="secondary">Loading...</button>
<button class="secondary">&#128465</button>
<button class="secondary">&#128465;Delete</button>
<br><br>
<button class="secondary">Split Button</button>
`;
