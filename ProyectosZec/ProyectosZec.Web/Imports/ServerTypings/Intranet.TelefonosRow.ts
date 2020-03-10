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
        Departamento?: string;
    }

    export namespace TelefonosRow {
        export const idProperty = 'TelefonoId';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Intranet.Telefonos';
        export const lookupKey = 'Telefonos.Telefonos';

        export function getLookup(): Q.Lookup<TelefonosRow> {
            return Q.getLookup<TelefonosRow>('Telefonos.Telefonos');
        }
        export const deletePermission = 'Telefonos:Delete';
        export const insertPermission = 'Telefonos:Insert';
        export const readPermission = 'Telefonos:Read';
        export const updatePermission = 'Telefonos:Modify';

        export declare const enum Fields {
            TelefonoId = "TelefonoId",
            SedeId = "SedeId",
            DepartamentoId = "DepartamentoId",
            Nombre = "Nombre",
            ExtCorta = "ExtCorta",
            Fijo = "Fijo",
            Movil = "Movil",
            Sede = "Sede",
            Departamento = "Departamento"
        }
    }
}

