
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class DiarioDialog extends Serenity.EntityDialog<DiarioRow, any> {
        protected getFormKey() { return DiarioForm.formKey; }
        protected getIdProperty() { return DiarioRow.idProperty; }
        protected getLocalTextPrefix() { return DiarioRow.localTextPrefix; }
        protected getNameProperty() { return DiarioRow.nameProperty; }
        protected getService() { return DiarioService.baseUrl; }
        protected getDeletePermission() { return DiarioRow.deletePermission; }
        protected getInsertPermission() { return DiarioRow.insertPermission; }
        protected getUpdatePermission() { return DiarioRow.updatePermission; }

        protected form = new DiarioForm(this.idPrefix);

    }
}