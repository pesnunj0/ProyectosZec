namespace ProyectosZec.Kairos {
    export interface FichajesForm {
        IdEmpleado: Serenity.StringEditor;
        CodigoCliente: Serenity.StringEditor;
        FechaHora: Serenity.DateEditor;
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
    }

    export class FichajesForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.Fichajes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FichajesForm.init)  {
                FichajesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.LookupEditor;

                Q.initFormType(FichajesForm, [
                    'IdEmpleado', w0,
                    'CodigoCliente', w0,
                    'FechaHora', w1,
                    'Observaciones', w0,
                    'GpsPosicionLatitud', w0,
                    'GpsPosicionLongitud', w0,
                    'GpsFechaHora', w1,
                    'GpsProveedor', w0,
                    'GpsAltitud', w0,
                    'IdTerminal', w0,
                    'IdDispositivoModelo', w0,
                    'Modificado', w1,
                    'Anulado', w1,
                    'Validado', w2,
                    'TipoDispositivo', w2,
                    'EntradaSalida', w3,
                    'IdEmpresa', w0
                ]);
            }
        }
    }
}

