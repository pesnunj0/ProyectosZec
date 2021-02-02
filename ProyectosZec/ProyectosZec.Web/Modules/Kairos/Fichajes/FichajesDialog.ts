
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class FichajesDialog extends Serenity.EntityDialog<FichajesRow, any> {
        protected getFormKey() { return FichajesForm.formKey; }
        protected getIdProperty() { return FichajesRow.idProperty; }
        protected getLocalTextPrefix() { return FichajesRow.localTextPrefix; }
        protected getNameProperty() { return FichajesRow.nameProperty; }
        protected getService() { return FichajesService.baseUrl; }
        protected getDeletePermission() { return FichajesRow.deletePermission; }
        protected getInsertPermission() { return FichajesRow.insertPermission; }
        protected getUpdatePermission() { return FichajesRow.updatePermission; }

        protected form = new FichajesForm(this.idPrefix);

    }
}