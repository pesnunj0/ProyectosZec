namespace ProyectosZec.CuadroMandos {
    export interface TecnicosForm {
        NombreTecnico: Serenity.StringEditor;
        Tecnico: Serenity.StringEditor;
    }

    export class TecnicosForm extends Serenity.PrefixedContext {
        static formKey = 'CuadroMandos.Tecnicos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!TecnicosForm.init)  {
                TecnicosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(TecnicosForm, [
                    'NombreTecnico', w0,
                    'Tecnico', w0
                ]);
            }
        }
    }
}

