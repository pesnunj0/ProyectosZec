
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class IdiomasGrid extends Serenity.EntityGrid<IdiomasRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Idiomas'; }
        protected getDialogType() { return IdiomasDialog; }
        protected getIdProperty() { return IdiomasRow.idProperty; }
        protected getInsertPermission() { return IdiomasRow.insertPermission; }
        protected getLocalTextPrefix() { return IdiomasRow.localTextPrefix; }
        protected getService() { return IdiomasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}