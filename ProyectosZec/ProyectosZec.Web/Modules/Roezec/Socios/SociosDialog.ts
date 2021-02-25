
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    export class SociosDialog extends Serenity.EntityDialog<SociosRow, any> {
        protected getFormKey() { return SociosForm.formKey; }
        protected getIdProperty() { return SociosRow.idProperty; }
        protected getLocalTextPrefix() { return SociosRow.localTextPrefix; }
        protected getNameProperty() { return SociosRow.nameProperty; }
        protected getService() { return SociosService.baseUrl; }
        protected getDeletePermission() { return SociosRow.deletePermission; }
        protected getInsertPermission() { return SociosRow.insertPermission; }
        protected getUpdatePermission() { return SociosRow.updatePermission; }

        protected form = new SociosForm(this.idPrefix);

    }
}