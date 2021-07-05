namespace ProyectosZec.Nuevo_Roezec {
    export interface ContactosForm {
        Nombre: Serenity.StringEditor;
        Apellidos: Serenity.StringEditor;
        Nif: Serenity.StringEditor;
        TelefonoFijo: Serenity.StringEditor;
        Movil: Serenity.StringEditor;
        IdiomaId: Serenity.IntegerEditor;
        Email: Serenity.StringEditor;
    }

    export class ContactosForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Contactos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContactosForm.init)  {
                ContactosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(ContactosForm, [
                    'Nombre', w0,
                    'Apellidos', w0,
                    'Nif', w0,
                    'TelefonoFijo', w0,
                    'Movil', w0,
                    'IdiomaId', w1,
                    'Email', w0
                ]);
            }
        }
    }
}

