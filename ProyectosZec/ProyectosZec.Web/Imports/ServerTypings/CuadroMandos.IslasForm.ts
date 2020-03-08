namespace ProyectosZec.CuadroMandos {
    export interface IslasForm {
        NombreIsla: Serenity.StringEditor;
        Isla: Serenity.StringEditor;
    }

    export class IslasForm extends Serenity.PrefixedContext {
        static formKey = 'CuadroMandos.Islas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!IslasForm.init)  {
                IslasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(IslasForm, [
                    'NombreIsla', w0,
                    'Isla', w0
                ]);
            }
        }
    }
}

