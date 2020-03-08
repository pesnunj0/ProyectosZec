
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    export class EstadosGrid extends Serenity.EntityGrid<EstadosRow, any> {
        protected getColumnsKey() { return 'CuadroMandos.Estados'; }
        protected getDialogType() { return EstadosDialog; }
        protected getIdProperty() { return EstadosRow.idProperty; }
        protected getInsertPermission() { return EstadosRow.insertPermission; }
        protected getLocalTextPrefix() { return EstadosRow.localTextPrefix; }
        protected getService() { return EstadosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}