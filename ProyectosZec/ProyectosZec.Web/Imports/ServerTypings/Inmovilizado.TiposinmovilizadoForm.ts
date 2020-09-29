namespace ProyectosZec.Inmovilizado {
    export interface TiposinmovilizadoForm {
        Tipo: Serenity.StringEditor;
    }

    export class TiposinmovilizadoForm extends Serenity.PrefixedContext {
        static formKey = 'Inmovilizado.Tiposinmovilizado';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TiposinmovilizadoForm.init)  {
                TiposinmovilizadoForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TiposinmovilizadoForm, [
                    'Tipo', w0
                ]);
            }
        }
    }
}

