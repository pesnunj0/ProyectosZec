namespace ProyectosZec.Nuevo_Roezec {
    export interface NacesRow {
        NaceId?: number;
        Nace?: string;
        Codigo?: string;
        Descripcion?: string;
        SubsectorId?: number;
        SectorId?: number;
        Subsector?: string;
        Sector?: string;
    }

    export namespace NacesRow {
        export const idProperty = 'NaceId';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'Nuevo_Roezec.Naces';
        export const lookupKey = 'Nuevo_Roezec.Naces';

        export function getLookup(): Q.Lookup<NacesRow> {
            return Q.getLookup<NacesRow>('Nuevo_Roezec.Naces');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            NaceId = "NaceId",
            Nace = "Nace",
            Codigo = "Codigo",
            Descripcion = "Descripcion",
            SubsectorId = "SubsectorId",
            SectorId = "SectorId",
            Subsector = "Subsector",
            Sector = "Sector"
        }
    }
}

