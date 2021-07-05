namespace ProyectosZec.Nuevo_Roezec {
    export interface ProcedimientosRow {
        ProcedimientoId?: number;
        Procedimiento?: string;
    }

    export namespace ProcedimientosRow {
        export const idProperty = 'ProcedimientoId';
        export const nameProperty = 'Procedimiento';
        export const localTextPrefix = 'Nuevo_Roezec.Procedimientos';
        export const lookupKey = 'Nuevo_Roezec.Procedimientos';

        export function getLookup(): Q.Lookup<ProcedimientosRow> {
            return Q.getLookup<ProcedimientosRow>('Nuevo_Roezec.Procedimientos');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            ProcedimientoId = "ProcedimientoId",
            Procedimiento = "Procedimiento"
        }
    }
}

