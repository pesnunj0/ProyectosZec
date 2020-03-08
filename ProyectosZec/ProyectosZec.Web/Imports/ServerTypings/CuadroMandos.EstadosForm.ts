namespace ProyectosZec.CuadroMandos {
    export interface EstadosForm {
        Estado: Serenity.StringEditor;
    }

    export class EstadosForm extends Serenity.PrefixedContext {
        static formKey = 'CuadroMandos.Estados';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EstadosForm.init)  {
                EstadosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EstadosForm, [
                    'Estado', w0
                ]);
            }
        }
    }
}

