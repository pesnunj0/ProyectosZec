namespace ProyectosZec.Roezec {
    export interface RoezecEmpresasForm {
        DenominacionSocial: Serenity.StringEditor;
        Cif: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Cp: Serenity.StringEditor;
        Poblacion: Serenity.StringEditor;
        Provincia: Serenity.StringEditor;
        Isla: Serenity.StringEditor;
        NotasMarginales: Serenity.StringEditor;
        AnyoExpediente: Serenity.IntegerEditor;
        NumExpediente: Serenity.IntegerEditor;
        Agencia: Serenity.IntegerEditor;
        Tecnico: Serenity.StringEditor;
        FormaJuridica: Serenity.StringEditor;
        Superficie: Serenity.DecimalEditor;
        ExentaAreaAcotada: Serenity.StringEditor;
        MotivosExencion: Serenity.StringEditor;
        ObjetivoEmpleo: Serenity.DecimalEditor;
        ObjetivoInversion: Serenity.DecimalEditor;
        ObservacionesEmpleo: Serenity.StringEditor;
        ObservacionesInversion: Serenity.StringEditor;
        PreEmpleo: Serenity.IntegerEditor;
        PreInversion: Serenity.IntegerEditor;
        TrasEmpleo: Serenity.IntegerEditor;
        TrasInversion: Serenity.IntegerEditor;
        FechaAlta: Serenity.DateEditor;
        FechaModificacion: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Situacion: Serenity.StringEditor;
        UsrAlta: Serenity.StringEditor;
        UsrModificacion: Serenity.StringEditor;
        UsrBaja: Serenity.StringEditor;
    }

    export class RoezecEmpresasForm extends Serenity.PrefixedContext {
        static formKey = 'Roezec.RoezecEmpresas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RoezecEmpresasForm.init)  {
                RoezecEmpresasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.DecimalEditor;
                var w3 = s.DateEditor;

                Q.initFormType(RoezecEmpresasForm, [
                    'DenominacionSocial', w0,
                    'Cif', w0,
                    'Direccion', w0,
                    'Cp', w0,
                    'Poblacion', w0,
                    'Provincia', w0,
                    'Isla', w0,
                    'NotasMarginales', w0,
                    'AnyoExpediente', w1,
                    'NumExpediente', w1,
                    'Agencia', w1,
                    'Tecnico', w0,
                    'FormaJuridica', w0,
                    'Superficie', w2,
                    'ExentaAreaAcotada', w0,
                    'MotivosExencion', w0,
                    'ObjetivoEmpleo', w2,
                    'ObjetivoInversion', w2,
                    'ObservacionesEmpleo', w0,
                    'ObservacionesInversion', w0,
                    'PreEmpleo', w1,
                    'PreInversion', w1,
                    'TrasEmpleo', w1,
                    'TrasInversion', w1,
                    'FechaAlta', w3,
                    'FechaModificacion', w3,
                    'FechaBaja', w3,
                    'Situacion', w0,
                    'UsrAlta', w0,
                    'UsrModificacion', w0,
                    'UsrBaja', w0
                ]);
            }
        }
    }
}

