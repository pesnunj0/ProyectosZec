
namespace ProyectosZec.Inmovilizado {
    export interface InmovilizadosRow {
        InmovilizadoId?: number;
        Descripcion?: string;
        SubTipoInmovilizadoId?: number;
        SedeId?: number;
        ProveedorId?: number;
        FechaCompra?: string;
        FechaBaja?: string;
        Valor?: number;
        Amortizacion?: number;
        Garantia?: number;
        Factura?: string;
        SubTipoInmovilizadoTipoInmovilizadoId?: number;
        SubTipoInmovilizadoSubTipo?: string;
        Sede?: string;
        Proveedor?: string;
    }

    export namespace InmovilizadosRow {
        export const idProperty = 'InmovilizadoId';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'Inmovilizado.Inmovilizados';
        export const deletePermission = 'Inmovilizado:General';
        export const insertPermission = 'Inmovilizado:General';
        export const readPermission = 'Inmovilizado:General';
        export const updatePermission = 'Inmovilizado:General';

        export namespace Fields {
            export declare const InmovilizadoId;
            export declare const Descripcion;
            export declare const SubTipoInmovilizadoId;
            export declare const SedeId;
            export declare const ProveedorId;
            export declare const FechaCompra;
            export declare const FechaBaja;
            export declare const Valor;
            export declare const Amortizacion;
            export declare const Garantia;
            export declare const Factura;
            export declare const SubTipoInmovilizadoTipoInmovilizadoId;
            export declare const SubTipoInmovilizadoSubTipo;
            export declare const Sede;
            export declare const Proveedor;
        }

        [
            'InmovilizadoId',
            'Descripcion',
            'SubTipoInmovilizadoId',
            'SedeId',
            'ProveedorId',
            'FechaCompra',
            'FechaBaja',
            'Valor',
            'Amortizacion',
            'Garantia',
            'Factura',
            'SubTipoInmovilizadoTipoInmovilizadoId',
            'SubTipoInmovilizadoSubTipo',
            'Sede',
            'Proveedor'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}