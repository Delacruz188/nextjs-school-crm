'use client'

import { useState } from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from "@/components/ui/label"
import { MenuIcon, Users, PlusCircle, Pencil, Trash2, NotebookTabs } from "lucide-react"

type User = {
    id: number;
    name: string;
    email: string;
    role: string;
}

export default function UsersDashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [users, setUsers] = useState<User[]>([
        { id: 1, name: "Juan Pérez", email: "juan@escuela.com", role: "Estudiante" },
        { id: 2, name: "María García", email: "maria@escuela.com", role: "Profesor" },
        { id: 3, name: "Carlos López", email: "carlos@escuela.com", role: "Administrador" },
    ])
    const [isAddUserOpen, setIsAddUserOpen] = useState(false)
    const [newUser, setNewUser] = useState<Omit<User, 'id'>>({ name: '', email: '', role: '' })

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen)

    const handleAddUser = () => {
        setUsers(prevUsers => [...prevUsers, { ...newUser, id: prevUsers.length + 1 }])
        setNewUser({ name: '', email: '', role: '' })
        setIsAddUserOpen(false)
    }

    const handleDeleteUser = (id: number) => {
        setUsers(prevUsers => prevUsers.filter(user => user.id !== id))
    }

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className={`${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
                <nav className="mt-5">
                    <a href={'/users'} className="flex items-center px-6 py-2 text-gray-700 bg-gray-200">
                        <Users className="w-5 h-5 mr-3" />
                        Usuarios
                    </a>
                    {/* Agregar más elementos del menú aquí */}
                </nav>
            </aside>

            {/* Main content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex items-center justify-between px-6 py-4 bg-white border-b lg:hidden">
                    <h1 className="text-2xl font-semibold text-gray-800">School CRM</h1>
                    <Button variant="ghost" size="icon" onClick={toggleSidebar}>
                        <MenuIcon className="h-6 w-6" />
                    </Button>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
                    <div className="container mx-auto px-6 py-8">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-3xl font-semibold text-gray-800">Usuarios</h2>
                            <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                                <DialogTrigger asChild>
                                    <Button className="bg-blue-600 hover:bg-blue-700">
                                        <PlusCircle className="w-5 h-5 mr-2" />
                                        Agregar Usuario
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[425px]">
                                    <DialogHeader>
                                        <DialogTitle>Agregar Nuevo Usuario</DialogTitle>
                                        <DialogDescription>
                                            Ingrese los detalles del nuevo usuario aquí. Haga clic en guardar cuando termine.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="name" className="text-right">
                                                Nombre
                                            </Label>
                                            <Input
                                                id="name"
                                                value={newUser.name}
                                                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="email" className="text-right">
                                                Email
                                            </Label>
                                            <Input
                                                id="email"
                                                value={newUser.email}
                                                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                                                className="col-span-3"
                                            />
                                        </div>
                                        <div className="grid grid-cols-4 items-center gap-4">
                                            <Label htmlFor="role" className="text-right">
                                                Rol
                                            </Label>
                                            <Input
                                                id="role"
                                                value={newUser.role}
                                                onChange={(e) => setNewUser({ ...newUser, role: e.target.value })}
                                                className="col-span-3"
                                            />
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit" onClick={handleAddUser}>Guardar</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </div>

                        <div className="bg-white shadow-md rounded-lg overflow-hidden">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Nombre</TableHead>
                                        <TableHead>Email</TableHead>
                                        <TableHead>Rol</TableHead>
                                        <TableHead>Acciones</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {users.map((user) => (
                                        <TableRow key={user.id}>
                                            <TableCell>{user.name}</TableCell>
                                            <TableCell>{user.email}</TableCell>
                                            <TableCell>{user.role}</TableCell>
                                            <TableCell>
                                                <div className="flex space-x-2">
                                                    <Button variant="outline" size="icon">
                                                        <Pencil className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="outline" size="icon" onClick={() => handleDeleteUser(user.id)}>
                                                        <Trash2 className="h-4 w-4" />
                                                    </Button>
                                                    <Button variant="outline" size="icon">
                                                        <NotebookTabs className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}