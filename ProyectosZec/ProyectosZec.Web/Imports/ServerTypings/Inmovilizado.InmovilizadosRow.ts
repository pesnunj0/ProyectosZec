namespace ProyectosZec.Inmovilizado {
    export interface InmovilizadosRow {
        InmovilizadoId?: number;
        Ubicacion?: string;
        Codigo?: string;
        Pg?: string;
        Descripcion?: string;
        NumeroSerie?: string;
        SubTipoInmovilizadoId?: number;
        TipoInmovilizadoId?: number;
        SedeId?: number;
        ProveedorId?: number;
        FechaCompra?: string;
        FechaBaja?: string;
        Valor?: number;
        Amortizacion?: number;
        Garantia?: number;
        Factura?: string;
        GalleryImages?: string;
        Files?: string;
        SubTipo?: string;
        Sede?: string;
        Tipo?: string;
        Proveedor?: string;
        ValorResidual?: number;
    }

    export namespace InmovilizadosRow {
        export const idProperty = 'InmovilizadoId';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'Inmovilizado.Inmovilizados';
        export const deletePermission = 'Inmovilizado:Modify';
        export const insertPermission = 'Inmovilizado:Modify';
        export const readPermission = 'Inmovilizado:Read';
        export const updatePermission = 'Inmovilizado:Modify';

        export declare const enum Fields {
            InmovilizadoId = "InmovilizadoId",
            Ubicacion = "Ubicacion",
            Codigo = "Codigo",
            Pg = "Pg",
            Descripcion = "Descripcion",
            NumeroSerie = "NumeroSerie",
            SubTipoInmovilizadoId = "SubTipoInmovilizadoId",
            TipoInmovilizadoId = "TipoInmovilizadoId",
            SedeId = "SedeId",
            ProveedorId = "ProveedorId",
            FechaCompra = "FechaCompra",
            FechaBaja = "FechaBaja",
            Valor = "Valor",
            Amortizacion = "Amortizacion",
            Garantia = "Garantia",
            Factura = "Factura",
            GalleryImages = "GalleryImages",
            Files = "Files",
            SubTipo = "SubTipo",
            Sede = "Sede",
            Tipo = "Tipo",
            Proveedor = "Proveedor",
            ValorResidual = "ValorResidual"
        }
    }
}

