namespace ProyectosZec.Nuevo_Roezec {
    export interface FormasJuridicasRow {
        JuridicaId?: number;
        Juridica?: string;
    }

    export namespace FormasJuridicasRow {
        export const idProperty = 'JuridicaId';
        export const nameProperty = 'Juridica';
        export const localTextPrefix = 'Nuevo_Roezec.FormasJuridicas';
        export const lookupKey = 'Nuevo_Roezec.FormasJuridicas';

        export function getLookup(): Q.Lookup<FormasJuridicasRow> {
            return Q.getLookup<FormasJuridicasRow>('Nuevo_Roezec.FormasJuridicas');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            JuridicaId = "JuridicaId",
            Juridica = "Juridica"
        }
    }
}

