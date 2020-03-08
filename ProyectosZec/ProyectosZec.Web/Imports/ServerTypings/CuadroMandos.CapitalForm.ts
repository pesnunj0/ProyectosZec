namespace ProyectosZec.CuadroMandos {
    export interface CapitalForm {
        Capital: Serenity.StringEditor;
    }

    export class CapitalForm extends Serenity.PrefixedContext {
        static formKey = 'CuadroMandos.Capital';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!CapitalForm.init)  {
                CapitalForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(CapitalForm, [
                    'Capital', w0
                ]);
            }
        }
    }
}

