namespace ProyectosZec.Kairos {
    export interface DepartamentosForm {
        CodigoCliente: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        FechaBorrado: Serenity.DateEditor;
        SedeId: Serenity.IntegerEditor;
    }

    export class DepartamentosForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.Departamentos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DepartamentosForm.init)  {
                DepartamentosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;

                Q.initFormType(DepartamentosForm, [
                    'CodigoCliente', w0,
                    'Codigo', w0,
                    'Descripcion', w0,
                    'FechaBorrado', w1,
                    'SedeId', w2
                ]);
            }
        }
    }
}

