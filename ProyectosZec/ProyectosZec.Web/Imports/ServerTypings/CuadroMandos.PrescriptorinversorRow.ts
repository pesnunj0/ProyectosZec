namespace ProyectosZec.CuadroMandos {
    export interface PrescriptorinversorRow {
        PrescriptorInversorId?: number;
        PrescriptorInversor?: string;
    }

    export namespace PrescriptorinversorRow {
        export const idProperty = 'PrescriptorInversorId';
        export const nameProperty = 'PrescriptorInversor';
        export const localTextPrefix = 'CuadroMandos.Prescriptorinversor';
        export const lookupKey = 'CuadroMandos.Prescriptorinversor';

        export function getLookup(): Q.Lookup<PrescriptorinversorRow> {
            return Q.getLookup<PrescriptorinversorRow>('CuadroMandos.Prescriptorinversor');
        }
        export const deletePermission = 'Administration:General';
        export const insertPermission = 'Administration:General';
        export const readPermission = 'Administration:General';
        export const updatePermission = 'Administration:General';

        export declare const enum Fields {
            PrescriptorInversorId = "PrescriptorInversorId",
            PrescriptorInversor = "PrescriptorInversor"
        }
    }
}

