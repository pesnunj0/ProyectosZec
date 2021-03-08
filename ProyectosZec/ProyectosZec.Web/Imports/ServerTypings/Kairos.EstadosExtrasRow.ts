namespace ProyectosZec.Kairos {
    export interface EstadosExtrasRow {
        EstadoId?: string;
        Descripcion?: string;
    }

    export namespace EstadosExtrasRow {
        export const idProperty = 'EstadoId';
        export const nameProperty = 'Descripcion';
        export const localTextPrefix = 'Kairos.EstadosExtras';
        export const lookupKey = 'Kairos.EstadosExtras';

        export function getLookup(): Q.Lookup<EstadosExtrasRow> {
            return Q.getLookup<EstadosExtrasRow>('Kairos.EstadosExtras');
        }
        export const deletePermission = 'Kairos:Delete';
        export const insertPermission = 'Kairos:Insert';
        export const readPermission = 'Kairos:Read';
        export const updatePermission = 'Kairos:Modify';

        export declare const enum Fields {
            EstadoId = "EstadoId",
            Descripcion = "Descripcion"
        }
    }
}

