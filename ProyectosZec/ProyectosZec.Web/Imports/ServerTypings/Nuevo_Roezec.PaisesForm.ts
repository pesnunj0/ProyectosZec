namespace ProyectosZec.Nuevo_Roezec {
    export interface PaisesForm {
        Pais: Serenity.StringEditor;
        Capital: Serenity.StringEditor;
        ContinenteId: Serenity.IntegerEditor;
    }

    export class PaisesForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Paises';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PaisesForm.init)  {
                PaisesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;

                Q.initFormType(PaisesForm, [
                    'Pais', w0,
                    'Capital', w0,
                    'ContinenteId', w1
                ]);
            }
        }
    }
}

