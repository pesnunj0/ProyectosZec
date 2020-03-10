namespace ProyectosZec.Intranet {
    export interface TelefonosForm {
        SedeId: Serenity.LookupEditor;
        DepartamentoId: Serenity.LookupEditor;
        Nombre: Serenity.StringEditor;
        ExtCorta: Serenity.StringEditor;
        Fijo: Serenity.StringEditor;
        Movil: Serenity.StringEditor;
    }

    export class TelefonosForm extends Serenity.PrefixedContext {
        static formKey = 'Intranet.Telefonos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TelefonosForm.init)  {
                TelefonosForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(TelefonosForm, [
                    'SedeId', w0,
                    'DepartamentoId', w0,
                    'Nombre', w1,
                    'ExtCorta', w1,
                    'Fijo', w1,
                    'Movil', w1
                ]);
            }
        }
    }
}

