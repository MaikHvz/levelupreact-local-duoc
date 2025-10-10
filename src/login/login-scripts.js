document.addEventListener("DOMContentLoaded", () => {
  // --- LOGIN FORM ---
  const loginForm = document.querySelector("#login form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    let errores = [];

    // Validar email
    if (!email.value.trim()) {
      errores.push("El correo electrónico es obligatorio.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errores.push("El correo electrónico no es válido.");
    }

    // Validar contraseña
    if (!password.value.trim()) {
      errores.push("La contraseña es obligatoria.");
    } else if (password.value.length < 6) {
      errores.push("La contraseña debe tener al menos 6 caracteres.");
    }

    mostrarErrores(loginForm, errores);

    if (errores.length === 0) {
      alert("Inicio de sesión exitoso.");
      loginForm.reset();
    }
  });

 
  const registerForm = document.querySelector("#register form");
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username");
    const email = document.getElementById("register-email");
    const password = document.getElementById("register-password");
    const confirmPassword = document.getElementById("confirm-password");
    const terms = document.getElementById("terms");

    let errores = [];

    // Validar usuario
    if (!username.value.trim()) {
      errores.push("El nombre de usuario es obligatorio.");
    } else if (username.value.length < 3) {
      errores.push("El nombre de usuario debe tener al menos 3 caracteres.");
    }

    // Validar email
    if (!email.value.trim()) {
      errores.push("El correo electrónico es obligatorio.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      errores.push("El correo electrónico no es válido.");
    }

    // Validar password
    if (!password.value.trim()) {
      errores.push("La contraseña es obligatoria.");
    } else if (password.value.length < 6) {
      errores.push("La contraseña debe tener al menos 6 caracteres.");
    }

    // Confirmar password
    if (password.value !== confirmPassword.value) {
      errores.push("Las contraseñas no coinciden.");
    }

    // Términos
    if (!terms.checked) {
      errores.push("Debes aceptar los términos y condiciones.");
    }

    mostrarErrores(registerForm, errores);

    if (errores.length === 0) {
      alert("Registro exitoso.");
      registerForm.reset();
    }
  });

  function mostrarErrores(form, errores) {
    let alertDiv = form.querySelector(".alert");
    if (alertDiv) alertDiv.remove();

    if (errores.length > 0) {
      const div = document.createElement("div");
      div.className = "alert alert-danger mt-2";
      div.innerHTML = errores.join("<br>");
      form.prepend(div);
    }
  }
});
