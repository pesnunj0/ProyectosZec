
namespace ProyectosZec.Kairos {
    export class FichajesForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.Fichajes';
    }

    export interface FichajesForm {
        IdEmpleado: Serenity.IntegerEditor;
        CodigoCliente: Serenity.IntegerEditor;
        FechaHora: Serenity.DateEditor;
        Observaciones: Serenity.StringEditor;
        GpsPosicionLatitud: Serenity.StringEditor;
        GpsPosicionLongitud: Serenity.StringEditor;
        GpsFechaHora: Serenity.DateEditor;
        GpsProveedor: Serenity.StringEditor;
        GpsAltitud: Serenity.StringEditor;
        IdTerminal: Serenity.IntegerEditor;
        IdDispositivoModelo: Serenity.IntegerEditor;
        Modificado: Serenity.DateEditor;
        Anulado: Serenity.DateEditor;
        Validado: Serenity.IntegerEditor;
        TipoDispositivo: Serenity.IntegerEditor;
        EntradaSalida: Serenity.StringEditor;
        IdEmpresa: Serenity.IntegerEditor;
    }

    [,
        ['IdEmpleado', () => Serenity.IntegerEditor],
        ['CodigoCliente', () => Serenity.IntegerEditor],
        ['FechaHora', () => Serenity.DateEditor],
        ['Observaciones', () => Serenity.StringEditor],
        ['GpsPosicionLatitud', () => Serenity.StringEditor],
        ['GpsPosicionLongitud', () => Serenity.StringEditor],
        ['GpsFechaHora', () => Serenity.DateEditor],
        ['GpsProveedor', () => Serenity.StringEditor],
        ['GpsAltitud', () => Serenity.StringEditor],
        ['IdTerminal', () => Serenity.IntegerEditor],
        ['IdDispositivoModelo', () => Serenity.IntegerEditor],
        ['Modificado', () => Serenity.DateEditor],
        ['Anulado', () => Serenity.DateEditor],
        ['Validado', () => Serenity.IntegerEditor],
        ['TipoDispositivo', () => Serenity.IntegerEditor],
        ['EntradaSalida', () => Serenity.StringEditor],
        ['IdEmpresa', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(FichajesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}