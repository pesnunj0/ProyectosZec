
namespace ProyectosZec.CuadroMandos {

    @Serenity.Decorators.registerClass()
    export class PrescriptorinversorDialog extends Serenity.EntityDialog<PrescriptorinversorRow, any> {
        protected getFormKey() { return PrescriptorinversorForm.formKey; }
        protected getIdProperty() { return PrescriptorinversorRow.idProperty; }
        protected getLocalTextPrefix() { return PrescriptorinversorRow.localTextPrefix; }
        protected getNameProperty() { return PrescriptorinversorRow.nameProperty; }
        protected getService() { return PrescriptorinversorService.baseUrl; }
        protected getDeletePermission() { return PrescriptorinversorRow.deletePermission; }
        protected getInsertPermission() { return PrescriptorinversorRow.insertPermission; }
        protected getUpdatePermission() { return PrescriptorinversorRow.updatePermission; }

        protected form = new PrescriptorinversorForm(this.idPrefix);

    }
}