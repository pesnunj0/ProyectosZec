namespace ProyectosZec.Nuevo_Roezec {
    export interface TipologiasCapitalForm {
        Capital: Serenity.StringEditor;
    }

    export class TipologiasCapitalForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.TipologiasCapital';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TipologiasCapitalForm.init)  {
                TipologiasCapitalForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TipologiasCapitalForm, [
                    'Capital', w0
                ]);
            }
        }
    }
}

