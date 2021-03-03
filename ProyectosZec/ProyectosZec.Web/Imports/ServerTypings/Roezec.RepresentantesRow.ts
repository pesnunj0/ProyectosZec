namespace ProyectosZec.Roezec {
    export interface RepresentantesRow {
        Id?: number;
        TipoDoc?: string;
        Doc?: string;
        IdRepresentanteFisico?: number;
        Nombre?: string;
        Direccion?: string;
        Cp?: string;
        Poblacion?: string;
        Provincia?: string;
        Pais?: string;
        Email?: string;
        Telefono?: string;
        Descripcion?: string;
        IdEmpresa?: number;
        FechaAlta?: string;
        FechaModificacion?: string;
        FechaBaja?: string;
        UsrAlta?: string;
        UsrModificacion?: string;
        UsrBaja?: string;
        MotivoBaja?: string;
        Empresa?: string;
        Cif?: string;
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
        SituacionId?: string;
        Estado?: string;
    }

    export namespace RepresentantesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'TipoDoc';
        export const localTextPrefix = 'Roezec.Representantes';
        export const deletePermission = 'Roezec:Delete';
        export const insertPermission = 'Roezec:Insert';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            Id = "Id",
            TipoDoc = "TipoDoc",
            Doc = "Doc",
            IdRepresentanteFisico = "IdRepresentanteFisico",
            Nombre = "Nombre",
            Direccion = "Direccion",
            Cp = "Cp",
            Poblacion = "Poblacion",
            Provincia = "Provincia",
            Pais = "Pais",
            Email = "Email",
            Telefono = "Telefono",
            Descripcion = "Descripcion",
            IdEmpresa = "IdEmpresa",
            FechaAlta = "FechaAlta",
            FechaModificacion = "FechaModificacion",
            FechaBaja = "FechaBaja",
            UsrAlta = "UsrAlta",
            UsrModificacion = "UsrModificacion",
            UsrBaja = "UsrBaja",
            MotivoBaja = "MotivoBaja",
            Empresa = "Empresa",
            Cif = "Cif",
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
            SituacionId = "SituacionId",
            Estado = "Estado"
        }
    }
}

