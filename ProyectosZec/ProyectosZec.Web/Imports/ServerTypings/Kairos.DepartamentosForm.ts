
namespace ProyectosZec.Kairos {
    export class DepartamentosForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.Departamentos';
    }

    export interface DepartamentosForm {
        CodigoCliente: Serenity.IntegerEditor;
        Codigo: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        FechaBorrado: Serenity.DateEditor;
        SedeId: Serenity.IntegerEditor;
    }

    [,
        ['CodigoCliente', () => Serenity.IntegerEditor],
        ['Codigo', () => Serenity.StringEditor],
        ['Descripcion', () => Serenity.StringEditor],
        ['FechaBorrado', () => Serenity.DateEditor],
        ['SedeId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(DepartamentosForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}