namespace ProyectosZec.Intranet {
    export interface DepartamentosRow {
        DepartamentoId?: number;
        Departamento?: string;
    }

    export namespace DepartamentosRow {
        export const idProperty = 'DepartamentoId';
        export const nameProperty = 'Departamento';
        export const localTextPrefix = 'Intranet.Departamentos';
        export const deletePermission = 'Telefonos:General';
        export const insertPermission = 'Telefonos:General';
        export const readPermission = 'Telefonos:General';
        export const updatePermission = 'Telefonos:General';

        export declare const enum Fields {
            DepartamentoId = "DepartamentoId",
            Departamento = "Departamento"
        }
    }
}

