
namespace ProyectosZec.Nuevo_Roezec {
    export class EmpresasContactosForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.EmpresasContactos';
    }

    export interface EmpresasContactosForm {
        EmpresaId: Serenity.IntegerEditor;
        ContactoId: Serenity.IntegerEditor;
        TipoContactoId: Serenity.IntegerEditor;
        FechaBaja: Serenity.DateEditor;
    }

    [,
        ['EmpresaId', () => Serenity.IntegerEditor],
        ['ContactoId', () => Serenity.IntegerEditor],
        ['TipoContactoId', () => Serenity.IntegerEditor],
        ['FechaBaja', () => Serenity.DateEditor]
    ].forEach(x => Object.defineProperty(EmpresasContactosForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}