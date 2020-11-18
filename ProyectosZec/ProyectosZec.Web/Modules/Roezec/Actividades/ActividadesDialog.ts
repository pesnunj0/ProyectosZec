
namespace ProyectosZec.Roezec {

    @Serenity.Decorators.registerClass()
    export class ActividadesDialog extends Serenity.EntityDialog<ActividadesRow, any> {
        protected getFormKey() { return ActividadesForm.formKey; }
        protected getIdProperty() { return ActividadesRow.idProperty; }
        protected getLocalTextPrefix() { return ActividadesRow.localTextPrefix; }
        protected getNameProperty() { return ActividadesRow.nameProperty; }
        protected getService() { return ActividadesService.baseUrl; }
        protected getDeletePermission() { return ActividadesRow.deletePermission; }
        protected getInsertPermission() { return ActividadesRow.insertPermission; }
        protected getUpdatePermission() { return ActividadesRow.updatePermission; }

        protected form = new ActividadesForm(this.idPrefix);

    }
}