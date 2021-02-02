
namespace ProyectosZec.Kairos {
    export interface DepartamentosRow {
        Id?: number;
        CodigoCliente?: number;
        Codigo?: string;
        Descripcion?: string;
        FechaBorrado?: string;
        SedeId?: number;
    }

    export namespace DepartamentosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Codigo';
        export const localTextPrefix = 'Kairos.Departamentos';
        export const deletePermission = 'Kairos:General';
        export const insertPermission = 'Kairos:General';
        export const readPermission = 'Kairos:General';
        export const updatePermission = 'Kairos:General';

        export namespace Fields {
            export declare const Id;
            export declare const CodigoCliente;
            export declare const Codigo;
            export declare const Descripcion;
            export declare const FechaBorrado;
            export declare const SedeId;
        }

        [
            'Id',
            'CodigoCliente',
            'Codigo',
            'Descripcion',
            'FechaBorrado',
            'SedeId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}