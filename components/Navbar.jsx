// components/Navbar.jsx

import Link from "next/link";
import { useAuth } from "./AuthProvider";
import { Navbar as BNavbar, Container, Nav, Button } from "react-bootstrap";

export default function NavbarMSI() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  return (
    <BNavbar
  expand="lg"
  className="msi-navbar navbar-dark"
  fixed="top"
>

      <Container>
        <Link href="/" passHref legacyBehavior>
          <BNavbar.Brand>M.S.I</BNavbar.Brand>
        </Link>
        <BNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BNavbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Inicio general */}
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Inicio</Nav.Link>
            </Link>
            {/* Anclas a secciones del index */}
            <Link href="/#servicios" passHref legacyBehavior>
              <Nav.Link>Servicios</Nav.Link>
            </Link>
            <Link href="/#capacidades" passHref legacyBehavior>
              <Nav.Link>Capacidades</Nav.Link>
            </Link>
            <Link href="/#contacto" passHref legacyBehavior>
              <Nav.Link>Contacto</Nav.Link>
            </Link>
            {/* Página aparte tipo sección extendida */}
            <Link href="/about" passHref legacyBehavior>
              <Nav.Link>Sobre MSI</Nav.Link>
            </Link>
            {user && (
              <Link href="/admin/contacts" passHref legacyBehavior>
                <Nav.Link>Panel</Nav.Link>
              </Link>
            )}
          </Nav>
          <Nav>
            {!user && (
              <>
                <Link href="/login" passHref legacyBehavior>
                  <Nav.Link>Iniciar sesión</Nav.Link>
                </Link>
                <Link href="/register" passHref legacyBehavior>
                  <Nav.Link>Registro</Nav.Link>
                </Link>
              </>
            )}
            {user && (
              <Button
                variant="outline-light"
                size="sm"
                className="ms-2"
                onClick={handleLogout}
              >
                Cerrar sesión
              </Button>
            )}
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}
