
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class HorasExtraConsumidasDialog extends Serenity.EntityDialog<HorasExtraConsumidasRow, any> {
        protected getFormKey() { return HorasExtraConsumidasForm.formKey; }
        protected getIdProperty() { return HorasExtraConsumidasRow.idProperty; }
        protected getLocalTextPrefix() { return HorasExtraConsumidasRow.localTextPrefix; }
        protected getService() { return HorasExtraConsumidasService.baseUrl; }
        protected getDeletePermission() { return HorasExtraConsumidasRow.deletePermission; }
        protected getInsertPermission() { return HorasExtraConsumidasRow.insertPermission; }
        protected getUpdatePermission() { return HorasExtraConsumidasRow.updatePermission; }

        protected form = new HorasExtraConsumidasForm(this.idPrefix);

    }
}