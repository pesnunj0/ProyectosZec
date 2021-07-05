namespace ProyectosZec.Nuevo_Roezec {
    export interface ProcedimientosForm {
        Procedimiento: Serenity.StringEditor;
    }

    export class ProcedimientosForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Procedimientos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProcedimientosForm.init)  {
                ProcedimientosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProcedimientosForm, [
                    'Procedimiento', w0
                ]);
            }
        }
    }
}

