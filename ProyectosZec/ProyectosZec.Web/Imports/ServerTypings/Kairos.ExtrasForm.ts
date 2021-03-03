namespace ProyectosZec.Kairos {
    export interface ExtrasForm {
        CodigoCliente: Serenity.StringEditor;
        IdEmpleado: Serenity.StringEditor;
        Fecha: Serenity.DateEditor;
        IdHoraExtraCabecera: Serenity.StringEditor;
        Tipo: Serenity.IntegerEditor;
        TotalHorasExtrasReales: Serenity.DecimalEditor;
        TotalHorasExtrasConvertidas: Serenity.DecimalEditor;
        IdAusenciaProgramadaTipo: Serenity.StringEditor;
        Dia: Serenity.StringEditor;
        Estado: Serenity.StringEditor;
        MotivoCancelacion: Serenity.StringEditor;
        FechaAceptacionCancelacion: Serenity.DateEditor;
    }

    export class ExtrasForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.Extras';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ExtrasForm.init)  {
                ExtrasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.DecimalEditor;

                Q.initFormType(ExtrasForm, [
                    'CodigoCliente', w0,
                    'IdEmpleado', w0,
                    'Fecha', w1,
                    'IdHoraExtraCabecera', w0,
                    'Tipo', w2,
                    'TotalHorasExtrasReales', w3,
                    'TotalHorasExtrasConvertidas', w3,
                    'IdAusenciaProgramadaTipo', w0,
                    'Dia', w0,
                    'Estado', w0,
                    'MotivoCancelacion', w0,
                    'FechaAceptacionCancelacion', w1
                ]);
            }
        }
    }
}

