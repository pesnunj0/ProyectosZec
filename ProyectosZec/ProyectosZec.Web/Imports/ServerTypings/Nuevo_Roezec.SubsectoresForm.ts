namespace ProyectosZec.Nuevo_Roezec {
    export interface SubsectoresForm {
        SectorId: Serenity.LookupEditor;
        Subsector: Serenity.StringEditor;
    }

    export class SubsectoresForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Subsectores';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SubsectoresForm.init)  {
                SubsectoresForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;

                Q.initFormType(SubsectoresForm, [
                    'SectorId', w0,
                    'Subsector', w1
                ]);
            }
        }
    }
}

