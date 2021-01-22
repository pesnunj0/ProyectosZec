namespace ProyectosZec.Kairos {
    export interface KrsEmpleadosForm {
        CodigoCliente: Serenity.StringEditor;
        Nombre: Serenity.StringEditor;
        CodigoValidacion: Serenity.StringEditor;
        FechaBaja: Serenity.DateEditor;
        Pin: Serenity.IntegerEditor;
        Tecnico: Serenity.BooleanEditor;
        UsoHorario: Serenity.StringEditor;
        SacarFotoFichaje: Serenity.BooleanEditor;
        FechaActualizacion: Serenity.DateEditor;
        FechaBorrado: Serenity.DateEditor;
        NumeroTarjetaFichaje: Serenity.StringEditor;
        IdDepartamento: Serenity.StringEditor;
        IdEmpresa: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        PermiteRecordatorio: Serenity.BooleanEditor;
        PermiteFichajeAutomatico: Serenity.BooleanEditor;
        IdEmpresaFichajeAutomatico: Serenity.StringEditor;
        ProgramaExternoIdEmpleado: Serenity.StringEditor;
        ProgramaExternoDescripcion: Serenity.StringEditor;
        IdHoraExtraCabecera: Serenity.StringEditor;
        ClaveAccesoWeb: Serenity.StringEditor;
        PermiteFichajeWeb: Serenity.BooleanEditor;
    }

    export class KrsEmpleadosForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.KrsEmpleados';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KrsEmpleadosForm.init)  {
                KrsEmpleadosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.BooleanEditor;

                Q.initFormType(KrsEmpleadosForm, [
                    'CodigoCliente', w0,
                    'Nombre', w0,
                    'CodigoValidacion', w0,
                    'FechaBaja', w1,
                    'Pin', w2,
                    'Tecnico', w3,
                    'UsoHorario', w0,
                    'SacarFotoFichaje', w3,
                    'FechaActualizacion', w1,
                    'FechaBorrado', w1,
                    'NumeroTarjetaFichaje', w0,
                    'IdDepartamento', w0,
                    'IdEmpresa', w0,
                    'Email', w0,
                    'PermiteRecordatorio', w3,
                    'PermiteFichajeAutomatico', w3,
                    'IdEmpresaFichajeAutomatico', w0,
                    'ProgramaExternoIdEmpleado', w0,
                    'ProgramaExternoDescripcion', w0,
                    'IdHoraExtraCabecera', w0,
                    'ClaveAccesoWeb', w0,
                    'PermiteFichajeWeb', w3
                ]);
            }
        }
    }
}

