namespace ProyectosZec.CuadroMandos {
    export interface ProyectosForm {
        Denominacion: Serenity.StringEditor;
        TecnicoId: Serenity.LookupEditor;
        SectorId: Serenity.LookupEditor;
        SubsectorId: Serenity.LookupEditor;
        IslaId: Serenity.LookupEditor;
        CapitalId: Serenity.LookupEditor;
        Captacion: Serenity.StringEditor;
        Empleos: Serenity.IntegerEditor;
        Inversion: Serenity.IntegerEditor;
        EmpleoReal: Serenity.IntegerEditor;
        InversionReal: Serenity.IntegerEditor;
        PrescriptorInversorId: Serenity.LookupEditor;
        Expediente: Serenity.StringEditor;
        Nace: Serenity.StringEditor;
        EstadoId: Serenity.LookupEditor;
        Descripcion: Serenity.TextAreaEditor;
        Contacto: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        FechaInicio: Serenity.DateEditor;
        FechaPresentacion: Serenity.DateEditor;
        FechaInscripcion: Serenity.DateEditor;
        FechaAutorizacion: Serenity.DateEditor;
        FechaAmpliacion: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
    }

    export class ProyectosForm extends Serenity.PrefixedContext {
        static formKey = 'CuadroMandos.Proyectos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProyectosForm.init)  {
                ProyectosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.TextAreaEditor;
                var w4 = s.DateEditor;

                Q.initFormType(ProyectosForm, [
                    'Denominacion', w0,
                    'TecnicoId', w1,
                    'SectorId', w1,
                    'SubsectorId', w1,
                    'IslaId', w1,
                    'CapitalId', w1,
                    'Captacion', w0,
                    'Empleos', w2,
                    'Inversion', w2,
                    'EmpleoReal', w2,
                    'InversionReal', w2,
                    'PrescriptorInversorId', w1,
                    'Expediente', w0,
                    'Nace', w0,
                    'EstadoId', w1,
                    'Descripcion', w3,
                    'Contacto', w0,
                    'Telefono', w0,
                    'Email', w0,
                    'FechaInicio', w4,
                    'FechaPresentacion', w4,
                    'FechaInscripcion', w4,
                    'FechaAutorizacion', w4,
                    'FechaAmpliacion', w4,
                    'FechaBaja', w4
                ]);
            }
        }
    }
}

