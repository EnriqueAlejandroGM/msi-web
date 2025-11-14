import { useState } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Form, Button, Card, Alert } from "react-bootstrap";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [alert, setAlert] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        status: "pendiente",
        createdAt: serverTimestamp(),
      });

      setAlert("Mensaje enviado correctamente.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      setAlert("Error al enviar el mensaje.");
    }
  };

  return (
    <div className="d-flex justify-content-center mt-5">
      <Card style={{ width: "40rem" }} className="p-4 shadow-sm">
        <h3 className="text-primary fw-bold text-center mb-3">Contacto</h3>

        {alert && <Alert variant="info">{alert}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Juan Pérez"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="correo@ejemplo.com"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Mensaje</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              name="message"
              value={form.message}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button type="submit" className="w-100 btn btn-primary">
            Enviar mensaje
          </Button>
        </Form>
      </Card>
    </div>
  );
}
