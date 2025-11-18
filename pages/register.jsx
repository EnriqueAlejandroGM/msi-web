// pages/register.jsx

import { useState } from "react";
import NavbarMSI from "../components/Navbar";
import FooterMSI from "../components/Footer";
import { auth } from "../services/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setMessage("Usuario registrado exitosamente.");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setMessage("Error al registrar usuario. Verifique los datos.");
    }
  };

  return (
    <>
      <NavbarMSI />

      <div className="auth-page">
        <Container
          style={{
            maxWidth: "420px",
          }}
        >
          <Card className="p-4 auth-card">
            <div className="text-center mb-3">
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: "999px",
                  background:
                    "radial-gradient(circle at 30% 0, #bbf7d0 0, #22c55e 60%, #14532d 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <span className="fw-bold fs-4">+</span>
              </div>
            </div>

            <h3 className="text-center mb-1 text-light auth-title">
              Crear usuario
            </h3>
            <p className="text-center mb-4 auth-subtitle">
              Registrar un usuario para acceder al panel de MSI Web.
            </p>

            {message && <Alert variant="info">{message}</Alert>}

            <Form onSubmit={handleRegister}>
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="usuario@msi.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Mínimo 6 caracteres"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="w-100 btn btn-success mb-2">
                Registrar
              </Button>
            </Form>
          </Card>
        </Container>
      </div>

      <FooterMSI />
    </>
  );
}
