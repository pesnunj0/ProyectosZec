namespace ProyectosZec.Nuevo_Roezec {
    export interface TiposContactoRow {
        ContactoId?: number;
        Contacto?: string;
    }

    export namespace TiposContactoRow {
        export const idProperty = 'ContactoId';
        export const nameProperty = 'Contacto';
        export const localTextPrefix = 'Nuevo_Roezec.TiposContacto';
        export const lookupKey = 'Nuevo_Roezec.TiposContacto';

        export function getLookup(): Q.Lookup<TiposContactoRow> {
            return Q.getLookup<TiposContactoRow>('Nuevo_Roezec.TiposContacto');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            ContactoId = "ContactoId",
            Contacto = "Contacto"
        }
    }
}

