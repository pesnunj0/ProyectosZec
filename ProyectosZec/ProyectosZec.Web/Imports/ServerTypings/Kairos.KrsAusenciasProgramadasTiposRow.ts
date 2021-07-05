namespace ProyectosZec.Kairos {
    export interface KrsAusenciasProgramadasTiposRow {
        Id?: number;
        CodigoCliente?: number;
        Codigo?: string;
        Descripcion?: string;
        ColorFondo?: string;
        ColorLetra?: string;
        FechaBorrado?: string;
        PermitirSolicitud?: boolean;
        FechaActualizacion?: string;
        ContabilizarTiempo?: boolean;
    }

    export namespace KrsAusenciasProgramadasTiposRow {
        export const idProperty = 'Id';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'Kairos.KrsAusenciasProgramadasTipos';
        export const lookupKey = 'Kairos.KrsAusenciasProgramadasTipos';

        export function getLookup(): Q.Lookup<KrsAusenciasProgramadasTiposRow> {
            return Q.getLookup<KrsAusenciasProgramadasTiposRow>('Kairos.KrsAusenciasProgramadasTipos');
        }
        export const deletePermission = 'Kairos:Delete';
        export const insertPermission = 'Kairos:Insert';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Modify';

        export declare const enum Fields {
            Id = "Id",
            CodigoCliente = "CodigoCliente",
            Codigo = "Codigo",
            Descripcion = "Descripcion",
            ColorFondo = "ColorFondo",
            ColorLetra = "ColorLetra",
            FechaBorrado = "FechaBorrado",
            PermitirSolicitud = "PermitirSolicitud",
            FechaActualizacion = "FechaActualizacion",
            ContabilizarTiempo = "ContabilizarTiempo"
        }
    }
}

