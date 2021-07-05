
namespace ProyectosZec.Nuevo_Roezec {
    export interface EmpresasRow {
        EmpresaId?: number;
        Razon?: string;
        FormaJuridicaId?: number;
        NExpediente?: string;
        TecnicoId?: number;
        Cif?: string;
        Direccion?: string;
        Polblacion?: string;
        IslaId?: number;
        TelefonoFijo?: string;
        Movil?: string;
        Email?: string;
        ProyectoId?: number;
        Expediente?: string;
        MotivoExencion?: string;
        TipologiaCapitalId?: number;
        TipoGarantiaTasaId?: number;
        EmpleoTraspasado?: number;
        Empleo6Meses?: number;
        EmpleoPromedio?: number;
        EmpleoPromedio2Anos?: number;
        InversionTraspasada?: number;
        Inversion2Anos?: number;
        EstadoEmpresaId?: number;
        FechaAltaRegistro?: string;
        FechaBajaRegistro?: string;
        FechaBajaEfecto?: string;
        FechaRemisionCt?: string;
        FechaInformeCt?: string;
        FechaRemisionCr?: string;
        FechaCaducidadInscripcion?: string;
        SentidoCr?: number;
        SentidoCt?: number;
        FechaInsSolicitud?: string;
        FechaInsResolucion?: string;
        FechaInsNotificacion?: string;
        NumTasaLiquidacion?: string;
        FormaJuridicaJuridica?: string;
        TecnicoNombreTecnico?: string;
        Tecnico?: string;
        IslaNombreIsla?: string;
        Isla?: string;
        Proyecto?: string;
        ProyectoDescripcion?: string;
        ProyectoFechaPrimerContacto?: string;
        ProyectoOrigenId?: number;
        ProyectoEstadoProyectoId?: number;
        ProyectoTecnicoId?: number;
        ProyectoConfidencial?: number;
        ProyectoContactoPrincipalId?: number;
        ProyectoPrescriptorId?: number;
        ProyectoAccionId?: number;
        ProyectoInversion?: number;
        ProyectoUserId?: number;
        ProyectoFechaModificacion?: string;
        TipologiaCapitalCapital?: string;
        TipoGarantiaTasaGarantiaTasa?: string;
        EstadoEmpresaEstado?: string;
    }

    export namespace EmpresasRow {
        export const idProperty = 'EmpresaId';
        export const nameProperty = 'Razon';
        export const localTextPrefix = 'Nuevo_Roezec.Empresas';
        export const deletePermission = 'Roezec:General';
        export const insertPermission = 'Roezec:General';
        export const readPermission = 'Roezec:General';
        export const updatePermission = 'Roezec:General';

        export namespace Fields {
            export declare const EmpresaId;
            export declare const Razon;
            export declare const FormaJuridicaId;
            export declare const NExpediente;
            export declare const TecnicoId;
            export declare const Cif;
            export declare const Direccion;
            export declare const Polblacion;
            export declare const IslaId;
            export declare const TelefonoFijo;
            export declare const Movil;
            export declare const Email;
            export declare const ProyectoId;
            export declare const Expediente;
            export declare const MotivoExencion;
            export declare const TipologiaCapitalId;
            export declare const TipoGarantiaTasaId;
            export declare const EmpleoTraspasado;
            export declare const Empleo6Meses;
            export declare const EmpleoPromedio;
            export declare const EmpleoPromedio2Anos;
            export declare const InversionTraspasada;
            export declare const Inversion2Anos;
            export declare const EstadoEmpresaId;
            export declare const FechaAltaRegistro;
            export declare const FechaBajaRegistro;
            export declare const FechaBajaEfecto;
            export declare const FechaRemisionCt;
            export declare const FechaInformeCt;
            export declare const FechaRemisionCr;
            export declare const FechaCaducidadInscripcion;
            export declare const SentidoCr;
            export declare const SentidoCt;
            export declare const FechaInsSolicitud;
            export declare const FechaInsResolucion;
            export declare const FechaInsNotificacion;
            export declare const NumTasaLiquidacion;
            export declare const FormaJuridicaJuridica;
            export declare const TecnicoNombreTecnico;
            export declare const Tecnico;
            export declare const IslaNombreIsla;
            export declare const Isla;
            export declare const Proyecto;
            export declare const ProyectoDescripcion;
            export declare const ProyectoFechaPrimerContacto;
            export declare const ProyectoOrigenId;
            export declare const ProyectoEstadoProyectoId;
            export declare const ProyectoTecnicoId;
            export declare const ProyectoConfidencial;
            export declare const ProyectoContactoPrincipalId;
            export declare const ProyectoPrescriptorId;
            export declare const ProyectoAccionId;
            export declare const ProyectoInversion;
            export declare const ProyectoUserId;
            export declare const ProyectoFechaModificacion;
            export declare const TipologiaCapitalCapital;
            export declare const TipoGarantiaTasaGarantiaTasa;
            export declare const EstadoEmpresaEstado;
        }

        [
            'EmpresaId',
            'Razon',
            'FormaJuridicaId',
            'NExpediente',
            'TecnicoId',
            'Cif',
            'Direccion',
            'Polblacion',
            'IslaId',
            'TelefonoFijo',
            'Movil',
            'Email',
            'ProyectoId',
            'Expediente',
            'MotivoExencion',
            'TipologiaCapitalId',
            'TipoGarantiaTasaId',
            'EmpleoTraspasado',
            'Empleo6Meses',
            'EmpleoPromedio',
            'EmpleoPromedio2Anos',
            'InversionTraspasada',
            'Inversion2Anos',
            'EstadoEmpresaId',
            'FechaAltaRegistro',
            'FechaBajaRegistro',
            'FechaBajaEfecto',
            'FechaRemisionCt',
            'FechaInformeCt',
            'FechaRemisionCr',
            'FechaCaducidadInscripcion',
            'SentidoCr',
            'SentidoCt',
            'FechaInsSolicitud',
            'FechaInsResolucion',
            'FechaInsNotificacion',
            'NumTasaLiquidacion',
            'FormaJuridicaJuridica',
            'TecnicoNombreTecnico',
            'Tecnico',
            'IslaNombreIsla',
            'Isla',
            'Proyecto',
            'ProyectoDescripcion',
            'ProyectoFechaPrimerContacto',
            'ProyectoOrigenId',
            'ProyectoEstadoProyectoId',
            'ProyectoTecnicoId',
            'ProyectoConfidencial',
            'ProyectoContactoPrincipalId',
            'ProyectoPrescriptorId',
            'ProyectoAccionId',
            'ProyectoInversion',
            'ProyectoUserId',
            'ProyectoFechaModificacion',
            'TipologiaCapitalCapital',
            'TipoGarantiaTasaGarantiaTasa',
            'EstadoEmpresaEstado'
        ].forEach(x => (<any>Fields)[x] = x);
    }
}