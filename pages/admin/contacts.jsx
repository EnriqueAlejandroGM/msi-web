// pages/admin/contacts.jsx

import { useEffect, useState, useMemo } from "react";
import NavbarMSI from "../../components/Navbar";
import FooterMSI from "../../components/Footer";
import ProtectedRoute from "../../components/ProtectedRoute";
import { db } from "../../services/firebase";
import {
  collection,
  onSnapshot,
  query,
  orderBy,
  updateDoc,
  doc,
} from "firebase/firestore";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Button,
  Spinner,
  Form,
} from "react-bootstrap";

function AdminContactsContent() {
  const [contacts, setContacts] = useState([]);
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [filterStatus, setFilterStatus] = useState("todos");
  const [loading, setLoading] = useState(true);
  const [updatingStatus, setUpdatingStatus] = useState(false);
  const [error, setError] = useState("");

  // Carga en tiempo real de la colección "contacts"
  useEffect(() => {
    const q = query(
      collection(db, "contacts"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const data = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setContacts(data);
        setLoading(false);
        setError("");
        if (!selectedContactId && data.length > 0) {
          setSelectedContactId(data[0].id);
        }
      },
      (err) => {
        console.error("Error al obtener contactos:", err);
        setError("Ocurrió un problema al cargar los mensajes de contacto.");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [selectedContactId]);

  // Contacto seleccionado
  const selectedContact = useMemo(
    () => contacts.find((c) => c.id === selectedContactId) || null,
    [contacts, selectedContactId]
  );

  // Aplicar filtro por estado
  const filteredContacts = useMemo(() => {
    if (filterStatus === "todos") return contacts;
    return contacts.filter((c) => (c.status || "nuevo") === filterStatus);
  }, [contacts, filterStatus]);

  // Formateo de fecha
  const formatDate = (timestamp) => {
    if (!timestamp) return "Sin fecha";
    const date =
      typeof timestamp.toDate === "function"
        ? timestamp.toDate()
        : new Date(timestamp);
    return date.toLocaleString("es-MX", {
      dateStyle: "short",
      timeStyle: "short",
    });
  };

  // Badge según estado
  const getStatusBadge = (statusRaw) => {
    const status = statusRaw || "nuevo";
    if (status === "en_proceso") {
      return <Badge bg="warning">En proceso</Badge>;
    }
    if (status === "cerrado") {
      return <Badge bg="success">Cerrado</Badge>;
    }
    return <Badge bg="secondary">Nuevo</Badge>;
  };

  // Cambiar estado del mensaje
  const handleChangeStatus = async (newStatus) => {
    if (!selectedContact) return;
    try {
      setUpdatingStatus(true);
      const ref = doc(db, "contacts", selectedContact.id);
      await updateDoc(ref, { status: newStatus });
      setUpdatingStatus(false);
    } catch (err) {
      console.error("Error al actualizar estado:", err);
      setUpdatingStatus(false);
    }
  };

  return (
    <>
      <NavbarMSI />

      <main>
        <Container className="mt-5 mb-5">
          <Row className="justify-content-center mb-4">
            <Col lg={11}>
              <Card className="msi-card shadow-sm p-3">
                <Row className="align-items-center">
                  <Col md={8}>
                    <h6 className="msi-section-title mb-2">
                      Panel administrativo
                    </h6>
                    <h1 className="mb-2">Mensajes de contacto</h1>
                    <p className="mb-0 text-justify">
                      Este panel permitirá revisar, filtrar y actualizar el
                      estado de los mensajes enviados desde la página de
                      contacto de MSI Web. Cada registro corresponderá a una
                      solicitud de información, servicio o cotización enviada
                      por un cliente.
                    </p>
                  </Col>
                  <Col
                    md={4}
                    className="mt-3 mt-md-0 d-flex justify-content-md-end justify-content-start"
                  >
                    <div>
                      <div className="small text-muted">Resumen</div>
                      <div className="fw-semibold">
                        Total: {contacts.length} mensajes
                      </div>
                      <div className="small">
                        Nuevos:{" "}
                        {
                          contacts.filter(
                            (c) => (c.status || "nuevo") === "nuevo"
                          ).length
                        }{" "}
                        · En proceso:{" "}
                        {
                          contacts.filter(
                            (c) => c.status === "en_proceso"
                          ).length
                        }{" "}
                        · Cerrados:{" "}
                        {
                          contacts.filter((c) => c.status === "cerrado")
                            .length
                        }
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col lg={11}>
              <Row className="g-4">
                {/* Lista de contactos */}
                <Col md={5}>
                  <Card className="msi-card shadow-sm h-100">
                    <Card.Body
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                      }}
                    >
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">Bandeja de mensajes</h5>
                        <Form.Select
                          size="sm"
                          style={{ width: "auto" }}
                          value={filterStatus}
                          onChange={(e) =>
                            setFilterStatus(e.target.value)
                          }
                        >
                          <option value="todos">Todos</option>
                          <option value="nuevo">Nuevos</option>
                          <option value="en_proceso">En proceso</option>
                          <option value="cerrado">Cerrados</option>
                        </Form.Select>
                      </div>

                      {loading && (
                        <div className="d-flex justify-content-center align-items-center flex-grow-1">
                          <Spinner animation="border" size="sm" className="me-2" />
                          <span>Cargando mensajes...</span>
                        </div>
                      )}

                      {error && !loading && (
                        <div className="text-danger small">
                          {error}
                        </div>
                      )}

                      {!loading && filteredContacts.length === 0 && (
                        <p className="text-muted mb-0">
                          No hay mensajes registrados con el filtro
                          seleccionado.
                        </p>
                      )}

                      {!loading && filteredContacts.length > 0 && (
                        <div
                          style={{
                            maxHeight: "420px",
                            overflowY: "auto",
                            borderTop: "1px solid rgba(148,163,184,.3)",
                            paddingTop: "0.75rem",
                          }}
                        >
                          {filteredContacts.map((c) => (
                            <button
                              key={c.id}
                              type="button"
                              onClick={() =>
                                setSelectedContactId(c.id)
                              }
                              className="w-100 text-start mb-2"
                              style={{
                                borderRadius: "0.75rem",
                                border:
                                  selectedContactId === c.id
                                    ? "1px solid var(--msi-accent-soft)"
                                    : "1px solid rgba(148,163,184,.35)",
                                backgroundColor:
                                  selectedContactId === c.id
                                    ? "rgba(79,140,255,0.14)"
                                    : "rgba(15,23,42,0.9)",
                                padding: "0.6rem 0.75rem",
                                color: "#e5e7eb",
                                cursor: "pointer",
                              }}
                            >
                              <div className="d-flex justify-content-between align-items-center mb-1">
                                <div className="fw-semibold">
                                  {c.fullName || "Sin nombre"}
                                </div>
                                <div className="ms-2">
                                  {getStatusBadge(c.status)}
                                </div>
                              </div>
                              <div className="small text-muted mb-1">
                                {c.email || "Sin correo"} ·{" "}
                                {formatDate(c.createdAt)}
                              </div>
                              {c.topic && (
                                <div className="small">
                                  Asunto: {c.topic}
                                </div>
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>

                {/* Detalle del mensaje */}
                <Col md={7}>
                  <Card className="msi-card shadow-sm h-100">
                    <Card.Body>
                      {!selectedContact && (
                        <p className="text-muted mb-0">
                          Seleccione un mensaje en la bandeja para ver
                          los detalles.
                        </p>
                      )}

                      {selectedContact && (
                        <>
                          <div className="d-flex justify-content-between align-items-start mb-2">
                            <div>
                              <h5 className="mb-0">
                                {selectedContact.fullName ||
                                  "Sin nombre"}
                              </h5>
                              <div className="small text-muted">
                                {selectedContact.email || "Sin correo"}
                                {selectedContact.phone &&
                                  ` · ${selectedContact.phone}`}
                              </div>
                              {selectedContact.company && (
                                <div className="small text-muted">
                                  Empresa: {selectedContact.company}
                                </div>
                              )}
                            </div>
                            <div className="text-end">
                              {getStatusBadge(selectedContact.status)}
                              <div className="small text-muted mt-1">
                                Recibido:{" "}
                                {formatDate(selectedContact.createdAt)}
                              </div>
                            </div>
                          </div>

                          {selectedContact.topic && (
                            <p className="mb-2">
                              <strong>Asunto:</strong>{" "}
                              {selectedContact.topic}
                            </p>
                          )}

                          <hr />

                          <p
                            className="text-justify"
                            style={{ whiteSpace: "pre-line" }}
                          >
                            {selectedContact.message ||
                              "Sin contenido de mensaje."}
                          </p>

                          <hr />

                          <div className="d-flex flex-wrap gap-2 align-items-center">
                            <span className="small text-muted me-2">
                              Actualizar estado:
                            </span>
                            <Button
                              variant="secondary"
                              size="sm"
                              disabled={updatingStatus}
                              onClick={() =>
                                handleChangeStatus("nuevo")
                              }
                            >
                              Marcar como nuevo
                            </Button>
                            <Button
                              variant="warning"
                              size="sm"
                              disabled={updatingStatus}
                              onClick={() =>
                                handleChangeStatus("en_proceso")
                              }
                            >
                              En proceso
                            </Button>
                            <Button
                              variant="success"
                              size="sm"
                              disabled={updatingStatus}
                              onClick={() =>
                                handleChangeStatus("cerrado")
                              }
                            >
                              Cerrado
                            </Button>
                            {updatingStatus && (
                              <Spinner
                                animation="border"
                                size="sm"
                                className="ms-2"
                              />
                            )}
                          </div>

                          <p className="small text-muted mt-3 mb-0">
                            El cambio de estado se reflejará en tiempo real
                            en la lista de mensajes y podrá utilizarse para
                            el seguimiento interno del taller.
                          </p>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>

      <FooterMSI />
    </>
  );
}

export default function AdminContactsPage() {
  return (
    <ProtectedRoute>
      <AdminContactsContent />
    </ProtectedRoute>
  );
}
