namespace ProyectosZec.Nuevo_Roezec {
    export interface SubsectoresRow {
        SubsectorId?: number;
        SectorId?: number;
        Subsector?: string;
        Sector?: string;
    }

    export namespace SubsectoresRow {
        export const idProperty = 'SubsectorId';
        export const nameProperty = 'Subsector';
        export const localTextPrefix = 'Nuevo_Roezec.Subsectores';
        export const lookupKey = 'Nuevo_Roezec.Subsectores';

        export function getLookup(): Q.Lookup<SubsectoresRow> {
            return Q.getLookup<SubsectoresRow>('Nuevo_Roezec.Subsectores');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            SubsectorId = "SubsectorId",
            SectorId = "SectorId",
            Subsector = "Subsector",
            Sector = "Sector"
        }
    }
}

