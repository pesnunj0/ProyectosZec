namespace ProyectosZec.Inmovilizado {
    export interface ProveedoresRow {
        ProveedorId?: number;
        Proveedor?: string;
        Contacto?: string;
        Telefono?: string;
        Email?: string;
    }

    export namespace ProveedoresRow {
        export const idProperty = 'ProveedorId';
        export const nameProperty = 'Proveedor';
        export const localTextPrefix = 'Inmovilizado.Proveedores';
        export const lookupKey = 'Inmovilizado.Proveedores';

        export function getLookup(): Q.Lookup<ProveedoresRow> {
            return Q.getLookup<ProveedoresRow>('Inmovilizado.Proveedores');
        }
        export const deletePermission = 'Inmovilizado:Modify';
        export const insertPermission = 'Inmovilizado:Modify';
        export const readPermission = 'Inmovilizado:Read';
        export const updatePermission = 'Inmovilizado:Modify';

        export declare const enum Fields {
            ProveedorId = "ProveedorId",
            Proveedor = "Proveedor",
            Contacto = "Contacto",
            Telefono = "Telefono",
            Email = "Email"
        }
    }
}

