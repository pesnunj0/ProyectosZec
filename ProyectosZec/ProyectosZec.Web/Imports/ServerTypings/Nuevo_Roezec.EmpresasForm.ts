namespace ProyectosZec.Nuevo_Roezec {
    export interface EmpresasForm {
        Razon: Serenity.StringEditor;
        FormaJuridicaId: Serenity.LookupEditor;
        TecnicoId: Serenity.LookupEditor;
        Cif: Serenity.StringEditor;
        ProyectoId: Serenity.IntegerEditor;
        Expediente: Serenity.StringEditor;
        MotivoExencion: Serenity.StringEditor;
        TipologiaCapitalId: Serenity.LookupEditor;
        TipoGarantiaTasaId: Serenity.LookupEditor;
        EstadoEmpresaId: Serenity.LookupEditor;
        Direccion: Serenity.StringEditor;
        Poblacion: Serenity.StringEditor;
        Cp: Serenity.StringEditor;
        IslaId: Serenity.LookupEditor;
        TelefonoFijo: Serenity.StringEditor;
        Movil: Serenity.StringEditor;
        Email: Serenity.EmailEditor;
        EmpleoTraspasado: Serenity.IntegerEditor;
        Empleo6Meses: Serenity.IntegerEditor;
        EmpleoPromedio: Serenity.IntegerEditor;
        EmpleoPromedio2Anos: Serenity.IntegerEditor;
        InversionTraspasada: Serenity.DecimalEditor;
        Inversion2Anos: Serenity.DecimalEditor;
        NumTasaLiquidacion: Serenity.StringEditor;
        HistorialList: HistorialEmpresasEditor;
    }

    export class EmpresasForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Empresas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!EmpresasForm.init)  {
                EmpresasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.IntegerEditor;
                var w3 = s.EmailEditor;
                var w4 = s.DecimalEditor;
                var w5 = HistorialEmpresasEditor;

                Q.initFormType(EmpresasForm, [
                    'Razon', w0,
                    'FormaJuridicaId', w1,
                    'TecnicoId', w1,
                    'Cif', w0,
                    'ProyectoId', w2,
                    'Expediente', w0,
                    'MotivoExencion', w0,
                    'TipologiaCapitalId', w1,
                    'TipoGarantiaTasaId', w1,
                    'EstadoEmpresaId', w1,
                    'Direccion', w0,
                    'Poblacion', w0,
                    'Cp', w0,
                    'IslaId', w1,
                    'TelefonoFijo', w0,
                    'Movil', w0,
                    'Email', w3,
                    'EmpleoTraspasado', w2,
                    'Empleo6Meses', w2,
                    'EmpleoPromedio', w2,
                    'EmpleoPromedio2Anos', w2,
                    'InversionTraspasada', w4,
                    'Inversion2Anos', w4,
                    'NumTasaLiquidacion', w0,
                    'HistorialList', w5
                ]);
            }
        }
    }
}

