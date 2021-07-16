namespace ProyectosZec.Nuevo_Roezec {
    export interface EmpresasContactosRow {
        EmpresaContactoId?: number;
        EmpresaId?: number;
        ContactoId?: number;
        TipoContactoId?: number;
        FechaBaja?: string;
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
        Fullname?: string;
        EmpresaNumTasaLiquidacion?: string;
        ContactoNombre?: string;
        ContactoApellidos?: string;
        ContactoNif?: string;
        ContactoTelefonoFijo?: string;
        ContactoMovil?: string;
        ContactoIdiomaId?: number;
        ContactoEmail?: string;
        TipoContactoContacto?: string;
    }

    export namespace EmpresasContactosRow {
        export const idProperty = 'EmpresaContactoId';
        export const localTextPrefix = 'Nuevo_Roezec.EmpresasContactos';
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            EmpresaContactoId = "EmpresaContactoId",
            EmpresaId = "EmpresaId",
            ContactoId = "ContactoId",
            TipoContactoId = "TipoContactoId",
            FechaBaja = "FechaBaja",
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
            Fullname = "Fullname",
            EmpresaNumTasaLiquidacion = "EmpresaNumTasaLiquidacion",
            ContactoNombre = "ContactoNombre",
            ContactoApellidos = "ContactoApellidos",
            ContactoNif = "ContactoNif",
            ContactoTelefonoFijo = "ContactoTelefonoFijo",
            ContactoMovil = "ContactoMovil",
            ContactoIdiomaId = "ContactoIdiomaId",
            ContactoEmail = "ContactoEmail",
            TipoContactoContacto = "TipoContactoContacto"
        }
    }
}

