namespace ProyectosZec.Kairos {
    export interface KrsEmpleadosRow {
        Id?: number;
        CodigoCliente?: number;
        Nombre?: string;
        CodigoValidacion?: string;
        FechaBaja?: string;
        Pin?: number;
        Tecnico?: boolean;
        UsoHorario?: string;
        SacarFotoFichaje?: boolean;
        FechaActualizacion?: string;
        FechaBorrado?: string;
        NumeroTarjetaFichaje?: string;
        IdDepartamento?: number;
        IdEmpresa?: number;
        Email?: string;
        PermiteRecordatorio?: boolean;
        PermiteFichajeAutomatico?: boolean;
        IdEmpresaFichajeAutomatico?: number;
        ProgramaExternoIdEmpleado?: string;
        ProgramaExternoDescripcion?: string;
        IdHoraExtraCabecera?: number;
        ClaveAccesoWeb?: string;
        PermiteFichajeWeb?: boolean;
        IdHoraExtraCabeceraCodigoCliente?: number;
        IdHoraExtraCabeceraCodigo?: string;
        IdHoraExtraCabeceraDescripcion?: string;
        IdHoraExtraCabeceraFechaBorrado?: string;
    }

    export namespace KrsEmpleadosRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nombre';
        export const localTextPrefix = 'Kairos.KrsEmpleados';
        export const lookupKey = 'Kairos.KrsEmpleados';

        export function getLookup(): Q.Lookup<KrsEmpleadosRow> {
            return Q.getLookup<KrsEmpleadosRow>('Kairos.KrsEmpleados');
        }
        export const deletePermission = 'Kairos:Delete';
        export const insertPermission = 'Kairos:Insert';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Modify';

        export declare const enum Fields {
            Id = "Id",
            CodigoCliente = "CodigoCliente",
            Nombre = "Nombre",
            CodigoValidacion = "CodigoValidacion",
            FechaBaja = "FechaBaja",
            Pin = "Pin",
            Tecnico = "Tecnico",
            UsoHorario = "UsoHorario",
            SacarFotoFichaje = "SacarFotoFichaje",
            FechaActualizacion = "FechaActualizacion",
            FechaBorrado = "FechaBorrado",
            NumeroTarjetaFichaje = "NumeroTarjetaFichaje",
            IdDepartamento = "IdDepartamento",
            IdEmpresa = "IdEmpresa",
            Email = "Email",
            PermiteRecordatorio = "PermiteRecordatorio",
            PermiteFichajeAutomatico = "PermiteFichajeAutomatico",
            IdEmpresaFichajeAutomatico = "IdEmpresaFichajeAutomatico",
            ProgramaExternoIdEmpleado = "ProgramaExternoIdEmpleado",
            ProgramaExternoDescripcion = "ProgramaExternoDescripcion",
            IdHoraExtraCabecera = "IdHoraExtraCabecera",
            ClaveAccesoWeb = "ClaveAccesoWeb",
            PermiteFichajeWeb = "PermiteFichajeWeb",
            IdHoraExtraCabeceraCodigoCliente = "IdHoraExtraCabeceraCodigoCliente",
            IdHoraExtraCabeceraCodigo = "IdHoraExtraCabeceraCodigo",
            IdHoraExtraCabeceraDescripcion = "IdHoraExtraCabeceraDescripcion",
            IdHoraExtraCabeceraFechaBorrado = "IdHoraExtraCabeceraFechaBorrado"
        }
    }
}

