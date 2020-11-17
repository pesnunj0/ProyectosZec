namespace ProyectosZec.Roezec {
    export interface NacesForm {
        Nace: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Actividad: Serenity.StringEditor;
        FechaAlta: Serenity.DateEditor;
        UsrAlta: Serenity.StringEditor;
    }

    export class NacesForm extends Serenity.PrefixedContext {
        static formKey = 'Roezec.Naces';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NacesForm.init)  {
                NacesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(NacesForm, [
                    'Nace', w0,
                    'Codigo', w0,
                    'Actividad', w0,
                    'FechaAlta', w1,
                    'UsrAlta', w0
                ]);
            }
        }
    }
}

