namespace ProyectosZec.Roezec {
    export interface RepresentantesForm {
        TipoDoc: Serenity.StringEditor;
        Doc: Serenity.StringEditor;
        IdRepresentanteFisico: Serenity.IntegerEditor;
        Nombre: Serenity.StringEditor;
        Direccion: Serenity.StringEditor;
        Cp: Serenity.StringEditor;
        Poblacion: Serenity.StringEditor;
        Provincia: Serenity.StringEditor;
        Pais: Serenity.StringEditor;
        Email: Serenity.StringEditor;
        Telefono: Serenity.StringEditor;
        Descripcion: Serenity.StringEditor;
        IdEmpresa: Serenity.LookupEditor;
        FechaAlta: Serenity.DateEditor;
        FechaModificacion: Serenity.DateEditor;
        FechaBaja: Serenity.DateEditor;
        UsrAlta: Serenity.StringEditor;
        UsrModificacion: Serenity.StringEditor;
        UsrBaja: Serenity.StringEditor;
        MotivoBaja: Serenity.StringEditor;
    }

    export class RepresentantesForm extends Serenity.PrefixedContext {
        static formKey = 'Roezec.Representantes';
        private static init: boolean;

        constructor(prefix: string) {
            super(prefix);

            if (!RepresentantesForm.init)  {
                RepresentantesForm.init = true;

                var s = Serenity;
                var w0 = s.StringEditor;
                var w1 = s.IntegerEditor;
                var w2 = s.LookupEditor;
                var w3 = s.DateEditor;

                Q.initFormType(RepresentantesForm, [
                    'TipoDoc', w0,
                    'Doc', w0,
                    'IdRepresentanteFisico', w1,
                    'Nombre', w0,
                    'Direccion', w0,
                    'Cp', w0,
                    'Poblacion', w0,
                    'Provincia', w0,
                    'Pais', w0,
                    'Email', w0,
                    'Telefono', w0,
                    'Descripcion', w0,
                    'IdEmpresa', w2,
                    'FechaAlta', w3,
                    'FechaModificacion', w3,
                    'FechaBaja', w3,
                    'UsrAlta', w0,
                    'UsrModificacion', w0,
                    'UsrBaja', w0,
                    'MotivoBaja', w0
                ]);
            }
        }
    }
}

