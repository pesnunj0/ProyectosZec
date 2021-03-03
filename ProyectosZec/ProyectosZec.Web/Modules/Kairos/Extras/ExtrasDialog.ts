
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class ExtrasDialog extends Serenity.EntityDialog<ExtrasRow, any> {
        protected getFormKey() { return ExtrasForm.formKey; }
        protected getIdProperty() { return ExtrasRow.idProperty; }
        protected getLocalTextPrefix() { return ExtrasRow.localTextPrefix; }
        protected getNameProperty() { return ExtrasRow.nameProperty; }
        protected getService() { return ExtrasService.baseUrl; }
        protected getDeletePermission() { return ExtrasRow.deletePermission; }
        protected getInsertPermission() { return ExtrasRow.insertPermission; }
        protected getUpdatePermission() { return ExtrasRow.updatePermission; }

        protected form = new ExtrasForm(this.idPrefix);

    }
}