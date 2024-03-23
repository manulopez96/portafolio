require("dotenv").config();
const app = require("./app");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

//settings
const correo = process.env.EMAIL;
const pass = process.env.PASS;

//middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//routes
app.post("/send-email", (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: correo,
            pass: pass,
        },
    });

    const mailOptions = {
        from: correo,
        to: "manu_09_cba@live.com.ar",
        subject: "Nuevo contacto de: "+email,
        text: `\tNombre: \n${name}\n\n\tCorreo: \n${email}\n\n\tMensaje: \n${message}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            res.status(500).send("Error al enviar el correo");
        } else {
            console.log("Correo enviado" + info.response);
            res.status(200).send("Correo enviado correctamente");
        }
    });
});

const PORT = process.env.PORT || 3004;

app.listen(PORT, () => {
    console.log("server on port " + PORT);
});
