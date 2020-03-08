namespace ProyectosZec.CuadroMandos {
    export interface CapitalRow {
        CapitalId?: number;
        Capital?: string;
    }

    export namespace CapitalRow {
        export const idProperty = 'CapitalId';
        export const nameProperty = 'Capital';
        export const localTextPrefix = 'CuadroMandos.Capital';
        export const lookupKey = 'CuadroMandos.Capital';

        export function getLookup(): Q.Lookup<CapitalRow> {
            return Q.getLookup<CapitalRow>('CuadroMandos.Capital');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            CapitalId = "CapitalId",
            Capital = "Capital"
        }
    }
}

