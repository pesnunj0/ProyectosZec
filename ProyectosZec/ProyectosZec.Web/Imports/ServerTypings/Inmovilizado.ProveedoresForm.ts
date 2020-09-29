namespace ProyectosZec.Inmovilizado {
    export interface ProveedoresForm {
        Proveedor: Serenity.StringEditor;
        Contacto: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Email: Serenity.StringEditor;
    }

    export class ProveedoresForm extends Serenity.PrefixedContext {
        static formKey = 'Inmovilizado.Proveedores';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ProveedoresForm.init)  {
                ProveedoresForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(ProveedoresForm, [
                    'Proveedor', w0,
                    'Contacto', w0,
                    'Telefono', w0,
                    'Email', w0
                ]);
            }
        }
    }
}

