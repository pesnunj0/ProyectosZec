
namespace ProyectosZec.Inmovilizado {
    export interface ProveedoresRow {
        ProveedorId?: number;
        Proveedor?: string;
    }

    export namespace ProveedoresRow {
        export const idProperty = 'ProveedorId';
        export const nameProperty = 'Proveedor';
        export const localTextPrefix = 'Inmovilizado.Proveedores';
        export const deletePermission = 'Inmovilizado:General';
        export const insertPermission = 'Inmovilizado:General';
        export const readPermission = 'Inmovilizado:General';
        export const updatePermission = 'Inmovilizado:General';

        export namespace Fields {
            export declare const ProveedorId;
            export declare const Proveedor;
        }

        [
            'ProveedorId',
            'Proveedor'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}