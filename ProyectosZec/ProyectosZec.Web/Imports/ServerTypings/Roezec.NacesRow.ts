namespace ProyectosZec.Roezec {
    export interface NacesRow {
        Id?: number;
        Nace?: string;
        Codigo?: string;
        Actividad?: string;
        FechaAlta?: string;
        UsrAlta?: string;
    }

    export namespace NacesRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Nace';
        export const localTextPrefix = 'Roezec.Naces';
        export const deletePermission = 'Roezec:Delete';
        export const insertPermission = 'Roezec:Insert';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            Id = "Id",
            Nace = "Nace",
            Codigo = "Codigo",
            Actividad = "Actividad",
            FechaAlta = "FechaAlta",
            UsrAlta = "UsrAlta"
        }
    }
}

