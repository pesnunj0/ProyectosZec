namespace ProyectosZec.CuadroMandos {
    export interface SectoresRow {
        SectorId?: number;
        Sector?: string;
    }

    export namespace SectoresRow {
        export const idProperty = 'SectorId';
        export const nameProperty = 'Sector';
        export const localTextPrefix = 'CuadroMandos.Sectores';
        export const lookupKey = 'CuadroMandos.Sectores';

        export function getLookup(): Q.Lookup<SectoresRow> {
            return Q.getLookup<SectoresRow>('CuadroMandos.Sectores');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SectorId = "SectorId",
            Sector = "Sector"
        }
    }
}

