
namespace ProyectosZec.Inmovilizado {
    export class TiposinmovilizadoForm extends Serenity.PrefixedContext {
        static formKey = 'Inmovilizado.Tiposinmovilizado';
    }

    export interface TiposinmovilizadoForm {
        Tipo: Serenity.StringEditor;
    }

    [,
        ['Tipo', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TiposinmovilizadoForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}