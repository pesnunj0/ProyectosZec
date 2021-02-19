namespace ProyectosZec.Roezec {
    export interface RoezecEstadosForm {
        Descripcion: Serenity.StringEditor;
    }

    export class RoezecEstadosForm extends Serenity.PrefixedContext {
        static formKey = 'Roezec.RoezecEstados';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RoezecEstadosForm.init)  {
                RoezecEstadosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(RoezecEstadosForm, [
                    'Descripcion', w0
                ]);
            }
        }
    }
}

