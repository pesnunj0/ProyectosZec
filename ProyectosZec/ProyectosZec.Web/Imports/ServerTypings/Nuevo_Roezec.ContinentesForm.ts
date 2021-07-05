
namespace ProyectosZec.Nuevo_Roezec {
    export class ContinentesForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.Continentes';
    }

    export interface ContinentesForm {
        Continente: Serenity.StringEditor;
    }

    [,
        ['Continente', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ContinentesForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}