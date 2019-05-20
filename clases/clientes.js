"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Clientes {
    constructor() {
        this.lista = [];
    }
    add(cliente) {
        this.lista.push(cliente);
    }
    getClientes() {
        //return this.lista;
        return this.lista.filter((cliente) => cliente.nombre != 'sin nombre');
    }
    remove(id) {
        this.lista = this.lista.filter((cliente) => cliente.id != id);
    }
    update(objCliente) {
        this.lista.forEach((cliente) => {
            if (cliente.id === objCliente.id) {
                cliente.nombre = objCliente.nombre;
            }
        });
    }
    getClienteById(id) {
        for (let index = 0; index < this.lista.length; index++) {
            if (this.lista[index].id === id) {
                return this.lista[index];
            }
        }
    }
}
exports.Clientes = Clientes;
