
namespace ProyectosZec.Kairos {

    @Serenity.Decorators.registerClass()
    export class TiposFichajeDialog extends Serenity.EntityDialog<TiposFichajeRow, any> {
        protected getFormKey() { return TiposFichajeForm.formKey; }
        protected getIdProperty() { return TiposFichajeRow.idProperty; }
        protected getLocalTextPrefix() { return TiposFichajeRow.localTextPrefix; }
        protected getNameProperty() { return TiposFichajeRow.nameProperty; }
        protected getService() { return TiposFichajeService.baseUrl; }
        protected getDeletePermission() { return TiposFichajeRow.deletePermission; }
        protected getInsertPermission() { return TiposFichajeRow.insertPermission; }
        protected getUpdatePermission() { return TiposFichajeRow.updatePermission; }

        protected form = new TiposFichajeForm(this.idPrefix);

    }
}