const globalVariable = "Welcome";

function outer() {
  const course = "Holberton";

  alert(globalVariable);

  function inner() {
    const exclamation = "!";

    alert(globalVariable + " " + course);

    function inception() {
      alert(globalVariable + " " + course + " " + exclamation);
    }

    inception();
  }

  inner();
}

outer();
