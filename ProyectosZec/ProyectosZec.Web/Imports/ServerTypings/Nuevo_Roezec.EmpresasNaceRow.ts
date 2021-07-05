
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
        EmpresaPolblacion?: string;
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
        EmpresaFechaAltaRegistro?: string;
        EmpresaFechaBajaRegistro?: string;
        EmpresaFechaBajaEfecto?: string;
        EmpresaFechaRemisionCt?: string;
        EmpresaFechaInformeCt?: string;
        EmpresaFechaRemisionCr?: string;
        EmpresaFechaCaducidadInscripcion?: string;
        EmpresaSentidoCr?: number;
        EmpresaSentidoCt?: number;
        EmpresaFechaInsSolicitud?: string;
        EmpresaFechaInsResolucion?: string;
        EmpresaFechaInsNotificacion?: string;
        EmpresaNumTasaLiquidacion?: string;
        Nace?: string;
        NaceCodigo?: string;
        NaceDescripcion?: string;
        NaceSubsectorId?: number;
    }

    export namespace EmpresasNaceRow {
        export const idProperty = 'EmpresaNaceId';
        export const localTextPrefix = 'Nuevo_Roezec.EmpresasNace';
        export const deletePermission = 'Roezec:General';
        export const insertPermission = 'Roezec:General';
        export const readPermission = 'Roezec:General';
        export const updatePermission = 'Roezec:General';

        export namespace Fields {
            export declare const EmpresaNaceId;
            export declare const EmpresaId;
            export declare const NaceId;
            export declare const EmpresaRazon;
            export declare const EmpresaFormaJuridicaId;
            export declare const EmpresaNExpediente;
            export declare const EmpresaTecnicoId;
            export declare const EmpresaCif;
            export declare const EmpresaDireccion;
            export declare const EmpresaPolblacion;
            export declare const EmpresaIslaId;
            export declare const EmpresaTelefonoFijo;
            export declare const EmpresaMovil;
            export declare const EmpresaEmail;
            export declare const EmpresaProyectoId;
            export declare const EmpresaExpediente;
            export declare const EmpresaMotivoExencion;
            export declare const EmpresaTipologiaCapitalId;
            export declare const EmpresaTipoGarantiaTasaId;
            export declare const EmpresaEmpleoTraspasado;
            export declare const EmpresaEmpleo6Meses;
            export declare const EmpresaEmpleoPromedio;
            export declare const EmpresaEmpleoPromedio2Anos;
            export declare const EmpresaInversionTraspasada;
            export declare const EmpresaInversion2Anos;
            export declare const EmpresaEstadoEmpresaId;
            export declare const EmpresaFechaAltaRegistro;
            export declare const EmpresaFechaBajaRegistro;
            export declare const EmpresaFechaBajaEfecto;
            export declare const EmpresaFechaRemisionCt;
            export declare const EmpresaFechaInformeCt;
            export declare const EmpresaFechaRemisionCr;
            export declare const EmpresaFechaCaducidadInscripcion;
            export declare const EmpresaSentidoCr;
            export declare const EmpresaSentidoCt;
            export declare const EmpresaFechaInsSolicitud;
            export declare const EmpresaFechaInsResolucion;
            export declare const EmpresaFechaInsNotificacion;
            export declare const EmpresaNumTasaLiquidacion;
            export declare const Nace;
            export declare const NaceCodigo;
            export declare const NaceDescripcion;
            export declare const NaceSubsectorId;
        }

        [
            'EmpresaNaceId',
            'EmpresaId',
            'NaceId',
            'EmpresaRazon',
            'EmpresaFormaJuridicaId',
            'EmpresaNExpediente',
            'EmpresaTecnicoId',
            'EmpresaCif',
            'EmpresaDireccion',
            'EmpresaPolblacion',
            'EmpresaIslaId',
            'EmpresaTelefonoFijo',
            'EmpresaMovil',
            'EmpresaEmail',
            'EmpresaProyectoId',
            'EmpresaExpediente',
            'EmpresaMotivoExencion',
            'EmpresaTipologiaCapitalId',
            'EmpresaTipoGarantiaTasaId',
            'EmpresaEmpleoTraspasado',
            'EmpresaEmpleo6Meses',
            'EmpresaEmpleoPromedio',
            'EmpresaEmpleoPromedio2Anos',
            'EmpresaInversionTraspasada',
            'EmpresaInversion2Anos',
            'EmpresaEstadoEmpresaId',
            'EmpresaFechaAltaRegistro',
            'EmpresaFechaBajaRegistro',
            'EmpresaFechaBajaEfecto',
            'EmpresaFechaRemisionCt',
            'EmpresaFechaInformeCt',
            'EmpresaFechaRemisionCr',
            'EmpresaFechaCaducidadInscripcion',
            'EmpresaSentidoCr',
            'EmpresaSentidoCt',
            'EmpresaFechaInsSolicitud',
            'EmpresaFechaInsResolucion',
            'EmpresaFechaInsNotificacion',
            'EmpresaNumTasaLiquidacion',
            'Nace',
            'NaceCodigo',
            'NaceDescripcion',
            'NaceSubsectorId'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}