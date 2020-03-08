
namespace ProyectosZec.Intranet {

    @Serenity.Decorators.registerClass()
    export class SedesDialog extends Serenity.EntityDialog<SedesRow, any> {
        protected getFormKey() { return SedesForm.formKey; }
        protected getIdProperty() { return SedesRow.idProperty; }
        protected getLocalTextPrefix() { return SedesRow.localTextPrefix; }
        protected getNameProperty() { return SedesRow.nameProperty; }
        protected getService() { return SedesService.baseUrl; }
        protected getDeletePermission() { return SedesRow.deletePermission; }
        protected getInsertPermission() { return SedesRow.insertPermission; }
        protected getUpdatePermission() { return SedesRow.updatePermission; }

        protected form = new SedesForm(this.idPrefix);

    }
}