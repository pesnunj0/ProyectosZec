namespace ProyectosZec.Kairos {
    export interface HorasExtraConsumidasForm {
        IdHoraExtra: Serenity.StringEditor;
        Tiempo: Serenity.DecimalEditor;
        Dia: Serenity.DateEditor;
    }

    export class HorasExtraConsumidasForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.HorasExtraConsumidas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HorasExtraConsumidasForm.init)  {
                HorasExtraConsumidasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DecimalEditor;
                var w2 = s.DateEditor;

                Q.initFormType(HorasExtraConsumidasForm, [
                    'IdHoraExtra', w0,
                    'Tiempo', w1,
                    'Dia', w2
                ]);
            }
        }
    }
}

