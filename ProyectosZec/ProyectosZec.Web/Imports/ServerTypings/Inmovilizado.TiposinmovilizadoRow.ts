
namespace ProyectosZec.Inmovilizado {
    export interface TiposinmovilizadoRow {
        TipoInmovilizadoId?: number;
        Tipo?: string;
    }

    export namespace TiposinmovilizadoRow {
        export const idProperty = 'TipoInmovilizadoId';
        export const nameProperty = 'Tipo';
        export const localTextPrefix = 'Inmovilizado.Tiposinmovilizado';
        export const deletePermission = 'Inmovilizado:General';
        export const insertPermission = 'Inmovilizado:General';
        export const readPermission = 'Inmovilizado:General';
        export const updatePermission = 'Inmovilizado:General';

        export namespace Fields {
            export declare const TipoInmovilizadoId;
            export declare const Tipo;
        }

        [
            'TipoInmovilizadoId',
            'Tipo'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}