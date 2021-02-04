
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class DiarioGrid extends Serenity.EntityGrid<DiarioRow, any> {
        protected getColumnsKey() { return 'Kairos.Diario'; }
        protected getDialogType() { return DiarioDialog; }
        protected getIdProperty() { return DiarioRow.idProperty; }
        protected getInsertPermission() { return DiarioRow.insertPermission; }
        protected getLocalTextPrefix() { return DiarioRow.localTextPrefix; }
        protected getService() { return DiarioService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}