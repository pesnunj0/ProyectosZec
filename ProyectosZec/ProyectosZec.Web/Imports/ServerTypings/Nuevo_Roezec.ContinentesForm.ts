namespace ProyectosZec.Nuevo_Roezec {
    export interface ContinentesForm {
        Continente: Serenity.StringEditor;
    }

    export class ContinentesForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Continentes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ContinentesForm.init)  {
                ContinentesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ContinentesForm, [
                    'Continente', w0
                ]);
            }
        }
    }
}

