namespace ProyectosZec.Nuevo_Roezec {
    export interface HistorialEmpresasRow {
        HistorialId?: number;
        EmpresaId?: number;
        ProcedimientoId?: number;
        FechaInicio?: string;
        FechaResolucion?: string;
        SentidoResolucion?: boolean;
        FechaEfecto?: string;
        AcuseInicio?: string;
        PersonaAcuseIncioId?: number;
        AcuseResolucion?: string;
        PersonaAcuseResolucionId?: number;
        Observaciones?: string;
        Ficheros?: string;
        EmpresaRazon?: string;
        EmpresaFormaJuridicaId?: number;
        EmpresaNExpediente?: string;
        EmpresaTecnicoId?: number;
        EmpresaCif?: string;
        EmpresaDireccion?: string;
        EmpresaPoblacion?: string;
        EmpresaIslaId?: number;
        EmpresaTelefonoFijo?: string;
        EmpresaMovil?: string;
        EmpresaEmail?: string;
        EmpresaProyectoId?: number;
        EmpresaExpediente?: string;
        EmpresaMotivoExencion?: string;
        EmpresaTipologiaCapitalId?: number;
        EmpresaTipoGarantiaTasaId?: number;
        EmpresaEmpleoTraspasado?: number;
        EmpresaEmpleo6Meses?: number;
        EmpresaEmpleoPromedio?: number;
        EmpresaEmpleoPromedio2Anos?: number;
        EmpresaInversionTraspasada?: number;
        EmpresaInversion2Anos?: number;
        EmpresaEstadoEmpresaId?: number;
        EmpresaNumTasaLiquidacion?: string;
        Procedimiento?: string;
        PersonaAcuseIncioNombre?: string;
        PersonaAcuseIncioApellidos?: string;
        PersonaAcuseIncioNif?: string;
        PersonaAcuseIncioTelefonoFijo?: string;
        PersonaAcuseIncioMovil?: string;
        PersonaAcuseIncioIdiomaId?: number;
        PersonaAcuseIncioEmail?: string;
        PersonaAcuseResolucionNombre?: string;
        PersonaAcuseResolucionApellidos?: string;
        PersonaAcuseResolucionNif?: string;
        PersonaAcuseResolucionTelefonoFijo?: string;
        PersonaAcuseResolucionMovil?: string;
        PersonaAcuseResolucionIdiomaId?: number;
        PersonaAcuseResolucionEmail?: string;
    }

    export namespace HistorialEmpresasRow {
        export const idProperty = 'HistorialId';
        export const nameProperty = 'Observaciones';
        export const localTextPrefix = 'Nuevo_Roezec.HistorialEmpresas';
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            HistorialId = "HistorialId",
            EmpresaId = "EmpresaId",
            ProcedimientoId = "ProcedimientoId",
            FechaInicio = "FechaInicio",
            FechaResolucion = "FechaResolucion",
            SentidoResolucion = "SentidoResolucion",
            FechaEfecto = "FechaEfecto",
            AcuseInicio = "AcuseInicio",
            PersonaAcuseIncioId = "PersonaAcuseIncioId",
            AcuseResolucion = "AcuseResolucion",
            PersonaAcuseResolucionId = "PersonaAcuseResolucionId",
            Observaciones = "Observaciones",
            Ficheros = "Ficheros",
            EmpresaRazon = "EmpresaRazon",
            EmpresaFormaJuridicaId = "EmpresaFormaJuridicaId",
            EmpresaNExpediente = "EmpresaNExpediente",
            EmpresaTecnicoId = "EmpresaTecnicoId",
            EmpresaCif = "EmpresaCif",
            EmpresaDireccion = "EmpresaDireccion",
            EmpresaPoblacion = "EmpresaPoblacion",
            EmpresaIslaId = "EmpresaIslaId",
            EmpresaTelefonoFijo = "EmpresaTelefonoFijo",
            EmpresaMovil = "EmpresaMovil",
            EmpresaEmail = "EmpresaEmail",
            EmpresaProyectoId = "EmpresaProyectoId",
            EmpresaExpediente = "EmpresaExpediente",
            EmpresaMotivoExencion = "EmpresaMotivoExencion",
            EmpresaTipologiaCapitalId = "EmpresaTipologiaCapitalId",
            EmpresaTipoGarantiaTasaId = "EmpresaTipoGarantiaTasaId",
            EmpresaEmpleoTraspasado = "EmpresaEmpleoTraspasado",
            EmpresaEmpleo6Meses = "EmpresaEmpleo6Meses",
            EmpresaEmpleoPromedio = "EmpresaEmpleoPromedio",
            EmpresaEmpleoPromedio2Anos = "EmpresaEmpleoPromedio2Anos",
            EmpresaInversionTraspasada = "EmpresaInversionTraspasada",
            EmpresaInversion2Anos = "EmpresaInversion2Anos",
            EmpresaEstadoEmpresaId = "EmpresaEstadoEmpresaId",
            EmpresaNumTasaLiquidacion = "EmpresaNumTasaLiquidacion",
            Procedimiento = "Procedimiento",
            PersonaAcuseIncioNombre = "PersonaAcuseIncioNombre",
            PersonaAcuseIncioApellidos = "PersonaAcuseIncioApellidos",
            PersonaAcuseIncioNif = "PersonaAcuseIncioNif",
            PersonaAcuseIncioTelefonoFijo = "PersonaAcuseIncioTelefonoFijo",
            PersonaAcuseIncioMovil = "PersonaAcuseIncioMovil",
            PersonaAcuseIncioIdiomaId = "PersonaAcuseIncioIdiomaId",
            PersonaAcuseIncioEmail = "PersonaAcuseIncioEmail",
            PersonaAcuseResolucionNombre = "PersonaAcuseResolucionNombre",
            PersonaAcuseResolucionApellidos = "PersonaAcuseResolucionApellidos",
            PersonaAcuseResolucionNif = "PersonaAcuseResolucionNif",
            PersonaAcuseResolucionTelefonoFijo = "PersonaAcuseResolucionTelefonoFijo",
            PersonaAcuseResolucionMovil = "PersonaAcuseResolucionMovil",
            PersonaAcuseResolucionIdiomaId = "PersonaAcuseResolucionIdiomaId",
            PersonaAcuseResolucionEmail = "PersonaAcuseResolucionEmail"
        }
    }
}

