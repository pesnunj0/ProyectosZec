namespace ProyectosZec.Nuevo_Roezec {
    export interface EstadosEmpresaForm {
        Estado: Serenity.StringEditor;
    }

    export class EstadosEmpresaForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.EstadosEmpresa';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EstadosEmpresaForm.init)  {
                EstadosEmpresaForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(EstadosEmpresaForm, [
                    'Estado', w0
                ]);
            }
        }
    }
}

