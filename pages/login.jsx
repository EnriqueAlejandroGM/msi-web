import { useState } from "react";
import { useRouter } from "next/router";
import NavbarMSI from "../components/Navbar";
import FooterMSI from "../components/Footer";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Container, Card, Form, Button, Alert } from "react-bootstrap";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/contacts");
    } catch (err) {
      console.error(err);
      setError("Credenciales incorrectas. Verifique los datos.");
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
                    "radial-gradient(circle at 30% 0, #fed7aa 0, #f97316 60%, #7c2d12 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto",
                }}
              >
                <span className="fw-bold fs-4">MSI</span>
              </div>
            </div>

            <h3 className="text-center mb-1 text-light auth-title">
              Iniciar sesión
            </h3>
            <p className="text-center mb-4 auth-subtitle">
              Acceso al panel administrativo de MSI Web.
            </p>

            {error && <Alert variant="danger">{error}</Alert>}

            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="admin@msi.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Label>Contraseña</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <Button type="submit" className="w-100 btn btn-primary mb-2">
                Entrar
              </Button>
            </Form>
          </Card>
        </Container>
      </div>

      <FooterMSI />
    </>
  );
}
