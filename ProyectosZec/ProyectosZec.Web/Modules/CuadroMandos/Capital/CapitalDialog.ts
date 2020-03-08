
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    export class CapitalDialog extends Serenity.EntityDialog<CapitalRow, any> {
        protected getFormKey() { return CapitalForm.formKey; }
        protected getIdProperty() { return CapitalRow.idProperty; }
        protected getLocalTextPrefix() { return CapitalRow.localTextPrefix; }
        protected getNameProperty() { return CapitalRow.nameProperty; }
        protected getService() { return CapitalService.baseUrl; }
        protected getDeletePermission() { return CapitalRow.deletePermission; }
        protected getInsertPermission() { return CapitalRow.insertPermission; }
        protected getUpdatePermission() { return CapitalRow.updatePermission; }

        protected form = new CapitalForm(this.idPrefix);

    }
}