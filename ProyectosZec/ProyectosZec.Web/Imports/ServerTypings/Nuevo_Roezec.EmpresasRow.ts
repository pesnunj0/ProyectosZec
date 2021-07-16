namespace ProyectosZec.Nuevo_Roezec {
    export interface EmpresasRow {
        EmpresaId?: number;
        Razon?: string;
        FormaJuridicaId?: number;
        TecnicoId?: number;
        Cif?: string;
        Direccion?: string;
        Poblacion?: string;
        Cp?: string;
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
        ContactosList?: EmpresasContactosRow[];
        NacesList?: EmpresasNaceRow[];
        HistorialList?: HistorialEmpresasRow[];
    }

    export namespace EmpresasRow {
        export const idProperty = 'EmpresaId';
        export const nameProperty = 'Razon';
        export const localTextPrefix = 'Nuevo_Roezec.Empresas';
        export const lookupKey = 'Nuevo_Roezec.Empresas';

        export function getLookup(): Q.Lookup<EmpresasRow> {
            return Q.getLookup<EmpresasRow>('Nuevo_Roezec.Empresas');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            EmpresaId = "EmpresaId",
            Razon = "Razon",
            FormaJuridicaId = "FormaJuridicaId",
            TecnicoId = "TecnicoId",
            Cif = "Cif",
            Direccion = "Direccion",
            Poblacion = "Poblacion",
            Cp = "Cp",
            IslaId = "IslaId",
            TelefonoFijo = "TelefonoFijo",
            Movil = "Movil",
            Email = "Email",
            ProyectoId = "ProyectoId",
            Expediente = "Expediente",
            MotivoExencion = "MotivoExencion",
            TipologiaCapitalId = "TipologiaCapitalId",
            TipoGarantiaTasaId = "TipoGarantiaTasaId",
            EmpleoTraspasado = "EmpleoTraspasado",
            Empleo6Meses = "Empleo6Meses",
            EmpleoPromedio = "EmpleoPromedio",
            EmpleoPromedio2Anos = "EmpleoPromedio2Anos",
            InversionTraspasada = "InversionTraspasada",
            Inversion2Anos = "Inversion2Anos",
            EstadoEmpresaId = "EstadoEmpresaId",
            NumTasaLiquidacion = "NumTasaLiquidacion",
            FormaJuridicaJuridica = "FormaJuridicaJuridica",
            TecnicoNombreTecnico = "TecnicoNombreTecnico",
            Tecnico = "Tecnico",
            IslaNombreIsla = "IslaNombreIsla",
            Isla = "Isla",
            Proyecto = "Proyecto",
            ProyectoDescripcion = "ProyectoDescripcion",
            ProyectoFechaPrimerContacto = "ProyectoFechaPrimerContacto",
            ProyectoOrigenId = "ProyectoOrigenId",
            ProyectoEstadoProyectoId = "ProyectoEstadoProyectoId",
            ProyectoTecnicoId = "ProyectoTecnicoId",
            ProyectoConfidencial = "ProyectoConfidencial",
            ProyectoContactoPrincipalId = "ProyectoContactoPrincipalId",
            ProyectoPrescriptorId = "ProyectoPrescriptorId",
            ProyectoAccionId = "ProyectoAccionId",
            ProyectoInversion = "ProyectoInversion",
            ProyectoUserId = "ProyectoUserId",
            ProyectoFechaModificacion = "ProyectoFechaModificacion",
            TipologiaCapitalCapital = "TipologiaCapitalCapital",
            TipoGarantiaTasaGarantiaTasa = "TipoGarantiaTasaGarantiaTasa",
            EstadoEmpresaEstado = "EstadoEmpresaEstado",
            ContactosList = "ContactosList",
            NacesList = "NacesList",
            HistorialList = "HistorialList"
        }
    }
}

