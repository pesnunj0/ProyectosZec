
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    export class CapitalGrid extends Serenity.EntityGrid<CapitalRow, any> {
        protected getColumnsKey() { return 'CuadroMandos.Capital'; }
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