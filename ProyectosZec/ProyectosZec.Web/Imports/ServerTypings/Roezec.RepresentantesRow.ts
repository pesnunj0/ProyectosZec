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
            MotivoBaja = "MotivoBaja"
        }
    }
}

