namespace ProyectosZec.Kairos {
    export interface DiarioForm {
        IdDepartamento: Serenity.StringEditor;
        Empleado: Serenity.StringEditor;
        Fecha: Serenity.DateEditor;
        Entrada: Serenity.DateEditor;
        HoraEntrada: Serenity.StringEditor;
        Salida: Serenity.DateEditor;
        HoraSalida: Serenity.StringEditor;
    }

    export class DiarioForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.Diario';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!DiarioForm.init)  {
                DiarioForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;

                Q.initFormType(DiarioForm, [
                    'IdDepartamento', w0,
                    'Empleado', w0,
                    'Fecha', w1,
                    'Entrada', w1,
                    'HoraEntrada', w0,
                    'Salida', w1,
                    'HoraSalida', w0
                ]);
            }
        }
    }
}

