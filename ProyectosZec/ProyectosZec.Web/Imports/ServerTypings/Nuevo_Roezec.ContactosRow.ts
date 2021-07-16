namespace ProyectosZec.Nuevo_Roezec {
    export interface ContactosRow {
        ContactoId?: number;
        Nombre?: string;
        Apellidos?: string;
        Fullname?: string;
        Nif?: string;
        TelefonoFijo?: string;
        Movil?: string;
        IdiomaId?: number;
        Email?: string;
        Idioma?: string;
        IdiomaNombreIdioma?: string;
    }

    export namespace ContactosRow {
        export const idProperty = 'ContactoId';
        export const nameProperty = 'Fullname';
        export const localTextPrefix = 'Nuevo_Roezec.Contactos';
        export const lookupKey = 'Nuevo_Roezec.Contactos';

        export function getLookup(): Q.Lookup<ContactosRow> {
            return Q.getLookup<ContactosRow>('Nuevo_Roezec.Contactos');
        }
        export const deletePermission = 'Roezec:Modify';
        export const insertPermission = 'Roezec:Modify';
        export const readPermission = 'Roezec:Read';
        export const updatePermission = 'Roezec:Modify';

        export declare const enum Fields {
            ContactoId = "ContactoId",
            Nombre = "Nombre",
            Apellidos = "Apellidos",
            Fullname = "Fullname",
            Nif = "Nif",
            TelefonoFijo = "TelefonoFijo",
            Movil = "Movil",
            IdiomaId = "IdiomaId",
            Email = "Email",
            Idioma = "Idioma",
            IdiomaNombreIdioma = "IdiomaNombreIdioma"
        }
    }
}

