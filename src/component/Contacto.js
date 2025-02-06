import React from "react";

export const Contacto = React.forwardRef((props, ref) => {
  // let url = "http://localhost:3020/send-email";
  let url = `${process.env.REACT_APP_URL}/${process.env.REACT_APP_PORT}/send-email`;
  console.log(url);

  const enviarForm = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.nombre.value,
      email: e.target.contacto.value,
      message: `${e.target.asunto.value}\n${e.target.contenido.value}`,
    };
    // console.log(data);
    if (e.target.contenido.value !== "") {
      try {
        await fetch(url, {
          method: "POST",
          body: JSON.stringify(data),
          headers: { "Content-Type": "application/json" },
        });
        alert("Correo enviado correctamente");
      } catch (error) {
        alert("Error al enviar correo");
      }
    } else {
      alert("No olvide agregar contenido ;)");
    }
  };

  return (
    <div ref={ref} className="page contact">
      <h2>Contacto</h2>
      <br></br>

      <div className="formulario">
        <form onSubmit={enviarForm}>
          <h3>Puedes escribirme</h3>
          <input type="text" name="nombre" placeholder="Nombre"></input>
          <input type="email" name="contacto" placeholder="Contacto"></input>
          <input type="text" name="asunto" placeholder="Asunto"></input>
          <textarea
            type="text"
            name="contenido"
            placeholder="Contenido"
          ></textarea>
          <input
            className="enviar"
            type="submit"
            value={"Enviar"}
            placeholder=""
          ></input>
        </form>
      </div>
    </div>
  );
});
