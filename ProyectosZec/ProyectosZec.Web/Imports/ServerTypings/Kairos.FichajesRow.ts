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
        Empleado?: string;
        Hora?: string;
        DptoId?: number;
        SedeId?: number;
        Sede?: string;
        Dispositivo?: string;
        Fichaje?: string;
    }

    export namespace FichajesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Observaciones';
        export const localTextPrefix = 'Kairos.Fichajes';
        export const deletePermission = 'Kairos:Delete';
        export const insertPermission = 'Kairos:Insert';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdEmpleado = "IdEmpleado",
            CodigoCliente = "CodigoCliente",
            FechaHora = "FechaHora",
            Observaciones = "Observaciones",
            GpsPosicionLatitud = "GpsPosicionLatitud",
            GpsPosicionLongitud = "GpsPosicionLongitud",
            GpsFechaHora = "GpsFechaHora",
            GpsProveedor = "GpsProveedor",
            GpsAltitud = "GpsAltitud",
            IdTerminal = "IdTerminal",
            IdDispositivoModelo = "IdDispositivoModelo",
            Modificado = "Modificado",
            Anulado = "Anulado",
            Validado = "Validado",
            TipoDispositivo = "TipoDispositivo",
            EntradaSalida = "EntradaSalida",
            IdEmpresa = "IdEmpresa",
            IdTerminalCodigoCliente = "IdTerminalCodigoCliente",
            IdTerminalCodigo = "IdTerminalCodigo",
            IdTerminalDescripcion = "IdTerminalDescripcion",
            IdTerminalTipoDispositivo = "IdTerminalTipoDispositivo",
            IdTerminalIdDepartamento = "IdTerminalIdDepartamento",
            IdTerminalFechaActualizacion = "IdTerminalFechaActualizacion",
            IdTerminalFechaBorrado = "IdTerminalFechaBorrado",
            IdTerminalDispositivoHuellaDactilar = "IdTerminalDispositivoHuellaDactilar",
            IdTerminalDispositivoHuellaDactilarNumero = "IdTerminalDispositivoHuellaDactilarNumero",
            IdTerminalDispositivoHuellaDactilarIp = "IdTerminalDispositivoHuellaDactilarIp",
            IdTerminalDispositivoHuellaDactilarMarca = "IdTerminalDispositivoHuellaDactilarMarca",
            IdTerminalDispositivoHuellaDactilarModelo = "IdTerminalDispositivoHuellaDactilarModelo",
            IdTerminalDispositivoHuellaDactilarFirmware = "IdTerminalDispositivoHuellaDactilarFirmware",
            IdTerminalDispositivoHuellaDactilarPuerto = "IdTerminalDispositivoHuellaDactilarPuerto",
            IdTerminalDispositivoHuellaDactilarDns = "IdTerminalDispositivoHuellaDactilarDns",
            IdDispositivoModeloCodigoCliente = "IdDispositivoModeloCodigoCliente",
            IdDispositivoModeloFabricante = "IdDispositivoModeloFabricante",
            IdDispositivoModeloMarca = "IdDispositivoModeloMarca",
            IdDispositivoModeloModelo = "IdDispositivoModeloModelo",
            IdDispositivoModeloMac = "IdDispositivoModeloMac",
            IdDispositivoModeloFechaBorrado = "IdDispositivoModeloFechaBorrado",
            Empleado = "Empleado",
            Hora = "Hora",
            DptoId = "DptoId",
            SedeId = "SedeId",
            Sede = "Sede",
            Dispositivo = "Dispositivo",
            Fichaje = "Fichaje"
        }
    }
}

