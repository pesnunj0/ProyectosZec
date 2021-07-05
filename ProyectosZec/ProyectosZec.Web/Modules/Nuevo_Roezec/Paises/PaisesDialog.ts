
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class PaisesDialog extends Serenity.EntityDialog<PaisesRow, any> {
        protected getFormKey() { return PaisesForm.formKey; }
        protected getIdProperty() { return PaisesRow.idProperty; }
        protected getLocalTextPrefix() { return PaisesRow.localTextPrefix; }
        protected getNameProperty() { return PaisesRow.nameProperty; }
        protected getService() { return PaisesService.baseUrl; }
        protected getDeletePermission() { return PaisesRow.deletePermission; }
        protected getInsertPermission() { return PaisesRow.insertPermission; }
        protected getUpdatePermission() { return PaisesRow.updatePermission; }

        protected form = new PaisesForm(this.idPrefix);

    }
}