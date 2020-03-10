namespace ProyectosZec.Intranet {
    export interface DepartamentosRow {
        DepartamentoId?: number;
        Departamento?: string;
    }

    export namespace DepartamentosRow {
        export const idProperty = 'DepartamentoId';
        export const nameProperty = 'Departamento';
        export const localTextPrefix = 'Intranet.Departamentos';
        export const lookupKey = 'Intranet.Departamentos';

        export function getLookup(): Q.Lookup<DepartamentosRow> {
            return Q.getLookup<DepartamentosRow>('Intranet.Departamentos');
        }
        export const deletePermission = 'Telefonos:Modify';
        export const insertPermission = 'Telefonos:Modify';
        export const readPermission = 'Telefonos:Read';
        export const updatePermission = 'Telefonos:Modify';

        export declare const enum Fields {
            DepartamentoId = "DepartamentoId",
            Departamento = "Departamento"
        }
    }
}

