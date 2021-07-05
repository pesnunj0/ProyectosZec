namespace ProyectosZec.Nuevo_Roezec {
    export interface IslasRow {
        IslaId?: number;
        NombreIsla?: string;
        Isla?: string;
    }

    export namespace IslasRow {
        export const idProperty = 'IslaId';
        export const nameProperty = 'NombreIsla';
        export const localTextPrefix = 'Nuevo_Roezec.Islas';
        export const lookupKey = 'Nuevo_Roezec.Islas';

        export function getLookup(): Q.Lookup<IslasRow> {
            return Q.getLookup<IslasRow>('Nuevo_Roezec.Islas');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            IslaId = "IslaId",
            NombreIsla = "NombreIsla",
            Isla = "Isla"
        }
    }
}

