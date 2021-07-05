namespace ProyectosZec.Nuevo_Roezec {
    export interface SectoresRow {
        SectorId?: number;
        Sector?: string;
    }

    export namespace SectoresRow {
        export const idProperty = 'SectorId';
        export const nameProperty = 'Sector';
        export const localTextPrefix = 'Nuevo_Roezec.Sectores';
        export const lookupKey = 'Nuevo_Roezec.Sectores';

        export function getLookup(): Q.Lookup<SectoresRow> {
            return Q.getLookup<SectoresRow>('Nuevo_Roezec.Sectores');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            SectorId = "SectorId",
            Sector = "Sector"
        }
    }
}

