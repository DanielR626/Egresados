import { useEffect, useState, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

interface User {
  id: number;
  name: string;
  email: string;
}

const Tabla = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch de datos desde Laravel
  useEffect(() => {
    fetch("/users", { credentials: "include" }) // Asegura que se envían cookies de sesión si es necesario
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
        setLoading(false);
      });
  }, []);

  // Configurar columnas de la tabla
  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        size: 100,
      },
      {
        accessorKey: "name",
        header: "Nombre",
        size: 200,
      },
      {
        accessorKey: "email",
        header: "Email",
        size: 250,
      },
    ],
    []
  );

  // Configurar la tabla
  const table = useMaterialReactTable({
    columns,
    data: users, // Datos obtenidos del backend
    state: { isLoading: loading },
  });

  return <MaterialReactTable table={table} />;
};

export default Tabla;
