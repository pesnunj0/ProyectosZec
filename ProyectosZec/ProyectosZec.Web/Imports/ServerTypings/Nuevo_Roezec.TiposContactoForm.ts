namespace ProyectosZec.Nuevo_Roezec {
    export interface TiposContactoForm {
        Contacto: Serenity.StringEditor;
    }

    export class TiposContactoForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.TiposContacto';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TiposContactoForm.init)  {
                TiposContactoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TiposContactoForm, [
                    'Contacto', w0
                ]);
            }
        }
    }
}

