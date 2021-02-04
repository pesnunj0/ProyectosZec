namespace ProyectosZec.Kairos {
    export interface TiposFichajeRow {
        Id?: string;
        Tipo?: string;
    }

    export namespace TiposFichajeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Tipo';
        export const localTextPrefix = 'Kairos.TiposFichaje';
        export const lookupKey = 'Kairos.TiposFichaje';

        export function getLookup(): Q.Lookup<TiposFichajeRow> {
            return Q.getLookup<TiposFichajeRow>('Kairos.TiposFichaje');
        }
        export const deletePermission = 'Kairos:Delete';
        export const insertPermission = 'Kairos:Insert';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Modify';

        export declare const enum Fields {
            Id = "Id",
            Tipo = "Tipo"
        }
    }
}

