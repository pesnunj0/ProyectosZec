
namespace ProyectosZec.Inmovilizado {
    export interface SubtiposinmovilizadoRow {
        SubTipoInmovilizadoId?: number;
        TipoInmovilizadoId?: number;
        SubTipo?: string;
        TipoInmovilizadoTipo?: string;
    }

    export namespace SubtiposinmovilizadoRow {
        export const idProperty = 'SubTipoInmovilizadoId';
        export const nameProperty = 'SubTipo';
        export const localTextPrefix = 'Inmovilizado.Subtiposinmovilizado';
        export const deletePermission = 'Inmovilizado:General';
        export const insertPermission = 'Inmovilizado:General';
        export const readPermission = 'Inmovilizado:General';
        export const updatePermission = 'Inmovilizado:General';

        export namespace Fields {
            export declare const SubTipoInmovilizadoId;
            export declare const TipoInmovilizadoId;
            export declare const SubTipo;
            export declare const TipoInmovilizadoTipo;
        }

        [
            'SubTipoInmovilizadoId',
            'TipoInmovilizadoId',
            'SubTipo',
            'TipoInmovilizadoTipo'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}