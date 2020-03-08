namespace ProyectosZec.CuadroMandos {
    export interface ProyectosRow {
        ProyectoId?: number;
        Denominacion?: string;
        TecnicoId?: number;
        SubsectorId?: number;
        SectorId?: number;
        IslaId?: number;
        CapitalId?: number;
        Captacion?: string;
        PrescriptorInversorId?: number;
        Descripcion?: string;
        Contacto?: string;
        Telefono?: string;
        Email?: string;
        EstadoId?: number;
        FechaInicio?: string;
        FechaPresentacion?: string;
        FechaInscripcion?: string;
        FechaAutorizacion?: string;
        FechaAmpliacion?: string;
        FechaBaja?: string;
        Empleos?: number;
        Inversion?: number;
        EmpleoReal?: number;
        InversionReal?: number;
        Tecnico?: string;
        Nace?: string;
        Expediente?: string;
        SubsectorSectorId?: number;
        Subsector?: string;
        Sector?: string;
        Isla?: string;
        Capital?: string;
        PrescriptorInversor?: string;
        Estado?: string;
    }

    export namespace ProyectosRow {
        export const idProperty = 'ProyectoId';
        export const nameProperty = 'Denominacion';
        export const localTextPrefix = 'CuadroMandos.Proyectos';
        export const lookupKey = 'CuadroMandos.Proyectos';

        export function getLookup(): Q.Lookup<ProyectosRow> {
            return Q.getLookup<ProyectosRow>('CuadroMandos.Proyectos');
        }
        export const deletePermission = 'CuadroMandos:Delete';
        export const insertPermission = 'CuadroMandos:Insert';
        export const readPermission = 'CuadroMandos:Read';
        export const updatePermission = 'CuadroMandos:Modify';

        export declare const enum Fields {
            ProyectoId = "ProyectoId",
            Denominacion = "Denominacion",
            TecnicoId = "TecnicoId",
            SubsectorId = "SubsectorId",
            SectorId = "SectorId",
            IslaId = "IslaId",
            CapitalId = "CapitalId",
            Captacion = "Captacion",
            PrescriptorInversorId = "PrescriptorInversorId",
            Descripcion = "Descripcion",
            Contacto = "Contacto",
            Telefono = "Telefono",
            Email = "Email",
            EstadoId = "EstadoId",
            FechaInicio = "FechaInicio",
            FechaPresentacion = "FechaPresentacion",
            FechaInscripcion = "FechaInscripcion",
            FechaAutorizacion = "FechaAutorizacion",
            FechaAmpliacion = "FechaAmpliacion",
            FechaBaja = "FechaBaja",
            Empleos = "Empleos",
            Inversion = "Inversion",
            EmpleoReal = "EmpleoReal",
            InversionReal = "InversionReal",
            Tecnico = "Tecnico",
            Nace = "Nace",
            Expediente = "Expediente",
            SubsectorSectorId = "SubsectorSectorId",
            Subsector = "Subsector",
            Sector = "Sector",
            Isla = "Isla",
            Capital = "Capital",
            PrescriptorInversor = "PrescriptorInversor",
            Estado = "Estado"
        }
    }
}

