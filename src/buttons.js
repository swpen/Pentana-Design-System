import "./styles.css";

document.getElementById("app").innerHTML = `
<link href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,900" rel="stylesheet">

<h1>Buttons</h1>
<hr>
<button>Button</button>
<br><br>
<button class="primary">Primary button</button>
<button class="primary" disabled>Button</button>
<button class="primary">Loading...</button>
<button class="primary">&#128465</button>
<button class="primary">&#128465;Delete</button>
<br><br>
<button class="secondary">Secondary button</button>
<button class="secondary" disabled>Button</button>
<button class="secondary">Loading...</button>
<button class="secondary">&#128465</button>
<button class="secondary">&#128465;Delete</button>
<br><br>
<button class="tertiary">Tertiary button</button>
<button class="tertiary" disabled>Button</button>
<button class="tertiary">Loading...</button>
<button class="tertiary">&#128465</button>
<button class="tertiary">&#128465;Delete</button>
<br><br>
<button class="secondary">Split Button</button>
<br><br>
<a href="http://www.pentanasolutions.com/"
   title="Pentana Solutions specialises in the development and supply of automotive software tailored to the needs of dealerships.">Pentana Solutions</a>
`;
