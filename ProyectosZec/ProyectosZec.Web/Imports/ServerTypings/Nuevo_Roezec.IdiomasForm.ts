namespace ProyectosZec.Nuevo_Roezec {
    export interface IdiomasForm {
        Idioma: Serenity.StringEditor;
        NombreIdioma: Serenity.StringEditor;
    }

    export class IdiomasForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Idiomas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IdiomasForm.init)  {
                IdiomasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(IdiomasForm, [
                    'Idioma', w0,
                    'NombreIdioma', w0
                ]);
            }
        }
    }
}

