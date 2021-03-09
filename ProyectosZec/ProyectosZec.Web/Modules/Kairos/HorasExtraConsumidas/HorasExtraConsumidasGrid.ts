
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class HorasExtraConsumidasGrid extends Serenity.EntityGrid<HorasExtraConsumidasRow, any> {
        protected getColumnsKey() { return 'Kairos.HorasExtraConsumidas'; }
        protected getDialogType() { return HorasExtraConsumidasDialog; }
        protected getIdProperty() { return HorasExtraConsumidasRow.idProperty; }
        protected getInsertPermission() { return HorasExtraConsumidasRow.insertPermission; }
        protected getLocalTextPrefix() { return HorasExtraConsumidasRow.localTextPrefix; }
        protected getService() { return HorasExtraConsumidasService.baseUrl; }

        constructor(container: JQuery) {
            super(container);
        }
    }
}