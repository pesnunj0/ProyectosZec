
namespace ProyectosZec.Nuevo_Roezec {
    export class EmpresasNaceForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.EmpresasNace';
    }

    export interface EmpresasNaceForm {
        EmpresaId: Serenity.IntegerEditor;
        NaceId: Serenity.IntegerEditor;
    }

    [,
        ['EmpresaId', () => Serenity.IntegerEditor],
        ['NaceId', () => Serenity.IntegerEditor]
    ].forEach(x => Object.defineProperty(EmpresasNaceForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}