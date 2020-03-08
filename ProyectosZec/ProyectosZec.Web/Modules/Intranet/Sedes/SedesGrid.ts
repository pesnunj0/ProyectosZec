
namespace ProyectosZec.Intranet {

    @Serenity.Decorators.registerClass()
    export class SedesGrid extends Serenity.EntityGrid<SedesRow, any> {
        protected getColumnsKey() { return 'Intranet.Sedes'; }
        protected getDialogType() { return SedesDialog; }
        protected getIdProperty() { return SedesRow.idProperty; }
        protected getInsertPermission() { return SedesRow.insertPermission; }
        protected getLocalTextPrefix() { return SedesRow.localTextPrefix; }
        protected getService() { return SedesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}