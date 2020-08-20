
namespace ProyectosZec.Inmovilizado {
    export class ProveedoresForm extends Serenity.PrefixedContext {
        static formKey = 'Inmovilizado.Proveedores';
    }

    export interface ProveedoresForm {
        Proveedor: Serenity.StringEditor;
    }

    [,
        ['Proveedor', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(ProveedoresForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}