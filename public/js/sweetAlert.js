// Selecciona el botón
const btn = document.getElementById("alerta-btn");

// Agrega un evento de escucha para el evento "click"
btn.addEventListener("click", function() {
  // Código para mostrar la alerta
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons
    .fire({
      title: "¿Estas seguro de guardar los cambios?",
      text: "",
      icon: "success",
      showCancelButton: true,
      confirmButtonText: "Si, guardar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Se guardaron los cambios correctamente!",
          " ",
          "success"
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          " ",
          "error"
        );
      }
    });
});




// Selecciona el botón
const btnelim = document.getElementById("alerta-2");

// Agrega un evento de escucha para el evento "click"
btnelim.addEventListener("click", function() {
  // Código para mostrar la alerta
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons
    .fire({
      title: "Se eliminó el producto _____ Correctamente!",
      text: "",
      icon: "success",
      confirmButtonText: "Cerrar!",
      reverseButtons: true
  
    });
});



// Selecciona el botón
const btn3 = document.getElementById("alerta-3");

// Agrega un evento de escucha para el evento "click"
btn3.addEventListener("click", function() {
  // Código para mostrar la alerta
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger"
    },
    buttonsStyling: false
  });

  swalWithBootstrapButtons
    .fire({
      title: "¿Estas seguro de actualizar el producto?",
      text: "",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Si, actualizar!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true,
      
    })
    .then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Se guardaron los cambios correctamente!",
          " ",
          "success"
        );
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          "Cancelado",
          " ",
          "error"
        );
      }
    });
});
