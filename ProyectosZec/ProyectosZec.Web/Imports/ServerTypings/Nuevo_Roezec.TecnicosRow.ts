namespace ProyectosZec.Nuevo_Roezec {
    export interface TecnicosRow {
        TecnicoId?: number;
        NombreTecnico?: string;
        Tecnico?: string;
    }

    export namespace TecnicosRow {
        export const idProperty = 'TecnicoId';
        export const nameProperty = 'NombreTecnico';
        export const localTextPrefix = 'Nuevo_Roezec.Tecnicos';
        export const lookupKey = 'Nuevo_Roezec.Tecnicos';

        export function getLookup(): Q.Lookup<TecnicosRow> {
            return Q.getLookup<TecnicosRow>('Nuevo_Roezec.Tecnicos');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            TecnicoId = "TecnicoId",
            NombreTecnico = "NombreTecnico",
            Tecnico = "Tecnico"
        }
    }
}

