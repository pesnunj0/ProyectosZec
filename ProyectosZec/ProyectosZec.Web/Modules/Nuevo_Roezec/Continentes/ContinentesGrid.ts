
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class ContinentesGrid extends Serenity.EntityGrid<ContinentesRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Continentes'; }
        protected getDialogType() { return ContinentesDialog; }
        protected getIdProperty() { return ContinentesRow.idProperty; }
        protected getInsertPermission() { return ContinentesRow.insertPermission; }
        protected getLocalTextPrefix() { return ContinentesRow.localTextPrefix; }
        protected getService() { return ContinentesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}