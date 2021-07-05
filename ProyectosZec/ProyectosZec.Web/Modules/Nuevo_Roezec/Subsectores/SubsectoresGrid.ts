
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class SubsectoresGrid extends Serenity.EntityGrid<SubsectoresRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.Subsectores'; }
        protected getDialogType() { return SubsectoresDialog; }
        protected getIdProperty() { return SubsectoresRow.idProperty; }
        protected getInsertPermission() { return SubsectoresRow.insertPermission; }
        protected getLocalTextPrefix() { return SubsectoresRow.localTextPrefix; }
        protected getService() { return SubsectoresService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}