namespace ProyectosZec.Roezec {
    export interface RoezecEstadosRow {
        Codigo?: string;
        Descripcion?: string;
    }

    export namespace RoezecEstadosRow {
        export const idProperty = 'Codigo';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'Roezec.RoezecEstados';
        export const lookupKey = 'Roezec.RoezecEstados';

        export function getLookup(): Q.Lookup<RoezecEstadosRow> {
            return Q.getLookup<RoezecEstadosRow>('Roezec.RoezecEstados');
        }
        export const deletePermission = 'Roezec:Delete';
        export const insertPermission = 'Roezec:Insert';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            Codigo = "Codigo",
            Descripcion = "Descripcion"
        }
    }
}

