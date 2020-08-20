
namespace ProyectosZec.Inmovilizado {
    export class InmovilizadosForm extends Serenity.PrefixedContext {
        static formKey = 'Inmovilizado.Inmovilizados';
    }

    export interface InmovilizadosForm {
        Descripcion: Serenity.StringEditor;
        SubTipoInmovilizadoId: Serenity.IntegerEditor;
        SedeId: Serenity.IntegerEditor;
        ProveedorId: Serenity.IntegerEditor;
        FechaCompra: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Valor: Serenity.DecimalEditor;
        Amortizacion: Serenity.IntegerEditor;
        Garantia: Serenity.IntegerEditor;
        Factura: Serenity.StringEditor;
    }

    [,
        ['Descripcion', () => Serenity.StringEditor],
        ['SubTipoInmovilizadoId', () => Serenity.IntegerEditor],
        ['SedeId', () => Serenity.IntegerEditor],
        ['ProveedorId', () => Serenity.IntegerEditor],
        ['FechaCompra', () => Serenity.DateEditor],
        ['FechaBaja', () => Serenity.DateEditor],
        ['Valor', () => Serenity.DecimalEditor],
        ['Amortizacion', () => Serenity.IntegerEditor],
        ['Garantia', () => Serenity.IntegerEditor],
        ['Factura', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(InmovilizadosForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}