
namespace ProyectosZec.Kairos {
    export class SedesForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.Sedes';
    }

    export interface SedesForm {
        Sede: Serenity.StringEditor;
    }

    [,
        ['Sede', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(SedesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}