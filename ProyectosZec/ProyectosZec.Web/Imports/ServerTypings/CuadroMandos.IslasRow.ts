namespace ProyectosZec.CuadroMandos {
    export interface IslasRow {
        IslaId?: number;
        NombreIsla?: string;
        Isla?: string;
    }

    export namespace IslasRow {
        export const idProperty = 'IslaId';
        export const nameProperty = 'NombreIsla';
        export const localTextPrefix = 'CuadroMandos.Islas';
        export const lookupKey = 'CuadroMandos.Islas';

        export function getLookup(): Q.Lookup<IslasRow> {
            return Q.getLookup<IslasRow>('CuadroMandos.Islas');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            IslaId = "IslaId",
            NombreIsla = "NombreIsla",
            Isla = "Isla"
        }
    }
}

