namespace ProyectosZec.Nuevo_Roezec {
    export interface TipologiasCapitalRow {
        CapitalId?: number;
        Capital?: string;
    }

    export namespace TipologiasCapitalRow {
        export const idProperty = 'CapitalId';
        export const nameProperty = 'Capital';
        export const localTextPrefix = 'Nuevo_Roezec.TipologiasCapital';
        export const lookupKey = 'Nuevo_Roezec.TipologiasCapital';

        export function getLookup(): Q.Lookup<TipologiasCapitalRow> {
            return Q.getLookup<TipologiasCapitalRow>('Nuevo_Roezec.TipologiasCapital');
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

