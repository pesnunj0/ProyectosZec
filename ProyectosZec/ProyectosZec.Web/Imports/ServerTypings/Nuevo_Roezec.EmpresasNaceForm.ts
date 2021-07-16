namespace ProyectosZec.Nuevo_Roezec {
    export interface EmpresasNaceForm {
        EmpresaId: Serenity.IntegerEditor;
        NaceId: Serenity.IntegerEditor;
    }

    export class EmpresasNaceForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.EmpresasNace';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmpresasNaceForm.init)  {
                EmpresasNaceForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;

                Q.initFormType(EmpresasNaceForm, [
                    'EmpresaId', w0,
                    'NaceId', w0
                ]);
            }
        }
    }
}

