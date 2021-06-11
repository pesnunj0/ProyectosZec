namespace ProyectosZec.Kairos {
    export interface AusenciasProgramadasRow {
        Id?: number;
        CodigoCliente?: number;
        IdEmpleado?: number;
        IdAusenciaProgramadaTipo?: number;
        FechaDesde?: string;
        FechaHasta?: string;
        FechaBorrado?: string;
        TotalHoras?: number;
        TotalDias?: number;
        Empleado?: string;
        IdAusenciaProgramadaTipoCodigoCliente?: number;
        IdAusenciaProgramadaTipoCodigo?: string;
        Descripcion?: string;
        IdAusenciaProgramadaTipoColorFondo?: string;
        IdAusenciaProgramadaTipoColorLetra?: string;
        IdAusenciaProgramadaTipoFechaBorrado?: string;
        IdAusenciaProgramadaTipoPermitirSolicitud?: boolean;
        IdAusenciaProgramadaTipoFechaActualizacion?: string;
        IdAusenciaProgramadaTipoContabilizarTiempo?: boolean;
    }

    export namespace AusenciasProgramadasRow {
        export const idProperty = 'Id';
        export const localTextPrefix = 'Kairos.AusenciasProgramadas';
        export const deletePermission = 'Kairos:Delete';
        export const insertPermission = 'Kairos:Insert';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Admin';

        export declare const enum Fields {
            Id = "Id",
            CodigoCliente = "CodigoCliente",
            IdEmpleado = "IdEmpleado",
            IdAusenciaProgramadaTipo = "IdAusenciaProgramadaTipo",
            FechaDesde = "FechaDesde",
            FechaHasta = "FechaHasta",
            FechaBorrado = "FechaBorrado",
            TotalHoras = "TotalHoras",
            TotalDias = "TotalDias",
            Empleado = "Empleado",
            IdAusenciaProgramadaTipoCodigoCliente = "IdAusenciaProgramadaTipoCodigoCliente",
            IdAusenciaProgramadaTipoCodigo = "IdAusenciaProgramadaTipoCodigo",
            Descripcion = "Descripcion",
            IdAusenciaProgramadaTipoColorFondo = "IdAusenciaProgramadaTipoColorFondo",
            IdAusenciaProgramadaTipoColorLetra = "IdAusenciaProgramadaTipoColorLetra",
            IdAusenciaProgramadaTipoFechaBorrado = "IdAusenciaProgramadaTipoFechaBorrado",
            IdAusenciaProgramadaTipoPermitirSolicitud = "IdAusenciaProgramadaTipoPermitirSolicitud",
            IdAusenciaProgramadaTipoFechaActualizacion = "IdAusenciaProgramadaTipoFechaActualizacion",
            IdAusenciaProgramadaTipoContabilizarTiempo = "IdAusenciaProgramadaTipoContabilizarTiempo"
        }
    }
}

