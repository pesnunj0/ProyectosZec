namespace ProyectosZec.Kairos {
    export interface DiarioRow {
        Id?: number;
        IdEmpleado?: number;
        IdDepartamento?: number;
        Empleado?: string;
        Fecha?: string;
        Entrada?: string;
        HoraEntrada?: string;
        Salida?: string;
        HoraSalida?: string;
        SedeId?: number;
        Sede?: string;
    }

    export namespace DiarioRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Empleado';
        export const localTextPrefix = 'Kairos.Diario';
        export const deletePermission = 'Kairos:Delete';
        export const insertPermission = 'Kairos:Insert';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Modify';

        export declare const enum Fields {
            Id = "Id",
            IdEmpleado = "IdEmpleado",
            IdDepartamento = "IdDepartamento",
            Empleado = "Empleado",
            Fecha = "Fecha",
            Entrada = "Entrada",
            HoraEntrada = "HoraEntrada",
            Salida = "Salida",
            HoraSalida = "HoraSalida",
            SedeId = "SedeId",
            Sede = "Sede"
        }
    }
}

