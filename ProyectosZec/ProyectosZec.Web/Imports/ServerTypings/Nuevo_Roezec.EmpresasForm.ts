
namespace ProyectosZec.Nuevo_Roezec {
    export class EmpresasForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Empresas';
    }

    export interface EmpresasForm {
        Razon: Serenity.StringEditor;
        FormaJuridicaId: Serenity.IntegerEditor;
        NExpediente: Serenity.StringEditor;
        TecnicoId: Serenity.IntegerEditor;
        Cif: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Polblacion: Serenity.StringEditor;
        IslaId: Serenity.IntegerEditor;
        TelefonoFijo: Serenity.StringEditor;
        Movil: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        ProyectoId: Serenity.IntegerEditor;
        Expediente: Serenity.StringEditor;
        MotivoExencion: Serenity.StringEditor;
        TipologiaCapitalId: Serenity.IntegerEditor;
        TipoGarantiaTasaId: Serenity.IntegerEditor;
        EmpleoTraspasado: Serenity.IntegerEditor;
        Empleo6Meses: Serenity.IntegerEditor;
        EmpleoPromedio: Serenity.IntegerEditor;
        EmpleoPromedio2Anos: Serenity.IntegerEditor;
        InversionTraspasada: Serenity.DecimalEditor;
        Inversion2Anos: Serenity.DecimalEditor;
        EstadoEmpresaId: Serenity.IntegerEditor;
        FechaAltaRegistro: Serenity.DateEditor;
        FechaBajaRegistro: Serenity.DateEditor;
        FechaBajaEfecto: Serenity.DateEditor;
        FechaRemisionCt: Serenity.DateEditor;
        FechaInformeCt: Serenity.DateEditor;
        FechaRemisionCr: Serenity.DateEditor;
        FechaCaducidadInscripcion: Serenity.DateEditor;
        SentidoCr: Serenity.IntegerEditor;
        SentidoCt: Serenity.IntegerEditor;
        FechaInsSolicitud: Serenity.DateEditor;
        FechaInsResolucion: Serenity.DateEditor;
        FechaInsNotificacion: Serenity.DateEditor;
        NumTasaLiquidacion: Serenity.StringEditor;
    }

    [,
        ['Razon', () => Serenity.StringEditor],
        ['FormaJuridicaId', () => Serenity.IntegerEditor],
        ['NExpediente', () => Serenity.StringEditor],
        ['TecnicoId', () => Serenity.IntegerEditor],
        ['Cif', () => Serenity.StringEditor],
        ['Direccion', () => Serenity.StringEditor],
        ['Polblacion', () => Serenity.StringEditor],
        ['IslaId', () => Serenity.IntegerEditor],
        ['TelefonoFijo', () => Serenity.StringEditor],
        ['Movil', () => Serenity.StringEditor],
        ['Email', () => Serenity.StringEditor],
        ['ProyectoId', () => Serenity.IntegerEditor],
        ['Expediente', () => Serenity.StringEditor],
        ['MotivoExencion', () => Serenity.StringEditor],
        ['TipologiaCapitalId', () => Serenity.IntegerEditor],
        ['TipoGarantiaTasaId', () => Serenity.IntegerEditor],
        ['EmpleoTraspasado', () => Serenity.IntegerEditor],
        ['Empleo6Meses', () => Serenity.IntegerEditor],
        ['EmpleoPromedio', () => Serenity.IntegerEditor],
        ['EmpleoPromedio2Anos', () => Serenity.IntegerEditor],
        ['InversionTraspasada', () => Serenity.DecimalEditor],
        ['Inversion2Anos', () => Serenity.DecimalEditor],
        ['EstadoEmpresaId', () => Serenity.IntegerEditor],
        ['FechaAltaRegistro', () => Serenity.DateEditor],
        ['FechaBajaRegistro', () => Serenity.DateEditor],
        ['FechaBajaEfecto', () => Serenity.DateEditor],
        ['FechaRemisionCt', () => Serenity.DateEditor],
        ['FechaInformeCt', () => Serenity.DateEditor],
        ['FechaRemisionCr', () => Serenity.DateEditor],
        ['FechaCaducidadInscripcion', () => Serenity.DateEditor],
        ['SentidoCr', () => Serenity.IntegerEditor],
        ['SentidoCt', () => Serenity.IntegerEditor],
        ['FechaInsSolicitud', () => Serenity.DateEditor],
        ['FechaInsResolucion', () => Serenity.DateEditor],
        ['FechaInsNotificacion', () => Serenity.DateEditor],
        ['NumTasaLiquidacion', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(EmpresasForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}