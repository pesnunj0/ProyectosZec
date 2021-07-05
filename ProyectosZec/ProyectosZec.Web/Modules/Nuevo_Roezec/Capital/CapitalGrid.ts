
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class CapitalGrid extends Serenity.EntityGrid<CapitalRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Capital'; }
        protected getDialogType() { return CapitalDialog; }
        protected getIdProperty() { return CapitalRow.idProperty; }
        protected getInsertPermission() { return CapitalRow.insertPermission; }
        protected getLocalTextPrefix() { return CapitalRow.localTextPrefix; }
        protected getService() { return CapitalService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}