namespace ProyectosZec.Nuevo_Roezec {
    export interface EmpresasContactosForm {
        EmpresaId: Serenity.LookupEditor;
        ContactoId: Serenity.LookupEditor;
        TipoContactoId: Serenity.LookupEditor;
        FechaBaja: Serenity.DateEditor;
    }

    export class EmpresasContactosForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.EmpresasContactos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmpresasContactosForm.init)  {
                EmpresasContactosForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.DateEditor;

                Q.initFormType(EmpresasContactosForm, [
                    'EmpresaId', w0,
                    'ContactoId', w0,
                    'TipoContactoId', w0,
                    'FechaBaja', w1
                ]);
            }
        }
    }
}

