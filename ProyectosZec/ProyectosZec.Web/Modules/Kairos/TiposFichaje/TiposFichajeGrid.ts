
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class TiposFichajeGrid extends Serenity.EntityGrid<TiposFichajeRow, any> {
        protected getColumnsKey() { return 'Kairos.TiposFichaje'; }
        protected getDialogType() { return TiposFichajeDialog; }
        protected getIdProperty() { return TiposFichajeRow.idProperty; }
        protected getInsertPermission() { return TiposFichajeRow.insertPermission; }
        protected getLocalTextPrefix() { return TiposFichajeRow.localTextPrefix; }
        protected getService() { return TiposFichajeService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}