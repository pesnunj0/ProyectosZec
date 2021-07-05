
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class ProcedimientosGrid extends Serenity.EntityGrid<ProcedimientosRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Procedimientos'; }
        protected getDialogType() { return ProcedimientosDialog; }
        protected getIdProperty() { return ProcedimientosRow.idProperty; }
        protected getInsertPermission() { return ProcedimientosRow.insertPermission; }
        protected getLocalTextPrefix() { return ProcedimientosRow.localTextPrefix; }
        protected getService() { return ProcedimientosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}