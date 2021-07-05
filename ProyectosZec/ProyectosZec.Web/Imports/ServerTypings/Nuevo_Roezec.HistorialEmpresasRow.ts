
namespace ProyectosZec.Nuevo_Roezec {
    export interface HistorialEmpresasRow {
        HistorialId?: number;
        EmpresaId?: number;
        ProcedimientoId?: number;
        FechaInicio?: string;
        FechaResolucion?: string;
        SentidoResolucion?: number;
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
        export const deletePermission = 'Roezec:General';
        export const insertPermission = 'Roezec:General';
        export const readPermission = 'Roezec:General';
        export const updatePermission = 'Roezec:General';

        export namespace Fields {
            export declare const HistorialId;
            export declare const EmpresaId;
            export declare const ProcedimientoId;
            export declare const FechaInicio;
            export declare const FechaResolucion;
            export declare const SentidoResolucion;
            export declare const FechaEfecto;
            export declare const AcuseInicio;
            export declare const PersonaAcuseIncioId;
            export declare const AcuseResolucion;
            export declare const PersonaAcuseResolucionId;
            export declare const Observaciones;
            export declare const Ficheros;
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
            export declare const Procedimiento;
            export declare const PersonaAcuseIncioNombre;
            export declare const PersonaAcuseIncioApellidos;
            export declare const PersonaAcuseIncioNif;
            export declare const PersonaAcuseIncioTelefonoFijo;
            export declare const PersonaAcuseIncioMovil;
            export declare const PersonaAcuseIncioIdiomaId;
            export declare const PersonaAcuseIncioEmail;
            export declare const PersonaAcuseResolucionNombre;
            export declare const PersonaAcuseResolucionApellidos;
            export declare const PersonaAcuseResolucionNif;
            export declare const PersonaAcuseResolucionTelefonoFijo;
            export declare const PersonaAcuseResolucionMovil;
            export declare const PersonaAcuseResolucionIdiomaId;
            export declare const PersonaAcuseResolucionEmail;
        }

        [
            'HistorialId',
            'EmpresaId',
            'ProcedimientoId',
            'FechaInicio',
            'FechaResolucion',
            'SentidoResolucion',
            'FechaEfecto',
            'AcuseInicio',
            'PersonaAcuseIncioId',
            'AcuseResolucion',
            'PersonaAcuseResolucionId',
            'Observaciones',
            'Ficheros',
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
            'Procedimiento',
            'PersonaAcuseIncioNombre',
            'PersonaAcuseIncioApellidos',
            'PersonaAcuseIncioNif',
            'PersonaAcuseIncioTelefonoFijo',
            'PersonaAcuseIncioMovil',
            'PersonaAcuseIncioIdiomaId',
            'PersonaAcuseIncioEmail',
            'PersonaAcuseResolucionNombre',
            'PersonaAcuseResolucionApellidos',
            'PersonaAcuseResolucionNif',
            'PersonaAcuseResolucionTelefonoFijo',
            'PersonaAcuseResolucionMovil',
            'PersonaAcuseResolucionIdiomaId',
            'PersonaAcuseResolucionEmail'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}