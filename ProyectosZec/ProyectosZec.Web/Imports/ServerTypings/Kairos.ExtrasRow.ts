namespace ProyectosZec.Kairos {
    export interface ExtrasRow {
        Id?: number;
        CodigoCliente?: number;
        IdEmpleado?: number;
        Fecha?: string;
        IdHoraExtraCabecera?: number;
        Tipo?: number;
        TotalHorasExtrasReales?: number;
        TotalHorasExtrasConvertidas?: number;
        IdAusenciaProgramadaTipo?: number;
        Dia?: string;
        Estado?: string;
        MotivoCancelacion?: string;
        FechaAceptacionCancelacion?: string;
        IdHoraExtraCabeceraCodigoCliente?: number;
        IdHoraExtraCabeceraCodigo?: string;
        IdHoraExtraCabeceraDescripcion?: string;
        IdHoraExtraCabeceraFechaBorrado?: string;
        Empleado?: string;
        DptoId?: number;
        SedeId?: number;
        Sede?: string;
        Convertidas?: string;
        EstadoDesc?: string;
        Consumidas?: HorasExtraConsumidasRow[];
        TotalConsumidas?: number;
        Pendientes?: number;
    }

    export namespace ExtrasRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Dia';
        export const localTextPrefix = 'Kairos.Extras';
        export const deletePermission = 'Kairos:Admin';
        export const insertPermission = 'Kairos:Admin';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Admin';

        export declare const enum Fields {
            Id = "Id",
            CodigoCliente = "CodigoCliente",
            IdEmpleado = "IdEmpleado",
            Fecha = "Fecha",
            IdHoraExtraCabecera = "IdHoraExtraCabecera",
            Tipo = "Tipo",
            TotalHorasExtrasReales = "TotalHorasExtrasReales",
            TotalHorasExtrasConvertidas = "TotalHorasExtrasConvertidas",
            IdAusenciaProgramadaTipo = "IdAusenciaProgramadaTipo",
            Dia = "Dia",
            Estado = "Estado",
            MotivoCancelacion = "MotivoCancelacion",
            FechaAceptacionCancelacion = "FechaAceptacionCancelacion",
            IdHoraExtraCabeceraCodigoCliente = "IdHoraExtraCabeceraCodigoCliente",
            IdHoraExtraCabeceraCodigo = "IdHoraExtraCabeceraCodigo",
            IdHoraExtraCabeceraDescripcion = "IdHoraExtraCabeceraDescripcion",
            IdHoraExtraCabeceraFechaBorrado = "IdHoraExtraCabeceraFechaBorrado",
            Empleado = "Empleado",
            DptoId = "DptoId",
            SedeId = "SedeId",
            Sede = "Sede",
            Convertidas = "Convertidas",
            EstadoDesc = "EstadoDesc",
            Consumidas = "Consumidas",
            TotalConsumidas = "TotalConsumidas",
            Pendientes = "Pendientes"
        }
    }
}

