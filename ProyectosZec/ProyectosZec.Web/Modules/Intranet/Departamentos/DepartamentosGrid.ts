
namespace ProyectosZec.Intranet {

    @Serenity.Decorators.registerClass()
    export class DepartamentosGrid extends Serenity.EntityGrid<DepartamentosRow, any> {
        protected getColumnsKey() { return 'Intranet.Departamentos'; }
        protected getDialogType() { return DepartamentosDialog; }
        protected getIdProperty() { return DepartamentosRow.idProperty; }
        protected getInsertPermission() { return DepartamentosRow.insertPermission; }
        protected getLocalTextPrefix() { return DepartamentosRow.localTextPrefix; }
        protected getService() { return DepartamentosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}