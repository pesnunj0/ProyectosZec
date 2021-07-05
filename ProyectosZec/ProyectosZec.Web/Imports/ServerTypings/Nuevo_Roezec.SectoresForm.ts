namespace ProyectosZec.Nuevo_Roezec {
    export interface SectoresForm {
        Sector: Serenity.StringEditor;
    }

    export class SectoresForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Sectores';
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

