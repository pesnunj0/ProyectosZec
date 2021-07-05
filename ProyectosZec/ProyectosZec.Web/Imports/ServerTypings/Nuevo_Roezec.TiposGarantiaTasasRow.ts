namespace ProyectosZec.Nuevo_Roezec {
    export interface TiposGarantiaTasasRow {
        GarantiaTasaId?: number;
        GarantiaTasa?: string;
    }

    export namespace TiposGarantiaTasasRow {
        export const idProperty = 'GarantiaTasaId';
        export const nameProperty = 'GarantiaTasa';
        export const localTextPrefix = 'Nuevo_Roezec.TiposGarantiaTasas';
        export const lookupKey = 'Nuevo_Roezec.TiposGarantiaTasas';

        export function getLookup(): Q.Lookup<TiposGarantiaTasasRow> {
            return Q.getLookup<TiposGarantiaTasasRow>('Nuevo_Roezec.TiposGarantiaTasas');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            GarantiaTasaId = "GarantiaTasaId",
            GarantiaTasa = "GarantiaTasa"
        }
    }
}

