import NavbarMSI from "../components/Navbar";
import FooterMSI from "../components/Footer";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <NavbarMSI />

      <main>
        <Container className="mt-5">
          <Row className="justify-content-center" id="inicio">
            <Col lg={10}>
              <section className="msi-hero">
                <Row className="g-4">
                  <Col lg={7}>
                    <span className="msi-hero-badge">
                      Taller de maquinado · Guaymas, Sonora
                    </span>
                    <h1 className="mt-3 mb-3 fw-bold msi-hero-title">
                      Maquinados y Servicios{" "}
                      <span className="msi-hero-highlight">Industriales</span>
                    </h1>
                    <p className="text-justify mb-3">
                      MSI será un taller con origen en 2008 y más de veinte
                      años de experiencia acumulada en herramentales y procesos
                      de maquinado. El sitio MSI Web funcionará como un canal
                      digital para mostrar las capacidades del taller y recibir
                      solicitudes de trabajo de manera ordenada.
                    </p>
                    <p className="text-justify mb-4">
                      El enfoque principal será el diseño y fabricación de
                      refacciones y componentes en distintos tipos de metales y
                      plásticos, la reparación de moldes de inyección y el
                      desarrollo de maquinaria automatizada para la industria.
                    </p>

                    {/* Subnavegación interna tipo single-page */}
                    <div className="msi-subnav">
                      <a href="#servicios">Servicios</a>
                      <a href="#capacidades">Capacidades</a>
                      <a href="#contacto">Contacto</a>
                    </div>

                    <div className="d-flex flex-wrap gap-2 mt-3">
                      <Link href="/contact" passHref legacyBehavior>
                        <Button variant="primary">
                          Enviar mensaje de contacto
                        </Button>
                      </Link>
                      <Link href="/about" passHref legacyBehavior>
                        <Button variant="outline-light">
                          Ver más sobre MSI
                        </Button>
                      </Link>
                    </div>
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>

          {/* TARJETAS RESUMEN (BLOQUE AMPLIO, SIN SENTIRSE ENCIMA DEL HERO) */}
          <Row className="g-4 mt-4">
            <Col md={4}>
              <Card className="h-100 shadow-sm msi-card">
                <Card.Body>
                  <Card.Title>Enfoque de MSI</Card.Title>
                  <Card.Text className="text-justify">
                    El taller se centrará en piezas maquinadas de precisión,
                    refacciones industriales y herramentales, apoyándose en
                    software CAD/CAM y maquinaria de torno, fresado, erosión y
                    rectificado.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm msi-card">
                <Card.Body>
                  <Card.Title>Misión</Card.Title>
                  <Card.Text className="text-justify">
                    Satisfacer las necesidades y expectativas de los clientes
                    mediante servicios de mantenimiento y fabricación de piezas
                    de precisión, con calidad en materiales, mano de obra y
                    atención técnica.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={4}>
              <Card className="h-100 shadow-sm msi-card">
                <Card.Body>
                  <Card.Title>Visión</Card.Title>
                  <Card.Text className="text-justify">
                    Posicionar a MSI como un referente regional en maquinados,
                    automatización y servicios industriales, integrando
                    tecnología moderna y una relación cercana con cada cliente.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* SECCIÓN SERVICIOS (BLOQUE GRANDE, VERTICAL) */}
          <Row className="msi-section justify-content-center" id="servicios">
            <Col lg={10}>
              <section>
                <Row className="g-4 align-items-center">
                  <Col md={6}>
                    <h6 className="msi-section-title">Servicios principales</h6>
                    <h2 className="msi-section-heading mb-3">
                      Diseño, maquinado y automatización
                    </h2>
                    <p className="text-justify mb-3">
                      MSI ofrecerá servicios que cubran desde la etapa de diseño
                      hasta la entrega de piezas terminadas, pasando por el
                      maquinado, verificación dimensional y, cuando sea
                      necesario, la integración en equipos especiales.
                    </p>
                    <ul className="msi-list">
                      <li>Diseño CAD 3D de componentes y herramentales.</li>
                      <li>Programación CAM para fresado en 2D y 3D.</li>
                      <li>Maquinado en torno, fresadora CNC y manual.</li>
                      <li>
                        Reparación y mantenimiento de moldes de inyección y
                        equipos especiales.
                      </li>
                      <li>
                        Desarrollo de soluciones de automatización con PLC y HMI.
                      </li>
                    </ul>
                  </Col>
                  <Col md={6}>
                    <img
                      src="/images/msi-machines.jpg"
                      alt="Maquinaria de taller MSI"
                      width="1400"
                      height="900"
                      className="img-fluid rounded-4 shadow-sm"
                    />
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>

          {/* SECCIÓN CAPACIDADES (OTRO BLOQUE GRANDE, VERTICAL) */}
          <Row className="msi-section justify-content-center" id="capacidades">
            <Col lg={10}>
              <section>
                <Row className="g-4 align-items-center">
                  <Col md={6}>
                    <img
                      src="/images/msi-measure.jpg"
                      alt="Instrumentos de medición MSI"
                      width="1200"
                      height="1400"
                      className="img-fluid rounded-4 shadow-sm"
                    />
                  </Col>
                  <Col md={6}>
                    <h6 className="msi-section-title">Capacidades</h6>
                    <h2 className="msi-section-heading mb-3">
                      Maquinaria y medición
                    </h2>
                    <p className="text-justify mb-3">
                      La capacidad instalada de MSI permitirá fabricar piezas
                      con tolerancias ajustadas y verificar cada etapa del
                      proceso mediante instrumentos de medición adecuados.
                    </p>
                    <ul className="msi-list">
                      <li>Torno y fresadoras CNC y manuales.</li>
                      <li>
                        Equipos de erosión por penetración y corte por hilo
                        (Wire EDM).
                      </li>
                      <li>
                        Rectificadoras para acabados finos y tolerancias
                        cerradas.
                      </li>
                      <li>
                        Instrumentos de medición: comparador óptico, durómetro,
                        mesas de granito, vernier de altura y micrómetros.
                      </li>
                    </ul>
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>

          {/* SECCIÓN CONTACTO (CIERRE DE LA LANDING) */}
          <Row className="msi-section justify-content-center" id="contacto">
            <Col lg={10}>
              <section>
                <Row className="g-4">
                  <Col md={6}>
                    <h6 className="msi-section-title">Ubicación</h6>
                    <h2 className="msi-section-heading mb-3">
                      Taller MSI en Guaymas, Sonora
                    </h2>
                    <p className="mb-1">Calzada Agustín García López #476</p>
                    <p className="mb-1">Calle 11 y 12 · Col. Centro</p>
                    <p className="mb-1">Guaymas, Sonora · C.P. 85400</p>
                    <p className="mb-1">Teléfono: 622 22 224 25</p>
                    <p className="mb-0">
                      Correo: msi.guaymas@gmail.com /
                      francisco.moreno@live.com
                    </p>
                  </Col>
                  <Col md={6}>
                    <h6 className="msi-section-title">Contacto en línea</h6>
                    <h2 className="msi-section-heading mb-3">
                      Enviar una solicitud a MSI
                    </h2>
                    <p className="text-justify mb-3">
                      Desde el módulo de contacto, los clientes podrán registrar
                      sus dudas, proyectos o solicitudes de cotización. Cada
                      mensaje se guardará en la base de datos de MSI Web y podrá
                      ser atendido desde el panel administrativo.
                    </p>
                    <Link href="/contact" passHref legacyBehavior>
                      <Button variant="primary">
                        Ir al formulario de contacto
                      </Button>
                    </Link>
                  </Col>
                </Row>
              </section>
            </Col>
          </Row>
        </Container>
      </main>

      <FooterMSI />
    </>
  );
}
