namespace ProyectosZec.Nuevo_Roezec {
    export interface HistorialEmpresasForm {
        EmpresaId: Serenity.IntegerEditor;
        ProcedimientoId: Serenity.LookupEditor;
        FechaInicio: Serenity.DateEditor;
        FechaResolucion: Serenity.DateEditor;
        SentidoResolucion: Serenity.BooleanEditor;
        FechaEfecto: Serenity.DateEditor;
        AcuseInicio: Serenity.DateEditor;
        PersonaAcuseIncioId: Serenity.IntegerEditor;
        AcuseResolucion: Serenity.DateEditor;
        PersonaAcuseResolucionId: Serenity.IntegerEditor;
        Observaciones: Serenity.TextAreaEditor;
        Ficheros: Serenity.MultipleImageUploadEditor;
    }

    export class HistorialEmpresasForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.HistorialEmpresas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!HistorialEmpresasForm.init)  {
                HistorialEmpresasForm.init = true;

                var s = Serenity;
                var w0 = s.IntegerEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.BooleanEditor;
                var w4 = s.TextAreaEditor;
                var w5 = s.MultipleImageUploadEditor;

                Q.initFormType(HistorialEmpresasForm, [
                    'EmpresaId', w0,
                    'ProcedimientoId', w1,
                    'FechaInicio', w2,
                    'FechaResolucion', w2,
                    'SentidoResolucion', w3,
                    'FechaEfecto', w2,
                    'AcuseInicio', w2,
                    'PersonaAcuseIncioId', w0,
                    'AcuseResolucion', w2,
                    'PersonaAcuseResolucionId', w0,
                    'Observaciones', w4,
                    'Ficheros', w5
                ]);
            }
        }
    }
}

