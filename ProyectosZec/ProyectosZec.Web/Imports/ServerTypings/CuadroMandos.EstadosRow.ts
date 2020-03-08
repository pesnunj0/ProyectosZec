namespace ProyectosZec.CuadroMandos {
    export interface EstadosRow {
        EstadoId?: number;
        Estado?: string;
    }

    export namespace EstadosRow {
        export const idProperty = 'EstadoId';
        export const nameProperty = 'Estado';
        export const localTextPrefix = 'CuadroMandos.Estados';
        export const lookupKey = 'CuadroMandos.Estados';

        export function getLookup(): Q.Lookup<EstadosRow> {
            return Q.getLookup<EstadosRow>('CuadroMandos.Estados');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            EstadoId = "EstadoId",
            Estado = "Estado"
        }
    }
}

