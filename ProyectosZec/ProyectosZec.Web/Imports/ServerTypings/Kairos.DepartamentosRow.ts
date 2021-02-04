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

        export declare const enum Fields {
            Id = "Id",
            CodigoCliente = "CodigoCliente",
            Codigo = "Codigo",
            Descripcion = "Descripcion",
            FechaBorrado = "FechaBorrado",
            SedeId = "SedeId"
        }
    }
}

