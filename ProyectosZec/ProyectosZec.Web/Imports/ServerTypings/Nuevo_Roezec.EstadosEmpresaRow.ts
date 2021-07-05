namespace ProyectosZec.Nuevo_Roezec {
    export interface EstadosEmpresaRow {
        EstadoEmpresaId?: number;
        Estado?: string;
    }

    export namespace EstadosEmpresaRow {
        export const idProperty = 'EstadoEmpresaId';
        export const nameProperty = 'Estado';
        export const localTextPrefix = 'Nuevo_Roezec.EstadosEmpresa';
        export const lookupKey = 'Nuevo_Roezec.EstadosEmpresa';

        export function getLookup(): Q.Lookup<EstadosEmpresaRow> {
            return Q.getLookup<EstadosEmpresaRow>('Nuevo_Roezec.EstadosEmpresa');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            EstadoEmpresaId = "EstadoEmpresaId",
            Estado = "Estado"
        }
    }
}

