
namespace ProyectosZec.Kairos {
    export interface SedesRow {
        SedeId?: number;
        Sede?: string;
    }

    export namespace SedesRow {
        export const idProperty = 'SedeId';
        export const nameProperty = 'Sede';
        export const localTextPrefix = 'Kairos.Sedes';
        export const deletePermission = 'Kairos:General';
        export const insertPermission = 'Kairos:General';
        export const readPermission = 'Kairos:General';
        export const updatePermission = 'Kairos:General';

        export namespace Fields {
            export declare const SedeId;
            export declare const Sede;
        }

        [
            'SedeId',
            'Sede'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}