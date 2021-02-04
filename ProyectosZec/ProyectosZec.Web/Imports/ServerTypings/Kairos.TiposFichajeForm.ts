namespace ProyectosZec.Kairos {
    export interface TiposFichajeForm {
        Tipo: Serenity.StringEditor;
    }

    export class TiposFichajeForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.TiposFichaje';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TiposFichajeForm.init)  {
                TiposFichajeForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TiposFichajeForm, [
                    'Tipo', w0
                ]);
            }
        }
    }
}

