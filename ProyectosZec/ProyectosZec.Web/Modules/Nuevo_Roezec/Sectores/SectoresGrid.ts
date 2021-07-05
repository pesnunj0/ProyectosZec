
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class SectoresGrid extends Serenity.EntityGrid<SectoresRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Sectores'; }
        protected getDialogType() { return SectoresDialog; }
        protected getIdProperty() { return SectoresRow.idProperty; }
        protected getInsertPermission() { return SectoresRow.insertPermission; }
        protected getLocalTextPrefix() { return SectoresRow.localTextPrefix; }
        protected getService() { return SectoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}