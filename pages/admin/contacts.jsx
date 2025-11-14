import { useEffect, useState } from "react";
import { db } from "../../services/firebase";
import { collection, onSnapshot, updateDoc, doc } from "firebase/firestore";
import ProtectedRoute from "../../components/ProtectedRoute";
import { Table, Button, Badge, Card } from "react-bootstrap";

export default function AdminContacts() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, "messages"), (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    return unsub;
  }, []);

  const cambiarEstado = async (id, nuevoEstado) => {
    await updateDoc(doc(db, "messages", id), { status: nuevoEstado });
  };

  return (
    <ProtectedRoute>
      <div className="container mt-4">
        <Card className="p-4 shadow-sm">
          <h2 className="text-primary fw-bold mb-4">Mensajes recibidos</h2>

          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Mensaje</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>

            <tbody>
              {messages.map((m) => (
                <tr key={m.id}>
                  <td>{m.name}</td>
                  <td>{m.email}</td>
                  <td>{m.message}</td>
                  <td>
                    <Badge bg={m.status === "pendiente" ? "danger" : "success"}>
                      {m.status}
                    </Badge>
                  </td>
                  <td>
                    {m.status === "pendiente" ? (
                      <Button
                        size="sm"
                        variant="success"
                        onClick={() => cambiarEstado(m.id, "atendido")}
                      >
                        Marcar atendido
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        variant="warning"
                        onClick={() => cambiarEstado(m.id, "pendiente")}
                      >
                        Reabrir
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card>
      </div>
    </ProtectedRoute>
  );
}
