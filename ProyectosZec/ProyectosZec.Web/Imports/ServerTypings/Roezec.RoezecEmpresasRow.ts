namespace ProyectosZec.Roezec {
    export interface RoezecEmpresasRow {
        Id?: number;
        DenominacionSocial?: string;
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
        SituacionId?: string;
        Estado?: string;
        UsrAlta?: string;
        UsrModificacion?: string;
        UsrBaja?: string;
    }

    export namespace RoezecEmpresasRow {
        export const idProperty = 'Id';
        export const nameProperty = 'DenominacionSocial';
        export const localTextPrefix = 'Roezec.RoezecEmpresas';
        export const lookupKey = 'Roezec.RoezecEmpresas';

        export function getLookup(): Q.Lookup<RoezecEmpresasRow> {
            return Q.getLookup<RoezecEmpresasRow>('Roezec.RoezecEmpresas');
        }
        export const deletePermission = 'Roezec:Delete';
        export const insertPermission = 'Roezec:Insert';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            Id = "Id",
            DenominacionSocial = "DenominacionSocial",
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
            SituacionId = "SituacionId",
            Estado = "Estado",
            UsrAlta = "UsrAlta",
            UsrModificacion = "UsrModificacion",
            UsrBaja = "UsrBaja"
        }
    }
}

