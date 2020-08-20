
namespace ProyectosZec.Inmovilizado {
    export class SubtiposinmovilizadoForm extends Serenity.PrefixedContext {
        static formKey = 'Inmovilizado.Subtiposinmovilizado';
    }

    export interface SubtiposinmovilizadoForm {
        TipoInmovilizadoId: Serenity.IntegerEditor;
        SubTipo: Serenity.StringEditor;
    }

    [,
        ['TipoInmovilizadoId', () => Serenity.IntegerEditor],
        ['SubTipo', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SubtiposinmovilizadoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}