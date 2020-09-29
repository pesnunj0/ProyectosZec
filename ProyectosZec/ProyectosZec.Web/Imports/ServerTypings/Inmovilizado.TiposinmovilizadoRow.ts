namespace ProyectosZec.Inmovilizado {
    export interface TiposinmovilizadoRow {
        TipoInmovilizadoId?: number;
        Tipo?: string;
    }

    export namespace TiposinmovilizadoRow {
        export const idProperty = 'TipoInmovilizadoId';
        export const nameProperty = 'Tipo';
        export const localTextPrefix = 'Inmovilizado.Tiposinmovilizado';
        export const lookupKey = 'Inmovilizado.Tiposinmovilizado';

        export function getLookup(): Q.Lookup<TiposinmovilizadoRow> {
            return Q.getLookup<TiposinmovilizadoRow>('Inmovilizado.Tiposinmovilizado');
        }
        export const deletePermission = 'Inmovilizado:General';
        export const insertPermission = 'Inmovilizado:General';
        export const readPermission = 'Inmovilizado:General';
        export const updatePermission = 'Inmovilizado:General';

        export declare const enum Fields {
            TipoInmovilizadoId = "TipoInmovilizadoId",
            Tipo = "Tipo"
        }
    }
}

