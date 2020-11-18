namespace ProyectosZec.Roezec {
    export interface ActividadesRow {
        Id?: number;
        IdNace?: number;
        IdEmpresa?: number;
        Actividad?: string;
        Empresa?: string;
        Cif?: string;
        Direccion?: string;
        Cp?: string;
        Poblacion?: string;
        Provincia?: string;
        Isla?: string;
        NotasMarginales?: string;
        AnyoExpediente?: number;
        NumExpediente?: number;
        Agencia?: number;
        Tecnico?: string;
        FormaJuridica?: string;
        Superficie?: number;
        ExentaAreaAcotada?: string;
        MotivosExencion?: string;
        ObjetivoEmpleo?: number;
        ObjetivoInversion?: number;
        ObservacionesEmpleo?: string;
        ObservacionesInversion?: string;
        PreEmpleo?: number;
        PreInversion?: number;
        TrasEmpleo?: number;
        TrasInversion?: number;
        FechaAlta?: string;
        FechaModificacion?: string;
        FechaBaja?: string;
        Situacion?: string;
        UsrAlta?: string;
        UsrModificacion?: string;
        UsrBaja?: string;
    }

    export namespace ActividadesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Actividad';
        export const localTextPrefix = 'Roezec.Actividades';
        export const deletePermission = 'Roezec:Read';
        export const insertPermission = 'Roezec:Read';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Read';

        export declare const enum Fields {
            Id = "Id",
            IdNace = "IdNace",
            IdEmpresa = "IdEmpresa",
            Actividad = "Actividad",
            Empresa = "Empresa",
            Cif = "Cif",
            Direccion = "Direccion",
            Cp = "Cp",
            Poblacion = "Poblacion",
            Provincia = "Provincia",
            Isla = "Isla",
            NotasMarginales = "NotasMarginales",
            AnyoExpediente = "AnyoExpediente",
            NumExpediente = "NumExpediente",
            Agencia = "Agencia",
            Tecnico = "Tecnico",
            FormaJuridica = "FormaJuridica",
            Superficie = "Superficie",
            ExentaAreaAcotada = "ExentaAreaAcotada",
            MotivosExencion = "MotivosExencion",
            ObjetivoEmpleo = "ObjetivoEmpleo",
            ObjetivoInversion = "ObjetivoInversion",
            ObservacionesEmpleo = "ObservacionesEmpleo",
            ObservacionesInversion = "ObservacionesInversion",
            PreEmpleo = "PreEmpleo",
            PreInversion = "PreInversion",
            TrasEmpleo = "TrasEmpleo",
            TrasInversion = "TrasInversion",
            FechaAlta = "FechaAlta",
            FechaModificacion = "FechaModificacion",
            FechaBaja = "FechaBaja",
            Situacion = "Situacion",
            UsrAlta = "UsrAlta",
            UsrModificacion = "UsrModificacion",
            UsrBaja = "UsrBaja"
        }
    }
}

