namespace ProyectosZec.Inmovilizado {
    export interface InmovilizadosForm {
        Codigo: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        Ubicacion: Serenity.StringEditor;
        NumeroSerie: Serenity.StringEditor;
        TipoInmovilizadoId: Serenity.LookupEditor;
        SubTipoInmovilizadoId: Serenity.LookupEditor;
        Pg: Serenity.StringEditor;
        SedeId: Serenity.LookupEditor;
        ProveedorId: Serenity.LookupEditor;
        FechaCompra: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        Valor: Serenity.DecimalEditor;
        Amortizacion: Serenity.IntegerEditor;
        Garantia: Serenity.IntegerEditor;
        Factura: Serenity.StringEditor;
        GalleryImages: Serenity.MultipleImageUploadEditor;
    }

    export class InmovilizadosForm extends Serenity.PrefixedContext {
        static formKey = 'Inmovilizado.Inmovilizados';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!InmovilizadosForm.init)  {
                InmovilizadosForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.LookupEditor;
                var w2 = s.DateEditor;
                var w3 = s.DecimalEditor;
                var w4 = s.IntegerEditor;
                var w5 = s.MultipleImageUploadEditor;

                Q.initFormType(InmovilizadosForm, [
                    'Codigo', w0,
                    'Descripcion', w0,
                    'Ubicacion', w0,
                    'NumeroSerie', w0,
                    'TipoInmovilizadoId', w1,
                    'SubTipoInmovilizadoId', w1,
                    'Pg', w0,
                    'SedeId', w1,
                    'ProveedorId', w1,
                    'FechaCompra', w2,
                    'FechaBaja', w2,
                    'Valor', w3,
                    'Amortizacion', w4,
                    'Garantia', w4,
                    'Factura', w0,
                    'GalleryImages', w5
                ]);
            }
        }
    }
}

