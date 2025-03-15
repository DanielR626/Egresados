import { useEffect, useState, useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { IconButton, Tooltip, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Box } from "@mui/material";
import { Edit as EditIcon, Delete as DeleteIcon, Add as AddIcon } from "@mui/icons-material";

interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}

interface PaginatedResponse {
  data: User[];
  current_page: number;
  last_page: number;
  per_page: number;
  total: number;
}

const TableUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [isCreating, setIsCreating] = useState(false);
  
  // Token CSRF para peticiones
  const getCsrfToken = () => {
    return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
  };

  // Fetch de datos desde Laravel
  const fetchUsers = () => {
    setLoading(true);
    fetch("/api/users", { credentials: "include" })
      .then((response) => response.json())
      .then((data: PaginatedResponse) => {
        setUsers(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener usuarios:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Funciones para manejar acciones CRUD
  const handleOpenAddDialog = () => {
    setFormData({ name: "", email: "" });
    setIsCreating(true);
    setOpenDialog(true);
  };

  const handleOpenEditDialog = (user: User) => {
    setFormData({ name: user.name, email: user.email });
    setCurrentUser(user);
    setIsCreating(false);
    setOpenDialog(true);
  };

  const handleOpenDeleteDialog = (user: User) => {
    setCurrentUser(user);
    setDeleteDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setDeleteDialog(false);
    setCurrentUser(null);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddUser = () => {
    setLoading(true);
    fetch("/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": getCsrfToken(),
      },
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al crear usuario");
        }
        return response.json();
      })
      .then(() => {
        handleCloseDialog();
        fetchUsers();
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const handleUpdateUser = () => {
    if (!currentUser) return;
    
    setLoading(true);
    fetch(`/api/users/${currentUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": getCsrfToken(),
      },
      body: JSON.stringify(formData),
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al actualizar usuario");
        }
        return response.json();
      })
      .then(() => {
        handleCloseDialog();
        fetchUsers();
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

  const handleDeleteUser = () => {
    if (!currentUser) return;
    
    setLoading(true);
    fetch(`/api/users/${currentUser.id}`, {
      method: "DELETE",
      headers: {
        "X-CSRF-TOKEN": getCsrfToken(),
      },
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al eliminar usuario");
        }
        return response.json();
      })
      .then(() => {
        handleCloseDialog();
        fetchUsers();
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  };

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
      {
        accessorKey: "created_at",
        header: "Fecha de creación",
        size: 200,
        Cell: ({ row }) => {
          const date = new Date(row.original.created_at);
          return date.toLocaleDateString();
        },
      },
      {
        id: "actions",
        header: "Acciones",
        size: 150,
        Cell: ({ row }) => (
          <Box sx={{ display: "flex", gap: "8px" }}>
            <Tooltip title="Editar">
              <IconButton onClick={() => handleOpenEditDialog(row.original)}>
                <EditIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Eliminar">
              <IconButton color="error" onClick={() => handleOpenDeleteDialog(row.original)}>
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        ),
      },
    ],
    []
  );

  // Configurar la tabla
  const table = useMaterialReactTable({
    columns,
    data: users,
    state: { isLoading: loading },
    enablePagination: true,
    paginationDisplayMode: 'pages',
    initialState: {
      pagination: {
        pageSize: 10,
        pageIndex: 0,
      },
    },
    renderTopToolbarCustomActions: () => (
      <Button
        color="primary"
        onClick={handleOpenAddDialog}
        variant="contained"
        startIcon={<AddIcon />}
      >
        Agregar Usuario
      </Button>
    ),
  });

  return (
    <>
      <MaterialReactTable table={table} />
      
      {/* Diálogo para Agregar/Editar Usuario */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>{isCreating ? "Crear Nuevo Usuario" : "Editar Usuario"}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Nombre"
            type="text"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
            value={formData.email}
            onChange={handleInputChange}
          />
          {isCreating && (
            <TextField
              margin="dense"
              name="password"
              label="Contraseña"
              type="password"
              fullWidth
              variant="outlined"
              onChange={handleInputChange}
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={isCreating ? handleAddUser : handleUpdateUser} variant="contained" color="primary">
            {isCreating ? "Crear" : "Actualizar"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Diálogo de confirmación para eliminar */}
      <Dialog open={deleteDialog} onClose={handleCloseDialog}>
        <DialogTitle>Confirmar Eliminación</DialogTitle>
        <DialogContent>
          <DialogContentText>
            ¿Estás seguro de que deseas eliminar a {currentUser?.name}? Esta acción no se puede deshacer.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancelar</Button>
          <Button onClick={handleDeleteUser} color="error" variant="contained">
            Eliminar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default TableUsers;