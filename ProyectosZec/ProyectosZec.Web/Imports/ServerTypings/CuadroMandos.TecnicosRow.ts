namespace ProyectosZec.CuadroMandos {
    export interface TecnicosRow {
        TecnicoId?: number;
        NombreTecnico?: string;
        Tecnico?: string;
    }

    export namespace TecnicosRow {
        export const idProperty = 'TecnicoId';
        export const nameProperty = 'NombreTecnico';
        export const localTextPrefix = 'CuadroMandos.Tecnicos';
        export const lookupKey = 'CuadroMandos.Tecnicos';

        export function getLookup(): Q.Lookup<TecnicosRow> {
            return Q.getLookup<TecnicosRow>('CuadroMandos.Tecnicos');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            TecnicoId = "TecnicoId",
            NombreTecnico = "NombreTecnico",
            Tecnico = "Tecnico"
        }
    }
}

