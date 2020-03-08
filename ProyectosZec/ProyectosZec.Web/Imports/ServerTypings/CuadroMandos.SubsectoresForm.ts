namespace ProyectosZec.CuadroMandos {
    export interface SubsectoresForm {
        SectorId: Serenity.IntegerEditor;
        Subsector: Serenity.StringEditor;
    }

    export class SubsectoresForm extends Serenity.PrefixedContext {
        static formKey = 'CuadroMandos.Subsectores';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!SubsectoresForm.init)  {
                SubsectoresForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.StringEditor;

                Q.initFormType(SubsectoresForm, [
                    'SectorId', w0,
                    'Subsector', w1
                ]);
            }
        }
    }
}

