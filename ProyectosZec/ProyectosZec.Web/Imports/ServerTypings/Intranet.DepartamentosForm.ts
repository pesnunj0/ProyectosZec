namespace ProyectosZec.Intranet {
    export interface DepartamentosForm {
        Departamento: Serenity.StringEditor;
    }

    export class DepartamentosForm extends Serenity.PrefixedContext {
        static formKey = 'Intranet.Departamentos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DepartamentosForm.init)  {
                DepartamentosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(DepartamentosForm, [
                    'Departamento', w0
                ]);
            }
        }
    }
}

