
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class NacesGrid extends Serenity.EntityGrid<NacesRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Naces'; }
        protected getDialogType() { return NacesDialog; }
        protected getIdProperty() { return NacesRow.idProperty; }
        protected getInsertPermission() { return NacesRow.insertPermission; }
        protected getLocalTextPrefix() { return NacesRow.localTextPrefix; }
        protected getService() { return NacesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}