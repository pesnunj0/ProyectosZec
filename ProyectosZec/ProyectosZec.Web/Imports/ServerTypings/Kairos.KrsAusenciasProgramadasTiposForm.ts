namespace ProyectosZec.Kairos {
    export interface KrsAusenciasProgramadasTiposForm {
        CodigoCliente: Serenity.StringEditor;
        Codigo: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        ColorFondo: Serenity.StringEditor;
        ColorLetra: Serenity.StringEditor;
        FechaBorrado: Serenity.DateEditor;
        PermitirSolicitud: Serenity.BooleanEditor;
        FechaActualizacion: Serenity.DateEditor;
        ContabilizarTiempo: Serenity.BooleanEditor;
    }

    export class KrsAusenciasProgramadasTiposForm extends Serenity.PrefixedContext {
        static formKey = 'Kairos.KrsAusenciasProgramadasTipos';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!KrsAusenciasProgramadasTiposForm.init)  {
                KrsAusenciasProgramadasTiposForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.DateEditor;
                var w2 = s.BooleanEditor;

                Q.initFormType(KrsAusenciasProgramadasTiposForm, [
                    'CodigoCliente', w0,
                    'Codigo', w0,
                    'Descripcion', w0,
                    'ColorFondo', w0,
                    'ColorLetra', w0,
                    'FechaBorrado', w1,
                    'PermitirSolicitud', w2,
                    'FechaActualizacion', w1,
                    'ContabilizarTiempo', w2
                ]);
            }
        }
    }
}

