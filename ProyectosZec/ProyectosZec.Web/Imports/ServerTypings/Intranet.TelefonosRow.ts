namespace ProyectosZec.Intranet {
    export interface TelefonosRow {
        TelefonoId?: number;
        SedeId?: number;
        DepartamentoId?: number;
        Nombre?: string;
        ExtCorta?: string;
        Fijo?: string;
        Movil?: string;
        Sede?: string;
        DepartamentDepartamento?: string;
    }

    export namespace TelefonosRow {
        export const idProperty = 'TelefonoId';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Intranet.Telefonos';
        export const deletePermission = 'Telefonos:General';
        export const insertPermission = 'Telefonos:General';
        export const readPermission = 'Telefonos:General';
        export const updatePermission = 'Telefonos:General';

        export declare const enum Fields {
            TelefonoId = "TelefonoId",
            SedeId = "SedeId",
            DepartamentoId = "DepartamentoId",
            Nombre = "Nombre",
            ExtCorta = "ExtCorta",
            Fijo = "Fijo",
            Movil = "Movil",
            Sede = "Sede",
            DepartamentDepartamento = "DepartamentDepartamento"
        }
    }
}

