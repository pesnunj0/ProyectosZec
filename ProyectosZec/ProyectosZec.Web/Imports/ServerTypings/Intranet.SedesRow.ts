namespace ProyectosZec.Intranet {
    export interface SedesRow {
        SedeId?: number;
        Sede?: string;
    }

    export namespace SedesRow {
        export const idProperty = 'SedeId';
        export const nameProperty = 'Sede';
        export const localTextPrefix = 'Intranet.Sedes';
        export const lookupKey = 'Intranet.Sedes';

        export function getLookup(): Q.Lookup<SedesRow> {
            return Q.getLookup<SedesRow>('Intranet.Sedes');
        }
        export const deletePermission = 'Telefonos:Modify';
        export const insertPermission = 'Telefonos:Modify';
        export const readPermission = 'Telefonos:Read';
        export const updatePermission = 'Telefonos:Modify';

        export declare const enum Fields {
            SedeId = "SedeId",
            Sede = "Sede"
        }
    }
}

