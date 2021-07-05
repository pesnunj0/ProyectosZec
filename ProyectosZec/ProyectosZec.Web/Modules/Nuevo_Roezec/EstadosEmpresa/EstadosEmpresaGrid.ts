
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class EstadosEmpresaGrid extends Serenity.EntityGrid<EstadosEmpresaRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.EstadosEmpresa'; }
        protected getDialogType() { return EstadosEmpresaDialog; }
        protected getIdProperty() { return EstadosEmpresaRow.idProperty; }
        protected getInsertPermission() { return EstadosEmpresaRow.insertPermission; }
        protected getLocalTextPrefix() { return EstadosEmpresaRow.localTextPrefix; }
        protected getService() { return EstadosEmpresaService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}