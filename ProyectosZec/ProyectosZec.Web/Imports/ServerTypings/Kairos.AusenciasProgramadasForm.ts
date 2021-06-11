namespace ProyectosZec.Kairos {
    export interface AusenciasProgramadasForm {
        CodigoCliente: Serenity.StringEditor;
        IdEmpleado: Serenity.LookupEditor;
        IdAusenciaProgramadaTipo: Serenity.LookupEditor;
        FechaDesde: Serenity.DateEditor;
        FechaHasta: Serenity.DateEditor;
        FechaBorrado: Serenity.DateEditor;
        TotalHoras: Serenity.DecimalEditor;
        TotalDias: Serenity.IntegerEditor;
    }

    export class AusenciasProgramadasForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.AusenciasProgramadas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!AusenciasProgramadasForm.init)  {
                AusenciasProgramadasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.IntegerEditor;

                Q.initFormType(AusenciasProgramadasForm, [
                    'CodigoCliente', w0,
                    'IdEmpleado', w1,
                    'IdAusenciaProgramadaTipo', w1,
                    'FechaDesde', w2,
                    'FechaHasta', w2,
                    'FechaBorrado', w2,
                    'TotalHoras', w3,
                    'TotalDias', w4
                ]);
            }
        }
    }
}

