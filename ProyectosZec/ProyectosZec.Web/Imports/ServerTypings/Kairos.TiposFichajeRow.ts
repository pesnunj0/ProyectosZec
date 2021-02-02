
namespace ProyectosZec.Kairos {
    export interface TiposFichajeRow {
        Id?: string;
        Tipo?: string;
    }

    export namespace TiposFichajeRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Id';
        export const localTextPrefix = 'Kairos.TiposFichaje';
        export const deletePermission = 'Kairos::General';
        export const insertPermission = 'Kairos::General';
        export const readPermission = 'Kairos::General';
        export const updatePermission = 'Kairos::General';

        export namespace Fields {
            export declare const Id;
            export declare const Tipo;
        }

        [
            'Id',
            'Tipo'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}