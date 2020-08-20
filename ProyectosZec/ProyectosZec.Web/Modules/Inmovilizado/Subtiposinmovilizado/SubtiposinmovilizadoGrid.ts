
namespace ProyectosZec.Inmovilizado {

    @Serenity.Decorators.registerClass()
    export class SubtiposinmovilizadoGrid extends Serenity.EntityGrid<SubtiposinmovilizadoRow, any> {
        protected getColumnsKey() { return 'Inmovilizado.Subtiposinmovilizado'; }
        protected getDialogType() { return SubtiposinmovilizadoDialog; }
        protected getIdProperty() { return SubtiposinmovilizadoRow.idProperty; }
        protected getInsertPermission() { return SubtiposinmovilizadoRow.insertPermission; }
        protected getLocalTextPrefix() { return SubtiposinmovilizadoRow.localTextPrefix; }
        protected getService() { return SubtiposinmovilizadoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}