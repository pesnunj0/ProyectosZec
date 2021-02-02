
namespace ProyectosZec.Kairos {
    export class TiposFichajeForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.TiposFichaje';
    }

    export interface TiposFichajeForm {
        Tipo: Serenity.StringEditor;
    }

    [,
        ['Tipo', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(TiposFichajeForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}