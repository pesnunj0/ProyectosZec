namespace ProyectosZec.Nuevo_Roezec {
    export interface FormasJuridicasForm {
        Juridica: Serenity.StringEditor;
    }

    export class FormasJuridicasForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.FormasJuridicas';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!FormasJuridicasForm.init)  {
                FormasJuridicasForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;

                Q.initFormType(FormasJuridicasForm, [
                    'Juridica', w0
                ]);
            }
        }
    }
}

