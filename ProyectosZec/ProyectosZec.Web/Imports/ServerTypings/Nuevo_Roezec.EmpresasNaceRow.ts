namespace ProyectosZec.Nuevo_Roezec {
    export interface EmpresasNaceRow {
        EmpresaNaceId?: number;
        EmpresaId?: number;
        NaceId?: number;
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
        Nace?: string;
        NaceCodigo?: string;
        NaceDescripcion?: string;
        NaceSubsectorId?: number;
    }

    export namespace EmpresasNaceRow {
        export const idProperty = 'EmpresaNaceId';
        export const localTextPrefix = 'Nuevo_Roezec.EmpresasNace';
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            EmpresaNaceId = "EmpresaNaceId",
            EmpresaId = "EmpresaId",
            NaceId = "NaceId",
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
            Nace = "Nace",
            NaceCodigo = "NaceCodigo",
            NaceDescripcion = "NaceDescripcion",
            NaceSubsectorId = "NaceSubsectorId"
        }
    }
}

