namespace ProyectosZec.Nuevo_Roezec {
    export interface PaisesRow {
        PaisId?: number;
        Pais?: string;
        Capital?: string;
        ContinenteId?: number;
    }

    export namespace PaisesRow {
        export const idProperty = 'PaisId';
        export const nameProperty = 'Pais';
        export const localTextPrefix = 'Nuevo_Roezec.Paises';
        export const lookupKey = 'Nuevo_Roezec.Paises';

        export function getLookup(): Q.Lookup<PaisesRow> {
            return Q.getLookup<PaisesRow>('Nuevo_Roezec.Paises');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            PaisId = "PaisId",
            Pais = "Pais",
            Capital = "Capital",
            ContinenteId = "ContinenteId"
        }
    }
}

