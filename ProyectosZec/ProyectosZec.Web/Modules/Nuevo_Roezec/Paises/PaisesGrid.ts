
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class PaisesGrid extends Serenity.EntityGrid<PaisesRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Paises'; }
        protected getDialogType() { return PaisesDialog; }
        protected getIdProperty() { return PaisesRow.idProperty; }
        protected getInsertPermission() { return PaisesRow.insertPermission; }
        protected getLocalTextPrefix() { return PaisesRow.localTextPrefix; }
        protected getService() { return PaisesService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}