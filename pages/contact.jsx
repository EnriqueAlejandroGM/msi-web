import { useState } from "react";
import NavbarMSI from "../components/Navbar";
import FooterMSI from "../components/Footer";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

export default function ContactPage() {
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState({ type: "", text: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "", text: "" });

    if (!fullName || !email || !message) {
      setStatus({
        type: "danger",
        text: "Por favor llene al menos nombre, correo y mensaje.",
      });
      return;
    }

    try {
      setLoading(true);

      await addDoc(collection(db, "contacts"), {
        fullName,
        company: company || null,
        email,
        phone: phone || null,
        topic: topic || null,
        message,
        status: "nuevo", // campo de estado para el panel admin
        createdAt: serverTimestamp(),
      });

      setStatus({
        type: "success",
        text: "Su mensaje ha sido enviado correctamente. El taller revisará la solicitud en el panel administrativo.",
      });

      setFullName("");
      setCompany("");
      setEmail("");
      setPhone("");
      setTopic("");
      setMessage("");
    } catch (error) {
      console.error("Error al enviar mensaje de contacto:", error);
      setStatus({
        type: "danger",
        text: "Ocurrió un error al enviar el mensaje. Intente nuevamente más tarde.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavbarMSI />

      <main>
        <Container className="mt-5 mb-5">
          {/* ENCABEZADO + SUBNAV */}
          <Row className="justify-content-center mb-4" id="contacto-inicio">
            <Col lg={10}>
              <Card className="p-4 msi-card shadow-sm">
                <Row className="g-4 align-items-center">
                  <Col md={7}>
                    <h6 className="msi-section-title mb-2">Contacto</h6>
                    <h1 className="mb-3">Ponerse en contacto con MSI</h1>
                    <p className="text-justify mb-3">
                      La página de contacto de MSI Web permitirá que los
                      clientes envíen sus dudas, solicitudes de cotización o
                      requerimientos de servicio directamente al taller. Cada
                      mensaje se almacenará en la base de datos y podrá ser
                      consultado posteriormente desde el panel administrativo,
                      facilitando el seguimiento y la trazabilidad de la
                      comunicación.
                    </p>
                    <p className="text-justify mb-0">
                      El objetivo es reemplazar los mensajes dispersos en
                      llamadas, notas o correos individuales por un canal
                      digital único, ordenado y accesible para el personal que
                      atienda las solicitudes.
                    </p>

                    <div className="msi-subnav mt-3">
                      <a href="#contacto-datos">Datos del taller</a>
                      <a href="#contacto-formulario">Formulario</a>
                    </div>
                  </Col>
                  <Col md={5}>
                    <img
                      src="/images/msi-contact.jpg"
                      alt="Área de atención y contacto en MSI"
                      width="1400"
                      height="900"
                      className="img-fluid rounded-4 shadow-sm"
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          {/* DATOS DEL TALLER */}
          <Row
            className="msi-section justify-content-center"
            id="contacto-datos"
          >
            <Col lg={10}>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="msi-card shadow-sm h-100">
                    <Card.Body>
                      <Card.Title>Datos generales</Card.Title>
                      <p className="mb-1">Calzada Agustín García López #476</p>
                      <p className="mb-1">Calle 11 y 12 · Col. Centro</p>
                      <p className="mb-1">Guaymas, Sonora · C.P. 85400</p>
                      <p className="mb-1">Teléfono: 622 22 224 25</p>
                      <p className="mb-3">
                        Correo: msi.guaymas@gmail.com /
                        francisco.moreno@live.com
                      </p>
                      <p className="text-justify mb-0">
                        Estos datos se muestran de forma clara para que el
                        cliente pueda identificar el domicilio del taller y los
                        medios tradicionales de contacto. MSI Web complementará
                        estos canales con el formulario digital integrado a la
                        base de datos.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="msi-card shadow-sm h-100">
                    <Card.Body>
                      <Card.Title>Uso del formulario</Card.Title>
                      <p className="text-justify mb-2">
                        Al enviar un mensaje mediante esta página, el sistema
                        registrará la solicitud con la información básica del
                        cliente: nombre, empresa (si aplica), correo,
                        teléfono, asunto y detalle del mensaje. Con ello, el
                        personal podrá priorizar las solicitudes y darles
                        seguimiento desde el panel administrativo.
                      </p>
                      <p className="text-justify mb-0">
                        Este mecanismo se documentará en el proyecto como parte
                        del flujo de captura, almacenamiento y consulta de
                        información en MSI Web.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          {/* FORMULARIO DE CONTACTO */}
          <Row
            className="msi-section justify-content-center"
            id="contacto-formulario"
          >
            <Col lg={10}>
              <Card className="msi-card shadow-sm">
                <Card.Body>
                  <Row className="g-4">
                    <Col md={6}>
                      <h6 className="msi-section-title">Formulario</h6>
                      <h2 className="msi-section-heading mb-3">
                        Enviar un mensaje a MSI
                      </h2>
                      <p className="text-justify mb-3">
                        El siguiente formulario permitirá registrar la
                        información necesaria para que el taller evalúe la
                        solicitud. En el panel administrativo se visualizarán
                        los mensajes con su fecha de captura y estado de
                        atención.
                      </p>

                      {status.text && (
                        <Alert variant={status.type}>{status.text}</Alert>
                      )}

                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="fullName">
                          <Form.Label>Nombre completo *</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Nombre y apellidos"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="company">
                          <Form.Label>Empresa (opcional)</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Nombre de la empresa"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="email">
                          <Form.Label>Correo electrónico *</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="cliente@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="phone">
                          <Form.Label>Teléfono (opcional)</Form.Label>
                          <Form.Control
                            type="tel"
                            placeholder="Número de contacto"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="topic">
                          <Form.Label>Asunto / tipo de servicio</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ej. Fabricación de refacción, mantenimiento, cotización..."
                            value={topic}
                            onChange={(e) => setTopic(e.target.value)}
                          />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="message">
                          <Form.Label>Mensaje *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={4}
                            placeholder="Describa brevemente la pieza, servicio o duda que desea consultar."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          />
                        </Form.Group>

                        <Button
                          type="submit"
                          variant="primary"
                          disabled={loading}
                        >
                          {loading
                            ? "Enviando mensaje..."
                            : "Enviar mensaje a MSI"}
                        </Button>
                      </Form>
                    </Col>

                    <Col md={6}>
                      <h6 className="msi-section-title">Resumen funcional</h6>
                      <h3 className="msi-section-heading mb-3">
                        Integración con la base de datos
                      </h3>
                      <p className="text-justify mb-3">
                        Cada vez que un usuario envíe este formulario, MSI Web
                        registrará el mensaje en la colección <code>contacts</code>{" "}
                        de la base de datos. El registro incluirá la fecha y
                        hora de creación, así como un estado inicial marcado
                        como <code>&quot;nuevo&quot;</code>. Esta información se utilizará
                        en el panel administrativo para clasificar y dar
                        seguimiento a las solicitudes.
                      </p>
                      <p className="text-justify mb-3">
                        Desde el punto de vista de documentación, esta página
                        representará el punto de entrada del flujo de
                        comunicación: captura de datos, envío al backend
                        (Firebase) y posterior visualización en el módulo
                        administrativo desarrollado en el proyecto.
                      </p>
                      <p className="text-justify mb-0">
                        La interfaz mantiene el mismo estilo visual que el
                        resto del sitio, de modo que el usuario perciba una
                        experiencia consistente, profesional y alineada con la
                        identidad del taller.
                      </p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>

      <FooterMSI />
    </>
  );
}
