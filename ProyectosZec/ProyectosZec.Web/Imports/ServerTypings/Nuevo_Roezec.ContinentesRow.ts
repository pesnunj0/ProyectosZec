namespace ProyectosZec.Nuevo_Roezec {
    export interface ContinentesRow {
        ContinenteId?: number;
        Continente?: string;
    }

    export namespace ContinentesRow {
        export const idProperty = 'ContinenteId';
        export const nameProperty = 'Continente';
        export const localTextPrefix = 'Nuevo_Roezec.Continentes';
        export const lookupKey = 'Nuevo_Roezec.Continentes';

        export function getLookup(): Q.Lookup<ContinentesRow> {
            return Q.getLookup<ContinentesRow>('Nuevo_Roezec.Continentes');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            ContinenteId = "ContinenteId",
            Continente = "Continente"
        }
    }
}

