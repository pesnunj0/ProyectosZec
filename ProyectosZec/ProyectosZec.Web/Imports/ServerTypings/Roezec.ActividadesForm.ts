namespace ProyectosZec.Roezec {
    export interface ActividadesForm {
        IdNace: Serenity.LookupEditor;
        IdEmpresa: Serenity.LookupEditor;
    }

    export class ActividadesForm extends Serenity.PrefixedContext {
        static formKey = 'Roezec.Actividades';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!ActividadesForm.init)  {
                ActividadesForm.init = true;

                var s = Serenity;
                var w0 = s.LookupEditor;

                Q.initFormType(ActividadesForm, [
                    'IdNace', w0,
                    'IdEmpresa', w0
                ]);
            }
        }
    }
}

