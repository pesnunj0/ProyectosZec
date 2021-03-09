namespace ProyectosZec.Kairos {
    export interface FichajesForm {
        IdEmpleado: Serenity.LookupEditor;
        CodigoCliente: Serenity.StringEditor;
        FechaHora: Serenity.DateTimeEditor;
        Observaciones: Serenity.StringEditor;
        GpsPosicionLatitud: Serenity.StringEditor;
        GpsPosicionLongitud: Serenity.StringEditor;
        GpsFechaHora: Serenity.DateEditor;
        GpsProveedor: Serenity.StringEditor;
        GpsAltitud: Serenity.StringEditor;
        IdTerminal: Serenity.StringEditor;
        IdDispositivoModelo: Serenity.StringEditor;
        Modificado: Serenity.DateEditor;
        Anulado: Serenity.DateEditor;
        Validado: Serenity.IntegerEditor;
        TipoDispositivo: Serenity.IntegerEditor;
        EntradaSalida: Serenity.LookupEditor;
        IdEmpresa: Serenity.StringEditor;
        Files: Serenity.MultipleImageUploadEditor;
    }

    export class FichajesForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.Fichajes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FichajesForm.init)  {
                FichajesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;
                var w1 = s.StringEditor;
                var w2 = s.DateTimeEditor;
                var w3 = s.DateEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.MultipleImageUploadEditor;

                Q.initFormType(FichajesForm, [
                    'IdEmpleado', w0,
                    'CodigoCliente', w1,
                    'FechaHora', w2,
                    'Observaciones', w1,
                    'GpsPosicionLatitud', w1,
                    'GpsPosicionLongitud', w1,
                    'GpsFechaHora', w3,
                    'GpsProveedor', w1,
                    'GpsAltitud', w1,
                    'IdTerminal', w1,
                    'IdDispositivoModelo', w1,
                    'Modificado', w3,
                    'Anulado', w3,
                    'Validado', w4,
                    'TipoDispositivo', w4,
                    'EntradaSalida', w0,
                    'IdEmpresa', w1,
                    'Files', w5
                ]);
            }
        }
    }
}

