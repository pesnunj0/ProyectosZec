namespace ProyectosZec.Kairos {
    export interface EstadosExtrasForm {
        Descripcion: Serenity.StringEditor;
    }

    export class EstadosExtrasForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.EstadosExtras';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EstadosExtrasForm.init)  {
                EstadosExtrasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EstadosExtrasForm, [
                    'Descripcion', w0
                ]);
            }
        }
    }
}

