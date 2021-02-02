
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class FichajesGrid extends Serenity.EntityGrid<FichajesRow, any> {
        protected getColumnsKey() { return 'Kairos.Fichajes'; }
        protected getDialogType() { return FichajesDialog; }
        protected getIdProperty() { return FichajesRow.idProperty; }
        protected getInsertPermission() { return FichajesRow.insertPermission; }
        protected getLocalTextPrefix() { return FichajesRow.localTextPrefix; }
        protected getService() { return FichajesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}