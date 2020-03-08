namespace ProyectosZec.Intranet {
    export interface SedesRow {
        SedeId?: number;
        Sede?: string;
    }

    export namespace SedesRow {
        export const idProperty = 'SedeId';
        export const nameProperty = 'Sede';
        export const localTextPrefix = 'Intranet.Sedes';
        export const deletePermission = 'Telefonos:General';
        export const insertPermission = 'Telefonos:General';
        export const readPermission = 'Telefonos:General';
        export const updatePermission = 'Telefonos:General';

        export declare const enum Fields {
            SedeId = "SedeId",
            Sede = "Sede"
        }
    }
}

