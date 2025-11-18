// pages/about.jsx

import NavbarMSI from "../components/Navbar";
import FooterMSI from "../components/Footer";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";

export default function AboutPage() {
  return (
    <>
      <NavbarMSI />

      <main>
        <Container className="mt-5 mb-5">
          {/* HERO SOBRE MSI + subnav interna */}
          <Row className="justify-content-center mb-4" id="historia">
            <Col lg={10}>
              <Card className="p-4 msi-card shadow-sm">
                <Row className="g-4 align-items-center">
                  <Col md={8}>
                    <h6 className="msi-section-title mb-2">Quiénes somos</h6>
                    <h1 className="mb-3">Maquinados y Servicios Industriales</h1>
                    <p className="text-justify mb-2">
                      Maquinados y Servicios Industriales (MSI) surgirá como un
                      taller especializado en la fabricación de herramentales y
                      componentes para la industria, ubicado en Guaymas, Sonora.
                      La empresa tendrá su origen en el año 2008, a partir de la
                      experiencia acumulada por más de dos décadas de trabajo en
                      maquiladoras y empresas de la región, donde se fortaleció
                      el conocimiento en metales, procesos de maquinado y
                      mantenimiento industrial.
                    </p>
                    <p className="text-justify mb-3">
                      A partir de ese recorrido, MSI enfocará sus servicios en el
                      diseño y fabricación de refacciones, piezas especiales,
                      moldes y mecanismos, ofreciendo soluciones que combinen
                      precisión, tiempos de entrega competitivos y comunicación
                      directa con el cliente.
                    </p>

                    {/* Subnavegación interna tipo single-page */}
                    <div className="msi-subnav">
                      <a href="#misionvision">Misión y visión</a>
                      <a href="#tecnologia">Tecnología</a>
                      <a href="#clientes">Clientes</a>
                      <a href="#ubicacion">Ubicación</a>
                    </div>
                  </Col>
                  <Col md={4}>
                    <img
                      src="/images/msi-machines.jpg"
                      alt="Área de maquinado de MSI"
                      width="1400"
                      height="900"
                      className="img-fluid rounded-4 shadow-sm"
                    />
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          {/* MISIÓN Y VISIÓN */}
          <Row className="g-4 msi-section" id="misionvision">
            <Col md={6}>
              <Card className="h-100 msi-card shadow-sm">
                <Card.Body>
                  <Card.Title>Misión</Card.Title>
                  <Card.Text className="text-justify">
                    La misión de MSI será brindar servicios de maquinado,
                    herramentales y mantenimiento industrial que cumplan con los
                    requisitos técnicos y de calidad de sus clientes, utilizando
                    personal capacitado, equipos adecuados y buenas prácticas de
                    manufactura. Parte importante de la misión será mantener una
                    comunicación constante con cada cliente, con el fin de
                    asegurar que las piezas, refacciones y proyectos desarrollados
                    respondan exactamente a las necesidades de producción.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="h-100 msi-card shadow-sm">
                <Card.Body>
                  <Card.Title>Visión</Card.Title>
                  <Card.Text className="text-justify">
                    La visión será posicionar a MSI como un proveedor confiable
                    de soluciones de maquinado y automatización en la región de
                    Guaymas y el noroeste de México, manteniendo sus equipos y
                    software actualizados, integrando tecnología CAD/CAM y
                    consolidando relaciones de largo plazo con las empresas
                    industriales de la zona. El sitio MSI Web será una extensión
                    de esa visión, funcionando como un canal digital formal para
                    la presentación de capacidades y el seguimiento de solicitudes.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* TECNOLOGÍA Y CAPACIDADES */}
          <Row className="g-4 msi-section" id="tecnologia">
            <Col md={6}>
              <h6 className="msi-section-title">Tecnología CAD / CAM</h6>
              <h3 className="msi-section-heading mb-3">
                Diseño y preparación de piezas para maquinado
              </h3>
              <p className="text-justify mb-3">
                MSI utilizará herramientas de diseño asistido por computadora
                (CAD) para la creación de modelos 2D y 3D de piezas, herramentales
                y dispositivos especiales. A partir de estos modelos se generarán
                trayectorias de corte mediante software CAM, optimizando el
                maquinado en fresadoras y centros de maquinado CNC. Esta
                combinación permitirá reducir tiempos de preparación, mejorar la
                repetibilidad y disminuir el riesgo de errores en producción.
              </p>
              <p className="text-justify mb-0">
                El uso de estas tecnologías facilitará también la comunicación
                con el cliente, ya que se podrán revisar diseños, ajustes y
                cambios antes de pasar a la etapa de fabricación, reduciendo
                retrabajos y costos.
              </p>
            </Col>

            <Col md={6}>
              <h6 className="msi-section-title">Maquinaria y metrología</h6>
              <h3 className="msi-section-heading mb-3">
                Capacidad instalada del taller
              </h3>
              <p className="text-justify mb-3">
                El taller contará con torno, fresadoras CNC y manuales, equipos
                de erosión y rectificado, además de instrumentos de medición
                como comparadores ópticos, vernier de altura, mesas de granito y
                micrómetros. Esta combinación permitirá fabricar y verificar
                piezas con tolerancias ajustadas, manteniendo un control adecuado
                sobre las dimensiones críticas.
              </p>
              <img
                src="/images/msi-measure.jpg"
                alt="Instrumentos de medición en MSI"
                width="1200"
                height="1400"
                className="img-fluid rounded-4 shadow-sm"
              />
            </Col>
          </Row>

          {/* CLIENTES Y GIROS */}
          <Row className="g-4 msi-section" id="clientes">
            <Col md={6}>
              <h6 className="msi-section-title">Automatización</h6>
              <h3 className="msi-section-heading mb-3">
                Desarrollo de equipos y soluciones especiales
              </h3>
              <p className="text-justify mb-3">
                Además del maquinado convencional, MSI podrá desarrollar equipos
                especiales y soluciones de automatización que integren mecánica,
                electrónica y control. Esto incluirá dispositivos con PLC,
                pantallas HMI y elementos de sensórica que permitan monitorear o
                validar procesos dentro de las líneas de producción.
              </p>
              <p className="text-justify mb-0">
                De esta manera, el taller no solo fabricará piezas, sino que
                podrá ofrecer proyectos completos orientados a mejorar la
                productividad, la seguridad y la repetibilidad en operaciones
                críticas.
              </p>
            </Col>

            <Col md={6}>
              <h6 className="msi-section-title">Clientes y sectores</h6>
              <h3 className="msi-section-heading mb-3">
                Industria a la que se dirigirá MSI
              </h3>
              <p className="text-justify mb-3">
                Los servicios de MSI estarán dirigidos principalmente a empresas
                maquiladoras e industriales de la región de Guaymas y sus
                alrededores, que requieran refacciones, herramentales y apoyo
                técnico para mantener sus líneas de producción en operación.
              </p>
              <Card className="msi-card shadow-sm">
                <Card.Body>
                  <Card.Title className="mb-3">
                    Principales tipos de clientes
                  </Card.Title>
                  <ul className="msi-list mb-0">
                    <li>Maquiladoras dedicadas al ensamble de componentes.</li>
                    <li>Empresas con líneas de inyección de plástico.</li>
                    <li>Industrias que requieran mantenimiento de moldes y troqueles.</li>
                    <li>
                      Talleres y compañías que busquen herramentales a la medida.
                    </li>
                    <li>
                      Empresas que necesiten automatizar procesos o implementar
                      estaciones de prueba y verificación.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* UBICACIÓN */}
          <Row className="g-4 msi-section" id="ubicacion">
            <Col md={12}>
              <Card className="msi-card shadow-sm">
                <Card.Body>
                  <Row className="align-items-center">
                    <Col md={8}>
                      <h6 className="msi-section-title">Ubicación</h6>
                      <h3 className="msi-section-heading mb-3">
                        Taller MSI en Guaymas, Sonora
                      </h3>
                      <p className="mb-1">Calzada Agustín García López #476</p>
                      <p className="mb-1">Calle 11 y 12 · Col. Centro</p>
                      <p className="mb-1">Guaymas, Sonora · C.P. 85400</p>
                      <p className="mb-1">Teléfono: 622 22 224 25</p>
                      <p className="mb-0">
                        Correo: msi.guaymas@gmail.com /
                        francisco.moreno@live.com
                      </p>
                    </Col>
                    <Col md={4} className="text-md-end mt-3 mt-md-0">
                      <Badge bg="secondary" className="px-3 py-2">
                        MSI Web centralizará las solicitudes de clientes en un
                        sistema digital con seguimiento desde el panel
                        administrativo.
                      </Badge>
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
