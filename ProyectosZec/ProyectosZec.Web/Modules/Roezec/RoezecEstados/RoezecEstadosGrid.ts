
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    export class RoezecEstadosGrid extends Serenity.EntityGrid<RoezecEstadosRow, any> {
        protected getColumnsKey() { return 'Roezec.RoezecEstados'; }
        protected getDialogType() { return RoezecEstadosDialog; }
        protected getIdProperty() { return RoezecEstadosRow.idProperty; }
        protected getInsertPermission() { return RoezecEstadosRow.insertPermission; }
        protected getLocalTextPrefix() { return RoezecEstadosRow.localTextPrefix; }
        protected getService() { return RoezecEstadosService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}