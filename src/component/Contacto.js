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
      {/* <div className="contacto">
        <a href="mailto:d.manu.lopez@gmail.com" rel="noreferrer">
          <div className="contenedor-logo">
            <img alt="logo-linkedin" src="/img/iconos/gmail.png"></img>
          </div>
          <div className="contenedor-p">
            <p>¿Quieres contactarme por correo?</p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/lopez-emanuel/"
          rel="noreferrer"
        >
          <div className="contenedor-logo">
            <img alt="logo-linkedin" src="/img/iconos/linkedin.png"></img>
          </div>
          <div className="contenedor-p">
            <p>¿Quieres ver mi perfil de Linkedin?</p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://github.com/manulopez96"
          rel="noreferrer"
        >
          <div className="contenedor-logo">
            <img alt="logo-linkedin" src="/img/iconos/git.png"></img>
          </div>
          <div className="contenedor-p">
            <p>¿Quieres ver mi perfil de github?</p>
          </div>
        </a>
        <a
          target="_blank"
          href="https://twitter.com/ManuLPZxx"
          rel="noreferrer"
        >
          <div className="contenedor-logo">
            <img alt="logo-linkedin" src="/img/iconos/X.png"></img>
          </div>
          <div className="contenedor-p">
            <p>¿Quieres ver mi perfil de X?</p>
          </div>
        </a>
        <a
          href="https://wa.me/543512809912/?text=Hola!+Estuve+en+tu+sitio+web"
          rel="noreferrer"
          target="_blank"
        >
          <div className="contenedor-logo">
            <img alt="logo-linkedin" src="/img/iconos/whatsapp.png"></img>
          </div>
          <div className="contenedor-p">
            <p>¿Quieres escribirme por whatsapp?</p>
          </div>
        </a>
      </div> */}
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
