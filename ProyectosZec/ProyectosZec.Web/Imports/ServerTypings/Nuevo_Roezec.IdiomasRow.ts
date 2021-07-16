namespace ProyectosZec.Nuevo_Roezec {
    export interface IdiomasRow {
        IdiomaId?: number;
        Idioma?: string;
        NombreIdioma?: string;
    }

    export namespace IdiomasRow {
        export const idProperty = 'IdiomaId';
        export const nameProperty = 'NombreIdioma';
        export const localTextPrefix = 'Nuevo_Roezec.Idiomas';
        export const lookupKey = 'Nuevo_Roezec.Idiomas';

        export function getLookup(): Q.Lookup<IdiomasRow> {
            return Q.getLookup<IdiomasRow>('Nuevo_Roezec.Idiomas');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            IdiomaId = "IdiomaId",
            Idioma = "Idioma",
            NombreIdioma = "NombreIdioma"
        }
    }
}

