
namespace ProyectosZec.Inmovilizado {

    @Serenity.Decorators.registerClass()
    export class TiposinmovilizadoGrid extends Serenity.EntityGrid<TiposinmovilizadoRow, any> {
        protected getColumnsKey() { return 'Inmovilizado.Tiposinmovilizado'; }
        protected getDialogType() { return TiposinmovilizadoDialog; }
        protected getIdProperty() { return TiposinmovilizadoRow.idProperty; }
        protected getInsertPermission() { return TiposinmovilizadoRow.insertPermission; }
        protected getLocalTextPrefix() { return TiposinmovilizadoRow.localTextPrefix; }
        protected getService() { return TiposinmovilizadoService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}