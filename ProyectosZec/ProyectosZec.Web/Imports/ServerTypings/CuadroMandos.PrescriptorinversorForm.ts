namespace ProyectosZec.CuadroMandos {
    export interface PrescriptorinversorForm {
        PrescriptorInversor: Serenity.StringEditor;
    }

    export class PrescriptorinversorForm extends Serenity.PrefixedContext {
        static formKey = 'CuadroMandos.Prescriptorinversor';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!PrescriptorinversorForm.init)  {
                PrescriptorinversorForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(PrescriptorinversorForm, [
                    'PrescriptorInversor', w0
                ]);
            }
        }
    }
}

