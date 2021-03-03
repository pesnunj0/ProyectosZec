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
        export const deletePermission = 'Kairos:Delete';
        export const insertPermission = 'Kairos:Insert';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Modify';

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

