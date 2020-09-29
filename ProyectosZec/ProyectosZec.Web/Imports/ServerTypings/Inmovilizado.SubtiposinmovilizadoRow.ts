namespace ProyectosZec.Inmovilizado {
    export interface SubtiposinmovilizadoRow {
        SubTipoInmovilizadoId?: number;
        SubTipo?: string;
        TipoInmovilizadoId?: number;
        TipoInmovilizadoTipo?: string;
    }

    export namespace SubtiposinmovilizadoRow {
        export const idProperty = 'SubTipoInmovilizadoId';
        export const nameProperty = 'SubTipo';
        export const localTextPrefix = 'Inmovilizado.Subtiposinmovilizado';
        export const lookupKey = 'Inmovilizado.Subtiposinmovilizado';

        export function getLookup(): Q.Lookup<SubtiposinmovilizadoRow> {
            return Q.getLookup<SubtiposinmovilizadoRow>('Inmovilizado.Subtiposinmovilizado');
        }
        export const deletePermission = 'Inmovilizado:Modify';
        export const insertPermission = 'Inmovilizado:Modify';
        export const readPermission = 'Inmovilizado:Read';
        export const updatePermission = 'Inmovilizado:Modify';

        export declare const enum Fields {
            SubTipoInmovilizadoId = "SubTipoInmovilizadoId",
            SubTipo = "SubTipo",
            TipoInmovilizadoId = "TipoInmovilizadoId",
            TipoInmovilizadoTipo = "TipoInmovilizadoTipo"
        }
    }
}

