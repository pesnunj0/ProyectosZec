
namespace ProyectosZec.Intranet {

    @Serenity.Decorators.registerClass()
    export class TelefonosDialog extends Serenity.EntityDialog<TelefonosRow, any> {
        protected getFormKey() { return TelefonosForm.formKey; }
        protected getIdProperty() { return TelefonosRow.idProperty; }
        protected getLocalTextPrefix() { return TelefonosRow.localTextPrefix; }
        protected getNameProperty() { return TelefonosRow.nameProperty; }
        protected getService() { return TelefonosService.baseUrl; }
        protected getDeletePermission() { return TelefonosRow.deletePermission; }
        protected getInsertPermission() { return TelefonosRow.insertPermission; }
        protected getUpdatePermission() { return TelefonosRow.updatePermission; }

        protected form = new TelefonosForm(this.idPrefix);

    }
}