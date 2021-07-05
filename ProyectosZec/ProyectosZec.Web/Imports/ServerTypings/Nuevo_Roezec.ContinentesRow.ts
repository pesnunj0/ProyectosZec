
namespace ProyectosZec.Nuevo_Roezec {
    export interface ContinentesRow {
        ContinenteId?: number;
        Continente?: string;
    }

    export namespace ContinentesRow {
        export const idProperty = 'ContinenteId';
        export const nameProperty = 'Continente';
        export const localTextPrefix = 'Nuevo_Roezec.Continentes';
        export const deletePermission = 'Roezec:General';
        export const insertPermission = 'Roezec:General';
        export const readPermission = 'Roezec:General';
        export const updatePermission = 'Roezec:General';

        export namespace Fields {
            export declare const ContinenteId;
            export declare const Continente;
        }

        [
            'ContinenteId',
            'Continente'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}