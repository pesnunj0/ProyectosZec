namespace ProyectosZec.Nuevo_Roezec {
    export interface TiposGarantiaTasasForm {
        GarantiaTasa: Serenity.StringEditor;
    }

    export class TiposGarantiaTasasForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.TiposGarantiaTasas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TiposGarantiaTasasForm.init)  {
                TiposGarantiaTasasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TiposGarantiaTasasForm, [
                    'GarantiaTasa', w0
                ]);
            }
        }
    }
}

