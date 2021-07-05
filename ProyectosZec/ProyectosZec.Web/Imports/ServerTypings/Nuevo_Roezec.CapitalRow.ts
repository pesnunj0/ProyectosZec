namespace ProyectosZec.Nuevo_Roezec {
    export interface CapitalRow {
        CapitalId?: number;
        Capital?: string;
    }

    export namespace CapitalRow {
        export const idProperty = 'CapitalId';
        export const nameProperty = 'Capital';
        export const localTextPrefix = 'Nuevo_Roezec.Capital';
        export const lookupKey = 'Nuevo_Roezec.Capital';

        export function getLookup(): Q.Lookup<CapitalRow> {
            return Q.getLookup<CapitalRow>('Nuevo_Roezec.Capital');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            CapitalId = "CapitalId",
            Capital = "Capital"
        }
    }
}

