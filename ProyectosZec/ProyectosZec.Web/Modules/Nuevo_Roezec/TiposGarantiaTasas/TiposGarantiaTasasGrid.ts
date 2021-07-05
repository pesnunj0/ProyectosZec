
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class TiposGarantiaTasasGrid extends Serenity.EntityGrid<TiposGarantiaTasasRow, any> {
        protected getColumnsKey() { return 'Nuevo_Roezec.TiposGarantiaTasas'; }
        protected getDialogType() { return TiposGarantiaTasasDialog; }
        protected getIdProperty() { return TiposGarantiaTasasRow.idProperty; }
        protected getInsertPermission() { return TiposGarantiaTasasRow.insertPermission; }
        protected getLocalTextPrefix() { return TiposGarantiaTasasRow.localTextPrefix; }
        protected getService() { return TiposGarantiaTasasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}