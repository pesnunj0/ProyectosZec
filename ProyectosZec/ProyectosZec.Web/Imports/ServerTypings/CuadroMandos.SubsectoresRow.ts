namespace ProyectosZec.CuadroMandos {
    export interface SubsectoresRow {
        SubsectorId?: number;
        SectorId?: number;
        Sector?: string;
        Subsector?: string;
    }

    export namespace SubsectoresRow {
        export const idProperty = 'SubsectorId';
        export const nameProperty = 'Subsector';
        export const localTextPrefix = 'CuadroMandos.Subsectores';
        export const lookupKey = 'CuadroMandos.Subsectores';

        export function getLookup(): Q.Lookup<SubsectoresRow> {
            return Q.getLookup<SubsectoresRow>('CuadroMandos.Subsectores');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            SubsectorId = "SubsectorId",
            SectorId = "SectorId",
            Sector = "Sector",
            Subsector = "Subsector"
        }
    }
}

