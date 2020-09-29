namespace ProyectosZec.Inmovilizado {
    export interface SubtiposinmovilizadoForm {
        TipoInmovilizadoId: Serenity.LookupEditor;
        SubTipo: Serenity.StringEditor;
    }

    export class SubtiposinmovilizadoForm extends Serenity.PrefixedContext {
        static formKey = 'Inmovilizado.Subtiposinmovilizado';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SubtiposinmovilizadoForm.init)  {
                SubtiposinmovilizadoForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(SubtiposinmovilizadoForm, [
                    'TipoInmovilizadoId', w0,
                    'SubTipo', w1
                ]);
            }
        }
    }
}

