
namespace ProyectosZec.Kairos {
    export interface FichajesRow {
        Id?: number;
        IdEmpleado?: number;
        CodigoCliente?: number;
        FechaHora?: string;
        Observaciones?: string;
        GpsPosicionLatitud?: string;
        GpsPosicionLongitud?: string;
        GpsFechaHora?: string;
        GpsProveedor?: string;
        GpsAltitud?: string;
        IdTerminal?: number;
        IdDispositivoModelo?: number;
        Modificado?: string;
        Anulado?: string;
        Validado?: number;
        TipoDispositivo?: number;
        EntradaSalida?: string;
        IdEmpresa?: number;
        IdTerminalCodigoCliente?: number;
        IdTerminalCodigo?: string;
        IdTerminalDescripcion?: string;
        IdTerminalTipoDispositivo?: number;
        IdTerminalIdDepartamento?: number;
        IdTerminalFechaActualizacion?: string;
        IdTerminalFechaBorrado?: string;
        IdTerminalDispositivoHuellaDactilar?: boolean;
        IdTerminalDispositivoHuellaDactilarNumero?: number;
        IdTerminalDispositivoHuellaDactilarIp?: string;
        IdTerminalDispositivoHuellaDactilarMarca?: string;
        IdTerminalDispositivoHuellaDactilarModelo?: string;
        IdTerminalDispositivoHuellaDactilarFirmware?: string;
        IdTerminalDispositivoHuellaDactilarPuerto?: string;
        IdTerminalDispositivoHuellaDactilarDns?: boolean;
        IdDispositivoModeloCodigoCliente?: number;
        IdDispositivoModeloFabricante?: string;
        IdDispositivoModeloMarca?: string;
        IdDispositivoModeloModelo?: string;
        IdDispositivoModeloMac?: string;
        IdDispositivoModeloFechaBorrado?: string;
    }

    export namespace FichajesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Observaciones';
        export const localTextPrefix = 'Kairos.Fichajes';
        export const deletePermission = 'Kairos:General';
        export const insertPermission = 'Kairos:General';
        export const readPermission = 'Kairos:General';
        export const updatePermission = 'Kairos:General';

        export namespace Fields {
            export declare const Id;
            export declare const IdEmpleado;
            export declare const CodigoCliente;
            export declare const FechaHora;
            export declare const Observaciones;
            export declare const GpsPosicionLatitud;
            export declare const GpsPosicionLongitud;
            export declare const GpsFechaHora;
            export declare const GpsProveedor;
            export declare const GpsAltitud;
            export declare const IdTerminal;
            export declare const IdDispositivoModelo;
            export declare const Modificado;
            export declare const Anulado;
            export declare const Validado;
            export declare const TipoDispositivo;
            export declare const EntradaSalida;
            export declare const IdEmpresa;
            export declare const IdTerminalCodigoCliente;
            export declare const IdTerminalCodigo;
            export declare const IdTerminalDescripcion;
            export declare const IdTerminalTipoDispositivo;
            export declare const IdTerminalIdDepartamento;
            export declare const IdTerminalFechaActualizacion;
            export declare const IdTerminalFechaBorrado;
            export declare const IdTerminalDispositivoHuellaDactilar;
            export declare const IdTerminalDispositivoHuellaDactilarNumero;
            export declare const IdTerminalDispositivoHuellaDactilarIp;
            export declare const IdTerminalDispositivoHuellaDactilarMarca;
            export declare const IdTerminalDispositivoHuellaDactilarModelo;
            export declare const IdTerminalDispositivoHuellaDactilarFirmware;
            export declare const IdTerminalDispositivoHuellaDactilarPuerto;
            export declare const IdTerminalDispositivoHuellaDactilarDns;
            export declare const IdDispositivoModeloCodigoCliente;
            export declare const IdDispositivoModeloFabricante;
            export declare const IdDispositivoModeloMarca;
            export declare const IdDispositivoModeloModelo;
            export declare const IdDispositivoModeloMac;
            export declare const IdDispositivoModeloFechaBorrado;
        }

        [
            'Id',
            'IdEmpleado',
            'CodigoCliente',
            'FechaHora',
            'Observaciones',
            'GpsPosicionLatitud',
            'GpsPosicionLongitud',
            'GpsFechaHora',
            'GpsProveedor',
            'GpsAltitud',
            'IdTerminal',
            'IdDispositivoModelo',
            'Modificado',
            'Anulado',
            'Validado',
            'TipoDispositivo',
            'EntradaSalida',
            'IdEmpresa',
            'IdTerminalCodigoCliente',
            'IdTerminalCodigo',
            'IdTerminalDescripcion',
            'IdTerminalTipoDispositivo',
            'IdTerminalIdDepartamento',
            'IdTerminalFechaActualizacion',
            'IdTerminalFechaBorrado',
            'IdTerminalDispositivoHuellaDactilar',
            'IdTerminalDispositivoHuellaDactilarNumero',
            'IdTerminalDispositivoHuellaDactilarIp',
            'IdTerminalDispositivoHuellaDactilarMarca',
            'IdTerminalDispositivoHuellaDactilarModelo',
            'IdTerminalDispositivoHuellaDactilarFirmware',
            'IdTerminalDispositivoHuellaDactilarPuerto',
            'IdTerminalDispositivoHuellaDactilarDns',
            'IdDispositivoModeloCodigoCliente',
            'IdDispositivoModeloFabricante',
            'IdDispositivoModeloMarca',
            'IdDispositivoModeloModelo',
            'IdDispositivoModeloMac',
            'IdDispositivoModeloFechaBorrado'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}