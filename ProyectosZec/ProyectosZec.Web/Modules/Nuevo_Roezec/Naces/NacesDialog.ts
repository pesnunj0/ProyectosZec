
namespace ProyectosZec.Nuevo_Roezec {

    @Serenity.Decorators.registerClass()
    export class NacesDialog extends Serenity.EntityDialog<NacesRow, any> {
        protected getFormKey() { return NacesForm.formKey; }
        protected getIdProperty() { return NacesRow.idProperty; }
        protected getLocalTextPrefix() { return NacesRow.localTextPrefix; }
        protected getNameProperty() { return NacesRow.nameProperty; }
        protected getService() { return NacesService.baseUrl; }
        protected getDeletePermission() { return NacesRow.deletePermission; }
        protected getInsertPermission() { return NacesRow.insertPermission; }
        protected getUpdatePermission() { return NacesRow.updatePermission; }

        protected form = new NacesForm(this.idPrefix);

    }
}