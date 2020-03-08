namespace ProyectosZec.CuadroMandos {
    export interface SectoresForm {
        Sector: Serenity.StringEditor;
    }

    export class SectoresForm extends Serenity.PrefixedContext {
        static formKey = 'CuadroMandos.Sectores';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SectoresForm.init)  {
                SectoresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SectoresForm, [
                    'Sector', w0
                ]);
            }
        }
    }
}

