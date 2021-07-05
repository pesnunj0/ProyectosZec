
namespace ProyectosZec.Nuevo_Roezec {
    export class HistorialEmpresasForm extends Serenity.PrefixedContext {
        static formKey = 'Nuevo_Roezec.HistorialEmpresas';
    }

    export interface HistorialEmpresasForm {
        EmpresaId: Serenity.IntegerEditor;
        ProcedimientoId: Serenity.IntegerEditor;
        FechaInicio: Serenity.DateEditor;
        FechaResolucion: Serenity.DateEditor;
        SentidoResolucion: Serenity.IntegerEditor;
        FechaEfecto: Serenity.DateEditor;
        AcuseInicio: Serenity.DateEditor;
        PersonaAcuseIncioId: Serenity.IntegerEditor;
        AcuseResolucion: Serenity.DateEditor;
        PersonaAcuseResolucionId: Serenity.IntegerEditor;
        Observaciones: Serenity.StringEditor;
        Ficheros: Serenity.StringEditor;
    }

    [,
        ['EmpresaId', () => Serenity.IntegerEditor],
        ['ProcedimientoId', () => Serenity.IntegerEditor],
        ['FechaInicio', () => Serenity.DateEditor],
        ['FechaResolucion', () => Serenity.DateEditor],
        ['SentidoResolucion', () => Serenity.IntegerEditor],
        ['FechaEfecto', () => Serenity.DateEditor],
        ['AcuseInicio', () => Serenity.DateEditor],
        ['PersonaAcuseIncioId', () => Serenity.IntegerEditor],
        ['AcuseResolucion', () => Serenity.DateEditor],
        ['PersonaAcuseResolucionId', () => Serenity.IntegerEditor],
        ['Observaciones', () => Serenity.StringEditor],
        ['Ficheros', () => Serenity.StringEditor]
    ].forEach(x => Object.defineProperty(HistorialEmpresasForm.prototype, <string>x[0], {
        get: function () {
            return this.w(x[0], (x[1] as any)());
        },
        enumerable: true,
        configurable: true
    }));
}