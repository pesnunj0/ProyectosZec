namespace ProyectosZec.Intranet {
    export interface SedesForm {
        Sede: Serenity.StringEditor;
    }

    export class SedesForm extends Serenity.PrefixedContext {
        static formKey = 'Intranet.Sedes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SedesForm.init)  {
                SedesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(SedesForm, [
                    'Sede', w0
                ]);
            }
        }
    }
}

