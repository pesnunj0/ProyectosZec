namespace ProyectosZec.CuadroMandos {
    export interface PresentadasForm {
        Denominacion: Serenity.StringEditor;
        TecnicoId: Serenity.LookupEditor;
        SubsectorId: Serenity.LookupEditor;
        IslaId: Serenity.LookupEditor;
        CapitalId: Serenity.LookupEditor;
        Captacion: Serenity.StringEditor;
        PrescriptorInversorId: Serenity.LookupEditor;
        Descripcion: Serenity.StringEditor;
        Contacto: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        EstadoId: Serenity.LookupEditor;
        FechaInicio: Serenity.DateEditor;
        FechaPresentacion: Serenity.DateEditor;
        FechaInscripcion: Serenity.DateEditor;
        FechaAutorizacion: Serenity.DateEditor;
        FechaAmpliacion: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Empleos: Serenity.IntegerEditor;
        Inversion: Serenity.IntegerEditor;
        EmpleoReal: Serenity.IntegerEditor;
        Expediente: Serenity.StringEditor;
        Nace: Serenity.StringEditor;
        InversionReal: Serenity.IntegerEditor;
    }

    export class PresentadasForm extends Serenity.PrefixedContext {
        static formKey = 'CuadroMandos.Presentadas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PresentadasForm.init)  {
                PresentadasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.IntegerEditor;

                Q.initFormType(PresentadasForm, [
                    'Denominacion', w0,
                    'TecnicoId', w1,
                    'SubsectorId', w1,
                    'IslaId', w1,
                    'CapitalId', w1,
                    'Captacion', w0,
                    'PrescriptorInversorId', w1,
                    'Descripcion', w0,
                    'Contacto', w0,
                    'Telefono', w0,
                    'Email', w0,
                    'EstadoId', w1,
                    'FechaInicio', w2,
                    'FechaPresentacion', w2,
                    'FechaInscripcion', w2,
                    'FechaAutorizacion', w2,
                    'FechaAmpliacion', w2,
                    'FechaBaja', w2,
                    'Empleos', w3,
                    'Inversion', w3,
                    'EmpleoReal', w3,
                    'Expediente', w0,
                    'Nace', w0,
                    'InversionReal', w3
                ]);
            }
        }
    }
}

