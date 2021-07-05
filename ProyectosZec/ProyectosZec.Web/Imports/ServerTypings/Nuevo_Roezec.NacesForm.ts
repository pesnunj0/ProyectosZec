namespace ProyectosZec.Nuevo_Roezec {
    export interface NacesForm {
        Nace: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        SectorId: Serenity.LookupEditor;
        SubsectorId: Serenity.LookupEditor;
    }

    export class NacesForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Naces';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!NacesForm.init)  {
                NacesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;

                Q.initFormType(NacesForm, [
                    'Nace', w0,
                    'Codigo', w0,
                    'Descripcion', w0,
                    'SectorId', w1,
                    'SubsectorId', w1
                ]);
            }
        }
    }
}

