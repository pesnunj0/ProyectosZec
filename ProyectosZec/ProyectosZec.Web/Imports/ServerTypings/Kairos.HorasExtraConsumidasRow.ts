namespace ProyectosZec.Kairos {
    export interface HorasExtraConsumidasRow {
        Id?: number;
        IdHoraExtra?: number;
        Tiempo?: number;
        Dia?: string;
        FechaAutorizacion?: string;
        IdHoraExtraCodigoCliente?: number;
        IdHoraExtraIdEmpleado?: number;
        IdHoraExtraFecha?: string;
        IdHoraExtraIdHoraExtraCabecera?: number;
        IdHoraExtraTipo?: number;
        IdHoraExtraTotalHorasExtrasReales?: number;
        IdHoraExtraTotalHorasExtrasConvertidas?: number;
        IdHoraExtraIdAusenciaProgramadaTipo?: number;
        IdHoraExtraDia?: string;
        IdHoraExtraEstado?: string;
        IdHoraExtraMotivoCancelacion?: string;
        IdHoraExtraFechaAceptacionCancelacion?: string;
        IdEmpleado?: number;
        Empleado?: string;
    }

    export namespace HorasExtraConsumidasRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Kairos.HorasExtraConsumidas';
        export const deletePermission = 'Kairos:Admin';
        export const insertPermission = 'Kairos:Admin';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Admin';

        export declare const enum Fields {
            Id = "Id",
            IdHoraExtra = "IdHoraExtra",
            Tiempo = "Tiempo",
            Dia = "Dia",
            FechaAutorizacion = "FechaAutorizacion",
            IdHoraExtraCodigoCliente = "IdHoraExtraCodigoCliente",
            IdHoraExtraIdEmpleado = "IdHoraExtraIdEmpleado",
            IdHoraExtraFecha = "IdHoraExtraFecha",
            IdHoraExtraIdHoraExtraCabecera = "IdHoraExtraIdHoraExtraCabecera",
            IdHoraExtraTipo = "IdHoraExtraTipo",
            IdHoraExtraTotalHorasExtrasReales = "IdHoraExtraTotalHorasExtrasReales",
            IdHoraExtraTotalHorasExtrasConvertidas = "IdHoraExtraTotalHorasExtrasConvertidas",
            IdHoraExtraIdAusenciaProgramadaTipo = "IdHoraExtraIdAusenciaProgramadaTipo",
            IdHoraExtraDia = "IdHoraExtraDia",
            IdHoraExtraEstado = "IdHoraExtraEstado",
            IdHoraExtraMotivoCancelacion = "IdHoraExtraMotivoCancelacion",
            IdHoraExtraFechaAceptacionCancelacion = "IdHoraExtraFechaAceptacionCancelacion",
            IdEmpleado = "IdEmpleado",
            Empleado = "Empleado"
        }
    }
}

