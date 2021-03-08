
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class EstadosExtrasGrid extends Serenity.EntityGrid<EstadosExtrasRow, any> {
        protected getColumnsKey() { return 'Kairos.EstadosExtras'; }
        protected getDialogType() { return EstadosExtrasDialog; }
        protected getIdProperty() { return EstadosExtrasRow.idProperty; }
        protected getInsertPermission() { return EstadosExtrasRow.insertPermission; }
        protected getLocalTextPrefix() { return EstadosExtrasRow.localTextPrefix; }
        protected getService() { return EstadosExtrasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}